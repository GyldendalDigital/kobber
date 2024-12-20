import React, { HTMLProps } from "react";
import { textHighlightStyles } from "./TextHighlight.styles";
import { textHighlightClassNames, textHighlightName, TextHighlightProps } from "./TextHighlight.core";

type Props = TextHighlightProps & HTMLProps<HTMLSpanElement>;

export const TextHighlight = React.forwardRef<HTMLSpanElement, Props>((props, ref) => {
  const { color, children, className, ...rest } = props;
  return (
    <>
      {/* @ts-ignore */}
      <style href={textHighlightName} precedence="medium">
        {textHighlightStyles().cssText}
      </style>
      <span {...rest} ref={ref} className={[className, ...textHighlightClassNames({ color })].join(" ")}>
        {children}
      </span>
    </>
  );
});
