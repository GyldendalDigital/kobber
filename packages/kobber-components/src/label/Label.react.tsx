import { ComponentProps, forwardRef } from "react";
import { labelClassNames, labelName, LabelProps } from "./Label.core";
import { labelStyles } from "./Label.styles";
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
    // Derive ARIA attributes based on prop
    const ariaDisabled = disabled ? "true" : undefined;
    const _label = props["aria-label"];

    return (
      <>
        <style href={labelName} precedence="medium" dangerouslySetInnerHTML={{ __html: labelStyles.cssText }}></style>
        <label
          ref={ref}
          {...props}
          className={[className, ...labelClassNames({ showStatusCircle, theme, variant, size })].join(" ")}
          aria-label={_label}
          aria-disabled={ariaDisabled}
          htmlFor={htmlFor}
        >
          {showStatusCircle && <div className="status-circle"></div>}
          {children}
        </label>
      </>
    );
  },
);

Label.displayName = "Kobber-label";
