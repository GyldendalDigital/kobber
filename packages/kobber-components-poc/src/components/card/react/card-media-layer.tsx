import { cardMediaLayerApi } from "../index.api";
import { useCardContext } from "./card-context";

interface CardMediaLayerProps extends React.HTMLAttributes<HTMLDivElement> {
  base?: boolean;
}

export const CardMediaLayer: React.FC<CardMediaLayerProps> = ({
  base = false,
  children,
  className,
  ...props
}) => {
  const { direction } = useCardContext();
  const css = cardMediaLayerApi({ direction, base });
  const classes = `${css.root.className} ${className}`;
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
