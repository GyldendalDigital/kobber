import { globalStyle, style } from "@vanilla-extract/css";
import { getTheme } from "../../theme";

const { tokens } = getTheme();

export const pre = style({
  margin: 0,
  fontFamily: "'Fira Code', sans-serif",
  fontSize: "1rem",
});

globalStyle(`${pre} .hljs`, {
  padding: tokens.semantic.layout.container.padding.large,
  backgroundColor: tokens.primitives.color.violet[1000],
});
