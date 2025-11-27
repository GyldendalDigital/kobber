import type { HTMLAttributes, ReactNode } from "react";
import { useMemo } from "react";
import * as styles from "./aspectRatio.css";

export const defaultAspectRatio = "16/9";

interface AspectRatioProps extends HTMLAttributes<HTMLDivElement> {
  aspectRatio?: string;
  children?: ReactNode;
}

const cssAspectRatioToPadding = (ratioValue: string): string => {
  const [width, height] = ratioValue.split("/").map(s => s.trim());

  if (process.env.NODE_ENV === "development") {
    if (!width || !height) {
      console.error(
        "Ratio must be in the format of x/y where x and y are valid css values.",
        ratioValue,
        "is not valid.",
      );
      return `calc((9 / 16) * 100%)`; // Default 16/9
    }
  }

  return `calc((${height} / ${width}) * 100%)`;
};

export const AspectRatio = ({
  aspectRatio = defaultAspectRatio,
  children,
  className,
  style,
  ...props
}: AspectRatioProps) => {
  const paddingTop = useMemo(() => cssAspectRatioToPadding(aspectRatio), [aspectRatio]);

  return (
    <div
      {...props}
      className={`${styles.container} ${className || ""}`}
      style={{ ...style, paddingTop }}
    >
      <div className={styles.absolute}>{children}</div>
    </div>
  );
};
