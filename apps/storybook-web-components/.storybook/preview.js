import "@gyldendal/kobber-base/themes/default/tokens.css";
import "@gyldendal/kobber-base/themes/dark/tokens.css";
import "./inter.css";

/** @type { import('@storybook/web-components').Preview } */ const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        date: /Date$/,
      },
    },
    layout: "centered",
  },
  // theme addon 👇
  globalTypes: {
    theme: {
      description: "Theme",
      defaultValue: "kobber-theme-default",
      toolbar: {
        icon: "edit",
        // Array of plain string values or MenuItem shape (see below)
        items: ["kobber-theme-default", "kobber-theme-dark"],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const story = Story();
      if (story instanceof HTMLElement)
        story.classList.add(context.globals.theme || "kobber-theme-default");
      return story;
    },
  ],
};

export default preview;
