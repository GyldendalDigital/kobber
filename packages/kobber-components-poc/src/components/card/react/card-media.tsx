import * as css from "../css/card-media.module.css";
import { useCardContext } from "./card-context";

export interface CardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  mediaType?: "img" | "video" | "audio" | "picture" | "iframe";
}

export const CardMedia: React.FC<CardMediaProps> = ({
  mediaType = "img",
  children,
  ...props
}) => {
  const { direction } = useCardContext();

  const classes = `${css.cardMedia} ${direction ? css[direction] : ""}  ${
    mediaType === "img" || mediaType === "picture" ? css.image : css.media
  }`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
