import * as icons from "@gyldendal/kobber-icons/react";
import type { IconType } from "@gyldendal/kobber-icons/symbols/kobber-icons-types.ts";
import type { ReactNode } from "react";
import * as css from "../css/button-icon.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  icon?: IconType;
  children?: ReactNode;
}

const formatIconName = (name: string) => {
  const rest = name.split("-", 2)[1] ?? name;
  return rest
    .split("_")
    .map(s => s[0]?.toUpperCase() + s.slice(1))
    .join("");
};

export const ButtonIcon: React.FC<Props> = ({ children, icon, ...props }) => {
  const classes = `${css.buttonIcon} ${props.className}`;

  // biome-ignore lint/suspicious/noExplicitAny: <>
  let Icon: any;
  if (icon) {
    // @ts-expect-error
    // biome-ignore lint/performance/noDynamicNamespaceImportAccess: <>
    Icon = icons[formatIconName(icon)];
  }

  return (
    <div className={classes} {...props}>
      {Icon && <Icon />}
      {!Icon && children}
    </div>
  );
};
