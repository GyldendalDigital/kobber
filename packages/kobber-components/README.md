# Component library

Components can be used as react components or as web components.<br />
TypeScript definitions are included.

See also https://kobber.gyldendal.no/komponenter.

## Installation

Run one of the following commands to add @gyldendal/kobber-components to your project:

```
npm install @gyldendal/kobber-components
```

```
yarn add @gyldendal/kobber-components
```

Depending on you usage, you might need to to install the optional peerDependencies.

## Inter font

The Inter variable font is used by default.
It can be installed separately from [fontsource](https://fontsource.org/fonts/inter/) with one of these commands:

```
npm install @fontsource-variable/inter
```

```
yarn add @fontsource-variable/inter
```

And then imported in your project:

```JavaScript
import '@fontsource-variable/inter';
```

## Usage

Components can be imported as react components or as web components.

As a react component:

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
