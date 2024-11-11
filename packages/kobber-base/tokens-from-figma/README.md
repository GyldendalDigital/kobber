# Updating tokens

1. In Figma, make sure "reference mode in variables" is enabled for the design tokens plugin

1. Export from Figma

1. Add the file in this folder with name `tokens-YYYY-MM-DD.json`

1. Update the import path in [index.ts](./index.ts)

1. Build project in root: `yarn && yarn build`

1. Fix any build errors or ask in [Slack](https://gyldendal.slack.com/archives/C06B5N7H36E) for help

1. Create a branch: `git checkout -b "Token update"`

1. Commit all changes and push

1. Create a [PR](https://github.com/GyldendalDigital/kobber/compare)
