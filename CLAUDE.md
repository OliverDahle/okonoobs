# Prosjekt: økonoobs.no

## Om konkurransen
Dette er en nettside laget av laget "Økonoobs" under finalen i NM i Økonomi 2026, arrangert av Econa i samarbeid med Nordea, BDO, Söderberg & Partners og E24.

NM i Økonomi er Norges største casekonkurranse for økonomistudenter. Finalen holdes i Oslo 21. mars 2026, der de 10 beste lagene fra hele Norge presenterer caseoppgaver foran en jury bestående av representanter fra samarbeidspartnerne og akademia. Lagene får en caseoppgave, har begrenset tid til å utarbeide en løsning, og presenterer deretter muntlig for jury og publikum.

Konkurransen tester faglig bredde innen økonomisk-administrative fag, evne til å anvende teori på reelle problemstillinger, presentasjonsevne, samarbeid under tidspress, og analytisk tenkning.

## Om denne nettsiden
Nettsiden er en del av lagets leveranse og presentasjon. Den skal:
- Støtte og forsterke lagets case-løsning
- Fungere som et profesjonelt, interaktivt supplement til den muntlige presentasjonen
- Være tilgjengelig for jury, publikum og samarbeidspartnere på https://økonoobs.no
- Demonstrere lagets evne til å kommunisere komplekse økonomiske konsepter visuelt og digitalt
- Imponere og engasjere — dette er en konkurranse, og nettsiden skal skille oss ut

## Målgruppe
- **Jury:** Erfarne økonomer og ledere fra Nordea, BDO, Söderberg & Partners og E24. De forventer faglig substans, presise analyser, og profesjonell presentasjon.
- **Publikum:** Andre økonomistudenter, akademikere og representanter fra næringslivet.
- **Samarbeidspartnere:** Potensielle fremtidige arbeidsgivere som vurderer kandidater.

## Tone og stil
- Profesjonell, men ikke kjedelig — vi heter Økonoobs, det er lov å ha personlighet
- Faglig troverdig — vis at vi kan stoffet
- Visuelt engasjerende — grafer, visualiseringer og interaktive elementer > vegger av tekst
- Norsk språk gjennomgående (bokmål)

## Teknisk oppsett
- **Deploy:** Alt i `dist/`-mappen deployes automatisk til serveren via GitHub Actions ved push til `main`
- **Hosting:** Nginx på Ubuntu-server med HTTPS
- **Domene:** økonoobs.no
- **Full frihet:** Velg teknologi, struktur og arkitektur fritt. Vanilla HTML/CSS/JS, React, Vue, Vite, Tailwind — hva som helst fungerer. Eneste krav er at `dist/` inneholder det ferdige resultatet. Hvis du bruker et framework med build-steg, sett opp `package.json` med `npm run build` som outputter til `dist/`.
- **Node.js 20** er tilgjengelig i CI-miljøet
- **Ingen backend** — kun statisk output (men du kan bruke eksterne API-er og CDN-er fritt)

## Hva som vil bli gitt på konkurransedagen
På dagen vil du få:
- Selve caseoppgaven (tema, problemstilling, data)
- Lagets analyse og løsningsforslag
- Eventuelle tall, grafer eller datasett som skal visualiseres
- Instruksjoner om hva nettsiden spesifikt skal inneholde og kommunisere

## Hva som forventes av deg
- Bygg nettsiden raskt og effektivt — vi har begrenset tid
- Lag noe som ser ut som det er laget av profesjonelle, ikke studenter
- Prioriter det som gir mest inntrykk: sterke visualiseringer, tydelig narrativ, og polert design
- Nettsiden skal kunne stå alene som en forståelig presentasjon av casen, men også fungere som støtte under den muntlige presentasjonen