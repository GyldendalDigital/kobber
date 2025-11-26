import { cardTextWrapperApi } from "../index.api";
import { useCardContext } from "./card-context";

export const CardTextWrapper: React.FC<any> = ({
  children,
  className,
  ...props
}) => {
  const { direction } = useCardContext();
  const css = cardTextWrapperApi({ direction });

  const classes = `${css.root.className} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
