import React from "react";
import { HTMLProps } from "react";
import {
  ButtonVariant,
  ButtonBackgroundColor,
  ButtonBorderColor,
  ButtonLevel,
  ButtonIconSettings,
} from "./Button.types";
// by using variants, we can use <a className={buttonVariants.primary}>
// Instead of having our own link component
// We can also use <button className={buttonVariants.primary}>

type ButtonVariants = {
  primary: string;
  secondary: string;
  link: string;
};
const buttonVariants: ButtonVariants = {
  primary: "insert the classnames here",
  secondary: "insert the classnames here",
  link: "insert the classnames here",
} as const;

type ButtonProps = Pick<HTMLProps<HTMLButtonElement>, "className" | "children"> & {
  variant: keyof ButtonVariants;
  backgroundColor?: ButtonBackgroundColor;
  borderColor?: ButtonBorderColor;
  level?: ButtonLevel;
  iconSettings?: ButtonIconSettings;
};

// forwardRef allows passing ref through components
// allows the parent to access the actual <button> element

// {...props} allows passing through additional props example: disabled={true}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, backgroundColor, borderColor, level, iconSettings = "none", ...props }, ref) => {
    return (
      <button ref={ref} className={`${buttonVariants[variant]} ${className}`} {...props}>
        {children}
      </button>
    );
  },
);

// debugging purposes - easier to find the comp in dev tools
Button.displayName = "Button";

export { Button, buttonVariants };
