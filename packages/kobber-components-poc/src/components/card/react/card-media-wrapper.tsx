import * as css from "../css/card-media-wrapper.module.css";

export const CardMediaWrapper: React.FC<any> = ({ children, ...props }) => {
  const classes = css.cardMediaWrapper;
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
