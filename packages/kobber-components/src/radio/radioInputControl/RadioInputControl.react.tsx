import { forwardRef, HTMLProps } from "react";
import {
  radioInputControlPartNameChecked,
  controlClassNames,
  radioInputControlPartName,
  ControlProps,
} from "../Radio.core";
import { radioInputControlStyles } from "./RadioInputControl.styles.react";

type Props = ControlProps & HTMLProps<HTMLButtonElement>;

export const RadioInputControl = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { checked, variant } = props;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: radioInputControlStyles.cssText }}></style>
      <div
        ref={ref}
        className={[
          ...controlClassNames({
            variant,
          }),
          radioInputControlPartName,
          checked ? radioInputControlPartNameChecked : "",
        ].join(" ")}
      ></div>
    </>
  );
});
