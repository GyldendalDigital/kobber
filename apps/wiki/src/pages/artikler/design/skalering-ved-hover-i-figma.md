---
layout: ../../../layouts/Layout.astro
title: "Skalering ved hover i Figma"
author: "Dag"
date: "22 Mar 2024"
---

# Skalering ved hover i Figma

## Hvordan skalere en komponent ved hover i Figma

1. Før du begynner, pass på at:

* Designet på komponenten må være ferdig, for skalering lar seg ikke endre i ettertid!
* Alt innhold som skal kunne endres og vil kunne påvirke komponentens størrelse må være knyttet til properties

2. Sørge for at komponenten har følgende struktur:

* Komponentframe (med auto-layout, og være UTEN clip content)
* Wrapper
* Alle andre elementer (som skal skaleres)

3. Lag en ny variant av komponenten ved å klikke på +-knappen i menyen øverst i midten

* Kall den nye variant-propertyen for "state", og varianten (state-verdien) for "hover", mens den andre varianten heter "default"

4. I hover-varianten: Copy-paste wrapperen så du har to like

* Plassér det nye laget med absolute position oppå det andre på følgende måte:
  * Klikk på absolute position i designpanelet til høyre og sett Y-verdien til 0
  * Merk at øverste frame i komponenten må ha auto-layout for at absolutt posisjonering skal funke
* Legg til "hidden" på navnet på laget som IKKE har absolutt position

5. Layerstrukturen i hover-varianten skal nå se sånn ut:

* Komponentframe
  * Wrapper hidden
  * Wrapper

6. Marker laget som har absolute position

* Klikk på K for å få opp scale-valg i designmenyen til høyre
* Skalér til 1.05 (eller annet om du ønsker en annen verdi, vi bruker 1.05x ved hover som standard)
* Pass på at absolute-laget er sentrert oppå hidden-laget

7. Gå til prototype-panelet på høyre side

* Velg default-komponenten
  * Klikk på interactions i prototype-panelet
  * Velg "Mouse enter"
  * Der de står None, velg "Change to"
  * Velg State -> Hover
  * Endre Instant til "Smart animate" (justér verdiene til det du ønsker, vi bruker ease-out og 300ms som standard selv om det ikke stemmer helt med css-koden)
* Velg hover-komponenten
  * Klikk på interactions i prototype-panelet
  * Velg "Mouse leave"
  * Der de står None, velg "Change to"
  * Velg State -> Default
  * Endre Instant til "Smart animate" (justér verdiene til det du ønsker, vi bruker ease-out og 200ms som standard selv om det ikke stemmer helt med css-koden)
* Notis: Vi bruker "Mouse enter" og "Mouse leave" istedenfor "While hovering" for å ha mer kontroll på animasjonene, fordi det tillater ulik timing og easing-funksjoner

### Active styling

Gjøres på samme måte, men skaleres med 1.03x istedenfor 1.05x
Prototyping: Velg “While pressing” og 200ms

<div class="link-box"> Oversikt over alle tokens</div>
