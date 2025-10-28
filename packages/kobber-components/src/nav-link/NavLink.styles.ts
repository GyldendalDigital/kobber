import { universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { css, unsafeCSS } from "lit";
import { resetButton } from "../base/styles/reset.styles";
import { defaultTypographyStyles, setTypographyVariable } from "../base/styles/typography.styles";
import { dataAttribute } from "../base/utilities/dataAttribute";
import { textLabelTokens } from "../text/text-label/TextLabel.core";
import {
  type NavLinkDataAttributes,
  navLinkName,
  navLinkTokens,
  navLinkTypes,
} from "./NavLink.core";

/**
 * Styles for the navigation link component.
 * @example
 * <a href="/" class="kobber-nav-link" data-type="accent">home</a>
 * <button onclick="alert('foo')" class="kobber-nav-link" data-type="subtle">foo</button>
 */
const createStyles = () => {
  const test = dataAttribute<NavLinkDataAttributes>("type", "brand");
  return css`
.${unsafeCSS(navLinkName)} {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(${unsafeCSS(navLinkTokens.gap)});
  ${defaultTypographyStyles({
    size: textLabelTokens.size.medium,
    family: textLabelTokens.font,
    lineHeight: textLabelTokens["line-height"],
    weight: textLabelTokens.weight,
    color: textLabelTokens.color.brand["tone-a"],
  })}
  ${colorVariants()}

  &[disabled],
  &.disabled {
    opacity: var(${unsafeCSS(universal.disabled.container.opacity)});
    cursor: auto;
  }

  &:active,
  &.active,
  &:hover,
  &.hover {
    &:not([disabled]) {
      &::after {
        content: "";
        position: absolute;
        border-bottom: var(${unsafeCSS(navLinkTokens.border.width.hover)}) solid;
        bottom: 0;
        right: 0;
        left: 0;
      }
    }
  }

  &:focus-visible,
  &.focus {
    outline: none;
    border-radius: var(${unsafeCSS(universal.focus.border.radius.xsmall)});
    box-shadow: 0 0 0 var(${unsafeCSS(universal.focus.border.width)})
      var(${unsafeCSS(universal.focus.border.color)});
    padding-inline: var(${unsafeCSS(navLinkTokens.gap)});

    /* prevents active/hover from colliding with focus border */
    &:active,
    &.active,
    &:hover,
    &.hover {
      &:not([disabled]) {
        &::after {
          bottom: 0.01rem;
          right: var(${unsafeCSS(navLinkTokens.gap)});
          left: var(${unsafeCSS(navLinkTokens.gap)});
        }
      }
    }
  }
}

a.${unsafeCSS(navLinkName)} {
  text-decoration: none;
}

button.${unsafeCSS(navLinkName)} {
  ${resetButton()}
  border: none;
  background-color: transparent;
  padding: 0;
}
`;
};

const colorVariants = () =>
  unsafeCSS(
    navLinkTypes
      .flatMap(
        type => `
  &[${dataAttribute<NavLinkDataAttributes>("type", type)}] {
    ${setTypographyVariable("color", universal["text-label"].text.color[type]["tone-a"])}
  }`,
      )
      .join(""),
  );

export const navLinkStyles = createStyles();
