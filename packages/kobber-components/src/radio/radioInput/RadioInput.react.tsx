import { createElement, forwardRef, HTMLProps } from "react";
import { InputComputedProps, InputProps, radioInputName } from "../Radio.core";
import "../../button/Button.react";
import { RadioInputControl } from "../radioInputControl/RadioInputControl.react";
import { radioInputStyles } from "./RadioInput.styles.react";

type Props = InputProps & HTMLProps<HTMLButtonElement>;

export const RadioInput = forwardRef<HTMLButtonElement & HTMLInputElement, Props>((props, ref) => {
  const { checked, disabled, href, variant, children, ...rest } = props;
  const isLink = !!href;
  const role = isLink ? "" : "radio";
  const tabIndex = checked ? 0 : -1;

  return (
    <>
      {/* hoists the style element into <head> and deduplicates it */}
      {/* https://react.dev/reference/react-dom/components/style#rendering-an-inline-css-stylesheet */}
      {/* have to use dangerousHtml because of encoding, changing ie. & into &amp; */}
      {/* https://github.com/facebook/react/issues/13838#issuecomment-675270594 */}
      <style
        href={radioInputName}
        precedence="medium"
        dangerouslySetInnerHTML={{ __html: radioInputStyles.cssText }}
      ></style>
      <InputTag {...rest} ref={ref} isLink={isLink} role={role} tabIndex={tabIndex}>
        <RadioInputControl checked={checked}></RadioInputControl>
        {children}
      </InputTag>
    </>
  );
});

const InputTag = ({ isLink, children, ...props }: Props & InputComputedProps) => {
  return createElement(isLink ? "KobberButton" : "div", props, children);
};
