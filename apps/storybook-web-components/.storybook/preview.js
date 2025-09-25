import "@gyldendal/kobber-base/themes/default/tokens.css";
import "@gyldendal/kobber-base/themes/dark/tokens.css";
import theme from "./managerTheme";
import { html } from "lit-html";

const themes = [{ value: 'kobber-theme-default', title: 'Light' }, { value: 'kobber-theme-dark', title: 'Dark' } ];

/** @type { import('@storybook/web-components-vite').Preview } */ const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ["*", "In development 🔵", "kobber.gyldendal.no", "GU"],
      },
    },
    docs: {
      theme: theme,
      source: {
        language: "html",
        excludeDecorators: true,
      }
    },
  },
  // theme addon 👇
  globalTypes: {
    theme: {
      description: "Theme",
      defaultValue: themes[0].value,
      toolbar: {
        icon: "edit",
        // Array of plain string values or MenuItem shape (see below)
        items: themes,
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (story, context) => html`<div class=${context.globals.theme}>${story()}</div>`,
  ],
  //👇 Enables auto-generated documentation for all stories
  tags: ["autodocs"],
};

export default preview;
