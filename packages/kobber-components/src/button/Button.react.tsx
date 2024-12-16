import React from "react";
import { HTMLProps } from "react";
import {
  ButtonVariant,
  ButtonBackgroundColor,
  ButtonBorderColor,
  ButtonLevel,
  ButtonIconSettings,
} from "./Button.types";
import { buttonStyles } from "./Button.newStyles";
// by using variants, we can use <a className={buttonVariants.primary}>
// Instead of having our own link component
// We can also use <button className={buttonVariants.primary}>

// TODO: Add correct variants
type ButtonVariants = {
  primary: string;
  secondary: string;
  link: string;
};

// TODO: Add correct classnames / styles
const buttonVariants: ButtonVariants = {
  primary: `${buttonStyles.customElementName} primary`,
  secondary: `${buttonStyles.customElementName} secondary`,
  link: `${buttonStyles.customElementName} link`,
} as const;

// TODO: Check for correct props
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

// Exports both the component and the variants (re-useable variants for example: <a className={buttonVariants.primary}>)
// import { Button, buttonVariants } from "kobber-components";
export { Button, buttonVariants };
