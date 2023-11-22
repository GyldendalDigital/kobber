import { Named, Transform } from "style-dictionary";

export const pxToRem: Named<Transform> = {
  name: "pxToRem",
  type: "value",
  matcher: (token) => {
    console.log("token", token.path[0], "=>", token.attributes?.category);
    if (token.path[0] === "primitives") {
      console.log(token);
    }
    return token.path[0] === "primitives" && token.type === "dimension";
  },
  transformer: (token) => {
    const value = parseFloat(token.value);
    return !isNaN(value) ? `${value / 16}rem` : value;
  },
};
