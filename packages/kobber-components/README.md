# Component library

Components can be used as web components, or as React components.<br />
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
  font-family: "pp-mori";
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
  /* Kobber default font is pp-mori */
  font-family: "pp-mori", Arial, sans-serif;
}
```

See also https://kobber.gyldendal.no/merkevare/typografi.

## Usage

Components can be imported as React components or as web components.

As a React component:

```jsx
import { Button } from "@gyldendal/kobber-components/react";
const App = () => <Button />;
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
<kobber-button />
```

As a web component:

```JavaScript
import { Button } from "@gyldendal/kobber-components/web-components";
const button = new Button();
document.body.appendChild(button);
```

## Auto-registering web components

To make the web components render they need to be registered:

```js
window.customElements.define("kobber-button", KobberButton);
```

This can be done automatically using the `init`-function:

```js
import { init } from "@gyldendal/kobber-components/init";

init({ autoRegisterWebComponents: true });
```

If using kobber-components in concert with kobber-icons, both components and icons should be registered at the same time. If kobber-icons are registered at a later time, kobber-components will not be able to set the components' classes that are needed to present icons within them.

> [!TIP]
> Check [icons readme](./packages/kobber-icons/README.md) on registering icons, and more options.

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

Kobber Components are ["autonomous custom elements"](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element), that inherit from HTMLElement base class. Custom elements inheriting other HTML elements is not supported by Safari.

#### Make a new component from scratch

The easiest is to copy-paste the folder of an existing component, and alter the name and content to your needs.

All component folders should contain the following files:

- Component.ts - the component itself.
- Component.styles.ts - the component styles, imported into Component.ts.
- Component.core.ts - all code that is used in both Component.ts and Component.styles.ts.
- Component.stories.ts - storybook stories.

#### Naming conventions

- Folder names are element names, which [must be in kebab-case](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#registering_a_custom_element).
- Attribute names are in kebab-case.
- Component names are in PascalCase.
- Component file names:
  - File names are the same as the component name (plus extension) - don't export more than one component per file!
  - Currently allowed extensions are ts, tsx and js.
  - Component file names can only contain ONE dot!
- All files not exporting components should have MORE THAN ONE dot in file name.

The tsup build script uses these conventions to build lists of all components. The script ignores content in folders with the following names:

- base
- config
- story

#### Using libraries etc

Small, simple components can avoid using libraries. Most components, however, `extends LitElement` (or `extends ShoelaceElement`). Extending `StyledLitElement` is only for components that need to be able to be styled in several ways.

Dependencies for Kobber consumers should be kept at an absolute minimum.

#### Children or props

For maintainability, components should be created to consume data as children rather than props.

A downside with using props for all data, is that the amount of component props over time will grow unmantainable. Most likely, you will end up with a component that needs to accept children components as props (while having to maintain possibly deprecated data props).

The upside with using props for all data is that the component fully controls all of its content. In a system of general components, however, this is not necessarily an upside.

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

### Styling components

Styling across the shadow dom barrier is restricted. To circumvent this, we use attributes that can be made into a components' internal styles.

#### Prefer data-attributes over class names

Use data-attributes as selectors for components' styling. These are more semantic and readable than class names.

##### Background on CSS selectors

By using class names, one often ends up with [loose class names](https://csswizardry.com/2012/11/code-smells-in-css/#loose-class-names) that do not make sense without first knowing the whole component code. To cope with this, it is possible to use class name conventions like [BEM](https://bem-cheat-sheet.9elements.com/) to add semantics to CSS Selectors. With BEM, you often end up with multiple class names that are long strings, reducing readability. Using data-attributes solves this problem more elegantly.

### Writing components' storybook stories

Storybook stories should be as readable and non-abstract as possible, as they serve as documentation for Kobber consumers. Often, however, they need to contain some logic for presenting all variants of a component.

When writing stories, you should document not only simple happy-path cases. Show how your component works (or does not work) with much content, and little and none.

Other moments:

- All attributes should be possible to change with args.
- It should be possible to see the code necessary to use the component in storybook web page.

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
