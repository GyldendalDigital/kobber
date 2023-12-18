import { contentBody } from "@gyldendal/kobber-base/themes/default/typography-tokens.json";
import { style } from "@vanilla-extract/css";
import * as tokens from "@gyldendal/kobber-base/themes/default/tokens";

export const table = style({
  width: "100%",
  maxWidth: tokens.primitives.size[1024],
  borderSpacing: 0,
});

export const td = style({
  ...contentBody,
  width: "100%",
  maxWidth: 1024,
  borderSpacing: 0,
  padding: tokens.primitives.size[24],
  borderTop: `1px solid ${tokens.primitives.color.gray[300]}`,
  "&:first-child": {
    paddingLeft: `${tokens.primitives.size[32]}px`,
  },
});

export const tdNoTextBreak = style({
  whiteSpace: "nowrap",
  wordBreak: "keep-all",
});
