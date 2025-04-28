import { forwardRef, HTMLProps } from "react";
import { textWrapperStyles } from "./TextWrapper.styles";
import { textWrapperClassNames, textWrapperName, TextWrapperProps } from "./TextWrapper.core";

type Props = TextWrapperProps & HTMLProps<HTMLDivElement>;

export const TextWrapper = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, fullWidth, ...rest } = props;
  return (
    <>
      <style
        href={textWrapperName}
        precedence="medium"
        dangerouslySetInnerHTML={{ __html: textWrapperStyles.cssText }}
      ></style>
      <div {...rest} ref={ref} className={[className, ...textWrapperClassNames({ fullWidth })].join(" ")}>
        {children}
      </div>
    </>
  );
});
