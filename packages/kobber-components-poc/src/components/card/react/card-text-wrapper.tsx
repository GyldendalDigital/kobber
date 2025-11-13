import * as css from "../css/card-text-wrapper.css";

export const CardTextWrapper: React.FC<any> = ({ children, ...props }) => {
  const classes = css.cardTextWrapper;
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
