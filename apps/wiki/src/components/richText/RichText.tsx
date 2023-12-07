import type { FunctionComponent, ReactNode } from "react";
import * as styles from "./richText.css.ts";

interface Props {
  children: ReactNode;
  marginBottom?: boolean;
}

export const RichText: FunctionComponent<Props> = ({
  children,
  marginBottom = true,
}) => {
  return (
    <div
      className={`${styles.richText} ${
        marginBottom ? styles.marginBottom : ""
      }`}
    >
      {children}
    </div>
  );
};
