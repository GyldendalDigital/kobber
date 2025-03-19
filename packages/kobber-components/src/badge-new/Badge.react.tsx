import { ComponentProps, forwardRef } from "react";
import { badgeClassNames, badgeName, BadgeProps } from "./Badge.core";
import { badgeStyles } from "./Badge.styles";
type BadgeReactProps = {
  children: string;
  disabled?: boolean; // When will our label be disabled? Example: Form field?
  className?: string;
} & BadgeProps &
  Omit<ComponentProps<"div">, "children">;

export const Badge = forwardRef<HTMLLabelElement, BadgeReactProps>(
  (
    {
      children,
      showStatusCircle,
      theme = "aubergine",
      variant = "main",
      size = "medium",
      className = "",
      disabled,
      ...props
    },
    ref,
  ) => {
    // Derive ARIA attributes based on prop
    const ariaDisabled = disabled ? "true" : undefined;
    const _label = props["aria-label"];

    return (
      <>
        <style href={badgeName} precedence="medium" dangerouslySetInnerHTML={{ __html: badgeStyles.cssText }}></style>
        <div
          {...props}
          className={[className, ...badgeClassNames({ showStatusCircle, theme, variant, size })].join(" ")}
          aria-label={_label}
          aria-disabled={ariaDisabled}
        >
          {showStatusCircle && <div className="status-circle"></div>}
          {children}
        </div>
      </>
    );
  },
);

Badge.displayName = "Kobber-badge";
