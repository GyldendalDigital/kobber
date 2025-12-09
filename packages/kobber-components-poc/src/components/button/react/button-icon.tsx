import * as icons from "@gyldendal/kobber-icons/react";
import { type ButtonIconProps, buttonIconApi, formatIconName } from "../index.api";

interface Props extends ButtonIconProps, React.HTMLAttributes<HTMLDivElement> {}

export const ButtonIcon: React.FC<Props> = ({ children, icon, ...props }) => {
  const buttonIconCss = buttonIconApi();
  const classes = `${buttonIconCss.root.className} ${props.className}`;

  // biome-ignore lint/suspicious/noExplicitAny: <>
  let Icon: any;
  if (icon) {
    // @ts-expect-error
    // biome-ignore lint/performance/noDynamicNamespaceImportAccess: <>
    Icon = icons[formatIconName(icon)];
  }

  return (
    <div className={classes} {...props}>
      {Icon && <Icon size="large" />}
      {!Icon && children}
    </div>
  );
};
