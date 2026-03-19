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
- Imponere og engasjere, dette er en konkurranse, og nettsiden skal skille oss ut

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

## Teknisk oppsett
- **Deploy:** Alt i `dist/`-mappen deployes automatisk til serveren via GitHub Actions ved push til `main`
- **Hosting:** Nginx på Ubuntu-server med HTTPS
- **Domene:** økonoobs.no
- **Full frihet:** Velg teknologi, struktur og arkitektur fritt. Vanilla HTML/CSS/JS, React, Vue, Vite, Tailwind. Hva som helst fungerer. Eneste krav er at `dist/` inneholder det ferdige resultatet. Hvis du bruker et framework med build-steg, sett opp `package.json` med `npm run build` som outputter til `dist/`.
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
- Nettsiden skal føles som et ekte produkt man kan klikke rundt i, ikke en enkeltstående landingsside

# Spesifikk prompt for selve casen:
Lag en profesjonell, fullskjerms presentasjons-nettside for en case competition i NM i økonomi. Nettsiden skal fungere som en konsulentpresentasjon i Nordea-stil, og være laget for laget «Økonoobs».
 
Målet er å løse den mest sannsynlige casen fra research-rapporten:
Hvordan kan Nordea i Norge øke antall «relationship customers» og øke produktbredde per kunde i privatmarkedet, særlig blant boliglånskunder som ikke bruker Nordea som hovedbank?
 
Viktig:
- Nettsiden skal være laget for presentasjon direkte på skjerm, uten scrolling
- Hver slide/side skal fylle hele skjermen i 1980x1080-format
- Det skal være mulig å navigere ved å trykke på en toppmeny øverst
- Det skal også være tydelig «Neste slide»-knapp øverst til høyre
- Gjerne støtte piltaster høyre/venstre
- Alt innhold må være visuelt stramt, profesjonelt og lett å presentere muntlig
- Hver slide må ha lite tekst, tydelige overskrifter, sterke poenger og visuelt pene bokser/grafer/ikoner
- Designet skal ligne en moderne konsulentpresentasjon, med ren layout, høy troverdighet og premium bank-følelse
- Bruk Nordea-inspirerte farger: mørk blå som hovedfarge, lyse blå nyanser, hvit bakgrunn, diskrete kontrastflater
- Unngå flashy startup-stil, dette skal se ut som en kombinasjon av Nordea + McKinsey/BCG-stil
- Bruk profesjonell typografi, mye luft, tydelig hierarki og pen spacing
- Lag gjerne diskrete animasjoner mellom slides, men hold det elegant
- Ikke lag en vanlig nettside med scrolling. Dette skal være en slide-basert presentasjons-webapp
 
Nettsiden skal løse et faktisk forretningsproblem og bygge på fakta fra research-rapporten under. Bruk disse faktaene aktivt i innholdet. Ikke finn på andre tall. Hvis du bruker antakelser i business caset, merk dem tydelig som «illustrative assumptions».
 
Fakta fra research-rapporten som må brukes:
1. Nordea har pekt ut Norge som et tydelig vekstområde i strategien 2026–2030
2. Cross-sales er en eksplisitt strategisk prioritet
3. Banken har kommunisert mål om +500.000 flere relationship customers
4. Relationship customers er definert som kunder med lønnskonto, aktive kort og boliglån og/eller sparing
5. I Personal Banking er inntektsmiksen omtrent:
   - innskudd ca. 34%
   - boliglån ca. 21%
   - sparing ca. 19%
   - betaling/annet ca. 25%
6. Nordea ønsker å øke fee and commission-vekst gjennom sparing, rådgivning og betaling, ikke bare lån
7. I Norge rapporterte Personal Banking i Q4 2025:
   - innskuddsvolumer opp 10%
   - utlånsvolumer opp 1%
   - gebyr/provisjon opp 14%, drevet av sparing og betaling/kort
8. Nordea har mål om best omnichannel customer experience
9. Digitale salg var rundt 70% i 2025, med ambisjon om over 80%
10. Banken satser tungt på teknologi, data og AI
11. Nova Chatbot hadde 5,2 millioner chatter, og rundt 78% ble håndtert av chatboten
12. Produktivitetsverktøy med AI hadde over 18.000 brukere innen utgangen av 2025
13. AI brukes også i KYC og transaksjonsovervåking
14. Banken guider mot ROE over 15% og cost-to-income rundt 45% for 2026, og 40–42% innen 2030
15. Oppkjøpet av Danske Banks personkunde- og private banking-virksomhet i Norge tilføyde omtrent 235.000 kunder
16. Nordea Liv er en viktig kryss-salgsmotor innen pensjon og liv
17. Nordea Liv har sterk posisjon i selvvalgt EPK og høy vekst i livsforsikring
18. Det mest sannsynlige caset er å gjøre boliglånskunder uten dagligbankforhold til helkunder
 
Nettsiden skal ha en tydelig storyline:
Problem → hvorfor det betyr noe → hvilket segment vi velger → løsning → hvordan det gjennomføres → hvorfor det er lønnsomt → KPI-er → risiko og avslutning.
 
Bygg presentasjonen rundt denne anbefalte løsningen:
Nordea skal prioritere boliglånskunder som ikke har lønnskonto og aktiv kortbruk hos Nordea, og gjøre dem til relationship customers gjennom en smart, digital og AI-støttet kundereise.
 
Løsningen skal presenteres som en kundeverdi-strategi, ikke aggressivt kryss-salg. Budskapet skal være:
«Nordea skal vinne hverdagsbanken, ikke bare boliglånet.»
 
Anbefalt struktur på slides:
Slide 1:
En sterk forside med tittel, undertittel og lagnavn «Økonoobs»
Tittelforslag:
«From Mortgage Provider to Main Bank»
Undertittel:
«How Nordea can grow relationship customers in Norway through smarter cross-sell, digital journeys and AI-enabled personalization»
Vis Nordea-inspirert premium design
 
Slide 2:
Problemet og hvorfor det haster
Vis at mange boliglånskunder ikke bruker Nordea som hovedbank
Knytt dette til Grow Norway, cross-sales og relationship customer-målet
Vis kort hvorfor kun boliglån ikke er nok i et miljø med fallende renter
 
Slide 3:
Hvor pengene ligger
Lag en pen visualisering av inntektsmiksen:
innskudd 34%, boliglån 21%, sparing 19%, betaling/annet 25%
Forklar med få ord hvorfor bredere relasjon gir mer robust lønnsomhet enn bare lån
 
Slide 4:
Segmentvalg
Velg segmentet:
«Boliglånskunder uten lønnskonto og aktiv kortbruk hos Nordea»
Vis hvorfor dette segmentet er mest attraktivt:
- høy varighet
- høy CLV
- lett å identifisere i data
- høy oppside i innskudd, kort, sparing og pensjon
Ta gjerne med en mindre sideboks om at deler av Danske-migrasjonen kan ligge i dette segmentet
 
Slide 5:
Løsningen som kundereise
Vis en tydelig 4-trinns modell:
1. Få lønnskonto inn i Nordea
2. Aktivere kort og betaling
3. Starte månedlig sparing
4. Flytte EPK / tilby pensjon og relevant livsforsikring
Denne sliden må være veldig visuelt sterk, som en horisontal journey eller trappemodell
Poenget er at Nordea gir én relevant anbefaling av gangen, med riktig timing
 
Slide 6:
Omnikanalmodellen
Vis hvordan løsningen gjennomføres i praksis:
- app som primær kanal
- sømløs overgang til rådgiver ved høyverdihendelser
- service-to-sales
- mobile-first
- digital completion
Knytt dette til at Nordea vil over 80% digitalt salg og samtidig styrke rådgiverrollen
 
Slide 7:
Data og AI
Vis en moden, realistisk AI-modell i 3 nivåer:
1. Regelbasert segmentering
2. Next best action i CRM
3. AI-assistenter som frigjør rådgivertid
Knytt dette til fakta:
Nova chatbot, AI-bruk i kundeservice, KYC, transaksjonsovervåking og interne verktøy
Legg inn et lite element om guardrails og trusted AI
 
Slide 8:
Business case og KPI-er
Lag en enkel, konsulentaktig business case med tydelig disclaimer om illustrative assumptions
Bruk følgende illustrative assumptions:
- målgruppe: 100.000 boliglånskunder uten primærbankstatus
- 10% konvertering til relationship customers på 12 måneder
- 75.000 NOK i ekstra innskudd per konvertert kunde
- 0,8% netto årlig innskuddsmargin
- 400 NOK netto per år fra aktiv kort/betalingsbruk
- 30% av de konverterte setter opp sparing/pensjon
- 600 NOK årlig netto fee per slik kunde
Vis regnestykket pent:
Innskudd: 60 MNOK
Kort/betaling: 4 MNOK
Sparing/pensjon: 1,8 MNOK
Totalt: ca. 66 MNOK før gjennomføringskostnader
Vis også KPI-er:
- number of relationship customers
- products per customer
- salary inflow share
- active card rate
- savings plan penetration
- cost-to-serve
- digital completion rate / customer satisfaction
 
Slide 9:
Risiko, styring og avslutning
Vis 3 hovedrisikoer:
- friksjon i lønnskonto-bytte
- irrelevante tilbud som svekker tillit
- for aggressiv bruk av AI/personalisering
Vis mottiltak
Avslutt med en sterk anbefaling:
«Win the salary account. Win the everyday banking. Then scale savings and pensions.»
 
Ekstra designkrav:
- Toppmeny med alle slides som faner
- Aktiv slide skal være tydelig markert
- Egen «Next» knapp øverst
- Hver slide skal ha tydelig slide-tittel og ett hovedpoeng
- Bruk pene kort, enkle diagrammer, prosessillustrasjoner og KPI-bokser
- Ikke bruk for mye tekst
- Lag innholdet som om det faktisk skal presenteres muntlig på 8 minutter
- Sørg for at hver slide kan forstås på 20–30 sekunder
- Bruk konsulentaktig språk, men enkelt og klart
- Ingen scrolling
- Hele løsningen skal føles som en profesjonell presentasjonswebapp, ikke en vanlig hjemmeside
 
Teknisk ønsket output:
- Lag dette som en komplett, fungerende, slide-basert webapp
- Responsiv nok til å fungere på stor skjerm, men optimalisert for 1980x1080 presentasjon
- Gjerne laget i React med clean komponentstruktur
- Bruk moderne frontend-praksis
- Rene overganger, premium look
- Ingen behov for backend
- Ingen dummy-tekst
- Alt innhold skal være ferdig skrevet og klart til bruk
 
Viktig:
- Ikke lag en generell bankpresentasjon
- Løs det konkrete problemet
- Bygg alt rundt Nordea sin faktiske strategi og tallene over
- Det skal være troverdig nok til å imponere en jury i NM i økonomi