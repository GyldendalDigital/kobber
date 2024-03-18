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
    width: var(--input-radio-size, 24px);
    height: var(--input-radio-size, 24px);
    border-radius: var(--input-radio-border-radius, 1000px);
    border: 1px solid var(--input-color-default-foreground, #121516);
    background: var(--input-color-default-background, #f4f5f6);
    padding: var(--input-radio-padding-block, 2px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .checked-indicator {
    align-self: center;
    justify-self: center;
    fill: var(--input-color-default-foreground, #121516);
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
    box-shadow: 0px 0px 0px 3px var(--color-focus, #00468f);
  }

  :host([disabled]) .label,
  :host([readonly]) .label,
  :host([readonly]) .control,
  :host([disabled]) .control {
    cursor: not-allowed;
    color: var(--action-color-default-disabled-foreground, #373e43);
  }

  .label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1 0 0;
    align-self: stretch;
    color: var(--input-color-default-foreground, #121516);
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
