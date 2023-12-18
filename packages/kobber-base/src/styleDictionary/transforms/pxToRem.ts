import { Named, Transform } from "style-dictionary";

export const pxToRemTransform: Named<Transform> = {
  name: "pxToRem",
  type: "value",
  matcher: (token) =>
    token.path[0] === "primitives" && token.type === "dimension",
  transformer: (token) => {
    const value = parseFloat(token.value);
    return !isNaN(value) ? `${value / 16}rem` : value;
  },
};
