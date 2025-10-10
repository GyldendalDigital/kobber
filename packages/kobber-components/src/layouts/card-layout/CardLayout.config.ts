const layout = {
  contentMaxWidth: 1344,
  gap: {
    "8-16": "clamp(0.5rem, calc(0.38rem + 0.63vw), 1rem)",
    "8-96": "clamp(0.5rem, calc(-0.88rem + 6.88vw), 6rem)",
  },
};

export const validMaxColumns = [4, 6];

export const maxInnerWidth = layout.contentMaxWidth + 32;

export const outerPadding = layout.gap["8-16"];

export const gap = layout.gap["8-16"];

export const minCardWidth = 208;

export const minColumnWidth = `calc(${minCardWidth / 16}rem + ${gap})`;

export enum ValidAspectRatioHeight {
  Default = "default",
}

export const getAspectRatioHeightValue = (
  aspectRatioHeight: ValidAspectRatioHeight | string,
): number => {
  switch (aspectRatioHeight) {
    case ValidAspectRatioHeight.Default:
      return 1.15;
  }
  return Number(aspectRatioHeight);
};
