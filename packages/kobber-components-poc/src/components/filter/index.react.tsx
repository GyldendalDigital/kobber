import type { HTMLAttributes, ReactNode } from "react";
import { filterApi, getDisplayCount } from "./index.api";

type Args = Parameters<typeof filterApi>[0];

interface Props extends HTMLAttributes<HTMLButtonElement>, Args {
  children?: ReactNode;
}

export const Filter = ({ children, count, maxCount, ...props }: Props) => {
  const { root, counter } = filterApi(props);
  const displayCount = getDisplayCount(count, maxCount);
  return (
    <button type="button" {...props} className={root.className}>
      {children}
      <div className={counter.className}>{displayCount}</div>
    </button>
  );
};
