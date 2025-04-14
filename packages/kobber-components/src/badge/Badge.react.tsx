import { ComponentProps, forwardRef } from "react";
import { badgeClassNames, badgeName, BadgeProps } from "./Badge.core";
import { badgeStyles } from "./Badge.styles";
type BadgeReactProps = {
  children: string;
  className?: string;
} & BadgeProps &
  Omit<ComponentProps<"div">, "children">;

export const Badge = forwardRef<HTMLDivElement, BadgeReactProps>(
  (
    { children, showStatusCircle, theme = "aubergine", variant = "main", size = "medium", className = "", ...props },
    ref,
  ) => {
    return (
      <>
        <style href={badgeName} precedence="medium" dangerouslySetInnerHTML={{ __html: badgeStyles.cssText }}></style>
        <div
          {...props}
          ref={ref}
          className={[className, ...badgeClassNames({ showStatusCircle, theme, variant, size })].join(" ")}
        >
          {showStatusCircle && <div className="status-circle"></div>}
          {children}
        </div>
      </>
    );
  },
);

Badge.displayName = "Kobber-badge";
