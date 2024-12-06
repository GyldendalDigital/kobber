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

CSS can be imported in JavaScript if supported by your bundler:

```JavaScript
import "@gyldendal/kobber-base/css/components.css";
```

<mark>
Kanskje vi bør inkludere vår egen css baseline i stedet for dette? ↓
<br />
Slik som https://mui.com/material-ui/react-css-baseline/</mark>

kobber-components assumes that `box-sizing` is set to `border-box`:

```css
html { box-sizing: border-box; }
*, *::before, *::after { box-sizing: inherit; }
```

We recommend using [normalize.css](https://github.com/necolas/normalize.css/) or something similar to normalize browser styles.
