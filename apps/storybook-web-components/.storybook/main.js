/** @type { import('@storybook/web-components-vite').StorybookConfig } */
import { mergeConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
const config = {
  stories: [
    "../../../packages/kobber-components/src/**/introduction.@(mdx)",
    "../../../packages/kobber-components/src/**/*.@(mdx)",
    "../../../packages/kobber-components/src/**/*.stories.@(js|mjs|ts)",

    "../../../packages/kobber-components-poc/src/**/*.@(mdx)",
    "../../../packages/kobber-components-poc/src/**/*.stories.@(js|mjs|ts|tsx)",

    "../../../packages/kobber-icons/src/**/*.@(mdx)",
    "../../../packages/kobber-icons/src/**/*.stories.@(js|mjs|ts)",
  ],
  addons: ["@storybook/addon-a11y", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  typescript: {
    check: false, // speed up build times
    reactDocgen: false,
  },
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
    disableWhatsNewNotifications: true, // 👈 Disables what's new notifications
    builder: "@storybook/builder-vite",
  },
  staticDirs: ["../public"], //👈 Configures the static asset folder in Storybook

  // NOTE(sølve): Handles the use of vanilla extract
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [vanillaExtractPlugin()],
    });
  },
};

export default config;
