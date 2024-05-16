import { css } from "lit";

export default css`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  .form-control--has-label .form-control__label {
    display: inline-block;
  }

  .form-control--has-help-text .form-control__help-text {
    display: inline-block;
  }
`;
