import React, { HTMLProps } from "react";
import { listStyles } from "./List.styles";
import { ListProps, listClassNames, listName } from "./List.core";

type Props = ListProps & HTMLProps<HTMLDivElement>;

export const List = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, orientation, ...rest } = props;
  return (
    <>
      <style
        // @ts-ignore
        href={listName}
        precedence="medium"
        dangerouslySetInnerHTML={{ __html: listStyles.cssText }}
      ></style>

      <div
        {...rest}
        ref={ref}
        className={[className, listClassNames(listName)].join(" ")}
        role={rest.role ?? "menubar"}
        aria-orientation={orientation}
        tabIndex={-1}
      >
        {children}
      </div>
    </>
  );
});
