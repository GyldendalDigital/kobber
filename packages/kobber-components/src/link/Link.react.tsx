import { createElement, forwardRef, HTMLProps, ReactNode } from "react";
import { linkStyles } from "./Link.styles";
import { isButton, linkClassNames, linkName, LinkProps } from "./Link.core";
import { isExternalLink } from "../utils/stringUtils";

type Props = {
  icon?: ReactNode;
} & LinkProps &
  HTMLProps<HTMLAnchorElement>;

export const Link = forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const { children, className, target: initialTarget, icon, ...rest } = props;
  const hasIcon = !!icon;
  const iconOnly = !!icon && !children;
  const isExternal = isExternalLink(props.href);
  const target = initialTarget || (isExternal ? "_blank" : undefined);

  return (
    <>
      <style href={linkName} precedence="medium" dangerouslySetInnerHTML={{ __html: linkStyles.cssText }}></style>
      <LinkTag
        {...rest}
        ref={ref}
        className={[className, ...linkClassNames({ ...rest, hasIcon, iconOnly })].join(" ")}
        target={target}
      >
        {children}
        {icon}
      </LinkTag>
    </>
  );
});

const LinkTag = ({ children, ...props }: Props) => {
  return createElement(isButton(props.href, props.onClick) ? "button" : "a", props, children);
};
