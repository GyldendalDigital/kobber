export const textWrapperName = "kobber-text-wrapper";

export type TextWrapperProps = {
  fullWidth?: boolean;
};

export type TextWrapperClassNames = typeof textWrapperName | "reading-max-width";

export const textWrapperClassNames = ({ fullWidth = false }: TextWrapperProps): TextWrapperClassNames[] => {
  const conditionalClassNames: TextWrapperClassNames[] = [];

  if (!fullWidth) {
    conditionalClassNames.push("reading-max-width");
  }

  return [textWrapperName, ...conditionalClassNames];
};
