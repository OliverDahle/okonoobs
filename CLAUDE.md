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

## Claude API (valgfritt)

Et ferdig oppsett for AI-funksjonalitet er klargjort og testet. Bruk det hvis løsningen har nytte av dynamisk AI-generert innhold, analyse eller chat.

**Slik er det satt opp:**
- API-nøkkelen er lagret som GitHub Secret (`ANTHROPIC_API_KEY`) og injiseres automatisk til `js/config.js` ved deploy. Filen committes aldri.
- Modulen `js/claude-api.js` eksporterer to funksjoner: `spor()` for enkle kall og `sporStream()` for streaming token for token.
- Modellen er `claude-opus-4-6` (sterkest tilgjengelig).

**Slik brukes modulen i en HTML-fil:**

```html
<script src="/js/config.js"></script>
<script type="module">
  import { spor, sporStream } from '/js/claude-api.js';

  // Enkelt kall, venter på hele svaret
  const svar = await spor(
    [{ role: 'user', content: 'Din melding her' }],
    { system: 'Valgfri systemprompt her' }
  );

  // Streaming, oppdaterer DOM token for token
  await sporStream(
    [{ role: 'user', content: 'Din melding her' }],
    (token, fullTekst) => { element.textContent = fullTekst; },
    { system: 'Valgfri systemprompt her' }
  );
</script>
```

**Når bør du bruke det:**
- Hvis appen har en AI-assistent, chatbot eller interaktiv analyseflate
- Hvis du vil generere personalisert innhold basert på brukerinput
- Hvis dere vil vise at produktet er AI-drevet og ikke statisk

**Når bør du ikke bruke det:**
- Hvis all informasjon er kjent på forhånd og kan hardkodes. Statisk innhold laster raskere og er mer pålitelig i en live-demo.
- Ikke påkrev for at prototypen skal virke.

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
Utvikle en rask og overbevisende MVP som viser hvordan Nordea kan bruke kunstig intelligens til å gjøre sparing mer relevant, personlig og handlingsorientert for strategisk viktige kundegrupper. Løsningen skal ta utgangspunkt i at Nordea allerede sitter på kundedata, og demonstrere hvordan AI kan bruke disse dataene til å gi bedre spareråd, sterkere kundeopplevelse og høyere sannsynlighet for at kunden velger Nordea som sparepartner. MVP-en skal konkret vise hvordan en AI-tjeneste kan møte ulike behov i ulike livsfaser, og hvordan samme underliggende løsning kan tilpasses både unge kunder, kunder i etableringsfasen og eldre kunder med høy likviditet. Den skal også vise hvordan Nordea kan bruke AI til å flytte oppmerksomheten fra passiv kontoholdning og boliglån som hovedprodukt, til aktiv sparing og investering som en sentral del av kundeforholdet. Appen skal fungere som et proof of concept på AI-drevet sparerådgivning, der brukeren raskt får oppleve at banken forstår situasjonen deres og kan oversette økonomiske data til konkrete anbefalinger innenfor Nordeas egne produkter og tjenester.

# Foreslått vinkling og problem:
Vår foreslåtte vinkling er at det største hinderet for økt sparing ikke først og fremst er mangel på penger, men mangel på trygghet, oversikt og personalisert veiledning. Mange kunder har midler tilgjengelig, men lar pengene stå passivt på konto fordi investering og sparing oppleves komplisert, risikofylt eller lite relevant for egen livssituasjon. Samtidig forventer kunder i dag enkle, intuitive og personlig tilpassede digitale opplevelser, også innen bank og sparing. Dette skaper et tydelig problem for Nordea: Banken har allerede mye kundedata, sterk rådgivningskompetanse og en bred produktportefølje, men må bruke dette bedre digitalt for å vinne nye sparekunder og styrke relasjonen til eksisterende kunder. Vinklingen vår er derfor at Nordea bør bruke AI til å gjøre eksisterende kundedata om til personlig, forståelig og situasjonstilpasset sparerådgivning i sanntid. I stedet for at kunden må forstå hele sparemarkedet selv, skal AI fungere som en intelligent inngang til Nordeas univers og forklare hvilke konkrete steg som er mest fornuftige akkurat nå, gitt alder, livsfase, likviditet, gjeld, inntektsnivå og mål. Dette treffer direkte casens krav om både bedre sparereise og høyere relevans, samtidig som det bygger på Nordeas posisjon som relasjonsbank: tillit, rådgivning og trygghet løftes inn i en digital AI-opplevelse. Problemet vi løser er dermed todelt: For kunden reduserer vi kompleksitet, beslutningsvegring og passivitet. For Nordea øker vi sannsynligheten for at kunden flytter penger fra konto til mer lønnsomme spare- og investeringsprodukter, samtidig som kundeopplevelsen forbedres og lojaliteten styrkes.

# Vår løsning:
Vår løsning er en enkel, interaktiv MVP-app som simulerer hvordan Nordea kan tilby AI-basert personlig sparerådgivning direkte i en mobilflate. Ved oppstart møter brukeren tre forhåndsdefinerte kundeprofiler som representerer ulike strategisk viktige livsfaser, med hardkodede bankdata som om de allerede var hentet fra Nordeas systemer. Profilene er: en ung student med høy kontantbeholdning på forbrukskonto og studielån, en voksen kunde i etablerings- og arbeidsfasen med høy inntekt og stort boliglån, og en eldre pensjonist med nedbetalt bolig og betydelig likvid kapital på ordinær konto. Dette gjør at juryen umiddelbart ser hvordan samme AI-løsning kan gi svært ulike anbefalinger basert på kundens situasjon, uten at brukeren må fylle inn store mengder informasjon manuelt. Etter valg av profil velger brukeren en rådgivningstone, for eksempel profesjonell finansrådgiver, analytisk og datadrevet, eller en mer uformell og energisk variant. Deretter skriver brukeren inn hva de ønsker hjelp til, for eksempel sparing til bolig, bedre avkastning, trygg plassering av kapital, buffer, pensjon eller generelle spørsmål om økonomiske prioriteringer. Appen sender så profilinformasjon, valgt tone og brukerens mål inn til Claude API, som genererer et personlig rådgivningssvar formulert som om Nordea aktivt hjelper kunden videre. Svaret skal være konkret, pedagogisk og handlingsrettet, og peke mot relevante løsninger innenfor Nordeas egne produkter, som fondssparing, buffersparing, pensjonsrelaterte sparegrep eller andre passende spareformer. Hensikten er ikke å bygge full finansiell rådgivning med regulatorisk dybde, men å demonstrere en troverdig og visuelt sterk MVP som viser hvordan AI kan gjøre sparing mer relevant, forståelig og salgsutløsende. Løsningen fungerer derfor både som kundeopplevelsesdemo og som strategisk bevis på at Nordea kan bruke AI til å aktivere eksisterende kundedata, skape mer personlig rådgivning og styrke sin posisjon i sparemarkedet. Så mye som mulig skal være hardkodet av promptene til claude api, det eneste som skal endres er hva kunden skriver inn. Det skal være hardkodet inn i promptsene hva de ulike profilene og tonene innebærer.

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
