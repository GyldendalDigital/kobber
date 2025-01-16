import { forwardRef, HTMLProps } from "react";
import { textHighlightStyles } from "./TextHighlight.styles";
import { textHighlightClassNames, textHighlightName, TextHighlightProps } from "./TextHighlight.core";

type Props = TextHighlightProps & HTMLProps<HTMLSpanElement>;

export const TextHighlight = forwardRef<HTMLSpanElement, Props>((props, ref) => {
  const { color, children, className, ...rest } = props;
  return (
    <>
      <style
        href={textHighlightName}
        precedence="medium"
        dangerouslySetInnerHTML={{ __html: textHighlightStyles.cssText }}
      ></style>
      <span {...rest} ref={ref} className={[className, ...textHighlightClassNames({ color })].join(" ")}>
        {children}
      </span>
    </>
  );
});
