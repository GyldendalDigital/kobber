import { provideFASTDesignSystem } from "@microsoft/fast-components";
import { css } from "@microsoft/fast-element";
import {
  CheckboxOptions,
  Checkbox as FastCheckbox,
  checkboxTemplate as template,
} from "@microsoft/fast-foundation";

const checked = `<svg class="checked-indicator" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<path d="M11.6485 2.81742L5.31801 11.5167C4.84923 12.1611 4.08879 12.1611 3.61956 11.5167L0.351719 7.02544C-0.11724 6.38108 -0.11724 5.3359 0.351719 4.69142C0.820766 4.04681 1.58114 4.04681 2.04998 4.69117L4.46904 8.01569L9.94997 0.483271C10.419 -0.161335 11.1795 -0.160846 11.6483 0.483271C12.1172 1.12775 12.1172 2.17257 11.6485 2.81742Z" fill="#121516"/>
</svg>`;

const indeterminate = `<svg class="indeterminate-indicator" xmlns="http://www.w3.org/2000/svg" width="12" height="3" viewBox="0 0 12 3" fill="none">
<rect width="12" height="3" rx="1.5" fill="#121516"/>
</svg>`;

const styles = css`
  :host {
    display: flex;
    width: 160px;
    align-items: flex-start;
    gap: var(--input-checkbox-gap, 12px);
  }

  .control {
    box-sizing: border-box;
    width: var(--input-checkbox-size, 24px);
    height: var(--input-checkbox-size, 24px);
    border-radius: var(--input-checkbox-border-radius, 8px);
    border: 1px solid var(--input-color-default-foreground, #121516);
    background: var(--input-color-default-background, #f4f5f6);
    padding: var(--input-checkbox-padding-block, 2px);
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

  .indeterminate-indicator {
    align-self: center;
    justify-self: center;
    fill: var(--input-color-default-foreground, #121516);
    opacity: 0;
    display: none;
  }

  :host([aria-checked="true"]) .checked-indicator,
  :host([aria-checked="false"].indeterminate) .indeterminate-indicator {
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

const C = FastCheckbox.compose<CheckboxOptions>({
  baseName: "checkbox",
  template,
  styles,
  checkedIndicator: checked,
  indeterminateIndicator: indeterminate,
});

export const Checkbox = provideFASTDesignSystem()
  .withPrefix("kobber")
  .register(C());
