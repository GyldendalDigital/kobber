import { css, unsafeCSS } from "lit";
import { component, global, typography } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import { buttonName, buttonColors, buttonVariants, buttonLevels } from "./Button.core";

/**
 * Shared styles, used in web component, React and CSS module.
 *
 * TODO:
 * support variant supplemental alt
 * let consumer decide if element should be button or anchor tag
 * secondary hover effect bottom border should only cover text
 */
export const buttonStyles = () => {
  const button = component.button;

  return css`
    .kobber-button {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      user-select: none;
      -webkit-user-select: none;
      cursor: pointer;
      white-space: nowrap;
      vertical-align: middle;
      border: 1px solid transparent;
      gap: var(${unsafeCSS(button.container.gap)});
      padding-block: var(${unsafeCSS(button.container.padding.block)});
      padding-inline: var(${unsafeCSS(button.container.padding.inline)});
      border-radius: var(${unsafeCSS(button.container.border.radius)});
      min-height: var(${unsafeCSS(button.container.size.height)});
      line-height: initial;
      ${typographyButton()}
    }

    .kobber-button::-moz-focus-inner {
      border: 0;
    }

    .kobber-button[disabled],
    .kobber-button.disabled {
      /* TODO: wait for tokens to expose percent as number, not rem */
      /* opacity: var(${unsafeCSS(global.disabled.container.opacity)}); */
      opacity: 0.5;
      cursor: not-allowed;
    }

    .kobber-button:focus-visible:enabled,
    .kobber-button.focus {
      outline: none;
      box-shadow: 0 0 0 var(${unsafeCSS(global.focus.border.width)}) var(${unsafeCSS(global.focus.color)});
    }

    .kobber-button.icon {
      --icon-width: var(${unsafeCSS(button.icon.size.width.small)});
      --icon-height: var(${unsafeCSS(button.icon.size.height.small)});
    }

    .kobber-button.icon.icon-left {
      flex-direction: row-reverse;
    }

    .kobber-button.icon.icon-only {
      gap: 0;
      padding-block: 12px;
      padding-inline: 12px;
    }

    ${buttonVariableStyles()}
  `;
};

const buttonVariableStyles = () => {
  const variableClasses = buttonColors.flatMap(color => {
    return (
      buttonVariants
        // TODO: Handle supplemental-alt variant
        // @ts-ignore
        .filter(variant => variant !== "supplemental alt")
        .flatMap(variant => {
          return [
            ...buttonLevels
              .filter(level => level === "primary")
              .map(level => {
                const backgroundColor = component.button.background.color[color]?.[variant]?.[level];
                const textColor = component.button.text.color[color]?.[variant]?.[level];
                if (!backgroundColor || !textColor) return;

                const nestedClassNames = `.kobber-button.${color}.${variant}.${level}`;

                return css`
                  ${unsafeCSS(nestedClassNames)} {
                    background-color: var(${unsafeCSS(backgroundColor.fallback)});
                    color: var(${unsafeCSS(textColor.fallback)});
                  }

                  ${unsafeCSS(nestedClassNames)}:hover, ${unsafeCSS(nestedClassNames)}.hover {
                    ${hoverEffect(backgroundColor.hover, backgroundColor.fallback)}
                  }
                `;
              })
              .filter(Boolean),
            // special handling of secondary transparent buttons
            ...buttonLevels
              .filter(level => level === "secondary")
              .map(level => {
                // @ts-ignore
                const textColor = component.button.text.color[color]?.[variant]?.[level]?.fallback;
                if (!textColor) return;

                const nestedClassNames = `.kobber-button.${color}.${variant}.${level}`;

                return css`
                  ${unsafeCSS(nestedClassNames)} {
                    background-color: transparent;
                    color: var(${unsafeCSS(textColor)});
                  }

                  ${unsafeCSS(nestedClassNames)}:hover, ${unsafeCSS(nestedClassNames)}.hover, ${unsafeCSS(
                    nestedClassNames,
                  )}:active, ${unsafeCSS(nestedClassNames)}.active {
                    box-shadow: 0 2px 0 -1px var(${unsafeCSS(textColor)});
                    border-radius: 0;
                  }
                `;
              })
              .filter(Boolean),
          ];
        })
    );
  });

  return unsafeCSS(variableClasses.join("\n"));
};

const hoverEffect = (hoverColor: string, fallbackColor: string) => css`
  background: linear-gradient(0deg, var(${unsafeCSS(hoverColor)}) 0%, var(${unsafeCSS(hoverColor)}) 100%),
    var(${unsafeCSS(fallbackColor)});
`;

const typographyButton = () => {
  const button = typography.ui.button;

  return css`
    font-size: var(${unsafeCSS(button.fontSize)});
    font-family: var(${unsafeCSS(button.fontFamily)});
    font-weight: var(${unsafeCSS(button.fontWeight)});
    font-style: var(${unsafeCSS(button.fontStyle)});
    font-stretch: var(${unsafeCSS(button.fontStretch)});
  `;
};

/**
 * NYI
 
.kobber-button.supplemental-alt {
    background-color: transparent;
    height: auto;
    padding: 0;
    text-decoration: underline;
  }

 */
