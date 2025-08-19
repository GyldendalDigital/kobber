# Changesets

Quick how to (from [docs](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md#adding-changesets))

- Create commits: `yarn changeset`
- Set new version: `yarn changeset version` (creates changelog based on commits)
- Edit changelog if needed
- Run `yarn`
- Commit and push to git
- Publish to NPM: `yarn changeset publish`

Troubleshooting:

- If running `yarn changeset publish` gives `error npm error 401 Unauthorized - GET https://registry.npmjs.org/-/npm/v1/user`: Try to do a `npm login` in terminal, and re-run the publish command when logged in.
