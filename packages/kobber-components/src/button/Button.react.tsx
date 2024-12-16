import React from "react";
import { textHighlightFunctions } from "../../vanilla";
import { HTMLProps } from "react";

type ButtonProps = Parameters<typeof textHighlightFunctions.classNames>[0] &
  Pick<HTMLProps<HTMLElement>, "className" | "children">;

// forwardRef allows passing ref through components
// allows the parent to access the actual <button> element

// {...props} allows passing through additional props example: disabled={true}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, ...props }, ref) => {
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
