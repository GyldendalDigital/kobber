import type { Transform } from "style-dictionary/types";

export const pxToRemTransform: Transform = {
  name: "pxToRem",
  type: "value",
  filter: token => token.path[0] === "primitives" && token.type === "dimension",
  transform: token => {
    const value = parseFloat(token.value);
    return !isNaN(value) ? `${value / 16}rem` : value;
  },
};
