import React from "react";
import { textHighlightFunctions } from "../../vanilla";
import { HTMLProps } from "react";

const buttonVariants = {
  primary: "insert the classnames here",
  secondary: "insert the classnames here",
  link: "insert the classnames here",
} as const;

type ButtonProps = Parameters<typeof textHighlightFunctions.classNames>[0] &
  Pick<HTMLProps<HTMLElement>, "className" | "children">;

// forwardRef allows passing ref through components
// allows the parent to access the actual <button> element

// {...props} allows passing through additional props example: disabled={true}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, ...props }, ref) => {
  const buttonClassName = textHighlightFunctions
    .classNames({
      ...props,
      variant: "a",
    })
    .join(" ");

  return (
    <button ref={ref} className={buttonClassName} {...props}>
      {children}
    </button>
  );
});

// debugging purposes - easier to find the comp in dev tools
Button.displayName = "Button";

export { Button, buttonVariants };
