# Nordea AI Sparerådgivning

**Prosjekt fra NM i Økonomi 2026** | Laget Økonoobs | Finale 21. mars 2026, Oslo

---

## Executive Summary *(English)*

*The rest of this project, including the codebase and all documentation below, is written in Norwegian.*

NM i Økonomi (Norwegian Championship in Economics) is Norway's largest case competition for economics students. The 2026 final gathered the top 10 teams out of 632 registered, judged by senior professionals from Nordea, BDO, Söderberg & Partners and E24.

Teams receive a case problem and have a fixed time window to develop and present a solution. Ours included building and deploying this web app, from blank slate to live production, within the 3.5 hours allotted for the entire round, presentation included.

The app is an AI-powered savings advisor for Nordea, demonstrating how existing customer data can generate personalized, real-time financial recommendations across different life stages. Built with vanilla HTML, CSS and JavaScript, deployed via GitHub Actions.

**Team Økonoobs:** Fillip Jonassen, Mathias Hermstad, Oliver Dahle

---

## Om prosjektet

Dette er en fullstendig MVP-prototype av en AI-drevet sparerådgivningstjeneste for Nordea, bygget under NM i Økonomi 2026. Prototypen ble presentert live for en jury bestående av representanter fra Nordea, BDO, Söderberg og Partners og E24.

Juryen skannet en QR-kode fra PowerPoint-presentasjonen og fikk opp denne appen på mobilen sin. Hensikten var å demonstrere at løsningen faktisk kan bygges, ikke bare beskrives på en slide.

**Konkurransen:** NM i Økonomi er Norges største casekonkurranse for økonomistudenter, arrangert av Econa. Finalen samler de 10 beste lagene fra hele landet, av totalt 632 påmeldte lag.

---

## Hva prototypen demonstrerer

Casen krevde at laget skulle vise hvordan Nordea kan bruke kunstig intelligens til å gjøre sparing mer relevant og personlig tilpasset for strategisk viktige kundegrupper.

**Vår løsning** bygger på innsikten om at hinderet for økt sparing sjelden er mangel på penger, men mangel på trygghet, oversikt og personlig veiledning. Vi viser hvordan Nordeas eksisterende kundedata kan gjøres om til konkrete, handlingsrettede råd i sanntid.

Prototypen viser:

- Hvordan samme AI-løsning gir svært ulike anbefalinger basert på kundens livsfase
- Hvordan personlig rådgivning kan skaleres digitalt uten å miste substansen
- At Nordea kan flytte oppmerksomheten fra passiv kontoholdning til aktiv sparing

---

## Appens flyt

```
Velg profil  -->  Finansiell oversikt  -->  AI-rådgivning
```

**Tre kundeprofiler** representerer strategisk viktige livsfaser:

| Profil | Alder | Situasjon | Utfordring |
|--------|-------|-----------|------------|
| Emma Larsen | 23 år | Student, leier | 148 200 kr passivt på konto, ingen BSU |
| Andreas Bakke | 38 år | Karriere og familie, boligeier | Ingen IPS, fond ikke skatteoptimalisert |
| Karin Holm | 67 år | Pensjonist, nedbetalt bolig | 2 340 000 kr taper kjøpekraft på brukskonto |

**Tre rådgivningstoner:**
- Profesjonell: Formell finansrådgivning med fagterminologi
- Analytisk: Tallbasert med beregninger og sammenligninger
- Uformell: Vennlig og motiverende, enkelt språk

---

## Teknisk oppsett

Prosjektet er bygget som en statisk flersidewebb-app uten avhengigheter.

**Teknologier:**
- Vanilla HTML, CSS og JavaScript (ES-moduler)
- Ingen byggsteg, ingen pakkehåndterer
- Automatisk deploy til Ubuntu-server via GitHub Actions ved push til `main`

**Filstruktur:**

```
/
├── index.html          # Profilvalg og velkomstside
├── profil.html         # Finansiell oversikt per profil
├── chat.html           # AI-rådgivningschat
├── produkter.html      # Nordeas spareprodukter
├── css/
│   └── main.css        # Komplett stilark (Nordea-designprofil)
├── js/
│   ├── app.js          # Tilstandshåndtering, formatering, markdown-parser
│   ├── profiles.js     # Kundeprofiler og systemprompter for Claude API
│   ├── responses.js    # Forhåndsgenererte AI-svar (se note under)
│   └── claude-api.js   # Claude API-klient (spor/sporStream)
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions deploy-workflow
```

---

## Lokal kjøring

Prosjektet krever en lokal webserver for at ES-moduler skal fungere korrekt.

**Med Python:**
```bash
python -m http.server 8000
```
Åpne deretter `http://localhost:8000` i nettleseren.

**Med Node.js:**
```bash
npx serve .
```

**Med VS Code:** Bruk Live Server-utvidelsen.

---

## AI-integrasjonen

### Arkitektur

Appen bruker Claude API (claude-opus-4-6) direkte fra nettleseren. API-klienten i `js/claude-api.js` eksporterer to funksjoner:

- `spor(meldinger, valg)` for enkle kall som venter på komplett svar
- `sporStream(meldinger, paToken, valg)` for strømmende token-for-token-respons

Systempromptet bygges dynamisk i `js/profiles.js` basert på valgt kundeprofil og rådgivningstoneog inkluderer:

- Kundens komplette finansielle profil (hardkodet representative data)
- Nordeas produktkatalog med relevante produkter og betingelser
- Instruksjoner for rådgivningsstil og format

### API-nøkkel fjernet fra offentlig versjon

Denne GitHub-versjonen av prosjektet inneholder **ikke** en aktiv API-nøkkel. For å unngå fremtidige kostnader etter at konkurransen er over, er appen konvertert til demo-modus:

- Chatfunksjonen bruker forhåndsgenererte svar fra `js/responses.js`
- Svarene ble generert med den faktiske produksjons-systemprompten og gjengir representative output fra Claude claude-opus-4-6
- Den simulerte streamingen gjenskaper den visuelle opplevelsen fra den faktiske AI-integrasjonen
- All annen funksjonalitet (profilvisning, navigasjon, finansiell oversikt) er uendret

For å aktivere live AI-integrasjon: opprett `js/config.js` med `window.CLAUDE_API_KEY = 'din-nokkel';` og erstatt importen i `chat.html` med `sporStream` fra `claude-api.js`.

---

## Designprofil

Appen følger Nordeas visuelle identitet:

| Farge | Kode | Bruk |
|-------|------|------|
| Nordea-blå | `#0000A0` | Primærknapper, ikoner, aktive elementer |
| Aksent | `#4040C0` | Gradienter, sekundære elementer |
| Kortbakgrunn | `#F0F4FF` | Metrikkort, input-felt |
| Skillelinje | `#DADEEF` | Kanter og separatorer |

**Layout:** Mobilapp-mønster med bunnnavigasjon, maks 430px bredde, sentrert på storskjerm med svart bakgrunn for telefonillusjon.

---

Lisensiert under [MIT-lisensen](LICENSE).
