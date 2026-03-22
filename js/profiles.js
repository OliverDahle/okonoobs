/**
 * Nordea AI Sparerådgivning
 * Kundeprofiler og systemprompter
 */

export const PROFILER = {
  emma: {
    id: 'emma',
    navn: 'Emma Larsen',
    alder: 23,
    livsfase: 'Student',
    livsfaseLang: 'Student og tidlig yrkesliv',
    farge: '#3333B0',
    avatar: 'E',
    nokkeldata: {
      brukskonto: 148200,
      sparekonto: 0,
      fond: 0,
      gjeld: 312500,
      inntektMnd: 12400,
      utgiftMnd: 9800,
      disponibeltMnd: 2600,
    },
    sparmaal: 'Egenkapital til bolig',
    malbelop: 700000,
    velkomstmelding: `Hei, Emma. Jeg ser at du har **148 200 kr** stående på brukskonto mens du sparer til bolig. Disse pengene jobber ikke for deg akkurat nå. Med BSU og et smartere spareopplegg kan du nå boligmålet ditt raskere enn du tror.\n\nHva ønsker du hjelp med i dag?`,
    kortbeskrivelse: '148 200 kr passivt på konto. BSU ikke opprettet.',
    finansDataTekst: `EMMAS FINANSIELLE PROFIL (Nordea-systemer, 21. mars 2026):
- Alder: 23 år, student ved BI Oslo
- Månedsinntekt: 12 400 kr (deltidsjobb 8 000 kr + studiestøtte 4 400 kr)
- Brukskonto: 148 200 kr (ubenyttet kapital, 0% avkastning)
- BSU (Boligsparing for Ungdom): 0 kr (ikke opprettet)
- Sparekonto: 0 kr
- Fondssparing: 0 kr
- Studielån (Lånekassen): 312 500 kr
- Månedlige utgifter: ca. 9 800 kr (leie, mat, transport, abonnementer)
- Disponibelt per mnd: ca. 2 600 kr
- Boligstatus: Leier leilighet i Oslo
- Sparemål: Egenkapital til bolig (mål: 700 000 kr)
- Tid til mål ved nåværende sparing: 22+ år (med nåværende 0 kr/mnd i sparing)`,
  },

  andreas: {
    id: 'andreas',
    navn: 'Andreas Bakke',
    alder: 38,
    livsfase: 'Karriere og familie',
    livsfaseLang: 'Etablert med bolig, fokus på optimalisering',
    farge: '#0000A0',
    avatar: 'A',
    nokkeldata: {
      brukskonto: 89300,
      sparekonto: 0,
      fond: 124000,
      gjeld: 4150000,
      inntektMnd: 84500,
      utgiftMnd: 50000,
      disponibeltMnd: 8000,
    },
    sparmaal: 'Pensjon og skatteoptimalisering',
    malbelop: null,
    velkomstmelding: `Hei, Andreas. Du har solid inntekt og 124 000 kr i fond, men **89 300 kr på brukskonto** og ingen IPS er to klare muligheter. Med 8 000 kr disponibelt per måned og toppskatt kan IPS gi deg over **20 000 kr tilbake i skatt** hvert år.\n\nHva vil du fokusere på i dag?`,
    kortbeskrivelse: '89 300 kr passivt på konto. Ingen IPS. 4,15 mill. i boliglån.',
    finansDataTekst: `ANDREAS BAKKES FINANSIELLE PROFIL (Nordea-systemer, 21. mars 2026):
- Alder: 38 år, seniorkonsulent i privat sektor
- Bruttoinntekt: 84 500 kr/mnd (1 014 000 kr/år, toppskatt)
- Nettoinntekt: ca. 56 000 kr/mnd
- Brukskonto: 89 300 kr (ubenyttet kapital, 0% avkastning)
- Sparekonto: 0 kr
- Aksjefond (ikke ASK-innpakket): 124 000 kr
- IPS (Individuell Pensjonssparing): 0 kr (ikke opprettet)
- Boliglån: 4 150 000 kr (flytende rente 4,1%, annuitet 22 år igjen)
- Estimert boligverdi: 7 200 000 kr
- Månedlige utgifter: ca. 50 000 kr (inkl. lånekostnad, dagligvare, barnehage)
- Disponibelt per mnd: ca. 8 000 kr
- Familiestatus: Gift, 2 barn (7 og 10 år)
- Pensjonssparing fra arbeidsgiver: 2% TPO, ingen privat IPS
- Skatteposisjon: Betaler toppskatt`,
  },

  karin: {
    id: 'karin',
    navn: 'Karin Holm',
    alder: 67,
    livsfase: 'Pensjonist',
    livsfaseLang: 'Aktiv pensjonist med solid formue',
    farge: '#1A1A90',
    avatar: 'K',
    nokkeldata: {
      brukskonto: 2340000,
      sparekonto: 0,
      fond: 0,
      gjeld: 0,
      inntektMnd: 44800,
      utgiftMnd: 28000,
      disponibeltMnd: 16800,
    },
    sparmaal: 'Formuesbevaring og avkastning',
    malbelop: null,
    velkomstmelding: `Hei, Karin. Du er i en sterk posisjon med **2 340 000 kr** i likvid kapital og ingen gjeld. Utfordringen er at disse pengene på brukskonto taper kjøpekraft mot en inflasjon på rundt 3% i året. Det tilsvarer omtrent **70 000 kr i reell verditap hvert år**.\n\nLa oss finne den riktige løsningen for deg. Hva er viktigst for deg nå?`,
    kortbeskrivelse: '2 340 000 kr likvid. Fullt nedbetalt bolig. Ingen gjeld.',
    finansDataTekst: `KARIN HOLMS FINANSIELLE PROFIL (Nordea-systemer, 21. mars 2026):
- Alder: 67 år, pensjonert lektor (38 års ansiennitet)
- Månedlig pensjon: 44 800 kr (AFP 18 500 kr + Statens pensjonskasse 26 300 kr)
- Brukskonto: 2 340 000 kr (likvid kapital, 0% avkastning)
- Sparekonto: 0 kr
- Fond/aksjer: 0 kr
- Boliglån: 0 kr (fullt nedbetalt 2019)
- Estimert boligverdi: 5 800 000 kr (enebolig i Bærum)
- Månedlige utgifter: ca. 28 000 kr
- Disponibelt per mnd: ca. 16 800 kr
- Familiestatus: Enke, 2 voksne barn
- Arveplanlegging: Ønsker å sikre arv til barna
- Formuesskatt 2025: ca. 21 000 kr (beregnet)
- Risikoprofil: Lav til moderat, ønsker trygghet fremfor høy avkastning`,
  },
};

export const TONER = {
  profesjonell: {
    id: 'profesjonell',
    navn: 'Profesjonell',
    systemtekst: `Du opptrer som en erfaren og tillitvekkende finansrådgiver hos Nordea. Vær formell, grundig og strukturert. Bruk fagterminologi der det er naturlig, men forklar kortfattet hva begrepene betyr. Presenter anbefalinger med konkrete begrunnelser. Bruk gjerne korte avsnitt og punktlister for å strukturere informasjonen tydelig.`,
  },
  analytisk: {
    id: 'analytisk',
    navn: 'Analytisk',
    systemtekst: `Du opptrer som en tallbasert og datadrevet finansrådgiver. Vær presis og direkte. Bruk prosenter, konkrete kronebeløp og beregninger konsekvent. Sammenlign alternativer kvantitativt. Presenter fordeler og ulemper med målbare tall. Strukturer gjerne svar som "Alternativ A vs Alternativ B" med tydelige talleksempler.`,
  },
  uformell: {
    id: 'uformell',
    navn: 'Uformell',
    systemtekst: `Du opptrer som en vennlig og engasjert kollega med ekspertise innen økonomi. Bruk et muntlig og lett språk med korte, klare setninger. Vær entusiastisk og motiverende. Forklar ting enkelt uten å miste substansen. Unngå klinisk distanse. Avslutt gjerne med ett konkret neste steg kunden kan ta umiddelbart.`,
  },
};

const NORDEA_PRODUKTER = `NORDEA-PRODUKTER SOM KAN VÆRE RELEVANTE:
- BSU (Boligsparing for Ungdom): Maks 27 500 kr/år, 10% skattefradrag, høy rente. Kun for personer under 34 år som ikke eier bolig.
- Nordea Sparekonto Plus: Fleksibel buffersparing, god rente, ingen bindingstid.
- Nordea Aksjesparekonto (ASK): Utsatt skatt på gevinster og utbytte, anbefalt for langsiktig fondssparing.
- Nordea Fond Basis (indeksfond): Lavkost bred markedseksponering, passer for langsiktig sparing.
- Nordea Fond Aktiv: Aktivt forvaltet, mål om å slå markedet, noe høyere kostnader.
- Nordea IPS (Individuell Pensjonssparing): 22% skattereduksjon på innskudd (alminnelig inntekt), maks 15 000 kr/år, bundet til pensjonsalder. Gir 3 300 kr i garantert skattebesparelse ved maks innskudd.
- Nordea Investeringskonto: Fleksibel plassering i fond og aksjer, skatt utsettes til uttak.
- Nordea Private Banking: For kunder med finansformue over 3 mill. kr, personlig rådgiver.
- Nordea Planer: Målbasert automatisk sparing til definerte mål (bolig, ferie, buffer).`;

/**
 * Bygger systempromptet for en gitt profil og tone
 */
export function byggSystemprompt(profilId, toneId) {
  const profil = PROFILER[profilId];
  const tone = TONER[toneId] || TONER.profesjonell;

  if (!profil) return '';

  return `Du er Nordeas personlige AI-sparerådgiver. Du kommuniserer direkte med ${profil.navn}.

${profil.finansDataTekst}

${NORDEA_PRODUKTER}

RÅDGIVNINGSSTIL:
${tone.systemtekst}

OBLIGATORISKE REGLER:
- Gi kun råd innenfor Nordeas produktportefølje listet ovenfor
- Vær konkret, pedagogisk og handlingsrettet
- Svar på 200 til 350 ord
- Ikke gjenta all finansdata, bruk kun det som er relevant for spørsmålet
- Avslutt alltid med en tydelig, konkret handlingsoppfordring
- Skriv på norsk bokmål gjennomgående
- Bruk aldri em-dash, bruk komma eller punktum i stedet
- Formater svaret med avsnitt og gjerne punktlister der det gir mening`;
}
