import * as css from "../css/card-text-title.module.css";
import { useCardContext } from "./card-context";

export const CardTextTitle: React.FC<any> = ({ children, ...props }) => {
  const { api } = useCardContext();
  const classes = `${css.cardTextTitle} ${
    api && api().active ? css.active : css.inactive
  }`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
