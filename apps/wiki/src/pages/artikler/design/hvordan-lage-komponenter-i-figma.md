---
layout: ../../../layouts/Layout.astro
title: "Hvordan lage komponenter i Figma"
author: "Dag"
date: "15 Mar 2024"
---

# Hvordan lage komponenter i Figma

Artikkelen beskriver retningslinjer for hvordan vi bygger komponenter i Gyldendal. Det forutsettes at du har god forståelse av Figma og hvordan bygge semantiske og korrekte komponenter. Dersom dette er ukjent farvann, ingen problem, spør en kollega.

## Sjekkliste for nye komponenter

### Lage komponenter

<div class="info-box">
Husk å skjule komponenten fra biblioteket mens den er under arbeid! Hvordan? Gå til Assets-fanen, finn komponenten, høyreklikk på den og velg “Hide when publishing”. Da vil komponenten legge seg under “Hidden” nederst i Assets-fanen.
</div>

#### 1. Navn på komponenten

- Gi komponenten et navn som er beskrivende og enkelt søkbart.
- Navnet skal være det samme i Figma som i komponentbiblioteket i kode-repoet.
- Vi navngir komponentene våre på engelsk.
- Det er viktig å gi gode navn til alle lag og grupper nedover i komponentet

TIPS ! Samarbeid gjerne med en utvikler om å finne et godt navn.

#### 2. Layout, størrelser og skalering

Vi har satt en standard flate for designskisser til **1280px**. Dette er selvfølgelig bare et felles utgangspunkt da flater og formater har stor variasjon.

Alltid bruk **«Frames»** når du lager lag, grupper og wrappere. Frames tilsvarer **< div >** i HTML.

Bruk alltid **auto layout** i frames. Unntaket er frames som har **absolutt posisjon**, da må den få layout egenskaper fra **constrains**.

I web-koden sier vi at minWidth er 320px og maxWidth er 1280px - det vil si at det ikke vil være rokkeringer utenfor dette spekteret. Eksempel på dette er med kort:

(Et kort er, eller slik forholder du deg til designe oppførsel innen spekteret. Det er jo ikke så enkelt å få dette til i Figma)

#### 3. Tokens

I Figma heter design-tokens variables. Sørg for at alle verdier er definert i tokens (variables), så langt Figma tillater det. Tokens må følge det definerte hierarkiet (komponent-tokens refererer til semantiske tokens, som igjen refererer til primitive tokens) og strukturen for navngiving.

Mer om navngiving av tokens
Bruk av eksisterende tokens
Definere nye tokens

![Eksempel på hvordan et komponent token refererer til en semantisk token som igjen refererer til en primitiv token. ](https://kobber.gyldendal.no/bilder/test-image.png 'Eksempel på hvordan et komponent token refererer til en semantisk token som igjen refererer til en primitiv token. ')

#### 4. Styles

Pass på at farger og tekst er knyttet til styles som finnes i biblioteket.

1. Farger
2. Tekst
3. Effekter (drop shadows etc)

#### 5. Varianter og properties

1. **States**
Sjekk at komponenten har støtte for alle mulige states og varianter den vil kunne opptre i. For interaktive komponenter vil det for eksempel være hover, active, focus, etc.
2. **Tekst**
Hvis komponenten inneholder tekst, sørg for at alle tekstelementer er koblet til properties og kan byttes ut når komponenten skal tas i bruk.
3. **Ikoner**
Hvis komponenten inneholder ikoner, sørg for at disse er koblet til component instances OG at det er lagt in preferred values, slik at det er enkelt å bytte mellom relevante ikoner når komponenten tas i bruk i prototyping.
4. **Navngiving av variante**
Sjekk at alle varianter er navngitt på en beskrivende måte.

#### 4. Universell utforming

Sjekk at komponenten er utformet riktig i henhold til kravene i WCAG 2.1. I Gyldendal skal vi støtte kravene for AA. Link: Mer om hvordan vi jobber med universell utforming. Dette er de viktigste tingene å huske på som designer:

- Fargekontraster
- Ikke bruk kun farge for endring i state
- Fontstørrelser
- Klikkeflater
- LEGG TIL FLERE PUNKTER (eller lenke til sjekkliste)

#### Oppførsel ved bruk

Sjekk at komponenten oppfører seg som forventet og er fleksibel når man endrer størrelse på den, endrer innholdet i properties, interagerer med den i en prototype, etc.

1. **Resize**
Sjekk at komponenten og innholdet tilpasser seg automatisk når man resizer.
2. **Endre text properties**
Husk å teste med suboptimalt innhold! Litt for lang tekst, for kort tekst, lange ord, manglende innhold, etc.
3. **Endre variant**
Sjekk at alle varianter kan byttes mellom via component properties, og at man ikke trenger å gjøre endringer manuelt via layers.
4. **Interaksjoner ved prototyping**
Sjekk at interaksjoner er koblet riktig mellom varianter i Prototype-panelet, for eksempel ved hover og klikk.

### Godkjenning av komponenter

For å sikre at alt vi bygger følger designprinsippene våre, skal alle komponenter gjennom en godkjenningsprosess. Slik sørger vi for at de møter behovene både til brukerne våre, designerne og utviklerne.

**For større komponenter/endringer** gjør grunndigere brukertester både for designere som skal prototype og for brukere av produktet. Interaktive komponenter: Sjekk med en utvikler at alle states er støttet (hover, active, focus, error, etc).

1. Se over variantene i designsystem-fila
  a. Sjekk at alle nødvendige states finnes
  b. Sjekk at alle verdier som skal kunne endres er knyttet til properties (eks. tekst og ikoner) Hvordan bytte mellom modes
  c. Sjekk at komponenten fungerer i alle modes. (I første omgang dark- og light mode)
  d. +++ (se lista over, vi fyller på her snart)

2. Sjekk at alle støttede verdier er knyttet opp mot korrekte tokens

3. Test komponenten på en egen side, sjekk at den er hyggelig å bruke

4. Publiser biblioteket i Figma

5. Send videre til utvikler.

<div class="info-box">
Komponenter under arbeid er skjult fra biblioteket! Husk å gjøre komponenten tilgjengelig i biblioteket igjen når den er godkjent og flyttes til prod-siden, før du publiserer biblioteket på nytt.
</div>

<div class="info-box">
Er du usikker på hvordan du bruker tokens riktig? Tokens er nytt for mange, så det er ikke så rart. Snakk med Token Master og be om en innføring!
</div>
