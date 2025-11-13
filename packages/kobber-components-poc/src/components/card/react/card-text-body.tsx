import * as css from "../css/card-text-body.css";

export const CardTextBody: React.FC<any> = ({ children, ...props }) => {
  const classes = `${css.cardTextBody}`;
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
