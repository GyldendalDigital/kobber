import { forwardRef, HTMLProps, ReactNode, createElement } from "react";
import { buttonStyles } from "./Button.styles";
import { buttonClassNames, ButtonComputedProps, buttonName, ButtonProps, hasSupplementalAlt } from "./Button.core";
import "../base/styles/react.styles.css";

type Props = {
  icon?: ReactNode;
} & ButtonProps &
  HTMLProps<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    color,
    variant,
    level,
    iconFirst,
    fullWidth,
    usedInOtherInteractive,
    className,
    href,
    disabled,
    children,
    type,
    icon,
    target,
    ...rest
  } = props;
  const hasIcon = !!icon;
  const iconOnly = !!icon && !children;
  const _isLink = !!href && !disabled;
  const _label = props["aria-label"];

  if (iconOnly && !_label) {
    console.warn("aria-label is required for icon only buttons");
  }
  if (!hasSupplementalAlt(color) && variant === "supplemental alt") {
    console.warn("variant 'supplemental alt' must match the following function: " + hasSupplementalAlt.toString());
  }

  return (
    <>
      {/* hoists the style element into <head> and deduplicates it */}
      {/* https://react.dev/reference/react-dom/components/style#rendering-an-inline-css-stylesheet */}
      {/* have to use dangerousHtml because of encoding, changing ie. & into &amp; */}
      {/* https://github.com/facebook/react/issues/13838#issuecomment-675270594 */}
      <style href={buttonName} precedence="medium" dangerouslySetInnerHTML={{ __html: buttonStyles.cssText }}></style>
      <ButtonTag
        {...rest}
        ref={ref}
        isLink={_isLink}
        className={[className, ...buttonClassNames({ ...props, hasIcon, iconOnly, fullWidth })].join(" ")}
        disabled={_isLink ? undefined : disabled}
        href={_isLink && !disabled ? href : undefined}
        target={_isLink ? target : undefined}
        aria-disabled={disabled ? "true" : "false"}
        aria-label={_label}
        tabIndex={disabled || usedInOtherInteractive ? -1 : 0}
      >
        {children}
        {icon}
      </ButtonTag>
    </>
  );
});

const ButtonTag = ({ isLink, children, ...props }: Props & ButtonComputedProps) => {
  return createElement(isLink ? "a" : "button", props, children);
};
