export const reviewName = "kobber-review";

export const reviewClassNames = ({ theme = "natural" }: ReviewProps): ReviewClassNames[] => {
  const conditionalClassNames: ReviewClassNames[] = [];

  return [reviewName, theme, ...conditionalClassNames];
};

export interface ReviewProps {
  theme?: ReviewTheme;
}

export type ReviewClassNames = typeof reviewName | ReviewTheme;

type ReviewTheme = "natural" | "fantasy" | "thriller";

export const reviewThemes: ReviewTheme[] = Object.keys({}) as ReviewTheme[];
