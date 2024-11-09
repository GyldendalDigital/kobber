# Base

## 🛠️ Usage

Design tokens can be imported as json, css variables or sass variables:

```JavaScript
import * as tokens from "~@gyldendal/kobber-base/themes/default/tokens";

export const Button = styled.button`
    background-color: ${tokens.component.button.color.background};
`;
```

```css
@import "~@gyldendal/kobber-base/themes/default/tokens.css";

.button {
  background-color: var(--kobber-component-button-color-background);
}
```

```scss
@use "~@gyldendal/kobber-base/themes/default/tokens.scss" as tokens;

.button {
  background-color: tokens.$component-button-color-background;
}
```

Typography can be applied directly to HTML using CSS classes or by using `composes` in css modules:

```html
<style>
  @import "~@gyldendal/kobber-base/themes/default/typography.css";
</style>

<h1 class="kobber-typography-heading-xl">Heading</h1>
```

```css
.my-heading {
  composes: headingXxl from "~@gyldendal/kobber-base/themes/default/typography.module.css";
}
```

Also see the typography component from @gyldendal/kobber-components:

```tsx
import { ThemeProvider, Typography } from "~@gyldendal/kobber-base/react";

<ThemeProvider variant="default">
    <Typography component="h1" variant="headingXxl" />
</TheThemeProviderme>
```

## 🧱 Token folder structure

```
/
├── themes/
│   ├── tokens.css
│   ├── tokens.scss
│   └── token.json
├── tokens-from-figma/
│   ├── index.ts
│   └── tokens-YYYY-MM-DD.json
├── build.ts
└── buildConfig.ts
```

Using [style-dictionary](https://github.com/amzn/style-dictionary) to transform and format the tokens from Figma.

The files in `./themes` are auto generated and should never be edited manually.

[How to update tokens](./tokens-from-figma/README.md)
