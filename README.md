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

### Run Storybook locally

```bash
yarn install

# Produce css variables from design tokens, required by components
yarn build -F @gyldendal/kobber-base

# runs the dev server for /apps/storybook-web-components (kobber-storybook.gyldendaldigital.no)
yarn storybook
```
