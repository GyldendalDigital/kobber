import { ComponentProps, forwardRef } from "react";
import { labelClassNames, LabelProps } from "./Label.core";

type LabelReactProps = {
  children: string;
  htmlFor?: string; // Important for associating label with form controls
  disabled?: boolean; // When will our label be disabled? Example: Form field?
  className?: string;
} & LabelProps &
  Omit<ComponentProps<"label">, "children">;

export const Label = forwardRef<HTMLLabelElement, LabelReactProps>(
  (
    {
      children,
      showStatusCircle,
      theme = "aubergine",
      variant = "main",
      size = "medium",
      className = "",
      disabled,
      htmlFor,
      ...props
    },
    ref,
  ) => {
    // Derive ARIA attributes based on props
    const ariaDisabled = disabled ? "true" : undefined;
    const _label = props["aria-label"];

    return (
      <label
        ref={ref}
        {...props}
        className={[
          className,
          ...labelClassNames({ showStatusCircle, theme, variant, size }),
          disabled ? "kobber-label--disabled" : "",
        ].join(" ")}
        aria-label={_label}
        aria-disabled={ariaDisabled}
        htmlFor={htmlFor}
      >
        {showStatusCircle && <div className="status-circle"></div>}
        {children}
      </label>
    );
  },
);

Label.displayName = "Kobber-label";
