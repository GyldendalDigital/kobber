import React, { HTMLProps } from "react";
import { headingName, headingStyles } from "./Heading.styles";

type Props = HTMLProps<HTMLHeadingElement>;

export const Heading = React.forwardRef<HTMLHeadingElement, Props>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <>
      {/* @ts-ignore */}
      <style href={headingName} precedence="medium">
        {headingStyles.cssText}
      </style>
      <h1 {...rest} ref={ref} className={[className, headingName].join(" ")}>
        {children}
      </h1>
    </>
  );
});
