import { spor } from './claude-api.js';

// ---- State ----
let aktivType = null;
let samtale = [];
let erFullstendig = false;

// ---- Rubrikker ----
const RUBRIKKER = {
  telefon: {
    navn: 'Telefon og elektronikk',
    felt: [
      'Dato og klokkeslett for hendelsen',
      'Sted der hendelsen inntraff',
      'Beskrivelse av hva som skjedde',
      'Merke og modell pa enheten som ble skadet',
      'Omfang av skaden (hva er ødelagt)',
      'Omtrentlig kjøpspris eller anslatt verdi'
    ]
  },
  reise: {
    navn: 'Reiseforsikring',
    felt: [
      'Reisedestinasjon og reiseperiode',
      'Dato for hendelsen',
      'Beskrivelse av hva som skjedde',
      'Hva ble skadet, mistet eller stjalet',
      'Anslatt verdi av tapet',
      'Om det er levert politianmeldelse (hvis relevant)'
    ]
  },
  hjem: {
    navn: 'Hjem og innbo',
    felt: [
      'Adresse der skaden skjedde',
      'Dato og klokkeslett for hendelsen',
      'Beskrivelse av hva som skjedde',
      'Hva ble skadet',
      'Anslatt verdi av skaden',
      'Om det er levert politianmeldelse (ved tyveri eller hærverk)'
    ]
  },
  bil: {
    navn: 'Bilforsikring',
    felt: [
      'Bilens registreringsnummer',
      'Dato, klokkeslett og sted for hendelsen',
      'Beskrivelse av hva som skjedde',
      'Eventuelle andre involverte parter og registreringsnummer',
      'Omfang av skaden',
      'Om det er levert politianmeldelse'
    ]
  },
  annet: {
    navn: 'Annen forsikring',
    felt: [
      'Type objekt som er forsikret (sykkel, bat, dyr o.l.)',
      'Dato og sted for hendelsen',
      'Beskrivelse av hva som skjedde',
      'Hva ble skadet eller tapt',
      'Anslatt verdi av skaden',
      'Eventuelle relevante dokumenter eller politianmeldelse'
    ]
  }
};

// ---- System prompt ----
function byggSystemPrompt(type) {
  const rubrikk = RUBRIKKER[type];
  const feltliste = rubrikk.felt.map((f, i) => `${i + 1}. ${f}`).join('\n');

  return `Du er en profesjonell og vennlig forsikringsassistent for Nordea Forsikring. Du hjelper kunden med a melde en skadesak for ${rubrikk.navn}.

Nødvendig informasjon for denne sakstypen:
${feltliste}

Din oppgave: Les gjennom hele samtalen og vurder nøye om ALL nødvendig informasjon er tilstede.

Svar KUN med gyldig JSON i dette eksakte formatet (ingen tekst utenfor JSON-objektet):
{
  "fullstendig": false,
  "melding": "Din melding til kunden her",
  "mangler": ["Felt 1", "Felt 2"],
  "dekket": 2
}

Regler:
- "fullstendig": sett til true kun nar ALL informasjon er dekket, ellers false
- "melding": vennlig og profesjonell melding. Hvis noe mangler: still maks 2 konkrete spørsmal. Hvis alt er OK: bekreft og gi et kort sammendrag av saken (2-3 setninger).
- "mangler": liste over feltnavn som fortsatt mangler (tom liste hvis fullstendig)
- "dekket": antall felt (av ${rubrikk.felt.length} totalt) som er tilstrekkelig besvart
- Still aldri mer enn 2 spørsmal av gangen
- Vær alltid vennlig og profesjonell
- Svar alltid pa norsk bokmål
- Bruk aldri tegnet dash (bindestrek mellom setninger)`;
}

// ---- UI helpers ----
function leggTilMelding(rolle, tekst) {
  const chatArea = document.getElementById('chat-area');
  const row = document.createElement('div');
  row.classList.add('msg-row');
  if (rolle === 'bruker') row.classList.add('msg-row-bruker');

  if (rolle === 'ai') {
    const avatarHtml = `<div class="ai-avatar">N</div>`;
    const meldingEl = document.createElement('div');
    meldingEl.classList.add('chat-msg', 'chat-msg-ai');
    meldingEl.textContent = tekst;
    row.innerHTML = avatarHtml;
    row.appendChild(meldingEl);
  } else {
    const meldingEl = document.createElement('div');
    meldingEl.classList.add('chat-msg', 'chat-msg-bruker');
    meldingEl.textContent = tekst;
    row.appendChild(meldingEl);
  }

  chatArea.appendChild(row);
  scrollToBunn();
  return row;
}

function leggTilTyping() {
  const chatArea = document.getElementById('chat-area');
  const row = document.createElement('div');
  row.classList.add('msg-row');
  row.id = 'typing-row';
  row.innerHTML = `
    <div class="ai-avatar">N</div>
    <div class="typing"><span></span><span></span><span></span></div>
  `;
  chatArea.appendChild(row);
  scrollToBunn();
}

function fjernTyping() {
  const el = document.getElementById('typing-row');
  if (el) el.remove();
}

function scrollToBunn() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

function oppdaterProgress(dekket, totalt) {
  const pct = Math.round((dekket / totalt) * 100);
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-pct').textContent = pct + '%';
}

function settInputDeaktivert(deaktivert) {
  const input = document.getElementById('bruker-input');
  const knapp = document.getElementById('send-knapp');
  input.disabled = deaktivert;
  knapp.disabled = deaktivert || input.value.trim() === '';
}

// ---- AI-analyse ----
async function analyserSamtale() {
  const rubrikk = RUBRIKKER[aktivType];
  settInputDeaktivert(true);
  leggTilTyping();

  try {
    const svarTekst = await spor(samtale, {
      system: byggSystemPrompt(aktivType),
      maxTokens: 1024
    });

    fjernTyping();

    let data;
    try {
      const jsonMatch = svarTekst.match(/\{[\s\S]*\}/);
      data = JSON.parse(jsonMatch ? jsonMatch[0] : svarTekst);
    } catch {
      data = {
        fullstendig: false,
        melding: svarTekst || 'Beklager, jeg fikk ikke behandlet svaret ditt. Prøv igjen.',
        mangler: [],
        dekket: 0
      };
    }

    const dekket = typeof data.dekket === 'number' ? data.dekket : 0;
    oppdaterProgress(dekket, rubrikk.felt.length);

    samtale.push({ role: 'assistant', content: data.melding });
    leggTilMelding('ai', data.melding);

    if (data.fullstendig === true) {
      erFullstendig = true;
      oppdaterProgress(rubrikk.felt.length, rubrikk.felt.length);

      const panel = document.getElementById('complete-panel');
      document.getElementById('complete-desc').textContent = data.melding;
      panel.classList.add('synlig');
      document.getElementById('chat-input-wrap').classList.add('hidden');
      scrollToBunn();
    } else {
      settInputDeaktivert(false);
      document.getElementById('bruker-input').focus();
    }

  } catch (feil) {
    fjernTyping();
    console.error('Feil ved AI-kall:', feil);

    let feilmelding = 'Det oppsto en teknisk feil. Prøv igjen om litt.';
    if (!window.CLAUDE_API_KEY) {
      feilmelding = 'API-nøkkel mangler. Kopier js/config.local.js til js/config.js og legg inn din nøkkel for a aktivere AI-funksjonen lokalt.';
    }

    samtale.push({ role: 'assistant', content: feilmelding });
    leggTilMelding('ai', feilmelding);
    settInputDeaktivert(false);
  }
}

// ---- Eksponerte funksjoner (kalt fra HTML) ----
window.velgType = function (type) {
  aktivType = type;
  const rubrikk = RUBRIKKER[type];

  document.getElementById('header-tittel').textContent = rubrikk.navn;
  document.getElementById('header-undertittel').textContent = 'Beskriv skaden';

  document.getElementById('fase-type').classList.add('hidden');
  document.getElementById('fase-chat').classList.remove('hidden');
  document.getElementById('chat-input-wrap').classList.remove('hidden');

  oppdaterProgress(0, rubrikk.felt.length);

  const velkomst = `Hei! Jeg hjelper deg med a melde en sak for ${rubrikk.navn.toLowerCase()}.\n\nBeskriv med egne ord hva som skjedde. Jo mer detaljer du gir, jo raskere kan vi behandle saken din.`;
  samtale.push({ role: 'assistant', content: velkomst });
  leggTilMelding('ai', velkomst);

  setTimeout(() => document.getElementById('bruker-input').focus(), 300);
};

window.sendMelding = async function () {
  const input = document.getElementById('bruker-input');
  const tekst = input.value.trim();
  if (!tekst || erFullstendig) return;

  input.value = '';
  justerHoyde(input);
  settInputDeaktivert(true);

  samtale.push({ role: 'user', content: tekst });
  leggTilMelding('bruker', tekst);

  await analyserSamtale();
};

window.sendInnSak = function () {
  const nr = 'NOR-2026-' + Math.floor(1000 + Math.random() * 9000);
  document.getElementById('saksnummer').textContent = nr;

  document.getElementById('fase-chat').classList.add('hidden');
  document.getElementById('chat-input-wrap').classList.add('hidden');
  document.getElementById('fase-suksess').classList.remove('hidden');
  window.scrollTo(0, 0);
};

window.gaTilbake = function () {
  const chatFase = document.getElementById('fase-chat');
  const suksFase = document.getElementById('fase-suksess');

  if (!chatFase.classList.contains('hidden')) {
    chatFase.classList.add('hidden');
    document.getElementById('chat-input-wrap').classList.add('hidden');
    document.getElementById('fase-type').classList.remove('hidden');

    document.getElementById('header-tittel').textContent = 'Meld skade';
    document.getElementById('header-undertittel').textContent = 'Velg skadetype';

    aktivType = null;
    samtale = [];
    erFullstendig = false;
    document.getElementById('chat-area').innerHTML = '';
    document.getElementById('complete-panel').classList.remove('synlig');
    document.getElementById('chat-input-wrap').style.display = '';
    oppdaterProgress(0, 1);
  } else if (!suksFase.classList.contains('hidden')) {
    window.location.href = 'index.html';
  } else {
    window.location.href = 'index.html';
  }
};

window.handleKeydown = function (e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    window.sendMelding();
  }
};

window.justerHoyde = function (el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 130) + 'px';
  document.getElementById('send-knapp').disabled = el.value.trim() === '';
};
