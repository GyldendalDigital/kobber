import { useState, type FunctionComponent, type ReactNode } from "react";
import styles from "./categoryHeader.module.css";
import { CodeFormatter } from "../codeFormatter/CodeFormatter";

interface Props {
  heading: ReactNode;
  code?: string;
}

export const CategoryHeader: FunctionComponent<Props> = ({ heading, code }) => {
  const [codeIsOpen, setCodeIsOpen] = useState(false);
  console.log("codeIsOpen", codeIsOpen);
  return (
    <div className={styles.categoryHeader}>
      <div className={styles.top}>
        <h2 className="kobber-typography-heading-xl">{heading}</h2>
        {code && (
          <button
            type="button"
            className={`${styles.codeToggleButton} kobber-typography-action-button`}
            onClick={() => setCodeIsOpen(!codeIsOpen)}
            aria-expanded={codeIsOpen}
          >
            Source {codeIsOpen ? "↑" : "↓"}
          </button>
        )}
      </div>
      {code && (
        <div className={`${styles.code} ${codeIsOpen ? styles.codeOpen : ""}`}>
          <CodeFormatter code={code} language="json" />
        </div>
      )}
    </div>
  );
};
