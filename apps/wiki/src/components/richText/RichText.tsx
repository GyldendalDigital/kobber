import type { FunctionComponent, ReactNode } from "react";
import * as styles from "./richText.css.ts";

interface Props {
  children: ReactNode;
}

export const RichText: FunctionComponent<Props> = ({ children }) => {
  return <div className={styles.richText}>{children}</div>;
};
