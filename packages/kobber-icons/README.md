# SVG icons

Icons can be used as react components or as web components.<br />
TypeScript definitions are included.

## Installation

Run one of the following commands to add @gyldendal/kobber-icons to your project:

```
npm install @gyldendal/kobber-icons
```

```
yarn add @gyldendal/kobber-icons
```

You will also need to install
[react](https://www.npmjs.com/package/react) and
[react-dom](https://www.npmjs.com/package/react-dom)

## Usage

Icons can be imported as react components or as web components.

As a react component:

```jsx
import { ProgressBar } from "@gyldendal/kobber-icons/react";
const App = () => <ProgressBar />;
```

As a custom element:

```html
<script>
  import "@gyldendal/kobber-icons/web-components";
</script>
<kobber-progress-bar />
```

As a web component:

```JavaScript
import { ProgressBar } from "@gyldendal/kobber-icons/web-components";
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
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
```

We recommend using [normalize.css](https://github.com/necolas/normalize.css/) or something similar to normalize browser styles.
