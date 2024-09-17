# Kobber - Gyldendals designsystem

## Run locally

Download yarn

```
corepack yarn
```

Then, run `yarn dev` for local development, or the other scripts in package.json.

Pull requests are deployed in Cloudflare. To view build logs, make your own Cloudflare user with your Gyldendal username, activate 2FA, and request an invitation to cloudflare@gyldendal.no. (This may take a day.)

### Storybook

Storybook [opens two instances](https://github.com/GyldendalDigital/kobber/pull/6) - one for react components, and one for web components.

Storybook for web components lets you choose between kobber-theme-default and kobber-theme-dark, but for now the themes are identical.

## 📦 Packages

[@gyldendal/kobber-base](./packages/kobber-base/README.md)
<br />
[@gyldendal/kobber-components](./packages/kobber-components/README.md)
<br />
[@gyldendal/kobber-scene](./packages/kobber-scene/README.md)

## 🙏 Credits

Big thanks to the [Aksel team](https://aksel.nav.no) at NAV for meeting with us, and answering all our questions.

Also thanks to [Vy](https://spor.vy.no) for unknowingly helping us by having an open source design system.
