import { css, unsafeCSS } from "lit";
import { component, typography } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import {
  HeadingClassNames,
  HeadingFont,
  HeadingLevel,
  headingName,
  headingPrimarySizes,
  headingSecondarySizes,
} from "./Heading.core";
import { replaceSpaceWithDash } from "../../utils/replace";
import { resetHeading } from "../../base/styles/reset.styles";

const createHeadingStyles = () => {
  const heading = component.article.heading;

  return css`
    .${unsafeCSS(headingName)} {
      ${resetHeading()};

      color: var(${unsafeCSS(heading.text.color.h2.base)});

      &.${unsafeCSS("h1" satisfies HeadingLevel)} {
        color: var(${unsafeCSS(heading.text.color.h1.base)});
      }

      &.${unsafeCSS("primary" satisfies HeadingFont)} {
        ${primaryHeadings()}
      }

      &.${unsafeCSS("secondary" satisfies HeadingFont)} {
        ${secondaryHeadings()}
      }
    }
  `;
};

const primaryHeadings = () => {
  const classes = headingPrimarySizes.flatMap(size => {
    const heading = typography.primary[size];
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
    const heading = typography.secondary[size];
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
