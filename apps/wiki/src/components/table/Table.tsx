import type { FunctionComponent, ReactNode } from "react";
import styles from "./table.module.css";
import typographyStyles from "@gyldendal/kobber-base/themes/default/typography.module.css";

interface Props {
  children?: ReactNode;
}

export const Table: FunctionComponent<Props> = ({ children }) => (
  <div className={styles.tableContainer}>
    <table className={styles.table}>{children}</table>
  </div>
);

export const Th: FunctionComponent<React.JSX.IntrinsicElements["th"]> = ({
  children,
  className = "",
  ...props
}) => (
  <th {...props} className={`${typographyStyles.headingXs} ${className}`}>
    {children}
  </th>
);

type TdProps = React.JSX.IntrinsicElements["td"] & {
  wide?: boolean;
  noWrap?: boolean;
  responsiveLabel?: string;
};

export const Td: FunctionComponent<TdProps> = ({
  children,
  className = "",
  wide = false,
  noWrap = false,
  responsiveLabel,
  ...props
}) => (
  <td
    {...props}
    className={[
      typographyStyles.contentBody,
      wide ? styles.tdWide : "",
      noWrap ? styles.tdNoWrap : "",
      className,
    ].join(" ")}
  >
    <span className={styles.responsiveLabel}>{responsiveLabel}</span>
    {children}
  </td>
);
