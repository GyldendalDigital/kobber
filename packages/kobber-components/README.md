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

Components specifically sets font-family. You should download the fonts from DAM, add them to public folder and add the following CSS:

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

### Create components

For maintainability, components should be created to consume data as children rather than props. By using props for all data, the amount of component props over time will grow unmaintanable. Most likely, you will end up with a component that needs to accept children components as props (while having to maintain possibly deprecated data props).

Example of component consuming data as children:

```
<RadioGroup
  label="Format"
  onChange={(value) => setValue(value)}
  currentValue={value}
  direction="horizontal" // eller vertical
>
  <RadioInput group="format" label="Innbundet" {...}/>
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

### Publish components

After creating a new component, do the following steps to expose it to the world:

1. Export it from src/index.react.tsx and src/index.web-components.ts.
2. Run `yarn build`.
3. Commit changes, and publish according to [changeset](../../.changeset/README.md).
