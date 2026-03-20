# Prosjekt: økonoobs.no

## Om konkurransen
Dette er en nettside laget av laget "Økonoobs" under finalen i NM i Økonomi 2026, arrangert av Econa i samarbeid med Nordea, BDO, Söderberg & Partners og E24.

NM i Økonomi er Norges største casekonkurranse for økonomistudenter. Finalen holdes i Oslo 21. mars 2026, der de 10 beste lagene fra hele Norge presenterer caseoppgaver foran en jury bestående av representanter fra samarbeidspartnerne og akademia. Lagene får en caseoppgave, har begrenset tid til å utarbeide en løsning, og presenterer deretter muntlig for jury og publikum.

Konkurransen tester faglig bredde innen økonomisk-administrative fag, evne til å anvende teori på reelle problemstillinger, presentasjonsevne, samarbeid under tidspress, og analytisk tenkning.

## Om denne nettsiden
Nettsiden er en MVP-prototype av den teknologiske løsningen laget foreslår i casen. Presentasjonen skjer via PowerPoint, men nettsiden fungerer som et levende bevis på at løsningen kan bygges. Juryen skanner en QR-kode fra PowerPoint-en og ser en fungerende prototype direkte på mobilen sin. Den skal:
- Demonstrere løsningen som et ekte produkt, ikke en mockup
- Se ut og fungere som en ferdig app eller nettjeneste rettet mot forbrukere
- Være tilgjengelig for jury og publikum på https://økonoobs.no
- Imponere ved å vise gjennomføringskraft, det er X-faktoren vår

## Målgruppe
- **Jury:** Erfarne økonomer og ledere fra Nordea, BDO, Söderberg & Partners og E24. De forventer faglig substans, presise analyser, og profesjonell presentasjon.
- **Publikum:** Andre økonomistudenter, akademikere og representanter fra næringslivet.
- **Samarbeidspartnere:** Potensielle fremtidige arbeidsgivere som vurderer kandidater.

## Tone og stil
- Profesjonell, den skal imitere ett reelt produkt selskapet kunne ha distribuert.
- Visuelt engasjerende. Bruk kreative elementer i nettsiden. Applikasjonen skal være en wow-faktor så bruk mye tid på kreative virkemidler.
- Norsk språk gjennomgående (bokmål)
- Bruk aldri em-dash (tegnet --) verken i kode, tekst eller kommentarer. Bruk punktum, komma eller ny setning i stedet
- Bruk de norske bokstavene æ, ø, å, og skriv god profesjonell norsk
- Skal se ut og føles som en ekte mobilapp, ikke en nettside eller PowerPoint

## Skjerm og lesbarhet
- Primærformat er mobilskjerm (360-430px bredde). Design mobile-first.
- På desktop og storskjerm skal innholdet vises sentrert i et mobilvindu (maks 430px bredt) med svart bakgrunn på sidene. Det skal se ut som en telefon vises på storskjermen.
- Optionally: legg en tynn grå telefonramme (SVG eller CSS border-radius) rundt mobilvinduet på desktop for å forsterke illusjonen.
- Skriftstørrelser for mobil: brødtekst minimum 16px, stikkpunkter 18px, overskrifter (h2) 24px, hovedoverskrifter (h1) minimum 32px. Aldri under 14px noe sted.
- Høy kontrast mellom tekst og bakgrunn.
- Ingen placeholder-tekst noe sted. Aldri "Lorem ipsum", "TODO", "data her", "eksempel" eller lignende. Hvis innhold mangler, spør.
- Ingen generiske ikoner, clip-art eller stock-grafikk. Bruk SVG-illustrasjoner eller data-visualiseringer.
- Alle tall i grafer og tabeller skal være faktiske verdier fra casen. Unngå eksempeltall eller fiktive data.
- Hvit hovedprofil med komplement av bedriftsspesifikke farger, se beskrivelse under for spesifikke farger.

## Teknisk oppsett
- **Oppsett nå** Hele mappestrukturen er tom nå, så du har full frihet til å lage hele løsningen fra scratch
- **Deploy:** Alt i `dist/`-mappen deployes automatisk til serveren via GitHub Actions ved push til `main`
- **Hosting:** Nginx på Ubuntu-server med HTTPS
- **Domene:** økonoobs.no
- **Full frihet:** Velg teknologi, struktur og arkitektur fritt. Vanilla HTML/CSS/JS er å foretrekke da det er mest sikkert. Hva som helst fungerer. Eneste krav er at `dist/` inneholder det ferdige resultatet. Hvis du bruker et framework med build-steg, sett opp `package.json` med `npm run build` som outputter til `dist/`.
- **Node.js 24** er tilgjengelig i CI-miljøet. Bruk alltid node-version: '24' i GitHub Actions, ikke 20.
- **Ingen backend.** Kun statisk output (men du kan bruke eksterne API-er og CDN-er fritt)
- **Ikke endre CLAUDE.md** da denne skal være statisk gjennom utviklingen
- **Vanilla HTML uten build-steg:** Hvis prosjektet ikke har `package.json`, skal workflow-en IKKE kjøre `npm ci` eller `npm run build`. GitHub Actions-workflowen håndterer dette automatisk: den kopierer kildefilene til `dist/` når det ikke finnes en `package.json`. Opprett aldri en tom eller dummy `package.json` bare for å tilfredsstille CI.

## Hva som vil bli gitt på konkurransedagen
På dagen vil du få:
- Selve caseoppgaven oppsummert (tema, problemstilling, data)
- Lagets løsningsforslag og hvilken type teknologisk produkt vi anbefaler
- Beskrivelse av hva appen/tjenesten skal gjøre og hvem den er for
- Eventuelle tall, grafer eller datasett som skal visualiseres i appen

## Hva som forventes av deg
- Lag noe som ser ut som det er laget av profesjonelle, ikke studenter
- Prioriter polert mobildesign: appen skal se ferdig ut, ikke som en prototype
- Ta kreative visuelle grep. Bruk animasjoner, gradienter, skygger, mikro-interaksjoner og overgangseffekter der det styrker inntrykket.
- Alle sider skal se fullstendig bygget ut. Ingen tomme seksjoner, ingen uferdig layout, ingen halvferdige komponenter.
- Juryen bruker 30-60 sekunder på å utforske appen. Den skal umiddelbart kommunisere hva produktet er og hvorfor det er bra.
- Codex og Gemini kommer til å dobbelsjekke all kode så gjør alt skikkelig så slipper vi å finne ut at en av de modellene er bedre enn deg.

## Arkitektur og struktur
- Bygg som et flerside-prosjekt med tydelig mappestruktur. Aldri én enkelt HTML-fil
- Separer HTML, CSS og JavaScript i egne filer og mapper
- Strukturen skal gjenspeile appens skjermbilder/flyt, ikke presentasjonsslides
- Navigasjon skal se ut som en mobilapp: bunnmeny, tabs, eller lignende appkonvensjoner
- Nettsiden skal føles som et ekte produkt man kan klikke rundt i

## Navigasjon og mobilapp-modus
- Navigasjonen skal ligne en native app: bunnnavbar, hamburger-meny eller tabs, aldri en klassisk desktop-navbar
- Touch-vennlige flater: knapper og klikkbare elementer minimum 44x44px
- Overganger og animasjoner mellom sider skal føles som en app (f.eks. slide-in)
- Alt innhold skal ligge innenfor det sentrerte mobilvinduet, aldri utenfor

# Caseoppgave:
<!-- Lim inn oppgaveteksten nøyaktig slik dere fikk den. Inkluder tema, problemstilling, bransje/selskap, og eventuelle data eller forutsetninger dere fikk oppgitt. -->

# Foreslått vinkling og problem:
<!-- Beskriv hva dere valgte å fokusere på og hvorfor. Hva er kjerneproblemet dere løser? Hvilket narrativ binder presentasjonen sammen? -->

# Vår løsning:
<!-- Oppsummer løsningen i 3-5 hovedpunkter. Hvilke rammeverk eller teorier bruker dere (f.eks. SWOT, Porter, DCF, PESTEL)? Hva er konklusjonen og anbefalingen? -->

# Stilbeslutninger per bedrift

Tre mulige designprofiler er definert nedenfor. Velg én og slett de to andre før utvikling starter.
Alle tre bruker hvit som hovedbakgrunn og bedriftsfargene som aksenter, primærknapper og navigasjonselementer.

---

## Designprofil: BDO

**Fargepalett:**
- Bakgrunn (primær): `#FFFFFF`
- Primærfarge (rød): `#D02927`
- Sekundærfarge (mørk blå): `#21409A`
- Tekst (mørk): `#1A1A1A`
- Tekst (sekundær): `#555555`
- Flate/kort-bakgrunn: `#F5F5F5`
- Border/skillelinje: `#E0E0E0`

**Stil og visuelle grep:**
- Røde primærknapper med hvit tekst, avrundede hjørner (8px radius)
- Blå brukes på sekundære elementer, lenker og ikonaksentuering
- Overskrifter i sterk rød eller mørk blå avhengig av hierarki
- Bunnnavbar med rød aktiv-indikator
- Kort og seksjoner med subtil skygge (`box-shadow: 0 2px 8px rgba(0,0,0,0.08)`)
- Grafer bruker rød som primærfarge og blå som sammenligningsfarge
- Typografi: sans-serif, gjerne Inter eller lignende. Tung overskriftsvekt (700)

---

## Designprofil: Nordea

**Fargepalett:**
- Bakgrunn (primær): `#FFFFFF`
- Primærfarge (Nordea-blå): `#0000A0`
- Aksent (lys blå): `#4040C0`
- Tekst (mørk): `#1A1A1A`
- Tekst (sekundær): `#555555`
- Flate/kort-bakgrunn: `#F0F4FF`
- Border/skillelinje: `#DADEEF`

**Stil og visuelle grep:**
- Dype blå primærknapper, hvit tekst, lett avrundede hjørner (6px radius)
- Konsekvent bruk av én farge gir et rent og autoritativt uttrykk
- Lyse blå kortbakgrunner skaper dybde uten støy
- Bunnnavbar i mørk blå med hvite ikoner, hvit aktiv-indikator
- Grafer bruker ulike nyanser av blå (100 til 900 skala)
- Minimalistisk design med mye luft. Store tall og nøkkeltall fremhevet
- Typografi: sans-serif, gjerne Inter eller lignende. Normal overskriftsvekt (600)

---

## Designprofil: Söderberg og Partners

**Fargepalett:**
- Bakgrunn (primær): `#FFFFFF`
- Primærfarge (mørk blå): `#002D72`
- Aksent (cyan): `#009FDF`
- Sekundær aksent (korall): `#FF6380`
- Tekst (mørk): `#332E30`
- Tekst (sekundær): `#666666`
- Flate/kort-bakgrunn: `#F5FAFD`
- Border/skillelinje: `#D9EEF8`

**Stil og visuelle grep:**
- Mørk blå primærknapper med hvit tekst, avrundede hjørner (10px radius)
- Cyan brukes på call-to-action-elementer, aktive tabs og grafer
- Korall brukes sparsomt som oppmerksomhetsfarge (varsler, tags, highlights)
- Bunnnavbar i mørk blå, cyan aktiv-indikator
- Grafer bruker cyan som primærfarge og korall som kontrastfarge
- Moderne, varm følelse grunnet korallinnslaget. Mer personlig enn de to andre
- Typografi: sans-serif, gjerne Inter eller lignende. Overskriftsvekt 700, litt mer rundet
