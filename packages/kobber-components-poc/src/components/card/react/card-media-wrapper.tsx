import * as css from "../css/card-media-wrapper.css";
import { useCardContext } from "./card-context";

export const CardMediaWrapper: React.FC<any> = ({ children, ...props }) => {
  const { direction } = useCardContext();
  const classes = `${css.cardMediaWrapper} ${
    direction === "horizontal" ? css.horizontal : ""
  }`;
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
