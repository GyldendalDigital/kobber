/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  type FunctionComponent,
  type ReactNode,
  useEffect,
  useRef,
} from "react";
import styles from "./richText.module.css";

interface Props {
  children: ReactNode;
  marginBottom?: boolean;
}

export const RichText: FunctionComponent<Props> = ({
  children,
  marginBottom = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      fixHtml(ref.current);
    }
  }, [ref]);

  return (
    <div
      ref={ref}
      className={`${styles.richText} ${
        marginBottom ? styles.marginBottom : ""
      }`}
    >
      {children}
    </div>
  );
};

// TODO: Find another workaround for css modules not supportorting tag name selectors

const fixHtml = (element: HTMLElement) => {
  element.querySelectorAll("h2").forEach(addClassName(styles.h2));
  element.querySelectorAll("h3").forEach(addClassName(styles.h3));
  element.querySelectorAll("p").forEach(addClassName(styles.p));
};

const addClassName = (className: string) => (element: HTMLElement) => {
  if (!element.className.includes(className)) {
    element.className = `${element.className ?? ""} ${className}`;
  }
};
