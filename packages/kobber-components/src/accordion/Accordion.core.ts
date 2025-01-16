export const accordionName = "kobber-accordion";

export type AccordionProps = {
  expanded?: boolean;
  onToggle?: () => void;
  headingLevel?: AccordionAriaHeadingLevel;
};

export type AccordionAriaHeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type AccordionClassNames = typeof accordionName | "accordion-content";

export const accordionClassNames = (...classNames: AccordionClassNames[]) => classNames?.join(" ");
