const cssVariableName = "--fluid-horizontal-padding";

const lerp = (start: number, end: number, amount: number) =>
  (1 - amount) * start + amount * end;

const getPercentageWithin = (value: number, from: number, to: number) =>
  (value - from) / (to - from);

const smallSceneWidth = 320;

const mediumSceneWidth = 1024;

const largeSceneWidth = 3840;

export const getFluidHorizontalPadding = (
  currentSceneWidth: number,
): [string, number] => {
  const value =
    currentSceneWidth < mediumSceneWidth
      ? lerp(
          0,
          1,
          getPercentageWithin(
            currentSceneWidth,
            smallSceneWidth,
            mediumSceneWidth,
          ),
        )
      : lerp(
          1,
          2,
          getPercentageWithin(
            currentSceneWidth,
            mediumSceneWidth,
            largeSceneWidth,
          ),
        );
  return [cssVariableName, value];
};

export const fluidHorizontalPadding = (pixelValue: number) => {
  return `calc(var(${cssVariableName}, 1) * ${pixelValue}px)`;
};
