import { createElement, forwardRef, HTMLProps } from "react";
import { InputComputedProps, InputProps } from "../Radio.core";
import "../../button/Button.react";
import { RadioInputControl } from "../radioInputControl/RadioInputControl.react";

type Props = {} & InputProps & HTMLProps<HTMLButtonElement>;

export const RadioInput = forwardRef<HTMLButtonElement & HTMLInputElement, Props>((props, ref) => {
  const { checked, disabled, href, variant, children, ...rest } = props;
  const isLink = !!href;

  return (
    <InputTag {...rest} ref={ref} isLink={isLink}>
      <RadioInputControl checked={checked}></RadioInputControl>
      {children}
    </InputTag>
  );
});

const InputTag = ({ isLink, children, ...props }: Props & InputComputedProps) => {
  return createElement(isLink ? "KobberButton" : "div", props, children);
};
