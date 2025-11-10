import React, { ReactHTMLElement } from "react";
import * as css from "./paper.module.css";

export interface PaperProps extends React.HTMLAttributes<HTMLElement> {
  elevation?: number;
  rounded?: boolean;
  element?: string;
}

export const Paper: React.FC<PaperProps> = ({
  rounded,
  elevation,
  element,
  className,
  ...props
}): any => {
  let classes = css.uiPaper;
  if (elevation) classes += ` ui-paper--elevation-${elevation}`;
  if (className) classes += ` ${className}`;

  if (element) {
    return React.createElement(element, { className: classes, ...props });
  } else {
    return React.createElement("div", { className: classes, ...props });
  }

  //return <div {...props} className={classes} />;
};
