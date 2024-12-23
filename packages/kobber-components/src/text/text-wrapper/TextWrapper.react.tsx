import React, { HTMLProps } from "react";
import { textWrapperName, textWrapperStyles } from "./TextWrapper.styles";

type Props = HTMLProps<HTMLDivElement>;

export const TextWrapper = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <>
      <style
        // @ts-ignore
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
