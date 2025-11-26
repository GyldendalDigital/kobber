import { cardMediaWrapperApi } from "../index.api";
import { useCardContext } from "./card-context";

export const CardMediaWrapper: React.FC<any> = ({
  children,
  className,
  ...props
}) => {
  const { direction } = useCardContext();
  const css = cardMediaWrapperApi({ direction });
  const classes = `${css.root.className} ${className}`;
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
