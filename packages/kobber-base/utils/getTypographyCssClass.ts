export const getTypographyCssClass = (className: string, styles: any) => `
.${className} {
  font-size: ${styles.fontSize}px;
  text-decoration: ${styles.textDecoration};
  font-family: ${styles.fontFamily};
  font-weight: ${styles.fontWeight};
  font-style: ${styles.fontStyle};
  font-stretch: ${styles.fontStretch};
  letter-spacing: ${styles.letterSpacing};
  line-height: ${styles.lineHeight / styles.fontSize};
  margin-bottom: ${styles.paragraphSpacing}px;
}
`;
