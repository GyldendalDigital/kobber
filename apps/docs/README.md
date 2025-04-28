# kobber.gyldendal.no

## Local setup (from root)

Build tokens and components

```sh
yarn build -F @gyldendal/kobber-components
```

Run documentation site

```sh
yarn dev -F docs
```

Also requires an .env file in the docs folder with [the following secrets in Keeper](https://keepersecurity.eu/vault/#detail/7i8pCa5I6A9YAIPYzvYTPA).

## Update sanity types

Making changes in schema types or `queries.ts` will cause `sanity.types.ts` to be out of date. Use the typegen script to remedy this:

```sh
cd apps/docs
yarn typegen
```

## Static local build (like production)

```sh
cd apps/docs
yarn build
yarn start
```
