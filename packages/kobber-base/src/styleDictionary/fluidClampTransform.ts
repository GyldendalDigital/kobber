import StyleDictionary, { Named, Transform } from "style-dictionary";
import { fluidClamp } from "../utils/fluid";

const isClamp = (token: StyleDictionary.TransformedToken) =>
  (token?.$type === "fluidClamp" || token?.type === "fluidClamp") &&
  typeof token.value === "object" &&
  "min" in token.value &&
  "max" in token.value &&
  "viewportMin" in token.value &&
  "viewportMax" in token.value &&
  "unit" in token.value;

type TokenClamp = {
  min: number;
  max: number;
  viewportMin: number;
  viewportMax: number;
  unit: string;
};

export const fluidClampTransform: Named<Transform> = {
  name: "fluidClamp",
  type: "value",
  transitive: true,
  matcher: isClamp,
  transformer: ({ value }: { value: TokenClamp }) => {
    return fluidClamp(
      value.min,
      value.max,
      value.viewportMin,
      value.viewportMax,
      value.unit
    );
  },
};
