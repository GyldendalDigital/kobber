import { css } from "lit";

export default css`
  :host {
    display: flex;
    align-items: flex-start;
    gap: var(--kobber-component-input-checkbox-gap);
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox__control {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-right: var(--kobber-component-input-checkbox-gap);
    border: 1px solid var(--kobber-component-input-color-default-foreground);
    border-radius: var(--kobber-component-input-checkbox-border-radius);
    height: var(--kobber-component-input-checkbox-size);
    width: var(--kobber-component-input-checkbox-size);
    box-sizing: border-box;
    background: var(--kobber-component-input-color-default-background);
  }

  .checkbox__label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: stretch;
    flex: 1 0 0;
    color: var(--kobber-component-input-color-default-foreground);
    font-family: Inter, "Inter Variable", system-ui, sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
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

  .checkbox__input {
    position: absolute;
    margin: 0;
    padding: 0;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */
  .checkbox:not(.checkbox--disabled) .checkbox__control:hover {
    border-width: 2px;
  }

  /* Focus */
  .checkbox:not(.checkbox--checked, .checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    box-shadow: 0 0 0 3px var(--kobber-semantic-color-focus);
    outline-offset: 0;
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    box-shadow: 0 0 0 3px var(--kobber-semantic-color-focus);
    outline-offset: 0;
  }
`;
