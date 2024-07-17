import { layout } from "@gyldendal/kobber-base/themes/default/tokens";
import { contentMaxWidth } from "../tokens";

export const maxColumns = 4;

export const maxInnerWidth = contentMaxWidth + 32;

export const outerPadding = layout.gap["8-16"];

export const gap = layout.gap["8-16"];

export const minCardWidth = 208;

export const minColumnWidth = `calc(${minCardWidth / 16}rem + ${gap} + ${gap})`;

export const aspectRatioHeight = 1.15;
