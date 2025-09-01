import { css, unsafeCSS } from "lit";
import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { headingName, headingElements, headingSizes, headingColorLevels } from "./Heading.core";
import { resetHeading } from "../../base/styles/reset.styles";
import { getTypographyStyles } from "../../base/getTypographyStyles";

const createHeadingStyles = () => {
  const heading = component.heading;

  return css`
    .${unsafeCSS(headingName)} {
      ${resetHeading()};

      color: var(${unsafeCSS(heading.text.color.base)});

      font-size: var(--typography-font-size);
      font-family: var(--typography-font-family);
      font-weight: var(--typography-font-weight);
      font-style: var(--typography-font-style);
      font-stretch: var(--typography-font-stretch);
      line-height: var(--typography-line-height);

      ${typographyStyles()}

      /* used in global.css em styling (Lit can't style nested slots) */
      --highlight-color: var(${unsafeCSS(heading.text.color.highlight)});

      &:after {
        content: var(--storybook-unused-style-content);
        background-color: white;
        position: relative;
        left: -4.5em;
      }
      em,
      ::slotted(em) {
        color: var(--highlight-color);
        font-style: normal;
      }
    }
  `;
};

const typographyStyles = () => {
  return css`
    ${unsafeCSS(
      headingElements
        .flatMap(
          element =>
            `&[data-element="${element}"] {${headingColorLevels
              .flatMap(
                colorLevel =>
                  `&[data-color-level="${colorLevel}"] {${headingSizes
                    .flatMap(size => {
                      return `&[data-size="${size}"] {
                  ${getTypographyStyles(element, colorLevel, size)}}`;
                    })
                    .join("")}}`,
              )
              .join("")}}`,
        )
        .join("\n"),
    )}
  `;
};

export const headingStyles = createHeadingStyles();
