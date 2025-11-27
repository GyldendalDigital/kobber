import { clsx } from "clsx";
import type { ApiComponent } from "../../core/api/types";
import * as cssCard from "./css/card.css";
import * as cssCardMedia from "./css/card-media.css";
import * as cssCardMediaLayer from "./css/card-media-layer.css";
import * as cssCardMediaWrapper from "./css/card-media-wrapper.css";
import * as cssCardTextBody from "./css/card-text-body.css";
import * as cssCardTextTitle from "./css/card-text-title.css";
import * as cssCardTextWrapper from "./css/card-text-wrapper.css";
import type { CardMediaType, CardProps } from "./state/card.core";

export const cardApi = ({ direction, disabled }: Pick<CardProps, "direction" | "disabled">) => {
  return {
    root: {
      className: clsx({
        [cssCard.card]: true,
        [cssCard.horizontal]: direction === "horizontal",
        [cssCard.vertical]: direction === "vertical",
        // NOTE(sølve): unsure if this should be handled at this level,
        // or by a css selector instead.
        [cssCard.disabled]: disabled,
      }),
    },
  } satisfies ApiComponent;
};

export const cardMediaApi = ({
  direction,
  mediaType,
}: Pick<CardProps, "direction"> & { mediaType?: CardMediaType }) => {
  const isImage = mediaType === "img" || mediaType === "picture";
  return {
    root: {
      className: clsx({
        [cssCardMedia.cardMedia]: true,
        [cssCardMedia.image]: isImage,
        [cssCardMedia.media]: !isImage,
        [cssCardMedia.horizontal]: direction === "horizontal",
        [cssCardMedia.vertical]: direction === "vertical",
      }),
    },
  } satisfies ApiComponent;
};

// !base ? (direction === "vertical" ? css.vertical : css.horizontal) : "";
export const cardMediaLayerApi = ({
  direction,
  base,
}: Pick<CardProps, "direction"> & { base?: boolean }) => {
  const layerDirection = !base ? direction : "";
  return {
    root: {
      className: clsx({
        [cssCardMediaLayer.cardMediaLayer]: true,
        [cssCardMediaLayer.horizontal]: layerDirection === "horizontal",
        [cssCardMediaLayer.vertical]: layerDirection === "vertical",
      }),
    },
  } satisfies ApiComponent;
};

export const cardMediaWrapperApi = ({ direction }: Pick<CardProps, "direction">) => {
  return {
    root: {
      className: clsx({
        [cssCardMediaWrapper.cardMediaWrapper]: true,
        [cssCardMediaWrapper.horizontal]: direction === "horizontal",
      }),
    },
  } satisfies ApiComponent;
};

export const cardTextBodyApi = () => {
  return {
    root: {
      className: clsx({
        [cssCardTextBody.cardTextBody]: true,
      }),
    },
  } satisfies ApiComponent;
};

export const cardTextTitleApi = ({
  disabled,
  active,
}: Pick<CardProps, "disabled"> & { active: boolean }) => {
  return {
    root: {
      className: clsx({
        [cssCardTextTitle.cardTextTitle]: true,
        [cssCardTextTitle.active]: !disabled && active,
      }),
    },
  } satisfies ApiComponent;
};

export const cardTextWrapperApi = ({ direction }: Pick<CardProps, "direction">) => {
  return {
    root: {
      className: clsx({
        [cssCardTextWrapper.cardTextWrapper]: true,
        [cssCardTextWrapper.horizontal]: direction === "horizontal",
      }),
    },
  } satisfies ApiComponent;
};
