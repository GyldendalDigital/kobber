# SVG icons

Icons can be used as react components or as web components.<br />
TypeScript definitions are included.

See also https://kobber.gyldendal.no/merkevare/ikoner.

## Installation

Run one of the following commands to add @gyldendal/kobber-icons to your project:

```
npm install @gyldendal/kobber-icons
```

```
yarn add @gyldendal/kobber-icons
```

Depending on you usage, you might need to to install the optional peerDependencies.

## Usage

Icons can be imported as react components, as web components, or as an SVG sprite.

Each icon component is prefixed with `icon-`, to simplify understanding what kind of component is used.

As a react component:

```jsx
import { IconArrowRight } from "@gyldendal/kobber-icons/react";
const App = () => <IconArrowRight />;
```

As a custom element:

```html
<script>
  import "@gyldendal/kobber-icons/web-components";
</script>
<icon-arrow_right />
```

Or include the sprite `@gyldendal/kobber-icons/symbols/kobber-icons.svg` in your html, and reference its symbols.
The file `@gyldendal/kobber-icons/symbols/kobber-icons-lists.ts` contains a list of all icons and a type declaration, which can be useful.

(Note that such ID references do not currenly work across the shadow dom barrier.)

```html
<svg role="presentation" aria-hidden="true">
  <use href="#arrow_right" />
</svg>
```

## ⚡ Quick how to: Update icons

1. Recieve svgs from a designer (all current svgs in one zipped folder is preferred).
2. Extract svgs to folder `kobber/packages/kobber-icons/src/assets/svgs`.
3. Run `yarn build`.
4. Commit changes, and publish according to [changeset](../../.changeset/README.md).

## 🧱 Icons folder structure

```
/
└── chunks/
│   └── chunk.js
└── react/
│   ├── index.js
│   └── index.d.ts
└── symbols/
│   ├── kobber-icons.svg
│   └── kobber-icons-lists.ts
└── web-components/
│   ├── index.js
│   └── index.d.ts
└── svg-sprite-config.json
└── tsup.config.ts
```

First, the package [svg-sprite](https://github.com/svg-sprite/svg-sprite) makes the sprite `./symbols/kobber-icons.svg` from all icons in `src/assets/svgs`. `svg-sprite` uses `./svg-sprite-config.json` to make the sprite contain symbols, and ensure each symbol uses currentcolor as fill color.

In `./tsup.config.ts`, the sprite is used as input for making `./symbols/kobber-icons-lists.ts`, the all icon components and their story files.

All files in folders (`chunks`, `react`, `symbols` and `web-components`) are auto generated and should never be edited manually.
