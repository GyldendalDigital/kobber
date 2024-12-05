import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: [
    "../../../packages/kobber-components/src/**/*.stories.@(js|mjs|ts)",
    "../../../packages/kobber-icons/src/**/*.@(mdx)", // default story when storybook loads
    "../../../packages/kobber-icons/src/**/*.stories.@(js|mjs|ts)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-essentials"), // 👈 Includes docs
    getAbsolutePath("@storybook/addon-a11y"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/web-components-vite"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
    builder: "@storybook/builder-vite",
  },
  staticDirs: ["../public"], //👈 Configures the static asset folder in Storybook
};

export default config;
