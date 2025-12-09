import type React from "react";
import { type ButtonType, buttonApi, buttonContainerApi } from "../index.api";

export interface Props extends ButtonType, React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<Props> = ({
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
