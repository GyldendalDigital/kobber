import type { Args } from "@storybook/web-components-vite";

export const mappedColor = (args: Args) => {
  if (args.color === "transparent") {
    return "neutral";
  }
  return args.color;
};
