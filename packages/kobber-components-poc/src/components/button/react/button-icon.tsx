import * as css from "../css/button-icon.css";

export const ButtonIcon: React.FC<any> = ({ children, ...props }) => {
  const classes = `${css.buttonIcon} ${""}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
