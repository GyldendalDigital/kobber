<div align="center">

  <a href="https://kobber.gyldendal.no">
    <img src="https://dam-prod.gyldendaldigital.no/tenants/edu/file/FO4HFrU94yn8e_pN7iIqOf/*/FO4HFrU94yn8e_pN7iIqOf.svg" height="150">
    <h3 align="center">Gyldendals designsystem</h3>
  </a>

  <h1 align="center">Kobber</h1>

[![NPM latest version](https://img.shields.io/npm/v/@gyldendal/kobber-components/latest.svg?color=481125&labelColor=481125)](https://www.npmjs.com/package/@gyldendal/kobber-components)
![NPM last update](https://img.shields.io/npm/last-update/%40gyldendal%2Fkobber-components?color=481125&labelColor=481125)
[![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?logo=figma&logoColor=white&color=481125)](https://www.figma.com/design/zMcbm8ujSMldgS1VB70IMP/Kobber-Komponentbibliotek)

</div>

### ⚡ How to add components to your project

#### Install

```bash
npm install @gyldendal/kobber-components
```

#### Use

```html
<script>
  import "@gyldendal/kobber-components/web-components";
</script>

<div class="kobber-theme-default">
  <kobber-button>Hello Kobber</kobber-button>
</div>
```

> [!TIP]
> Check [components readme](./packages/kobber-components/README.md) for adding fonts or using the React version (required for SSR apps like NextJS).

<br />

### 🖼️ How to add icons to your project

#### Install

```bash
npm install @gyldendal/kobber-icons
```

#### Use

```html
<script>
  import "@gyldendal/kobber-icons/web-components";
</script>

<kobber-arrow_right />
```

> [!TIP]
> Check [icons readme](./packages/kobber-icons/README.md) for more options.

<br />

## Development

This monorepo contains all code related to Kobber. They share dependencies and common commands can be run from root using [Turbo CLI syntax](https://turbo.build/docs/reference/run#--filter-string).

### Run docs page locally

```bash
yarn install

# build only this package and all its dependencies
yarn build -F @gyldendal/kobber-components

# runs the dev server for /apps/docs project (kobber.gyldendal.no)
yarn dev -F docs
```

Also requires an .env file in the docs folder with [the following secrets in Keeper](https://keepersecurity.eu/vault/#detail/7i8pCa5I6A9YAIPYzvYTPA).

### Run Storybook locally

```bash
yarn install

# Produce css variables from design tokens, required by components
yarn build -F @gyldendal/kobber-base

# runs the dev server for /apps/storybook-web-components (kobber-storybook.gyldendaldigital.no)
yarn storybook
```

### Test Kobber locally using import aliases

Methods such as `npm link` exist for testing NPM packages locally before deploying to the NPM registry.

Import aliases can also be used for developing Kobber locally in parallell with other projects.

In the project using Kobber, add import aliases that point to the local Kobber-repo:

```js
// vite.config.js

import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@gyldendal/kobber-base": resolve(__dirname, "../../../../kobber/packages/kobber-base"),
      "@gyldendal/kobber-components": resolve(__dirname, "../../../../kobber/packages/kobber-components/dist")
    }
  }
});
```

Webpack does also have an `resolve.alias` option.

After updating the config it might be necessary to run vite with the force option, i.e. `vite --force`.

