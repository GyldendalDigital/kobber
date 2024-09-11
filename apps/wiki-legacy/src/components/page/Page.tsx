import type { FunctionComponent, ReactNode } from "react";
import classNames from "./page.module.css";
import { CategoryHeader } from "../categoryHeader/CategoryHeader";

interface Props {
  children?: ReactNode;
  code?: string;
  heading: string;
}

export const Page: FunctionComponent<Props> = ({ children, heading, code }) => (
  <div className={classNames.page}>
    <CategoryHeader heading={heading} code={code} />
    <div className={classNames.content}>{children}</div>
  </div>
);
