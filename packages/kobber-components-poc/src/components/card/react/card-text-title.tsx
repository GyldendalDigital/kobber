import * as css from "../css/card-text-title.css";
import { useCardContext } from "./card-context";

export const CardTextTitle: React.FC<any> = ({ children, ...props }) => {
  const { api } = useCardContext();
  const classes = `${css.cardTextTitle} ${
    api && api().active ? css.active : ""
  }`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
