import { layout } from "@gyldendal/kobber-base/themes/default/tokens";

export const validMaxColumns = [4, 6];

export const maxInnerWidth = layout.contentMaxWidth + 32;

export const outerPadding = layout.gap["8-16"];

export const gap = layout.gap["8-16"];

export const minCardWidth = 208;

export const minColumnWidth = `calc(${minCardWidth / 16}rem + ${gap})`;

export const aspectRatioHeight = 1.15;
