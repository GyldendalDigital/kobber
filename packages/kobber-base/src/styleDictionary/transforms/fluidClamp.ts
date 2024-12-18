import type { Transform, TransformedToken } from "style-dictionary/types";
import { fluidClamp } from "../../utils/fluid";

const isClamp = (token: TransformedToken): token is TokenClampTransformedToken =>
  (token?.$type === "fluidClamp" || token?.type === "fluidClamp") &&
  typeof token.value === "object" &&
  "min" in token.value &&
  "max" in token.value &&
  "viewportMin" in token.value &&
  "viewportMax" in token.value &&
  "unit" in token.value;

interface TokenClampTransformedToken extends TransformedToken {
  value: TokenClamp;
}

interface TokenClamp {
  min: number;
  max: number;
  viewportMin: number;
  viewportMax: number;
  unit: string;
}

export const fluidClampTransform: Transform = {
  name: "fluidClamp",
  type: "value",
  transitive: true,
  filter: isClamp,
  transform: token => {
    if (!isClamp(token)) {
      return token.value;
    }

    const { value } = token;

    return fluidClamp(value.min, value.max, value.viewportMin, value.viewportMax, value.unit);
  },
};
