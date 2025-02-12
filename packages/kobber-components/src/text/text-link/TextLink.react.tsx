import { forwardRef, HTMLProps } from "react";
import { textLinkStyles } from "./TextLink.styles";
import { textLinkName, TextLinkProps } from "./TextLink.core";
import { isExternalLink } from "../../utils/stringUtilts";

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
        {/* TODO: react icons */}
        {isExternal && (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_258_9)">
              <path
                d="M17.0713 16.1874C16.9836 16.2741 16.8722 16.333 16.7512 16.3566C16.6301 16.3803 16.5047 16.3677 16.3908 16.3205C16.2769 16.2732 16.1794 16.1934 16.1106 16.091C16.0418 15.9886 16.0048 15.8682 16.0042 15.7448L16.0042 4.87892L3.81244 17.0707C3.6953 17.1879 3.53644 17.2537 3.37079 17.2537C3.20514 17.2537 3.04627 17.1879 2.92914 17.0707C2.81201 16.9536 2.7462 16.7947 2.7462 16.6291C2.7462 16.4634 2.81201 16.3046 2.92914 16.1874L15.1204 3.99622L4.25444 3.99626C4.1723 3.99657 4.09092 3.98061 4.01499 3.94929C3.93906 3.91796 3.87009 3.8719 3.81207 3.81377C3.75405 3.75564 3.70812 3.68658 3.67694 3.61059C3.64576 3.53461 3.62995 3.4532 3.63041 3.37106C3.62983 3.2043 3.69523 3.04697 3.81309 2.92912C3.93094 2.81127 4.08827 2.74586 4.25503 2.74645L16.6294 2.74639C16.712 2.74624 16.7938 2.76267 16.8699 2.79471L16.8911 2.80414C17.0264 2.86512 17.1347 2.97347 17.1957 3.10878L17.2016 3.12175C17.2361 3.20075 17.2539 3.28599 17.2541 3.37218L17.254 15.7454C17.2544 15.8275 17.2384 15.9089 17.2071 15.9847C17.1757 16.0606 17.1296 16.1295 17.0713 16.1874Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_258_9">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      </a>
    </>
  );
});
