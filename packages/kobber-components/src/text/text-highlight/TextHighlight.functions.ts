export interface TextHighlightProps {
  variant?: "a" | "b";
}

export const customElementName = "kobber-text-highlight";

const classNames = ({ variant = "a" }: TextHighlightProps) => {
  return [customElementName, variant === "a" ? "variant-a" : "variant-b"];
};

const classNamesFromCssModule = (cssModule: Record<string, string>, { variant }: TextHighlightProps) =>
  classNames({ variant }).map(x => cssModule[x]);

const onClick = () => console.log("highlight clicked");

export const textHighlightFunctions = {
  classNames,
  classNamesFromCssModule,
  onClick,
};
