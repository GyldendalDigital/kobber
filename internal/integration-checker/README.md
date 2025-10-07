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
    "directory": "../consumer-repo-on-disk",
    "testCommands": {
      "install": "npm install",
      "prepare": "npm run build",
      "test": "npm run lint"
    }
  },
  {
    "name": "consumer-repo-from-git",
    "url": "",
    "branch": "",
    "directory": "consumer-repo-from-git",
    "testCommands": {
      "install": "npm install",
      "test": "npm run lint"
    }
  }
]
```

## Scripts

`yarn find-usage` scans consumer repos for Kobber-imports and stores the results as **dest/*.csv**

`yarn test-integrations` finds breaking changes in consumer repos:
1. Builds the Kobber-repo
2. For each consumer repo:
   1. Installs dependencies. Example: `npm install`
   2. Runs an optional prepare-script. Example: `npm run build`
   3. Runs a test-script. Example: `npm run lint`
   4. Installs the current Kobber-code and runs the test-script again.
   5. Prints a diff between the first and second test-script-output.
