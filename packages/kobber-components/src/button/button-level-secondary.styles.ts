import { css } from "lit";

/** Not finished */
export const levelSecondary = css`
  button.secondary {
    --button-color-border: var(--button-color-border-secondary);
    --button-color-foreground: var(--button-color-foreground-secondary);
    --button-color-background: var(--button-color-background-secondary);

    --button-color-border-hover: var(--button-color-border-hover-secondary);
    --button-color-foreground-hover: var(--button-color-foreground-hover-secondary);
    --button-color-background-hover: var(--button-color-background-hover-secondary);
    
    --button-color-border-focus: var(--button-color-border-focus-secondary);
    --button-color-foreground-focus: var(--button-color-foreground-focus-secondary);
    --button-color-background-focus: var(--button-color-background-focus-secondary);
    
    --button-color-border-active: var(--button-color-border-active-secondary);
    --button-color-foreground-active: var(--button-color-foreground-active-secondary);
    --button-color-background-active: var(--button-color-background-active-secondary);
    
    --button-color-border-disabled: var(--button-color-border-disabled-secondary);
    --button-color-foreground-disabled: var(--button-color-foreground-disabled-secondary);
    --button-color-background-disabled: var(--button-color-background-disabled-secondary);

    --button-border-size: 1px;
  }
`;
