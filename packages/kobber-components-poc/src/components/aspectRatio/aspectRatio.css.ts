import { className } from "../../cssProcessing/className";

export const container = className("container", {
  display: "block",
  position: "relative",
});

export const absolute = className("absolute", {
  display: "grid",
  position: "absolute",
  inset: 0,
});
