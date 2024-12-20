import { textHighlightStyles } from "./text/text-highlight/TextHighlight.styles";
import { textWrapperName } from "./text/text-wrapper/TextWrapper.core";
import { textWrapperStyles } from "./text/text-wrapper/TextWrapper.styles";
import { buttonName } from "./button/Button.core";
import { buttonStyles } from "./button/Button.styles";
import { textHighlightName } from "./text/text-highlight/TextHighlight.core";

export const cssModules = [
  {
    id: buttonName,
    styles: [buttonStyles().cssText],
  },
  {
    id: textWrapperName,
    styles: [textWrapperStyles().cssText],
  },
  {
    id: textHighlightName,
    styles: [textHighlightStyles().cssText],
  },
];
