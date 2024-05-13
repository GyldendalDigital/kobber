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

export const additionalTokens = {
  mediaQuery: {
    small: {
      type: "string",
      value: `(max-width: ${viewportWidth.small.max.value}px)`,
    },
    medium: {
      type: "string",
      value: `(min-width: ${viewportWidth.medium.min.value}px) and (max-width: ${viewportWidth.medium.max.value}px)`,
    },
    large: {
      type: "string",
      value: `(min-width: ${viewportWidth.large.min.value}px)`,
    },
  },
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
      "4-8": {
        type: "fluidClamp",
        value: {
          min: rem(4),
          max: rem(8),
          viewportMin: rem(minWidth),
          viewportMax: rem(viewportWidth.large.min.value),
          unit: "rem",
        },
      },
      "8-16": {
        type: "fluidClamp",
        value: {
          min: rem(8),
          max: rem(16),
          viewportMin: rem(minWidth),
          viewportMax: rem(viewportWidth.large.min.value),
          unit: "rem",
        },
      },
      "8-24": {
        type: "fluidClamp",
        value: {
          min: rem(8),
          max: rem(24),
          viewportMin: rem(minWidth),
          viewportMax: rem(viewportWidth.large.min.value),
          unit: "rem",
        },
      },
      "8-32": {
        type: "fluidClamp",
        value: {
          min: rem(8),
          max: rem(32),
          viewportMin: rem(minWidth),
          viewportMax: rem(viewportWidth.large.min.value),
          unit: "rem",
        },
      },
      "6-12": {
        type: "fluidClamp",
        value: {
          min: rem(6),
          max: rem(12),
          viewportMin: rem(minWidth),
          viewportMax: rem(viewportWidth.large.min.value),
          unit: "rem",
        },
      },
      "16-32": {
        type: "fluidClamp",
        value: {
          min: rem(16),
          max: rem(32),
          viewportMin: rem(minWidth),
          viewportMax: rem(viewportWidth.large.min.value),
          unit: "rem",
        },
      },
    },
  },
};
