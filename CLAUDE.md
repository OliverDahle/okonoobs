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
- Nettsiden skal kunne fungere som støtte under den muntlige presentasjonen, den skal fungere like bra på PC, presentasjonsskjermen og mobilen til de i salen
- Codex og Gemini kommer til å dobbelsjekke all kode så gjør alt skikkelig så slipper vi å finne ut at en av de modellene er bedre enn deg.

## Arkitektur og struktur
- Bygg nettsiden som et fullstendig flerside-prosjekt med tydelig mappestruktur — aldri én enkelt HTML-fil
- Separer HTML, CSS og JavaScript i egne filer og mapper
- Lag flere navigerbare sider (f.eks. forside, analyse, løsningsforslag, om laget) med en gjennomgående navbar og footer
- Nettsiden skal føles som et ekte produkt man kan klikke rundt i, ikke en enkeltstående landingsside

# Spesifikk prompt for selve casen:
Jeg vil at du skal bygge en komplett, presentasjonsklar nettside for NM i Økonomi på konseptet økonoobs.no. Dette er ikke en vanlig nettside. Det er en 7-minutters casepresentasjon til jury, laget som et fullverdig alternativ til PowerPoint.

Nettsiden skal fungere som selve presentasjonen. Hver seksjon skal oppleves som en tydelig slide. Man skal kunne:

scrolle nedover gjennom historien

hoppe mellom seksjoner via sticky navigasjon

alltid forstå hvor i presentasjonen man er

Målet er en løsning som ser premium, skarp og ferdig ut på storskjerm i et fysisk rom.

Caset som skal løses

Vi har valgt BDO-caset:

Hvordan kan BDO bistå sine SMB-kunder i å ta i bruk mulighetene som ligger i KI? Lag et forslag til en skisse for strategisk oppfølging for en tenkt kunde. Ta egne forutsetninger.

Nettsiden skal bygge opp én tydelig anbefaling:

Hovedbudskap

BDO bør tilby SMB-kunder et standardisert 12-ukers AI Sprint som tar dem fra usikkerhet til dokumentert forretningsverdi med KI.

Dette er kjernen. Alt i nettsiden skal støtte dette.

Strategisk vinkel

Vi skal ikke presentere en generell KI-strategi. Vi skal presentere et repeterbart tjenestekonsept for øvre SMB-segment.

Tjenestekonsept

Velg ett navn og bruk det konsekvent:

BDO AI Sprint

BDO KI-løftet

Anbefalt: BDO AI Sprint

Hva BDO faktisk selger

BDO selger ikke teknologi i seg selv. BDO selger:

prioritering

trygg implementering

raske piloter

styring og skalering

målbar gevinst

Kjernepåstand

For SMB er problemet ikke tilgang til KI. Problemet er:

hvor de skal starte

hvilke brukscaser de skal velge

hvordan de reduserer risiko

hvordan de dokumenterer verdi

BDOs rolle er å lukke dette gapet.

Tenkt kunde

Bruk én konkret casekunde og bygg hele fortellingen rundt den.

Kundeprofil: Nordform AS

norsk SMB-bedrift

ca. 220 ansatte

ca. 280 MNOK i omsetning

B2B handel/distribusjon

bruker Microsoft 365, ERP og CRM

lav til moderat digital modenhet

høy andel manuelle prosesser

ledelsen er positiv til KI, men usikker på gevinst, risiko og prioritering

ingen tydelig KI-policy eller styringsmodell

Dette skal eksplisitt vises som våre egne forutsetninger.

Struktur på nettsiden

Nettsiden skal bestå av tydelige fullskjermsseksjoner med hard visuell kontrast mellom hver seksjon. Hver seksjon skal leses som en slide, ikke som en vanlig nettside.

1. Åpning / Hero

Formål: juryen skal forstå anbefalingen umiddelbart.

Innhold:

Stor tittel:
“Hvordan kan BDO hjelpe SMB-er å skape verdi med KI – uten å øke risikoen?”

Undertittel:
“Vår anbefaling: et standardisert 12-ukers AI Sprint som tar kunden fra usikkerhet til dokumentert effekt.”

Tre korte executive-summary-punkter:

SMB-er mangler struktur, ikke teknologi

BDO kan eie rollen mellom strategi og gjennomføring

verdi skapes gjennom piloter, styring og skalering

Krav:

ekstremt sterk first impression

én tydelig CTA: “Se anbefalingen”

ingen støy

2. Problemet

Formål: etablere hvorfor dette er et reelt og lønnsomt problem å løse.

Overskrift:
“Utfordringen er ikke om KI finnes – men hvordan SMB faktisk tar det i bruk”

Vis 4 problemer:

use cases prioriteres ikke godt nok

implementering stopper i usikkerhet

risiko rundt data og kvalitet bremser fremdrift

gevinster blir ikke tydelig nok målt

Visual:

enkel “før-situasjon”

fragmenterte systemer

manuelle prosesser

lav beslutningsklarhet

Denne seksjonen skal være mørk, stram og analytisk.

3. Hvorfor BDO

Formål: vise hvorfor akkurat BDO bør vinne denne rollen.

Overskrift:
“BDO har rett til å eie denne posisjonen”

Tre korte søyler:

Strategisk fit – teknologi og fremtidsrettede tjenester er riktig retning

Kundebehov – SMB trenger en trygg, pragmatisk partner

Leveranseevne – BDO kan kombinere strategi, økonomi, risiko og implementering

Legg inn en enkel posisjoneringsgrafikk som viser BDO mellom:

strategihus

teknologileverandør

systemintegrator

Poenget skal være:
BDO kan oversette KI til forretningsverdi raskere og tryggere enn mer rendyrkede aktører.

4. Den tenkte kunden

Formål: gjøre løsningen konkret og troverdig.

Overskrift:
“Nordform AS: typisk SMB med høyt potensial og lav modenhet”

Vis:

selskapsprofil

smertepunkter

målbildet

Smertepunkter:

treg kundeservice

manuell rapportering

ineffektiv tilbudsprosess

intern kunnskap er lite tilgjengelig

Mål:

høyere produktivitet

bedre beslutningsgrunnlag

jevnere kundeopplevelse

trygg KI-innføring

5. Løsningen: BDO AI Sprint

Dette er hovedseksjonen og skal være den visuelt sterkeste delen av nettsiden.

Overskrift:
“Vår løsning: et 12-ukers AI Sprint i fire faser”

Lag en tydelig 4-fasemodell:

1. Diagnose

intervjuer

prosesskartlegging

modenhetsanalyse

datarisiko

output: potensialkart

2. Prioritering

velg 3–5 brukscaser

vurder verdi, risiko og gjennomførbarhet

output: prioritert portefølje

3. Pilot

test 1–2 brukscaser

mål effekt

etabler enkel styring

output: dokumentert gevinst

4. Skalering

governance

opplæring

KPI-er

roadmap 6–12 måneder

output: skaleringsplan

Krav:

timeline eller roadmap

tydelig fase for fase

hver fase skal være lett å presentere på 30–40 sekunder

6. Prioriterte brukscaser

Formål: vise konkret innhold, ikke bare metode.

Overskrift:
“Tre brukscaser med høy verdi og lav til moderat kompleksitet”

Velg og ranger disse:

1. KI-assistert kundeservice

svarutkast

raskere responstid

jevnere kvalitet

human-in-the-loop

2. Automatisert intern rapportering

oppsummering av økonomi- og salgsdata

raskere månedsrapport

mindre manuelt arbeid

bedre beslutningsgrunnlag

3. Tilbuds- og salgsstøtte

førsteutkast til tilbud

oppsummering av kundehistorikk

raskere tilbudsprosess

Presenter dem i en 2x2-matrise:

x-akse: implementerbarhet

y-akse: forretningsverdi

Konklusjon:

brukscase 1 og 2 piloteres først

brukscase 3 kommer i neste bølge

7. Gevinst og økonomi

Formål: vise at løsningen er kommersielt attraktiv.

Overskrift:
“Verdien kommer raskt – uten full transformasjon fra dag én”

Bruk realistiske estimater:

15–25 % tidsbesparelse i repetitive prosesser

20–30 % raskere responstid i kundeservice

30–50 % raskere førsteutkast i rapportering og tilbud

Vis:

investering i sprinten

forventet årlig gevinst

payback

kvalitative gevinster:

læring

styring

endringskapasitet

skalerbarhet

Denne seksjonen skal være lysere enn forrige, slik at økonomibildet oppleves som et nytt tydelig kapittel.

8. Risiko og ansvarlig KI

Formål: øke troverdigheten.

Overskrift:
“Trygg innføring er en del av løsningen – ikke et tillegg”

Risiko:

datasikkerhet

feil og hallusinasjoner

uklart eierskap

lav brukeradopsjon

omdømmerisiko

Tiltak:

avgrensede piloter

human-in-the-loop

enkel KI-policy

rolleavklaringer

opplæring

KPI-oppfølging

Vis dette som en tydelig venstre/høyre-struktur:

risiko

tiltak

Tonen skal være kontrollert og trygg, ikke defensiv.

9. Hvorfor vår løsning vinner

Formål: samle argumentet før avslutning.

Tre store statement-cards:

Konkret – tydelig modell, ikke bare strategi

Trygg – gevinst og kontroll samtidig

Skalerbar – kan repeteres på tvers av SMB-kunder

Dette skal være kort, hardt og presentasjonsvennlig.

10. Avslutning

Stor sluttslide med høy kontrast.

Overskrift:
“BDO bør ikke selge KI. BDO bør selge trygg verdiskaping med KI.”

Undertittel:
“Et standardisert AI Sprint gir SMB-kunder raskere gevinst, lavere risiko og en tydelig vei til skalering.”

Tre sluttpunkter:

velg riktige brukscaser

skap tidlig dokumentert effekt

bygg styring før skalering

Knapp:
“Tilbake til toppen”

Designkrav
Stil

premium

mørk og moderne

høy kontrast

ryddig og disiplinert

ingen dashboard-estetikk

ingen studentprosjekt-følelse

Viktigste grep

Hver seksjon må ha tydelig egen identitet. Øk kontrasten mellom seksjonene gjennom:

skifte i bakgrunnstoner

tydeligere seksjonsovergang

store overskrifter

mer luft

visuell “slide-følelse”

Farger

charcoal / mørk marine som base

off-white tekst

dyp rød/rustrød accent

dempede gråtoner

en lys kontrastflate i enkelte seksjoner for rytme

Typografi

stor display-font i overskrifter

ren sans-serif i brødtekst

optimalisert for projektor og presentasjon

Bevegelse

subtile scroll-animasjoner

fade og slide-in

null overdesign

animasjon skal hjelpe orientering

Funksjonelle krav

Bygg dette som en ferdig frontend.

Teknologi

Bruk:

Next.js

React

TypeScript

Tailwind CSS

Framer Motion

Funksjoner

sticky navigasjon

markering av aktiv seksjon

smooth scroll

fullskjerms eller nesten fullskjerms seksjoner

høy ytelse

enkel lokal kjøring

Komponenter

Lag minst disse:

HeroSection

StickyNav

SectionWrapper

Roadmap

UseCaseMatrix

ROIBlock

RiskMatrix

FinalSlide

Innholdskrav

alt innhold skal være på norsk

teksten skal være kortere, skarpere og lettere å presentere live

unngå floskler og buzzord

hver seksjon skal kunne forstås på få sekunder

Hver seksjon må svare på ett spørsmål:

hva er problemet?

hvorfor BDO?

hvem er kunden?

hva er løsningen?

hvor er verdien?

hvordan håndteres risiko?

hvorfor vinner dette?

Viktig live-føring

Denne nettsiden skal brukes foran en jury. Optimaliser derfor for:

store overskrifter

få, harde hovedpoenger

tydelig seksjonsrytme

rask orientering

høy lesbarhet på avstand

Nettsiden må føles som en presentasjon, ikke som lesestoff.

Det du skal levere

Lever en komplett løsning:

komplett prosjektstruktur

alle nødvendige filer

ferdig innhold i seksjonene

ferdig styling

ferdig navigasjon

animasjoner

tydelig lokal oppstartsbeskrivelse

I tillegg:

forklar kort prosjektstrukturen

pek ut hvilke filer som er viktigst å redigere

gjør det enkelt å justere tekst før finalen

Ikke gjør dette

ikke lag en generisk landingsside

ikke lag et dashboard

ikke gjør seksjonene teksttunge

ikke bruk tilfeldige illustrasjoner

ikke vær vag i anbefalingen

ikke gjør designet flatt eller anonymt

Oppsummering

Bygg en nettside som selger inn denne påstanden:

BDO kan vinne i SMB-markedet ved å tilby et standardisert AI Sprint som hjelper kunder å identifisere, pilotere og skalere KI med rask gevinst og kontrollert risiko.

Nettsiden skal være så skarp at den kan brukes direkte i konkurransen.

En ekstra forbedring før dere limer dette inn i Claude: legg til én siste linje nederst:

“Prioriter tydelig seksjonskontrast, kort presentasjonstekst og sterk slide-følelse i alle deler av løsningen.”
