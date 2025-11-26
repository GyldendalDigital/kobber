import * as css from "../css/button-text.css";

export const ButtonText: React.FC<any> = ({ children, ...props }) => {
  const classes = `${css.buttonText} ${""}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
