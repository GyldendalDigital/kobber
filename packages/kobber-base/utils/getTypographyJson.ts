import { Item } from "./flattenNestedTokens";
import { toCamelCase } from "./string-utils";

export const getTypographyJson = ({ path, name, styles }: Item) => ({
  [toCamelCase([...path, name])]: {
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
