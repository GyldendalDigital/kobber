import React, { HTMLProps, ReactNode } from "react";
import { buttonStyles } from "./Button.styles";
import { buttonClassNames, ButtonComputedProps, buttonName, ButtonProps } from "./Button.core";

type Props = {
  icon?: ReactNode;
} & ButtonProps &
  HTMLProps<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { color, variant, level, iconFirst, className, children, type, icon, ...rest } = props;
  const hasIcon = !!icon;
  const iconOnly = !!icon && !children;
  const isLink = !!props.href && !props.disabled;

  return (
    <>
      {/* hoists the style element into <head> and deduplicates it */}
      {/* https://react.dev/reference/react-dom/components/style#rendering-an-inline-css-stylesheet */}
      {/* have to use dangerousHtml because of encoding, changing ie. & into &amp; */}
      {/* https://github.com/facebook/react/issues/13838#issuecomment-675270594 */}
      {/* @ts-ignore */}
      <style href={buttonName} precedence="medium" dangerouslySetInnerHTML={{ __html: buttonStyles.cssText }}></style>
      <ButtonTag
        {...rest}
        ref={ref}
        isLink={isLink}
        className={[className, ...buttonClassNames({ ...props, hasIcon, iconOnly })].join(" ")}
      >
        {children}
        {icon}
      </ButtonTag>
    </>
  );
});

const ButtonTag = ({ isLink, children, ...props }: Props & ButtonComputedProps) => {
  return React.createElement(isLink ? "a" : "button", props, children);
};
