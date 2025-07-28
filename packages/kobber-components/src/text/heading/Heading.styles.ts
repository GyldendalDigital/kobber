import { css, unsafeCSS } from "lit";
import { component, typography } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import {
  HeadingClassNames,
  HeadingFont,
  headingName,
  headingPrimarySizes,
  headingSecondarySizes,
} from "./Heading.core";
import { replaceSpaceWithDash } from "../../base/utilities/replace";
import { resetHeading } from "../../base/styles/reset.styles";

const createHeadingStyles = () => {
  const heading = component.heading;

  return css`
    .${unsafeCSS(headingName)} {
      ${resetHeading()};

      color: var(${unsafeCSS(heading.text.color.base)});

      &.${unsafeCSS("primary" satisfies HeadingFont)} {
        ${primaryHeadings()};
      }

      &.${unsafeCSS("secondary" satisfies HeadingFont)} {
        ${secondaryHeadings()};
      }

      /* used in global.css em styling (Lit can't style nested slots) */
      --highlight-color: var(${unsafeCSS(heading.text.color.highlight)});

      em,
      ::slotted(em) {
        color: var(--highlight-color);
        font-style: normal;
      }
    }
  `;
};

const primaryHeadings = () => {
  const classes = headingPrimarySizes.flatMap(size => {
    const heading = typography["primary (mori)"][size];
    return css`
      &.${unsafeCSS(replaceSpaceWithDash(size) satisfies HeadingClassNames)} {
        font-family: var(${unsafeCSS(heading.fontFamily)});
        font-size: var(${unsafeCSS(heading.fontSize)});
        font-weight: var(${unsafeCSS(heading.fontWeight)});
        font-style: var(${unsafeCSS(heading.fontStyle)});
        font-stretch: var(${unsafeCSS(heading.fontStretch)});
        line-height: var(${unsafeCSS(heading.lineHeight)});
      }
    `;
  });

  return unsafeCSS(classes.join("\n"));
};

const secondaryHeadings = () => {
  const classes = headingSecondarySizes.flatMap(size => {
    const heading = typography["secondary (lyon)"][size];
    return css`
      &.${unsafeCSS(replaceSpaceWithDash(size) satisfies HeadingClassNames)} {
        font-family: var(${unsafeCSS(heading.fontFamily)});
        font-size: var(${unsafeCSS(heading.fontSize)});
        font-weight: var(${unsafeCSS(heading.fontWeight)});
        font-style: var(${unsafeCSS(heading.fontStyle)});
        font-stretch: var(${unsafeCSS(heading.fontStretch)});
        line-height: var(${unsafeCSS(heading.lineHeight)});
      }
    `;
  });

  return unsafeCSS(classes.join("\n"));
};

export const headingStyles = createHeadingStyles();
