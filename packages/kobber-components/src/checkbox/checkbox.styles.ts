import { css } from "lit";

export default css`
  :host {
    display: flex;
    /* width: 160px; */
    align-items: flex-start;
    gap: var(--kobber-component-input-checkbox-gap);
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  /* Disabled */
  .checkbox--disabled .checkbox__control,
  .checkbox--disabled .checkbox__label {
    cursor: not-allowed;
    color: var(--kobber-component-input-color-disabled-foreground) hotpink;
  }

  .checkbox__control {
    box-sizing: border-box;
    width: var(--kobber-component-input-checkbox-size);
    height: var(--kobber-component-input-checkbox-size);
    border-radius: var(--kobber-component-input-checkbox-border-radius);
    border: 1px solid var(--kobber-component-input-color-default-foreground);
    background: var(--kobber-component-input-color-default-background);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 var(--kobber-component-input-checkbox-gap);
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
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-width: 2px;
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    box-shadow: 0px 0px 0px 3px var(--kobber-semantic-color-focus);
    outline-offset: 0px;
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-width: 2px;
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
