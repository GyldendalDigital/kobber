import { ComponentProps } from "react";

export const Label = ({ ...props }: ComponentProps<"label">) => {
  return <label {...props} />;
};
