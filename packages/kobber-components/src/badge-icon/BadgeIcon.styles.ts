import { component } from "@gyldendal/kobber-base/themes/default/tokens.css-variables";
import { css, unsafeCSS } from "lit";
import { BadgeIconClassNames, badgeIconName } from "./BadgeIcon.core";

const createBadgeIconStyles = () => {
  const labelIcon = component["label-icon"];

  return css`
    .${unsafeCSS(badgeIconName satisfies BadgeIconClassNames)} {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  `;
};

const badgeIconVariableStyles = () => {
  const labelIcon = component["label-icon"];

  return css`
    ${unsafeCSS(badgeIconName satisfies BadgeIconClassNames)} {
    }
  `;
};

export const badgeIconStyles = [createBadgeIconStyles(), badgeIconVariableStyles()];
