import type { FunctionComponent } from "react";

interface Props {
  children?: number;
  type?: "px";
}

export const UnitFormatter: FunctionComponent<Props> = ({
  children,
  type = "px",
}) => {
  if (children && type === "px") {
    const pixels = children;
    return (
      <>
        {pixels}px ({pixels / 16}rem)
      </>
    );
  }
  return null;
};
