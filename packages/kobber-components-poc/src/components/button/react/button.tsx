import type React from "react";
import type {
  CollectionType,
  LevelType,
  PurposeType,
  ToneType,
} from "../types";
import { buttonApi, buttonContainerApi } from "../index.api";

export interface ButtonType
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  collection?: CollectionType;
  purpose?: PurposeType;
  level?: LevelType;
  tone?: ToneType;
}

export const Button: React.FC<ButtonType> = ({
  collection,
  purpose,
  level,
  tone,
  children,
  className = "",
  ...props
}) => {
  const buttonCss = buttonApi(collection, purpose, level, tone);
  const buttonContainerCss = buttonContainerApi().root.className;
  const classes = `${buttonCss.root.className} ${className}`;

  return (
    <button className={classes} {...props}>
      <div className={buttonContainerCss}>{children}</div>
    </button>
  );
};
