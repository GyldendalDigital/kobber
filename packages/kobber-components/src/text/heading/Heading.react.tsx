import { forwardRef, HTMLProps, createElement } from "react";
import { headingStyles } from "./Heading.styles";
import { headingClassNames, headingName, HeadingProps, sanitizeHeadingLevel } from "./Heading.core";

type Props = HeadingProps & HTMLProps<HTMLElement>;

export const Heading = forwardRef<HTMLElement, Props>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <>
      <style href={headingName} precedence="medium" dangerouslySetInnerHTML={{ __html: headingStyles.cssText }}></style>
      <HeadingTag {...rest} ref={ref} className={[className, ...headingClassNames(rest)].join(" ")}>
        {children}
      </HeadingTag>
    </>
  );
});

const HeadingTag = ({ level, children, ...props }: Props) => {
  return createElement(sanitizeHeadingLevel(level), props, children);
};
