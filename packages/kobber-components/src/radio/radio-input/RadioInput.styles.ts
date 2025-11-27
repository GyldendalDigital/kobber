import { component, universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { css, unsafeCSS } from "lit";
import { getTypographyStyles } from "../../base/getTypographyStyles";
import {
  type InputClassNames,
  type InputColor,
  type InputControlPartNames,
  type InputLabelClassNames,
  inputColors,
} from "../Radio.core";

const inputStyles = component._radiobutton;

const createInputStyles = () => {
  return css`
    .${unsafeCSS("kobber-radio-input" satisfies InputClassNames)} {
      --control-outline-color: transparent;
      display: flex;
      gap: var(${unsafeCSS(inputStyles.gap)});
      justify-content: start;
      align-items: start;
      cursor: pointer;
      padding: var(${unsafeCSS(inputStyles.padding)});

      ${inputColorStyles()}
      ${inputStates()}
      
      &.${unsafeCSS("input--as-link" satisfies InputClassNames)} {
        text-decoration: none;
      }
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
      --typography-line-height: var(${unsafeCSS(universal["text-body"].text["line-height"].brand.large.long)});
    }
  `;
};

const inputColorStyles = () => {
  const colorClasses = inputColors.flatMap(color => {
    const colorSelector = `&[data-color="${color}"]`;
    return css`
      ${unsafeCSS(colorSelector)} {
        ${inputStatesPerColor(color)}
      }
    `;
  });

  return unsafeCSS(colorClasses.join("\n"));
};

const inputStatesPerColor = (color: InputColor) => {
  const outlineColor = inputStyles.outline.border.color[color];
  return css`
    :host(.hover) &,
    :host(:hover) & {
      :host(:not(.disabled, [disabled])) & {
        ::part(${unsafeCSS("control" satisfies InputControlPartNames)}) {
          --control-outline-color: var(${unsafeCSS(outlineColor.hover)});
        }
      }
    }

    :host(.active) &,
    :host(:active) & {
      :host(:not(.disabled, [disabled])) & {
        ::part(${unsafeCSS("control" satisfies InputControlPartNames)}) {
          --control-outline-color: var(${unsafeCSS(outlineColor.active)});
        }
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
    
    :host(.focus) &,
    :host(:focus-visible) & {
      :host(:not(.disabled, [disabled])) & {
        outline: none;
        box-shadow: 0 0 0 var(${unsafeCSS(universal.focus.border.width)})
          var(${unsafeCSS(universal.focus.border.color)});
        border-radius: var(${unsafeCSS(universal.focus.border.radius.small)});
      }
    }
  `;
};

export const radioInputStyles = createInputStyles();
