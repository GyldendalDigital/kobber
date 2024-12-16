import * as defaultTokens from "@gyldendal/kobber-base/themes/default/tokens.js";
import { textHighlightStyles } from "./text/text-highlight/TextHighlight.styles";
import { textWrapperStyles } from "./text/TextWrapper.styles";

export const cssModules = [
  {
    id: textWrapperStyles.customElementName,
    styles: [textWrapperStyles.cssVariables(defaultTokens).cssText, textWrapperStyles.cssStatic.cssText],
  },
  {
    id: textHighlightStyles.customElementName,
    styles: [textHighlightStyles.cssVariables(defaultTokens).cssText, textHighlightStyles.cssStatic.cssText],
  },
];
