import { ComponentProps, forwardRef } from "react";
import { badgeIconClassNames, badgeIconName, BadgeIconProps } from "./BadgeIcon.core";
import { badgeIconStyles } from "./BadgeIcon.styles";

type BadgeIConReactProps = {
  children: string;
  className?: string;
} & BadgeIconProps &
  Omit<ComponentProps<"div">, "children">;

export const BadgeIcon = forwardRef<HTMLDivElement, BadgeIConReactProps>(
  ({ children, theme = "nature", variant = "main", size = "medium", className = "", ...props }) => {
    return (
      <>
        <style
          href={badgeIconName}
          precedence="medium"
          dangerouslySetInnerHTML={{ __html: badgeIconStyles.cssText }}
        ></style>
        <div {...props} className={[className, ...badgeIconClassNames({ theme, variant, size })].join(" ")}>
          {children}
        </div>
      </>
    );
  },
);
