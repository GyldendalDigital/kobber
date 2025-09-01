import "@gyldendal/kobber-base/themes/default/tokens.css";
import "@gyldendal/kobber-base/themes/dark/tokens.css";

const themes = ["kobber-theme-default", "kobber-theme-dark"];

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
  },
  // theme addon 👇
  globalTypes: {
    theme: {
      description: "Theme",
      defaultValue: themes[0],
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
    (Story, context) => {
      const story = Story();
      // for supporting css variables
      if (story instanceof HTMLElement) {
        story.classList.add(context.globals.theme || themes[0]);
      }
      return story;
    },
  ],
  //👇 Enables auto-generated documentation for all stories
  tags: ["autodocs"],
};

export default preview;
