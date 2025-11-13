import * as css from "../css/card-media-layer.css";
import { useCardContext } from "./card-context";

interface CardMediaLayerProps extends React.HTMLAttributes<HTMLDivElement> {
  base?: boolean;
}

export const CardMediaLayer: React.FC<CardMediaLayerProps> = ({
  base,
  children,
  ...props
}) => {
  const { direction } = useCardContext();

  const classes = `${css.cardMediaLayer} ${
    !base ? (direction === "vertical" ? css.vertical : css.horizontal) : ""
  }`;
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
