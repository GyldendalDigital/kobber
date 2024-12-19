import React from "react";
import { HTMLProps } from "react";
import { buttonStyles } from "./Button.styles";
import { buttonClassNames, buttonName, ButtonProps } from "./Button.core";
import { ReactNode } from "react";

type Props = {
  icon?: ReactNode;
} & ButtonProps &
  HTMLProps<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { color, variant, level, iconPosition, className, children, type, icon, ...rest } = props;
  console.log("r", children, icon);
  return (
    <>
      {/* @ts-ignore */}
      <style href={buttonName} precedence="medium">
        {buttonStyles().cssText}
      </style>
      <button
        {...rest}
        ref={ref}
        className={buttonClassNames({ ...props, hasIcon: !!icon, isIconOnly: !!icon && !children }).join(" ")}
      >
        {children}
        {icon}
      </button>
    </>
  );
});
