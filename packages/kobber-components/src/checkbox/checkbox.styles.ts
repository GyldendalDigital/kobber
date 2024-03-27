import { css } from "lit";

export default css`
  :host {
    display: flex;
    align-items: flex-start;
    gap: var(--kobber-component-input-checkbox-gap);
  }

  .checkbox {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: (--kobber-component-input-checkbox-gap);
    cursor: pointer;
  }

  /* Disabled */
  .checkbox--disabled .checkbox__control,
  .checkbox--disabled .checkbox__label {
    cursor: not-allowed;
    color: var(--kobber-component-input-color-disabled-foreground);
  }

  .checkbox--disabled .checkbox__control {
    background: var(--kobber-component-input-color-disabled-background);
  }

  .checkbox__control {
    box-sizing: border-box;
    width: var(--kobber-component-input-checkbox-size);
    height: var(--kobber-component-input-checkbox-size);
    border-radius: var(--kobber-component-input-checkbox-border-radius);
    border: 1px solid var(--kobber-component-input-color-default-foreground);
    background: var(--kobber-component-input-color-default-background);
    padding: var(--kobber-component-input-checkbox-padding-block) var(--kobber-component-input-checkbox-padding-inline);
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
    fill: var(--kobber-component-input-color-default-foreground);
    opacity: 0;
    display: none;
    width: 100%;
    height: 100%;
  }

  /* Hover */
  .checkbox:not(.checkbox--disabled) .checkbox__control:hover {
    border-width: 2px;
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    box-shadow: 0px 0px 0px 3px var(--kobber-semantic-color-focus);
    outline-offset: 0px;
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
    color: var(--kobber-component-input-color-default-foreground);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
  }
`;
