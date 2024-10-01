import { css } from "lit";

export const checkboxBaseStyles = css`
  :host {
    display: flex;
    align-items: flex-start;
  }

  /* TODO: REMOVE ALL THE DEFAULT STYLES LATER */

  .icon-check {
    stroke-width: 3px;
    stroke: currentColor;
    color: var(--checkbox-checkmark-icon-color-success, #014f2d);
  }

  .checkbox {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: var(--kobber-component-checkbox-gap, 12px);
    cursor: pointer;
  }

  /* Focus-visible */
  .checkbox::focus-visible .checkbox__control {
    box-shadow: 0 0 0 3px var(--kobber-component-checkbox-focus-color, #7155f0);
    outline: none;
    border-width: 2px;
    border-radius: 8px;
    border-color: var(--kobber-component-checkbox-focus-color, #7155f0);
  }

  /* Disabled */
  .checkbox--disabled .checkbox__control,
  .checkbox--disabled .checkbox__label {
    cursor: not-allowed;
    color: var(--kobber-component-input-color-disabled-foreground, #48112580);
  }

  .checkbox--disabled .checkbox__control {
    background: var(--kobber-component-input-color-disabled-background, transparent);
  }

  .checkbox__control {
    box-zising: border-box;
    width: var(--kobber-component-input-checkbox-width, 24px);
    height: var(--kobber-component-input-checkbox-height, 24px);
    border-radius: var(--kobber-component-input-checkbox-border-radius, 8px);
    border: 1px solid var(--kobber-component-input-color-default-border, #481125);
    background: var(--kobber-component-input-color-default-background, transparent);

    /* Padding-top because the icons are too far aligned to the top */
    padding-top: 3px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .checkbox__control > svg {
    width: 100%;
    height: 100%;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    align-self: center;
    justify-self: center;
    fill: transparent;
    opacity: 0;
    display: none;
    width: 100%;
    height: 100%;
  }

  /* Hover */
  .checkbox:not(.checkbox--disabled):hover .checkbox__control {
    box-shadow: 0px 0px 4px 2px #cbfbdb;
  }

  /* Active */
  .checkbox:not(.checkbox--disabled):active .checkbox__control {
    box-shadow: 0px 0px 4px 2px #55d994;
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    box-shadow: 0px 10px 0px 100px var(kobber-semantic-color-focus, #ff0000);
    outline-offset: 0px;
  }

  /* Checked */
  .checkbox.checkbox--checked .checkbox__control {
    background: var(--kobber-component-checkbox-background-checked, #cbfbdb);
    border-color: var(--kobber-component-checkbox-border-checked, #014f2d);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    box-shadow: 0px 0px 0px 3px var(--kobber-semantic-color-focus);
    outline-offset: 0px;
  }

  .checkbox__label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1 0 0;
    align-self: stretch;
    color: var(--kobber-component-checkbox-label-color-label, #481125);
    font-family: var(--kobber-component-checkbox-label-font-family, "Inter");
    font-size: var(--kobber-component-checkbox-label-font-size, 16px);
    font-style: var(--kobber-component-checkbox-label-font-style, normal);
    font-weight: var(--kobber-component-checkbox-label-font-weight, 300);
  }

  .form-control__help-text {
    margin-left: calc(var(--kobber-component-input-checkbox-size) + var(--kobber-component-input-checkbox-gap));
  }
`;
