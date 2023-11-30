// TODO: Move media queries to @gyldendal/kobber-base

import { css } from "lit";
import { layout } from "@gyldendal/kobber-base/themes/default/tokens.json";

const { viewportWidth } = layout;

export const smallViewport = css`(max-width: ${viewportWidth.small.max}px)`;

export const mediumViewport = css`(min-width: ${viewportWidth.medium.min}px) and (max-width: ${viewportWidth.medium.max}px)`;

export const largeViewport = css`(min-width: ${viewportWidth.large.min}px)`;
