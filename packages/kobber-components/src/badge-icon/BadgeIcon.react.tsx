import { ComponentProps, forwardRef } from "react";
import { badgeIconClassNames, badgeIconName, BadgeIconProps } from "./BadgeIcon.core";
import { badgeIconStyles } from "./BadgeIcon.styles";

type BadgeIConReactProps = {
  children: string;
  disabled?: boolean;
  className?: string;
} & BadgeIconProps &
  Omit<ComponentProps<"div">, "children">;

export const BadgeIcon = forwardRef<HTMLDivElement, BadgeIConReactProps>(
  ({ children, theme = "nature", variant = "main", size = "medium", disabled, className = "", ...props }) => {
    // Derive ARIA attributes based on props
    const ariaDisabled = disabled ? "true" : undefined;
    const _label = props["aria-label"];

    return (
      <>
        <style
          href={badgeIconName}
          precedence="medium"
          dangerouslySetInnerHTML={{ __html: badgeIconStyles.cssText }}
        ></style>
        <div
          {...props}
          className={[className, ...badgeIconClassNames({ theme, variant, size })].join(" ")}
          aria-label={_label}
          aria-disabled={ariaDisabled}
        >
          {children}
        </div>
      </>
    );
  },
);
