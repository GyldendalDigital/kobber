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

const fluidClampMin = 4;

const fluidClampMax = 96;

const fluidClampStep = 4;

const createGaps = () => {
  let gaps = {};
  for (let from = fluidClampMin; from <= fluidClampMax; from += fluidClampStep) {
    for (let to = from + fluidClampStep; to <= fluidClampMax; to += fluidClampStep) {
      gaps = { ...gaps, ...createFluidClamp(from, to) };
    }
  }
  return gaps;
};

export const additionalTokens = {
  layout: {
    minWidth: { type: "dimension", value: minWidth },
    maxWidth: { type: "dimension", value: 1280 },
    viewportWidth,
    padding: {
      min: { type: "dimension", value: 4 },
      max: { type: "dimension", value: 16 },
    },
    gap: createGaps(),
    fixedPageHeaderMaxWidth: { type: "dimension", value: 1472 },
    contentMaxWidth: { type: "dimension", value: 1344 },
  },
};
