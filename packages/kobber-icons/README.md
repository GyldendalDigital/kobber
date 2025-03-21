# SVG icons

Icons can be used as react components or as web components.<br />
TypeScript definitions are included.

See also https://kobber.gyldendal.no/merkevare/ikoner.

## Usage

### Installation

Run one of the following commands to add @gyldendal/kobber-icons to your project:

```
npm install @gyldendal/kobber-icons
```

```
yarn add @gyldendal/kobber-icons
```

Depending on you usage, you might need to to install the optional peerDependencies.

### Using the svgs

Icons can be imported as react components, as web components, or as an SVG sprite.

#### As a react component

```jsx
import { IconArrowRight } from "@gyldendal/kobber-icons/react";
const App = () => <ArrowRight />;
```

#### As a custom element

```html
<script>
  import "@gyldendal/kobber-icons/web-components";
</script>
<kobber-arrow_right />
```

Custom element icon names are prefixed with kobber-, to ensure [valid naming](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name).

#### Use sprite directly

Include the sprite `@gyldendal/kobber-icons/symbols/kobber-icons.svg` in your html, and reference its [symbols](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol).
The file `@gyldendal/kobber-icons/symbols/kobber-icons-lists.ts` contains a list of all icons and a type declaration, which can be useful.

Symbol ids are prefixed with `kobber-`, to avoid collisions with any other id in the html (including svg symbols in other sprites).

(Note that such ID references do not currenly work across the shadow dom barrier.)

```html
<svg role="presentation" aria-hidden="true">
  <use href="#kobber-arrow_right" />
</svg>
```

### Styling

#### Color

Icons have `fill=currentcolor`. This means the icon components' color will inherit from their parent element.

#### Size

Icons take the `size` prop for sizing (in react: `iconSize`).

Example in React:

```jsx
import { User } from "@gyldendal/kobber-icons/dist/react-ssr-safe";
<User iconSize="large" />;
```

### Other styling

#### Web components

Each icon web component :host is `display: flex;`, as this is useful for most usages. As this style is on the :host selector, consumers are free to override that style on the icon component container (when, for example, inline styling is required).

Likewise, other styles can be applied to the icon component container, like stroke or stroke width.

#### Styling react-ssr-safe components

These are injected as SVG elements into HTML. This means you can style the SVG element the same way you style HTML elements.

### 🧱 Icons folder structure

```
/
└── chunks/
│   └── chunk-[hash].js
└── react/
│   ├── index.js
│   └── index.d.ts
└── symbols/
│   ├── kobber-icons.svg
│   └── kobber-icons-lists.ts
└── web-components/
    ├── index.js
    └── index.d.ts
```

## Development

### ⚡ Quick how to: Update icons

1. Get all current icons from DAM:
   - Download from [DAM](https://dam-p-gyldendal.pqcloud.eu/app/#/search//name/?path=%22%5CKobber%5CDesignelementer%5CIkoner%22&enableAssetsOfCollections=true&showAssetsOfSubfolders=true&showSubCollections=false), or
   - Recieve svgs from a colleague with access to DAM.
2. Delete all content in folder `kobber/packages/kobber-icons/src/assets/svgs`.
3. Extract svgs to folder `kobber/packages/kobber-icons/src/assets/svgs`.
4. Run `yarn build`.
5. Commit changes, and publish according to [changeset](../../.changeset/README.md).

### Building icons

`yarn build` runs the `svg` script, and then the `tsup` script.

#### Script `svg`

`svg` uses the package [svg-sprite](https://github.com/svg-sprite/svg-sprite) to make the sprite `./symbols/kobber-icons.svg` from all icons in `src/assets/svgs` folder.

svg-sprite uses `./svg-sprite-config.json` to generate the sprite containing each icon as an [svg symbol](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol).

For each svg symbol, this config file:

- prefixes its id with `kobber-` (to avoid collisions with any other id in the html, including svg symbols in other sprites)
- ensures currentcolor is used as fill color

#### Script `tsup`

In `./tsup.config.ts`, the sprite is used as input for making `./symbols/kobber-icons-lists.ts`, the all icon components and their story files.

#### Generated files

All files in folders (`chunks`, `react`, `symbols` and `web-components`) are auto generated and should never be edited manually.
