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

## Local build (from /apps/docs)

Build, then run the built files (as they would run in production).

```sh
yarn build
yarn start
```
