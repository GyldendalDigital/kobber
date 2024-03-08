import { css } from "lit";

export const levelPrimary = css`
  button.primary {
    --button-color-border: var(--button-color-border-primary);
    --button-color-foreground: var(--button-color-foreground-primary);
    --button-color-background: var(--button-color-background-primary);

    --button-color-border-hover: var(--button-color-border-hover-primary);
    --button-color-foreground-hover: var(--button-color-foreground-hover-primary);
    --button-color-background-hover: var(--button-color-background-hover-primary);
    
    --button-color-border-focus: var(--button-color-border-focus-primary);
    --button-color-foreground-focus: var(--button-color-foreground-focus-primary);
    --button-color-background-focus: var(--button-color-background-focus-primary);
    
    --button-color-border-active: var(--button-color-border-active-primary);
    --button-color-foreground-active: var(--button-color-foreground-active-primary);
    --button-color-background-active: var(--button-color-background-active-primary);
    
    --button-color-border-disabled: var(--button-color-border-disabled-primary);
    --button-color-foreground-disabled: var(--button-color-foreground-disabled-primary);
    --button-color-background-disabled: var(--button-color-background-disabled-primary);

    --button-border-size: 0px;
  }
`;
