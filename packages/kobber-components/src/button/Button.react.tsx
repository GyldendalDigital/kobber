import React from "react";
import { textHighlightFunctions } from "../../vanilla";
import { HTMLProps } from "react";

// by using variants, we can use <a className={buttonVariants.primary}>
// Instead of having our own link component
// We can also use <button className={buttonVariants.primary}>
const buttonVariants = {
  primary: "insert the classnames here",
  secondary: "insert the classnames here",
  link: "insert the classnames here",
} as const;

type ButtonProps = Pick<HTMLProps<HTMLButtonElement>, "className" | "children"> & {
  variant: keyof typeof buttonVariants;
};
// forwardRef allows passing ref through components
// allows the parent to access the actual <button> element

// {...props} allows passing through additional props example: disabled={true}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, variant, ...props }, ref) => {
  const buttonClassName = textHighlightFunctions
    .classNames({
      ...props,
      variant: "a",
    })
    .join(" ");

  return (
    <button ref={ref} className={`${buttonVariants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
});

// debugging purposes - easier to find the comp in dev tools
Button.displayName = "Button";

export { Button, buttonVariants };
