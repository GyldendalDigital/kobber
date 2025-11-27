import {
  type HTMLAttributes,
  type ReactNode,
  type RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

interface PlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  index: number;
  transparent?: boolean;
  span: number;
  children: ReactNode;
}

export const Placeholder = ({
  children,
  index,
  transparent = false,
  span,
  ...props
}: PlaceholderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const dimensions = useResizeObserver(ref);
  return (
    <div
      {...props}
      ref={ref}
      data-indicator-target
      style={{
        display: "grid",
        gridTemplateRows: "auto minmax(0, 1fr)",
        alignItems: "start",
        backgroundColor: transparent ? undefined : "#eee",
        border: transparent ? "dashed 1px" : undefined,
        wordBreak: "break-word",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
          fontSize: 12,
        }}
      >
        <div>
          {index + 1} | Span: {span}
        </div>
        <div>
          {Math.round(dimensions.width)}x{Math.round(dimensions.height)}
        </div>
      </div>
      <div
        style={{
          padding: "1rem",
          height: "100%",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
};

const useResizeObserver = (ref: RefObject<HTMLElement | null>) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);
  return dimensions;
};
