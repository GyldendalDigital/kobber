import { forwardRef, HTMLProps } from "react";
import { textLinkStyles } from "./TextLink.styles";
import { textLinkName, TextLinkProps } from "./TextLink.core";
import { isExternalLink } from "../../utils/stringUtils";

type Props = TextLinkProps & HTMLProps<HTMLAnchorElement>;

export const TextLink = forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const { children, className, target: initialTarget, ...rest } = props;
  const isExternal = isExternalLink(props.href);
  const target = initialTarget || (isExternal ? "_blank" : undefined);
  return (
    <>
      <style
        href={textLinkName}
        precedence="medium"
        dangerouslySetInnerHTML={{ __html: textLinkStyles.cssText }}
      ></style>
      <a {...rest} ref={ref} className={[textLinkName, className].join(" ")} target={target}>
        {children}
      </a>
    </>
  );
});
