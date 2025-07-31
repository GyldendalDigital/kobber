const layout = {
  contentMaxWidth: 1344,
  gap: {
    "8-16": "clamp(0.5rem, calc(0.38rem + 0.63vw), 1rem)",
  },
};

export const maxColumns = 4;

export const maxInnerWidth = layout.contentMaxWidth + 32;

export const outerPadding = layout.gap["8-16"];

export const gap = layout.gap["8-16"];

export const minCardWidth = 208;

export const minColumnWidth = `${minCardWidth / 16}rem`;

export const aspectRatioHeight = 1.15;
