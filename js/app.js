/**
 * Nordea AI Sparerådgivning
 * Delte verktoy og tilstandshåndtering
 */

const STATE_KEY = 'nordea_ai_state';

/** Les tilstand fra localStorage */
export function hentState() {
  try {
    return JSON.parse(localStorage.getItem(STATE_KEY)) || {};
  } catch {
    return {};
  }
}

/** Lagre tilstand til localStorage */
export function lagreState(oppdatering) {
  const gjeldende = hentState();
  const ny = { ...gjeldende, ...oppdatering };
  localStorage.setItem(STATE_KEY, JSON.stringify(ny));
  return ny;
}

/** Formater tall som norske kroner (f.eks. 148 200 kr) */
export function formatKr(tall) {
  if (tall === null || tall === undefined) return '';
  return Math.round(tall).toLocaleString('nb-NO') + '\u00a0kr';
}

/** Formater tall med norsk tusenskille */
export function formatTall(tall) {
  if (tall === null || tall === undefined) return '';
  return Math.round(tall).toLocaleString('nb-NO');
}

/** Naviger til en side */
export function naviger(url) {
  window.location.href = url;
}

/** Initialiser bunnnavigasjon */
export function initNav(aktivSide) {
  const nav = document.querySelector('.bunn-nav');
  if (!nav) return;

  const state = hentState();
  const harProfil = !!state.profilId;

  const sider = {
    hjem: '/index.html',
    profil: '/profil.html',
    chat: '/chat.html',
    produkter: '/produkter.html',
  };

  nav.querySelectorAll('.nav-element').forEach((el) => {
    const side = el.dataset.side;

    el.classList.toggle('aktiv', side === aktivSide);

    if ((side === 'profil' || side === 'chat') && !harProfil) {
      el.classList.add('deaktivert');
    } else {
      el.classList.remove('deaktivert');
    }

    el.addEventListener('click', () => {
      if (el.classList.contains('deaktivert')) return;
      if (side === aktivSide) return;
      if (sider[side]) naviger(sider[side]);
    });
  });
}

/** Animer et tall som teller opp fra 0 til målverdi */
export function animerTall(element, maalverdi, varighet = 1200) {
  const erKr = element.dataset.format === 'kr';
  const startTid = Date.now();

  function tick() {
    const fremgang = Math.min((Date.now() - startTid) / varighet, 1);
    const easing = 1 - Math.pow(1 - fremgang, 3);
    const gjeldende = Math.round(maalverdi * easing);
    element.textContent = erKr ? formatKr(gjeldende) : formatTall(gjeldende);
    if (fremgang < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

/** Enkel markdown-parser for chat-svar */
export function parseMd(tekst) {
  if (!tekst) return '';

  let html = tekst
    // Escape HTML for sikkerhet
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // Bold: **tekst**
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Kursiv: *tekst*
    .replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Del opp i avsnitt
  const avsnitt = html.split(/\n\n+/);
  const resultat = avsnitt.map((avs) => {
    const linjer = avs.split('\n').filter((l) => l.trim());

    // Sjekk om det er punktliste
    const erListe = linjer.every((l) => /^[-*•]\s/.test(l.trim()) || /^\d+\.\s/.test(l.trim()));

    if (erListe && linjer.length > 1) {
      const elementer = linjer
        .map((l) => l.replace(/^[-*•\d.]+\s/, '').trim())
        .filter(Boolean)
        .map((l) => `<li>${l}</li>`)
        .join('');
      return `<ul>${elementer}</ul>`;
    }

    return `<p>${linjer.join('<br>')}</p>`;
  });

  return resultat.join('');
}

/** Hent gjeldende klokkeslett som tekst (f.eks. "14:32") */
export function hentTid() {
  return new Date().toLocaleTimeString('nb-NO', { hour: '2-digit', minute: '2-digit' });
}
