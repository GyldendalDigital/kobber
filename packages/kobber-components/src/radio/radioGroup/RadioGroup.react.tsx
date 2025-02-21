import { cloneElement, forwardRef, ReactElement } from "react";
import { GroupProps, radioGroupHorizontalClassName, radioGroupName } from "../Radio.core";
import "../../button/Button.react";
import { radioGroupStyles } from "./RadioGroup.styles";
import "../../base/styles/react.styles.css";

type Props = { helpText: string; children: Array<ReactElement> } & GroupProps;

export const RadioGroup = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { direction, helpText, label, children } = props;

  const handleLabelClick = () => {
    focus();
  };

  const getAllRadios = () => props.children as unknown as HTMLInputElement[];

  /** Sets focus on the radio-group. */
  const focus = (options?: FocusOptions) => {
    const radios = getAllRadios();

    // Call focus for the checked radio
    // If no radio is checked, focus the first one that is not disabled
    focusOnRadio(radios, options);
  };

  const focusOnRadio = (radios: HTMLInputElement[], options?: FocusOptions) => {
    const checked = radios.find(radio => radio.checked);
    const firstEnabledRadio = radios.find(radio => !radio.disabled);
    const radioToFocus = checked || firstEnabledRadio;
    if (radioToFocus) {
      radioToFocus.focus(options);
    }
  };

  return (
    <>
      {/* hoists the style element into <head> and deduplicates it */}
      {/* https://react.dev/reference/react-dom/components/style#rendering-an-inline-css-stylesheet */}
      {/* have to use dangerousHtml because of encoding, changing ie. & into &amp; */}
      {/* https://github.com/facebook/react/issues/13838#issuecomment-675270594 */}
      <style
        href={radioGroupName}
        precedence="medium"
        dangerouslySetInnerHTML={{ __html: radioGroupStyles.cssText }}
      ></style>
      <fieldset
        className={radioGroupName}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="aria-help-text"
        aria-errormessage="error-message"
      >
        <label id="label" aria-hidden={label ? "false" : "true"} onClick={handleLabelClick}>
          {label}
        </label>

        <div className={direction === "horizontal" ? radioGroupHorizontalClassName : ""}>
          {children.map((child: ReactElement, index: number) =>
            cloneElement(child, {
              key: index,
            }),
          )}
        </div>

        <div id="aria-help-text" aria-hidden={helpText ? "false" : "true"}>
          {helpText}
        </div>
      </fieldset>
    </>
  );
});
