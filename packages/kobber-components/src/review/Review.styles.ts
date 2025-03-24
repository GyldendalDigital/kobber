import { css, unsafeCSS } from "lit";
import { ReviewClassNames } from "./Review.core";

const createReviewStyles = () => {
  const review = {};

  return css`
    .${unsafeCSS("kobber-review" satisfies ReviewClassNames)} {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  `;
};
