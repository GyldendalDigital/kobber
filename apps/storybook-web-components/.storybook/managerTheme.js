import { create } from "storybook/theming";
import { semantics } from "@gyldendal/kobber-base/themes/default/tokens.js";

const textColor = semantics.color.identity.base["aubergine-750"]
const backgroundColor = semantics.color.identity.base["aubergine-25"]
const white = "#ffffff";

/** Theming docs: https://storybook.js.org/docs/configure/user-interface/theming */
export default create({
    base: "light",
    fontBase: "pp-mori, ui-sans-serif, system-ui, sans-serif",
    brandTitle: "Kobber",

    colorPrimary: textColor,
    colorSecondary: backgroundColor,

    appBg: backgroundColor,
    appContentBg: white,
    appPreviewBg: white,
    appBorderRadius: 5,

    barTextColor: textColor,
    barSelectedColor: textColor,
    barHoverColor: textColor,
    barBg: white,
    buttonBg: backgroundColor,
    
    textColor: textColor,
    textInverseColor: textColor,
	})
