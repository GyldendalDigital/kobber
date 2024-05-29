const minWidth = 320;

const viewportWidth = {
  small: {
    min: { type: "dimension", value: 0 },
    max: { type: "dimension", value: 640 - 1 },
  },
  medium: {
    min: { type: "dimension", value: 640 },
    max: { type: "dimension", value: 1600 - 1 },
  },
  large: {
    min: { type: "dimension", value: 1600 },
  },
};

const rem = (value: number) => value / 16;

const createFluidClamp = (min: number, max: number) => ({
  [`${min}-${max}`]: {
    type: "fluidClamp",
    value: {
      min: rem(min),
      max: rem(max),
      viewportMin: rem(minWidth),
      viewportMax: rem(viewportWidth.large.min.value),
      unit: "rem",
    },
  },
});

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
      ...createFluidClamp(4, 16),
      ...createFluidClamp(4, 8),
      ...createFluidClamp(6, 12),
      ...createFluidClamp(8, 12),
      ...createFluidClamp(8, 16),
      ...createFluidClamp(8, 24),
      ...createFluidClamp(8, 32),
      ...createFluidClamp(8, 96),
      ...createFluidClamp(16, 24),
      ...createFluidClamp(16, 32),
    },
  },
};
