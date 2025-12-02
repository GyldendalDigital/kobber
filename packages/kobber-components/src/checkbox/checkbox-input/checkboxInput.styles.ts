import { universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { css, unsafeCSS } from "lit";
import { getTypographyStyles } from "../../base/getTypographyStyles";
import {
  type CheckboxClassNames,
  type CheckboxColor,
  checkboxColors,
  checkboxTokens,
  type IconClassNames,
  type InputControlClassNames,
  type InputLabelClassNames,
  indicatorTokens,
  type NativeInputClassNames,
  type WrapperClassNames,
} from "../Checkbox.core";

const createCheckboxStyles = () => {
  return css`
    .${unsafeCSS("wrapper" satisfies WrapperClassNames)} {
      --control-outline-color: transparent;
      --icon-width: 1.2em;
      --icon-height: var(--icon-width);
      display: flex;
      flex-direction: column;
      gap: 0 var(${unsafeCSS(checkboxTokens["container-right"].gap)});
    }

    .${unsafeCSS("kobber-checkbox-input" satisfies CheckboxClassNames)} {
      display: flex;
      gap: var(${unsafeCSS(checkboxTokens.gap)});
      justify-content: start;
      align-items: center;
      cursor: pointer;
      padding: var(${unsafeCSS(checkboxTokens.padding)});

      ${colorStyles()}
      ${inputStates()}
    }

    .${unsafeCSS("label" satisfies InputLabelClassNames)} {
      display: block;

      font-size: var(--typography-font-size);
      font-family: var(--typography-font-family);
      font-weight: var(--typography-font-weight);
      font-style: var(--typography-font-style);
      font-stretch: var(--typography-font-stretch);
      line-height: var(--typography-line-height);

      ${unsafeCSS(getTypographyStyles("text-label"))}
    }

    .${unsafeCSS("control" satisfies InputControlClassNames)} {
      width: var(${unsafeCSS(indicatorTokens.size.width)});
      height: var(${unsafeCSS(indicatorTokens.size.height)});
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(${unsafeCSS(checkboxTokens.outline.border.radius)});
      :host(:not(.disabled[checked="checked"], .disabled[checked="indeterminate"])) &, 
      :host(:not([disabled][checked="checked"], [disabled][checked="indeterminate"])) & {
        border: var(${unsafeCSS(indicatorTokens.border.width)}) solid var(--control-border-color);
      }
      outline: var(${unsafeCSS(checkboxTokens.outline.border.width)}) solid var(--control-outline-color);
      color: var(--color);
      flex-shrink: 0;
      background-color: var(--control-background-color);
      transition: var(--transition-time) outline;
    }

    .${unsafeCSS("control--shape" satisfies IconClassNames)} {
      display: flex;
      align-items: center;
    }

    .${unsafeCSS("native-input" satisfies NativeInputClassNames)} {
      pointer-events: none;
    }
  `;
};

const colorStyles = () => {
  const colors = checkboxColors.flatMap(color => {
    return css`
      ${unsafeCSS(`&[data-color="${color}"]`)} {
        --color: var(${unsafeCSS(indicatorTokens.shape.color[color])});
        ${statesPerColor(color)}
      }
    `;
  });

  return unsafeCSS(colors.join("\n"));
};

const statesPerColor = (color: CheckboxColor) => {
  const outlineColor = checkboxTokens.outline.border.color[color];
  const borderColor = indicatorTokens.border.color[color];
  const bgColor = indicatorTokens.background.color[color];
  return css`
    --control-border-color: var(
      ${unsafeCSS(borderColor.idle)}
    ); /* Must be first, to enable being overridden by non-idle styles. */

    :host(.hover) &,
    :host(:hover) & {
      :host(:not(.disabled, [disabled])) & {
        --control-outline-color: var(${unsafeCSS(outlineColor.hover)});
        --control-border-color: var(${unsafeCSS(borderColor.hover)});
      }
    }

    :host(.active) &,
    :host(:active) & {
      :host(:not(.disabled, [disabled])) & {
        --control-outline-color: var(${unsafeCSS(outlineColor.active)});
        --control-border-color: var(${unsafeCSS(borderColor.active)});
      }
    }

    :host(.focus) &,
    &:has(> input:focus-visible) {
      :host(:not(.disabled, [disabled])) & {
        outline: none;
        box-shadow: 0 0 0 var(${unsafeCSS(universal.focus.border.width)})
          var(${unsafeCSS(universal.focus.border.color)});
        border-radius: var(${unsafeCSS(universal.focus.border.radius.small)});
        --control-border-color: var(${unsafeCSS(borderColor.focus)});
      }
    }

    :host([checked="checked"]) &, 
    :host([checked="indeterminate"]) & {
      :host(:not(.hover, :hover, .active, :active, .disabled, [disabled])) & {
        --control-background-color: var(${unsafeCSS(bgColor.idle)});
      }
      :host([disabled]) & {
        --control-background-color: var(${unsafeCSS(bgColor.disabled)});
      }
    }
  `;
};

const inputStates = () => {
  return css`
    :host([disabled]) &,
    &.disabled {
      opacity: var(${unsafeCSS(universal.disabled.container.opacity)});
      cursor: auto;
    }
  `;
};

export const checkboxStyles = createCheckboxStyles();
