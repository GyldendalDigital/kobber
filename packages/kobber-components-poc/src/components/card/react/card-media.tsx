import { CardMediaType } from "@gyldendal/kobber-components-core/card/card.core.js";
import { cardMediaApi } from "../index.api";
import { useCardContext } from "./card-context";

export interface CardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  mediaType?: CardMediaType;
}

export const CardMedia: React.FC<CardMediaProps> = ({
  mediaType = "img",
  children,
  className,
  ...props
}) => {
  const { direction } = useCardContext();
  const css = cardMediaApi({ direction, mediaType });

  const classes = `${css.root.className}  ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
