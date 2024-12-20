import React, { HTMLProps } from "react";
import { textWrapperName } from "./TextWrapper.core";
import { textWrapperStyles } from "./TextWrapper.styles";

type Props = HTMLProps<HTMLDivElement>;

export const TextWrapper = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <>
      {/* @ts-ignore */}
      <style href={textWrapperName} precedence="medium">
        {textWrapperStyles().cssText}
      </style>
      <div {...rest} ref={ref} className={[className, textWrapperName].join(" ")}>
        {children}
      </div>
    </>
  );
});
