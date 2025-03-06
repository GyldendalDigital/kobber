import { forwardRef, HTMLProps } from "react";
import {
  radioInputControlPartNameChecked,
  controlClassNames,
  radioInputControlPartName,
  ControlProps,
  radioInputControlName,
} from "../Radio.core";
import { radioInputControlStyles } from "./RadioInputControl.styles.react";
import "../../base/styles/react.styles.css";
import { InternalIconFormRadio } from "../../internal-icons/form-radio/index.react";

type Props = ControlProps & HTMLProps<HTMLButtonElement>;

export const RadioInputControl = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { checked, variant } = props;

  return (
    <>
      {/* hoists the style element into <head> and deduplicates it */}
      {/* https://react.dev/reference/react-dom/components/style#rendering-an-inline-css-stylesheet */}
      {/* have to use dangerousHtml because of encoding, changing ie. & into &amp; */}
      {/* https://github.com/facebook/react/issues/13838#issuecomment-675270594 */}
      <style href={radioInputControlName} dangerouslySetInnerHTML={{ __html: radioInputControlStyles.cssText }}></style>
      <div
        ref={ref}
        className={[
          ...controlClassNames({
            variant,
          }),
          radioInputControlPartName,
          checked ? radioInputControlPartNameChecked : "",
        ].join(" ")}
      >
        <InternalIconFormRadio />
      </div>
    </>
  );
});
