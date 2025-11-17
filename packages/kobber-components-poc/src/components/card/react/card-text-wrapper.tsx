import * as css from "../css/card-text-wrapper.css";
import { useCardContext } from "./card-context";

export const CardTextWrapper: React.FC<any> = ({ children, ...props }) => {
  const { direction } = useCardContext();
  const classes = `${css.cardTextWrapper} ${
    direction === "horizontal" ? css.horizontal : ""
  }`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
