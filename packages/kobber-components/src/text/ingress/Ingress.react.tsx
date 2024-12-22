import React, { HTMLProps } from "react";
import { ingressName, ingressStyles } from "./Ingress.styles";

type Props = HTMLProps<HTMLDivElement>;

export const Ingress = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <>
      {/* @ts-ignore */}
      <style href={ingressName} precedence="medium" dangerouslySetInnerHTML={{ __html: ingressStyles.cssText }}></style>
      <div {...rest} ref={ref} className={[className, ingressName].join(" ")}>
        {children}
      </div>
    </>
  );
});
