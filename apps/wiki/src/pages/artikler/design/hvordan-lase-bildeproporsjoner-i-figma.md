---
layout: ../../../layouts/Layout.astro
title: "Hvordan låse bildeproporsjoner i Figma"
author: "Dag"
date: "22 Mar 2024"
---

# Hvordan låse bildeproporsjoner i Figma

Figma har per i dag (24. januar 2024) ingen støtte for å låse størrelsesforholdet på bilder. Derfor har vi en egen komponent som løser denne oppgaven, hentet fra (<https://www.figma.com/community/file/873125264217713781/fixed-aspect-ratio-in-figma-auto-layout>)

## Aspect ratio spacer

Komponenten for å låse proporsjoner heter "Aspect ratio spacer". Du kan også se forklaring (på engelsk) med tilhørende eksempler og tester i lenken over.

### Horisontal resizing

1. Hent en instance av komponenten "Aspect ratio spacer" og velg proporsjoner via variantmenyen.
2. Sett en frame rundt komponenten (alt + cmd + G mens komponenten er markert, eller høyreklikk + “Frame Selection”), legg på auto layout (shift + A) og sørg for at bredden er satt til fixed (fill funker også, dersom den ligger inne i en container), og høyden er satt til hug.
3. Bytt tilbake til Aspect ratio spacer-komponenten inne i framen, og sett bredden til fill og høyden til hug.
4. Hvis komponenten skal ha andre elementer inni som følger størrelsesforholdet, plasser disse inne i framen med Aspect ratio spacer-komponenten, og bruk absolute posisjonering med ønskede constraints.
5. Tada! Når du nå resizer framen horisontalt vil innholdet endre størrelse og beholde proporsjonene sine.

<div class="info-box"> Lenke til den opprinnelige komponentfila i Figma Community </div>
