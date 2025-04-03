import { forwardRef, HTMLProps, ReactElement } from "react";
import {
  checkboxInputName,
  checkboxLabelClassName,
  checkboxWrapperClassName,
  InputProps,
  nativeCheckboxInputClassName,
} from "../Checkbox.core";
import { checkboxStyles } from "./checkboxInput.styles.react";
import "../../base/styles/component.styles";
import { IconFormChecked, IconFormIndeterminate } from "../../internal-icons/index.react";

type Props = InputProps & HTMLProps<HTMLInputElement> & { alertElement?: ReactElement; helpText?: ReactElement };

export const CheckboxInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    alertElement,
    checked,
    className,
    disabled,
    indeterminate,
    helpText,
    name,
    required,
    title,
    value,
    variant,
    children,
    ...rest
  } = props;

  return (
    <>
      {/* hoists the style element into <head> and deduplicates it */}
      {/* https://react.dev/reference/react-dom/components/style#rendering-an-inline-css-stylesheet */}
      {/* have to use dangerousHtml because of encoding, changing ie. & into &amp; */}
      {/* https://github.com/facebook/react/issues/13838#issuecomment-675270594 */}
      <style
        href={checkboxInputName}
        precedence="medium"
        dangerouslySetInnerHTML={{ __html: checkboxStyles.cssText }}
      ></style>

      <div className={checkboxWrapperClassName} {...rest} ref={ref}>
        <label
          className={[checkboxInputName, checked ? checked : "", disabled ? disabled : "", className].join(" ")}
          data-variant={variant}
        >
          <input
            className={[nativeCheckboxInputClassName, "visually-hidden"].join(" ")}
            type="checkbox"
            title={title /* An empty title prevents browser validation tooltips from appearing on hover */}
            name={name}
            value={value}
            checked={checked}
            disabled={disabled}
            required={required}
            aria-describedby="aria-help-text"
            tabIndex={-1}
          />

          <span tabIndex={disabled ? -1 : 0}>
            {checked ? <IconFormChecked /> : indeterminate ? <IconFormIndeterminate /> : ""}
          </span>

          <div className={checkboxLabelClassName}>{children}</div>
        </label>

        <div aria-hidden={!!helpText} id="aria-help-text">
          <span className="help-text">{helpText}</span>
        </div>
        <div aria-hidden={!!alertElement}>{alertElement}</div>
      </div>
    </>
  );
});
