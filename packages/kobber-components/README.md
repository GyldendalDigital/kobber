# Component library

Components can be used as React components or as web components.<br />
TypeScript definitions are included.

See also https://kobber.gyldendal.no/komponenter.

## Installation

```
npm install @gyldendal/kobber-components
```

Depending on you usage, you might need to to install the optional peerDependencies.

## Fonts

Components specifically sets font-family. You should [download the fonts from DAM](https://dam-p-gyldendal.pqcloud.eu/app/#/search//fileSize/?path=%22%5CKobber%5CKobber%20Team%5CFonter%5CPP%20Mori%5CWeb%22), add them to public folder and add the following CSS:

```css
@font-face {
  font-family: "pp mori";
  src: url("./PPMori-Regular.woff2");
}

@font-face {
  font-family: "lyon display";
  src: url("./LyonDisplay-Regular-Web-2.woff2");
}

@font-face {
  font-family: "inter";
  src: url("./InterVariable.ttf");
}

:root {
  /* Kobber default font is PP Mori */
  font-family: "pp mori", Arial, sans-serif;
}
```

See also https://kobber.gyldendal.no/merkevare/typografi.

## Usage

Components can be imported as React components or as web components.

As a React component:

```jsx
import { ProgressBar } from "@gyldendal/kobber-components/react";
const App = () => <ProgressBar />;
```

For SSR applications, to avoid `HTMLElement is not defined` errors, using the [@lit-labs/ssr-dom-shim](https://www.npmjs.com/package/@lit-labs/ssr-dom-shim) package is required.

`ssr-dom-shim` can be used like this (before any kobber-components have loaded):

```js
import { HTMLElement } from "@lit-labs/ssr-dom-shim";

globalThis.HTMLElement ??= HTMLElement;
```

As a custom element:

```html
<script>
  import "@gyldendal/kobber-components/web-components";
</script>
<kobber-progress-bar />
```

As a web component:

```JavaScript
import { ProgressBar } from "@gyldendal/kobber-components/web-components";
const progressBar = new ProgressBar();
document.body.appendChild(progressBar);
```

## CSS

We recommend using [normalize.css](https://github.com/necolas/normalize.css/) or something similar to normalize browser styles.

## Development

When developing components it's usually best to run storybook from root, and see changes live:

```sh
cd ../..
yarn storybook
```

If you're building a React-component used in the [docs app](../../apps/docs), you need to build the component every time you make a change:

```sh
yarn dev
```

### Create components

#### Children or props

For maintainability, components should be created to consume data as children rather than props. By using props for all data, the amount of component props over time will grow unmaintanable. Most likely, you will end up with a component that needs to accept children components as props (while having to maintain possibly deprecated data props).

Example of component consuming data as children:

```
<RadioGroup
  label="Format"
  onChange={(value) => setValue(value)}
  currentValue={value}
  direction="horizontal" // eller vertical
>
  <RadioInput group="format" value="hardcover">Innbundet</RadioInput>
  <RadioInput group="format" value="pocket">Pocket</RadioInput>
  <RadioInput group="format" value="ebook">Ebok</RadioInput>
  <RadioInput group="format" value="audiobook">Lydbok</RadioInput>
</RadioGroup>
```

Example of component consuming data as props:

```
<RadioGroup
  label="Format"
  group="format"
  onChange={(value) => setValue(value)}
  currentValue={value}
  direction="horizontal" // eller vertical
  options={[
    { label: "Innbundet", value: "hardcover" },
    { label: "Pocket", value: "pocket" },
    { label: "Ebok", value: "ebook" },
    { label: "Lydbok", value: "audiobook" }
  ]}
/>
```

#### Extend LitElement

Most components should be defined as `extends LitElement` (or `extends ShoelaceElement`). Extending `StyledLitElement` is only for components that need to be able to be styled in several ways.

### Publish components

After creating a new component, do the following steps to expose it to the world:

1. Export it from src/index.react.tsx and src/index.web-components.ts.
2. Run `yarn build`.
3. Commit changes, and publish according to [changeset](../../.changeset/README.md).

#### Prerequisites

- Make your own npm user (like [olabaloo](https://www.npmjs.com/~olabaloo)). You should get a token (to use in next step), and set up using an authenticator app.
- In an .npmrc file in your personal home folder: Add `//registry.npmjs.org/:_authToken=<token>`

#### Versioning

- We always publish all packages (also unchanged ones). This enforces all packages to always have same verion number, which eases troubleshooting.
- First, decide whether your change is breaking, major, minor, or a patch. When publishing: if yor are uncertain: choose patch. Progress by clicking enter (regardless of whether you have made a selection).

#### Regret published version

Revert the version in your package.json (to a number not previously published on NPM):

```json
{
  "version": "0.3.88"
}
```

Run:

```bash
git add package.json
git commit -m "Revert version bump"
npm publish
```

#### Keep it stable

After a component is published, its storybook story may be embedded elsewhere (perhaps in docs). The story embed url is based on the story name and its folder name. Therefore: try not to change name of components and stories after publication.
