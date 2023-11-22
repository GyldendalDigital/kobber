export const getTypographyCssClass = (className: string, styles: any) =>
  removeEmptyLines(`
.${className} {
  font-size: ${styles.fontSize / 16}rem;
  text-decoration: ${styles.textDecoration};
  font-family: ${styles.fontFamily};
  font-weight: ${styles.fontWeight};
  font-style: ${styles.fontStyle};
  font-stretch: ${styles.fontStretch};
  ${styles.letterSpacing ? `letter-spacing: ${styles.letterSpacing};` : ""}
  line-height: ${styles.lineHeight / styles.fontSize};
  margin-bottom: ${styles.paragraphSpacing ?? 0}px;
}
`);

const removeEmptyLines = (string: string) => string.replace(/^\s*\n/gm, "");
