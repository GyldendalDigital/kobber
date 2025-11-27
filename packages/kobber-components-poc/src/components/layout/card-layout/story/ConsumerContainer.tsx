import { type ReactNode, useEffect, useRef } from "react";
import { renderIndicators } from "./renderIndicators";

interface Props {
  showIndicators: boolean;
  containerWidth: number;
  children: ReactNode;
}

export const ConsumerContainer = ({ showIndicators, containerWidth, children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    if (showIndicators) {
      renderIndicators({ container: ref.current });
    }
  }, [showIndicators]);
  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        display: "grid",
        width: containerWidth === 0 ? "auto" : `${containerWidth / 16}rem`,
        justifyItems: "center",
        paddingTop: 64,
        outline: containerWidth === 0 ? "none" : "dotted 1px #888",
      }}
    >
      {children}
    </div>
  );
};
