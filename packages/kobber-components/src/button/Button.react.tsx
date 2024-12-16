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

// by using variants, we can use <a className={buttonVariants.link}>
// Instead of having our own link component
// We can also use <button className={buttonVariants.primary}>

// Generate the CSS styles using the tokens

// TODO: Add correct classnames / styles
const buttonVariants = {
  main: buttonStyles.styles.main,
  supplemental: buttonStyles.styles.supplemental,
  "supplemental alt": buttonStyles.styles["supplemental alt"],
} as const;

// TODO: Check for correct props
export type ButtonProps = Pick<HTMLProps<HTMLButtonElement>, "className" | "children"> & {
  variant: ButtonVariant;
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
      <button
        ref={ref}
        className={`
          ${buttonVariants[variant]}
          ${className || ""}
        `.trim()}
        {...props}
      >
        {children}
      </button>
    );
  },
);

const style = document.createElement("style");
style.textContent = `
  ${buttonStyles.cssStatic}
  ${buttonStyles.cssVariables()}
`;
document.head.appendChild(style);

// debugging purposes - easier to find the comp in dev tools
Button.displayName = "Button";

// Exports both the component and the variants (re-useable variants for example: <a className={buttonVariants.primary}>)
// import { Button, buttonVariants } from "kobber-components";
export { Button, buttonVariants };
