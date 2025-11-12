import React from "react";
import * as css from "@gyldendal/kobber-components-core/card/card.module.css";
import { useCardContext } from "./react/card-context";

export interface CardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  mediaType?: "img" | "video" | "audio" | "picture" | "iframe";
}

export const CardMedia: React.FC<CardMediaProps> = ({
  mediaType = "img",
  children,
  ...props
}) => {
  const classes = `${css.uiCardMedia} ${
    mediaType === "img" || mediaType === "picture" ? css.image : css.media
  }`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export const CardMediaWrapper: React.FC<any> = ({ children, ...props }) => {
  const classes = css.uiCardMediaWrapper;
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

interface CardMediaLayerProps extends React.HTMLAttributes<HTMLDivElement> {
  base?: boolean;
  direction?: "vertical" | "horizontal";
}

export const CardMediaLayer: React.FC<CardMediaLayerProps> = ({
  base,
  direction,
  children,
  ...props
}) => {
  const classes = `${css.uiCardMediaLayer} ${
    !base
      ? direction === "vertical"
        ? css.verticalPadding
        : css.horizontalPadding
      : ""
  }`;
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export const CardTextWrapper: React.FC<any> = ({ children, ...props }) => {
  const classes = css.uiCardTextWrapper;
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export const CardTextTitle: React.FC<any> = ({ children, ...props }) => {
  const { api } = useCardContext();
  const classes = `${css.cardTextTitle} ${
    api && api().active ? css.active : css.inactive
  }`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export const CardTextBody: React.FC<any> = ({ children, ...props }) => {
  const classes = `ui-card-text-body`;
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
