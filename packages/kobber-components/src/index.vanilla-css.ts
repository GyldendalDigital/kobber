import { textWrapperName, textWrapperStyles } from "./text/text-wrapper/TextWrapper.styles";
import { buttonName } from "./button/Button.core";
import { buttonStyles } from "./button/Button.styles";
import { headingName } from "./text/heading/Heading.core";
import { headingStyles } from "./text/heading/Heading.styles";

export const cssModules = [
  {
    id: buttonName,
    styles: [buttonStyles.cssText],
  },
  {
    id: textWrapperName,
    styles: [textWrapperStyles.cssText],
  },
  {
    id: headingName,
    styles: [headingStyles.cssText],
  },
];
