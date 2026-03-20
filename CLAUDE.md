# Prosjekt: økonoobs.no

## Om konkurransen
Dette er en nettside laget av laget "Økonoobs" under finalen i NM i Økonomi 2026, arrangert av Econa i samarbeid med Nordea, BDO, Söderberg & Partners og E24.

NM i Økonomi er Norges største casekonkurranse for økonomistudenter. Finalen holdes i Oslo 21. mars 2026, der de 10 beste lagene fra hele Norge presenterer caseoppgaver foran en jury bestående av representanter fra samarbeidspartnerne og akademia. Lagene får en caseoppgave, har begrenset tid til å utarbeide en løsning, og presenterer deretter muntlig for jury og publikum.

Konkurransen tester faglig bredde innen økonomisk-administrative fag, evne til å anvende teori på reelle problemstillinger, presentasjonsevne, samarbeid under tidspress, og analytisk tenkning.

## Om denne nettsiden
Nettsiden er selve presentasjonen. Den er ikke et tilleggsprodukt eller supplement til den muntlige presentasjonen, men det primære visuelle mediet laget bruker for å kommunisere casen. Den skal:
- Være den visuelle bæreren av hele case-løsningen
- Vises på presentasjonsskjermen mens laget presenterer muntlig
- Være tilgjengelig for jury, publikum og samarbeidspartnere på https://økonoobs.no
- Demonstrere lagets evne til å kommunisere komplekse økonomiske konsepter visuelt og digitalt
- Imponere og engasjere, dette er en konkurranse, og nettsiden skal skille oss ut, dette er X faktoren vår

## Målgruppe
- **Jury:** Erfarne økonomer og ledere fra Nordea, BDO, Söderberg & Partners og E24. De forventer faglig substans, presise analyser, og profesjonell presentasjon.
- **Publikum:** Andre økonomistudenter, akademikere og representanter fra næringslivet.
- **Samarbeidspartnere:** Potensielle fremtidige arbeidsgivere som vurderer kandidater.

## Tone og stil
- Profesjonell, men ikke kjedelig. Vi heter Økonoobs, det er lov å ha personlighet
- Faglig troverdig. Vis at vi kan stoffet
- Visuelt engasjerende. Grafer, visualiseringer og interaktive elementer fremfor vegger av tekst
- Norsk språk gjennomgående (bokmål)
- Bruk aldri em-dash (tegnet --) verken i kode, tekst eller kommentarer. Bruk punktum, komma eller ny setning i stedet
- Bruk de norske bokstavene æ, ø, å, og skriv god profesjonell norsk
- Bruk heller stikkord enn setninger, dette skal virke som en PowerPoint, bare programmert inn i en nettside

## Skjerm og lesbarhet
- Siden vises på en storskjerm under presentasjon. Optimaliser for 16:9-format og 1920x1080.
- Skriftstørrelser: brødtekst minimum 20px, stikkpunkter 22px, overskrifter (h2) 36px, hovedoverskrifter (h1) minimum 52px. Aldri under 18px noe sted.
- Høy kontrast mellom tekst og bakgrunn. Tekst skal leses tydelig fra 5 meters avstand.
- Ingen placeholder-tekst noe sted. Aldri "Lorem ipsum", "TODO", "data her", "eksempel" eller lignende. Hvis innhold mangler, spør.
- Ingen generiske ikoner, clip-art eller stock-grafikk. Lag SVG-illustrasjoner eller bruk kun data-visualiseringer.
- Alle tall i grafer og tabeller skal være faktiske verdier fra casen. Aldri eksempeltall eller fiktive data.

## Teknisk oppsett
- **Deploy:** Alt i `dist/`-mappen deployes automatisk til serveren via GitHub Actions ved push til `main`
- **Hosting:** Nginx på Ubuntu-server med HTTPS
- **Domene:** økonoobs.no
- **Full frihet:** Velg teknologi, struktur og arkitektur fritt. Vanilla HTML/CSS/JS er å foretrekke da det er mest sikkert. Hva som helst fungerer. Eneste krav er at `dist/` inneholder det ferdige resultatet. Hvis du bruker et framework med build-steg, sett opp `package.json` med `npm run build` som outputter til `dist/`.
- **Node.js 20** er tilgjengelig i CI-miljøet
- **Ingen backend.** Kun statisk output (men du kan bruke eksterne API-er og CDN-er fritt)
- **Ikke endre CLAUDE.md** da denne skal være statisk gjennom utviklingen

## Hva som vil bli gitt på konkurransedagen
På dagen vil du få:
- Selve caseoppgaven (tema, problemstilling, data)
- Lagets analyse og løsningsforslag
- Eventuelle tall, grafer eller datasett som skal visualiseres
- Instruksjoner om hva nettsiden spesifikt skal inneholde og kommunisere

## Hva som forventes av deg
- Lag noe som ser ut som det er laget av profesjonelle, ikke studenter
- Prioriter det som gir mest inntrykk: sterke visualiseringer, tydelig narrativ, og polert design
- Nettsiden er selve presentasjonen og skal fungere like bra på PC, presentasjonsskjermen og mobilen til de i salen
- Codex og Gemini kommer til å dobbelsjekke all kode så gjør alt skikkelig så slipper vi å finne ut at en av de modellene er bedre enn deg.

## Arkitektur og struktur
- Bygg nettsiden som et fullstendig flerside-prosjekt med tydelig mappestruktur. Aldri én enkelt HTML-fil
- Separer HTML, CSS og JavaScript i egne filer og mapper
- Lag flere navigerbare sider (f.eks. forside, analyse, løsningsforslag, om laget) med en gjennomgående navbar og footer
- Hver slide i presentasjonen skal være en egen side, og det skal være en navigasjonsbar oppe hvor man alltid kan se hvor man er i presentasjonen, og trykke seg videre til neste slide/side
- Nettsiden skal føles som et ekte produkt man kan klikke rundt i, ikke en enkeltstående landingsside

## Navigasjon og presentasjonsmodus
- Tydelig pil for "forrige" og "neste" slide, alltid synlig, stor nok til å klikkes under stress
- Progress-indikator øverst eller nederst: viser "Slide 3 av 8" eller punkter/streker som indikerer fremdrift
- Tastaturnavigasjon: høyre/ned pil = neste slide, venstre/opp pil = forrige slide. Implementeres i JavaScript på alle slides.
- Nåværende side er tydelig markert i navigasjonsbaren

# Caseoppgave:
<!-- Lim inn oppgaveteksten nøyaktig slik dere fikk den. Inkluder tema, problemstilling, bransje/selskap, og eventuelle data eller forutsetninger dere fikk oppgitt. -->

# Foreslått vinkling og problem:
<!-- Beskriv hva dere valgte å fokusere på og hvorfor. Hva er kjerneproblemet dere løser? Hvilket narrativ binder presentasjonen sammen? -->

# Vår løsning:
<!-- Oppsummer løsningen i 3-5 hovedpunkter. Hvilke rammeverk eller teorier bruker dere (f.eks. SWOT, Porter, DCF, PESTEL)? Hva er konklusjonen og anbefalingen? -->

# Slides:
<!-- Fyll inn én seksjon per slide etter malen under. Legg til eller fjern slides etter behov. -->

## Slide 1:
- **Tittel:**
- **Budskap:** (det ene punktet denne sliden skal kommunisere)
- **Innhold:** (stikkord som skal vises)
- **Visualisering:** (type graf/figur, hvilke verdier/data som brukes)
- **Talenotat:** (hva presentatøren sier her, hjelper modellen forstå kontekst)

## Slide 2:
- **Tittel:**
- **Budskap:**
- **Innhold:**
- **Visualisering:**
- **Talenotat:**

## Slide 3:
- **Tittel:**
- **Budskap:**
- **Innhold:**
- **Visualisering:**
- **Talenotat:**
