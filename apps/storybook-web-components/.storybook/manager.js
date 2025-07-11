import { addons } from "storybook/manager-api";
import kobberTheme from "./kobberTheme";

/** Options: https://storybook.js.org/docs/configure/user-interface/features-and-behavior */
addons.setConfig({
  theme: kobberTheme,
  navSize: 250,
  bottomPanelHeight: 250,
  enableShortcuts: false,
  showToolbar: false,
});
