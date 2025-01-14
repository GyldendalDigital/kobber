import React, { HTMLProps } from "react";
import { linkStyles } from "./Link.styles";
import { isButton, isExternalLink, linkClassNames, linkName, LinkProps } from "./Link.core";

type Props = LinkProps & HTMLProps<HTMLAnchorElement>;

export const Link = React.forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const { children, className, target: initialTarget, extendedColor, ...rest } = props;
  const isExternal = isExternalLink(props.href);
  const target = initialTarget || (isExternal ? "_blank" : undefined);
  return (
    <>
      <style
        // @ts-ignore
        href={linkName}
        precedence="medium"
        dangerouslySetInnerHTML={{ __html: linkStyles.cssText }}
      ></style>
      <LinkTag
        {...rest}
        ref={ref}
        className={[className, ...linkClassNames({ extendedColor })].join(" ")}
        target={target}
      >
        {children}
        {/* TODO: react icons */}
        {isExternal && (
          <svg viewBox="0 0 20 20">
            <g clipPath="url(#bva)">
              <path
                fill="currentColor"
                d="M6.876 13.748a.628.628 0 0 1-.442-1.067L17.867 1.247h-4.115a.625.625 0 0 1 0-1.25h5.625a.625.625 0 0 1 .578.387l.007.022a.61.61 0 0 1 .04.216v5.625a.625.625 0 0 1-1.25 0V2.132L7.318 13.566a.626.626 0 0 1-.442.182Z"
              ></path>
              <path
                fill="currentColor"
                d="M1.876 19.998a1.877 1.877 0 0 1-1.875-1.875v-12.5a1.877 1.877 0 0 1 1.875-1.875h7.5a.625.625 0 0 1 0 1.25h-7.5a.625.625 0 0 0-.625.625v12.5c0 .345.28.625.625.625h12.5a.625.625 0 0 0 .625-.625v-7.5a.625.625 0 1 1 1.25 0v7.5a1.877 1.877 0 0 1-1.875 1.875h-12.5Z"
              ></path>
            </g>
            <defs>
              <clipPath id="bva">
                <path fill="currentColor" d="M0 0h20v20H0z"></path>
              </clipPath>
            </defs>
          </svg>
        )}
      </LinkTag>
    </>
  );
});

const LinkTag = ({ children, ...props }: Props) => {
  return React.createElement(isButton(props.href, props.onClick) ? "button" : "a", props, children);
};
