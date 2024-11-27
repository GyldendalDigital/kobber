# Component library

Components can be used as react components or as web components.<br />
TypeScript definitions are included.

## Installation

Run one of the following commands to add @gyldendal/kobber-components to your project:


```
npm install @gyldendal/kobber-components
```

```
yarn add @gyldendal/kobber-components
```

You will also need to install 
[react](https://www.npmjs.com/package/react) and
[react-dom](https://www.npmjs.com/package/react-dom)

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
<script>import "@gyldendal/kobber-components/web-components";</script>
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

After making a new component, do the following steps to expose it to the world:

1. Export it from src/index.react.tsx and src/index.web-components.ts.
2. Run `yarn build`.
3. Commit changes, and publish according to [changeset](../../.changeset/README.md).
