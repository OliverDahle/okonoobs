/**
 * Claude API-modul for økonoobs.no
 *
 * Bruk:
 *   import { spor, sporStream } from './claude-api.js';
 *
 * Krever at window.CLAUDE_API_KEY er satt (injiseres av GitHub Actions).
 * Lokalt: opprett js/config.js med window.CLAUDE_API_KEY = "sk-ant-...";
 */

const API_URL = 'https://api.anthropic.com/v1/messages';
const MODELL = 'claude-opus-4-6';
const VERSJON = '2023-06-01';

function hentNokkel() {
  if (!window.CLAUDE_API_KEY) {
    throw new Error('CLAUDE_API_KEY er ikke satt. Sjekk at config.js er lastet.');
  }
  return window.CLAUDE_API_KEY;
}

/**
 * Send en enkel melding til Claude og vent pa hele svaret.
 *
 * @param {Array<{role: 'user'|'assistant', content: string}>} meldinger
 * @param {Object} [valg]
 * @param {string} [valg.system] - Systemprompt
 * @param {number} [valg.maxTokens=2048] - Maks antall tokens i svaret
 * @returns {Promise<string>} - Tekstsvaret fra Claude
 */
export async function spor(meldinger, valg = {}) {
  const { system, maxTokens = 2048 } = valg;

  const kropp = {
    model: MODELL,
    max_tokens: maxTokens,
    messages: meldinger,
  };

  if (system) kropp.system = system;

  const svar = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': hentNokkel(),
      'anthropic-version': VERSJON,
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify(kropp),
  });

  if (!svar.ok) {
    const feil = await svar.json().catch(() => ({}));
    throw new Error(`Claude API-feil ${svar.status}: ${feil.error?.message || svar.statusText}`);
  }

  const data = await svar.json();
  return data.content.find((b) => b.type === 'text')?.text ?? '';
}

/**
 * Send en melding til Claude med streaming. Kaller tilbake for hvert token.
 *
 * @param {Array<{role: 'user'|'assistant', content: string}>} meldinger
 * @param {Function} paToken - Kalles med hvert teksttoken etter hvert som det kommer
 * @param {Object} [valg]
 * @param {string} [valg.system] - Systemprompt
 * @param {number} [valg.maxTokens=2048] - Maks antall tokens
 * @returns {Promise<string>} - Fullstendig tekst nar streaming er ferdig
 */
export async function sporStream(meldinger, paToken, valg = {}) {
  const { system, maxTokens = 2048 } = valg;

  const kropp = {
    model: MODELL,
    max_tokens: maxTokens,
    stream: true,
    messages: meldinger,
  };

  if (system) kropp.system = system;

  const svar = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': hentNokkel(),
      'anthropic-version': VERSJON,
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify(kropp),
  });

  if (!svar.ok) {
    const feil = await svar.json().catch(() => ({}));
    throw new Error(`Claude API-feil ${svar.status}: ${feil.error?.message || svar.statusText}`);
  }

  const leser = svar.body.getReader();
  const dekoder = new TextDecoder();
  let fullTekst = '';
  let buffer = '';

  while (true) {
    const { done, value } = await leser.read();
    if (done) break;

    buffer += dekoder.decode(value, { stream: true });
    const linjer = buffer.split('\n');
    buffer = linjer.pop();

    for (const linje of linjer) {
      if (!linje.startsWith('data: ')) continue;
      const json = linje.slice(6).trim();
      if (json === '[DONE]') continue;

      try {
        const hendelse = JSON.parse(json);
        if (hendelse.type === 'content_block_delta' && hendelse.delta?.type === 'text_delta') {
          const tekst = hendelse.delta.text;
          fullTekst += tekst;
          paToken(tekst, fullTekst);
        }
      } catch {
        // Ignorer ugyldige JSON-linjer
      }
    }
  }

  return fullTekst;
}
