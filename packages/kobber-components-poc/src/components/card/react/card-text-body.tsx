import { cardTextBodyApi } from "../index.api";

export const CardTextBody: React.FC<any> = ({
  children,
  className,
  ...props
}) => {
  const css = cardTextBodyApi();
  const classes = `${css.root.className} ${className}`;
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
