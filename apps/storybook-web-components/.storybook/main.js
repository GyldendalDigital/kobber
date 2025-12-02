import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
/** @type { getAbsolutePath('@storybook/web-components-vite/package.json').StorybookConfig } */
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
  addons: [getAbsolutePath("@storybook/addon-a11y"), getAbsolutePath("@storybook/addon-docs")],
  framework: {
    name: getAbsolutePath("@storybook/web-components-vite"),
    options: {},
  },
 	typescript: {
		check: false, // speed up build times
		reactDocgen: false,
	},
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
    disableWhatsNewNotifications: true, // 👈 Disables what's new notifications
  },
  staticDirs: ["../public"], //👈 Configures the static asset folder in Storybook
};

export default config;

function getAbsolutePath(value) {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
