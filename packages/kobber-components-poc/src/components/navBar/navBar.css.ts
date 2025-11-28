import * as tokens from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { style } from "@vanilla-extract/css";
import { className } from "../../cssProcessing/className";

export const root = style({
  display: "flex",
  alignItems: "center",
  gap: `var(${tokens.component["navigation-bar"]["inner-container"].gap})`,
  paddingBlock: `var(${tokens.component["navigation-bar"].padding.block.desktop})`,
  backgroundColor: `var(${tokens.component["navigation-bar"].background.color})`,

  "@media": {
    "(max-width: 600px)": {
      paddingBlock: `var(${tokens.component["navigation-bar"].padding.block.mobile})`,
    },
  },
});

export const isContextual = className("contextual", {
  backgroundColor: `var(${tokens.primitives.color.concrete[25]})`,
  padding: `var(${tokens.component["navigation-bar"].padding.block.mobile})`,
});
