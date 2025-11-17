import { style } from "@vanilla-extract/css";

export const cardMediaWrapper = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridAutoRows: "1fr",
});

export const horizontal = style({
  maxWidth: "34%",
});
