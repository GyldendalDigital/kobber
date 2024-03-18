import { provideFASTDesignSystem } from "@microsoft/fast-components";
import { css } from "@microsoft/fast-element";
import {
  Radio as FastRadio,
  RadioGroup as FastRadioGroup,
  RadioOptions,
  radioGroupTemplate,
  radioTemplate,
} from "@microsoft/fast-foundation";

const checked = `<svg xmlns="http://www.w3.org/2000/svg" class="checked-indicator" width="12" height="12" viewBox="0 0 12 12" fill="none">
<circle cx="6" cy="6" r="5.5" fill="#121516" stroke="#121516"/>
</svg>`;

const styles = css`
  :host {
    display: flex;
    width: 160px;
    align-items: flex-start;
    gap: var(--input-radio-gap, 12px);
  }

  .control {
    box-sizing: border-box;
    width: var(--kobber-component-input-radio-size);
    height: var(--kobber-component-input-radio-size);
    border-radius: var(--kobber-component-input-radio-border-radius);
    border: 1px solid var(--kobber-component-input-color-default-foreground);
    background: var(--kobber-component-input-color-default-background);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .checked-indicator {
    align-self: center;
    justify-self: center;
    fill: var(--kobber-component-input-color-default-foreground);
    opacity: 0;
    display: none;
  }

  :host([aria-checked="true"]) .checked-indicator {
    opacity: 1;
    display: block;
  }

  :host(:not([disabled])) .control:hover {
    border-width: 2px;
  }
  :host(:focus-visible) {
    outline: none;
  }

  :host(:focus-visible) .control {
    box-shadow: 0px 0px 0px 3px var(--kobber-semantic-color-focus);
  }

  :host([disabled]) .label,
  :host([readonly]) .label,
  :host([readonly]) .control,
  :host([disabled]) .control {
    cursor: not-allowed;
    color: var(--kobber-component-input-color-disabled-foreground);
  }

  :host([readonly]) .control,
  :host([disabled]) .control {
    background: var(--kobber-component-input-color-disabled-background);
  }

  .label {
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
    line-height: 120%;
  }

  .label__hidden {
    display: none;
    visibility: hidden;
  }
`;

const R = FastRadio.compose<RadioOptions>({
  baseName: "radio",
  template: radioTemplate,
  styles,
  checkedIndicator: checked,
});

const RG = FastRadioGroup.compose({
  baseName: "radio-group",
  template: radioGroupTemplate,
  styles,
});

// Documentation: https://github.com/microsoft/fast/tree/master/packages/web-components/fast-foundation/src/radio
export const Radio = provideFASTDesignSystem()
  .withPrefix("kobber")
  .register(R());

// Documentation: https://github.com/microsoft/fast/tree/master/packages/web-components/fast-foundation/src/radio-group
export const RadioGroup = provideFASTDesignSystem()
  .withPrefix("kobber")
  .register(RG());
