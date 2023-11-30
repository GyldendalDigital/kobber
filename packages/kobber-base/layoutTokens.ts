const minWidth = 320;

const viewportWidth = {
  small: {
    min: { type: "dimension", value: 0 },
    max: { type: "dimension", value: 640 - 1 },
  },
  medium: {
    min: { type: "dimension", value: 640 },
    max: { type: "dimension", value: 1280 - 1 },
  },
  large: {
    min: { type: "dimension", value: 1280 },
  },
};

const rem = (value: number) => value / 16;

export const layoutTokens = {
  layout: {
    minWidth: { type: "dimension", value: minWidth },
    maxWidth: { type: "dimension", value: 1280 },
    viewportWidth,
    padding: {
      min: { type: "dimension", value: 4 },
      max: { type: "dimension", value: 16 },
    },
    gap: {
      "4-16": {
        type: "fluidClamp",
        value: {
          min: rem(4),
          max: rem(16),
          viewportMin: rem(minWidth),
          viewportMax: rem(viewportWidth.large.min.value),
          unit: "rem",
        },
      },
    },
  },
};
