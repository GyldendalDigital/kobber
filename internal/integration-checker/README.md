# Tools

## Setup
1. Copy `.env.template` → `.env`
2. Fill in missing values
3. Run `yarn`

## repos.json

Repos can be local or cloned from git.

Cloned repos are stored in the operating system's default directory for temporary files.

```json
[
  {
    "name": "consumer-repo-on-disk",
    "directory": "../consumer-repo-on-disk"
  },
  {
    "name": "consumer-repo-from-git",
    "url": "",
    "branch": "main",
    "directory": "consumer-repo-from-git"
  }
]
```

## Scripts

`yarn dev` builds files to [bin](./bin) for use by other packages in the monorepo.

`yarn clone-repos` clones repos found in **repos.json**.

`yarn create-csv` stores references to Kobber-imports in [dest](./dest).

## Usage in monorepo packages

In a monorepo-package, run `yarn add @internal/integration-checker -D`.
   
Add a script in package.json that finds references to Kobber-imports in local or cloned repos.

```json
{
  "name": "@gyldendal/kobber-components",
  "scripts": {
    "create-ts-refs": "create-ts-refs --out=.references.mts  sourceMap=react:./src/index.react.js"
  }
}
```

`--out` the file name of the generated TypeScript file.

`--sourceMap` A map between `import`-declarations and and the package's source code.
For example, if a consumer repo imports `@gyldendal/kobber-components/react` and the Kobber-package exports the react components from **index.react.tsx**, the sourceMap should be `react:./src/index.react.js`.


```json
{
  "scripts": {
    "create-ts-refs": "create-ts-refs --out=.references.mts  sourceMap=react:./src/index.react.js"
  }
}
```

## Monorepo root

Add this script:

```bash
yarn clone-repos && yarn create-ts-refs && yarn create-csv
```