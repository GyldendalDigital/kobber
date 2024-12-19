import { css, unsafeCSS } from "lit";
import { component, global, typography } from "@gyldendal/kobber-base/themes/default/tokens.css-variables";
import { buttonName, buttonColors, buttonVariants, buttonLevels } from "./Button.core";

export const buttonStyles = () => {
  const button = component.button;

  return css`
    .${unsafeCSS(buttonName)} {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      user-select: none;
      -webkit-user-select: none;
      cursor: pointer;
      white-space: nowrap;
      vertical-align: middle;
      border: 2px solid transparent;
      gap: var(${unsafeCSS(button.container.gap)});
      padding-block: var(${unsafeCSS(button.container.padding.block)});
      padding-inline: var(${unsafeCSS(button.container.padding.inline)});
      border-radius: var(${unsafeCSS(button.container.border.radius)});
      min-height: var(${unsafeCSS(button.container.size.height)});
      line-height: initial;

      &::-moz-focus-inner {
        border: 0;
      }

      ${typographyButton()}

      ${buttonVariableStyles()}

      &[disabled],
      &.disabled {
        /* TODO: wait for tokens to expose percent as number, not rem */
        /* opacity: var(${unsafeCSS(global.disabled.container.opacity)}); */
        opacity: 0.5;
        cursor: not-allowed;
      }

      &:focus-visible:enabled,
      &.focus {
        outline: none;
        box-shadow: 0 0 0 var(${unsafeCSS(global.focus.border.width)}) var(${unsafeCSS(global.focus.color)});
      }

      &.icon {
        --icon-width: var(${unsafeCSS(button.icon.size.width.small)});
        --icon-height: var(${unsafeCSS(button.icon.size.height.small)});

        &.icon-left {
          flex-direction: row-reverse;
        }

        &.icon-only {
          gap: 0;
          padding-block: 12px;
          padding-inline: 12px;
        }
      }
    }
  `;
};

const buttonVariableStyles = () => {
  const variableClasses = buttonColors.flatMap(color => {
    // TODO: Handle supplemental-alt variant
    return buttonVariants
      .filter(variant => variant !== "supplemental alt")
      .flatMap(variant => {
        return [
          ...buttonLevels
            .filter(level => level === "primary")
            .map(level => {
              const background = component.button.background.color[color]?.[variant]?.[level];
              const text = component.button.text.color[color]?.[variant]?.[level];
              if (!background || !text) return;

              return css`
                &.${unsafeCSS(color)}.${unsafeCSS(variant.replace(" ", "-"))}.${unsafeCSS(level)} {
                  background-color: var(${unsafeCSS(background.fallback)});
                  color: var(${unsafeCSS(text.fallback)});

                  &:hover,
                  &.hover {
                    ${hoverEffect(background.hover, background.fallback)}
                  }
                }
              `;
            })
            .filter(Boolean),
          // special handling of secondary transparent buttons
          ...buttonLevels
            .filter(level => level === "secondary")
            .map(level => {
              // @ts-ignore
              const text = component.button.text.color[color]?.[variant]?.[level]?.fallback;
              if (!text) return;

              return css`
                &.${unsafeCSS(color)}.${unsafeCSS(variant.replace(" ", "-"))}.${unsafeCSS(level)} {
                  background-color: transparent;
                  color: var(${unsafeCSS(text)});

                  &:hover,
                  &.hover,
                  &:active,
                  &.active {
                    border-bottom: 1px solid var(${unsafeCSS(text)});
                    border-radius: 0;
                  }
                }
              `;
            })
            .filter(Boolean),
        ];
      });
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
 
.${unsafeCSS(buttonName)}.supplemental-alt {
    background-color: transparent;
    height: auto;
    padding: 0;
    text-decoration: underline;
  }

 */
