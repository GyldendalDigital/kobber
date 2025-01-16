import { forwardRef, HTMLProps, ReactNode } from "react";
import { listItemClassNames, listItemName, ListItemProps } from "./ListItem.core";

import { listItemStyles } from "./ListItem.styles";

type Props = {
  icon?: ReactNode;
} & ListItemProps &
  HTMLProps<HTMLDivElement>;

export const ListItem = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, icon, active, ...rest } = props;
  return (
    <>
      <style
        href={listItemName}
        precedence="medium"
        dangerouslySetInnerHTML={{ __html: listItemStyles.cssText }}
      ></style>

      <div
        {...rest}
        ref={ref}
        className={[className, listItemClassNames(listItemName), active ? listItemClassNames("active") : null].join(
          " ",
        )}
        role={rest.role}
        aria-disabled={rest.disabled}
        aria-inert={rest.disabled}
      >
        <span className="text">{children}</span>
        {icon}
      </div>
    </>
  );
});
