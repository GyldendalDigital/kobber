import { Item } from "./flattenNestedTokens";
import { changeCaseTo } from "../../utilities";

export const getTypographyJson = ({ path, name, styles }: Item) => ({
  [changeCaseTo([...path, name], "camel")]: {
    fontSize: `${styles.fontSize / 16}rem`,
    textDecoration: styles.textDecoration,
    fontFamily: styles.fontFamily,
    fontWeight: styles.fontWeight,
    fontStyle: styles.fontStyle,
    fontStretch: styles.fontStretch,
    letterSpacing: styles.letterSpacing,
    lineHeight: styles.lineHeight / styles.fontSize,
  },
});
