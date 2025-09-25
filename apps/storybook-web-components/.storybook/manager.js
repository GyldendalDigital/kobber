import { addons } from "storybook/manager-api";
import theme from "./managerTheme";

/** Config docs: https://storybook.js.org/docs/configure/user-interface/features-and-behavior */
addons.setConfig({
	enableShortcuts: false,
	initialActive: "sidebar",
	isFullscreen: false,
	panelPosition: "bottom",
	selectedPanel: "storybook/source-loader/panel",
	showNav: true,
	showPanel: true,
	showToolbar: true,
  navSize: 250,
  bottomPanelHeight: 250,
	theme: theme,
	toolbar: {
		"storybook/a11y/panel": { hidden: true }, // Vision simulation
		"storybook/background": { hidden: true }, // Dark mode
		"storybook/measure-addon/tool": { hidden: false }, // Ruler
		"storybook/outline": { hidden: true }, // Outlines
		"storybook/source-loader/panel": { hidden: false }, // Code
		"storybook/viewport": { hidden: false }, // Resize
		copy: { hidden: true }, // Copy link to canvas only
		eject: { hidden: false }, // Open canvas only in new window
		fullscreen: { hidden: false }, // Hide sidebar
		remount: { hidden: true }, // Same as reload
		title: { hidden: true },
		zoom: { hidden: true },
	},
});
