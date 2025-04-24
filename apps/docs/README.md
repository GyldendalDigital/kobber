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

## Local build (from /apps/docs)

Build, then run the built files (as they would run in production).

```sh
yarn build
yarn start
```
