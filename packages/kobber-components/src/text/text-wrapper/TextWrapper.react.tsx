import { forwardRef, HTMLProps } from "react";
import { textWrapperName, textWrapperStyles } from "./TextWrapper.styles";

type Props = HTMLProps<HTMLDivElement>;

export const TextWrapper = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <>
      <style
        href={textWrapperName}
        precedence="medium"
        dangerouslySetInnerHTML={{ __html: textWrapperStyles.cssText }}
      ></style>
      <div {...rest} ref={ref} className={[className, textWrapperName].join(" ")}>
        {children}
      </div>
    </>
  );
});
