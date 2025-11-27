interface Options {
  container: HTMLElement;
}

export const renderIndicators = ({ container }: Options) => {
  document.querySelectorAll("[data-indicator]").forEach(element => {
    element.remove();
  });
  const cards = Array.from(document.querySelectorAll("[data-indicator-target]"));
  const consumerContainerWidthIndicator = createIndicator(false, "Container width");
  const boundaryIndicator = createIndicator(false, "Available width");
  const leftWindowIndicator = createIndicator(false);
  const rightWindowIndicator = createIndicator(false);
  const horizontalIndicator = createIndicator(false);
  const verticalIndicator = createIndicator(true);
  container.appendChild(consumerContainerWidthIndicator.element);
  container.appendChild(boundaryIndicator.element);
  container.appendChild(leftWindowIndicator.element);
  container.appendChild(rightWindowIndicator.element);
  container.appendChild(horizontalIndicator.element);
  container.appendChild(verticalIndicator.element);
  const update = () => {
    const target = cards[0];
    if (!target) {
      return;
    }
    const right = cards[1];
    const rects = cards.map(card => card.getBoundingClientRect());
    const targetRect = target.getBoundingClientRect();
    const consumerRect = container.getBoundingClientRect();
    const rightEdge = Math.max(...rects.map(rect => rect.right));
    const totalWidth =
      Math.max(...rects.map(({ right }) => right)) - Math.min(...rects.map(({ left }) => left));
    consumerContainerWidthIndicator.update({
      value: consumerRect.width,
      top: consumerRect.top,
      left: consumerRect.left,
    });
    boundaryIndicator.update({
      value: totalWidth,
      top: targetRect.top - 32,
      left: targetRect.left,
    });
    leftWindowIndicator.update({
      value: targetRect.left - consumerRect.left,
      top: targetRect.top + targetRect.height / 2,
      left: consumerRect.left,
    });
    rightWindowIndicator.update({
      value: consumerRect.right - rightEdge,
      top: targetRect.top + targetRect.height / 2,
      left: rightEdge,
    });
    right &&
      horizontalIndicator.update({
        value: right.getBoundingClientRect().left - targetRect.right,
        top: targetRect.top + targetRect.height / 2,
        left: targetRect.right,
      });
    verticalIndicator.update({
      value: (rects.find(({ top }) => top > targetRect.bottom)?.top ?? 0) - targetRect.bottom,
      top: targetRect.bottom,
      left: targetRect.left + 24,
    });
  };
  window.addEventListener("resize", update);
  window.addEventListener("scroll", update);
  new ResizeObserver(update).observe(container);
  setTimeout(update, 1);
};

interface UpdateOptions {
  value: number;
  top: number;
  left: number;
}

const createIndicator = (vertical: boolean, label?: string) => {
  const element = document.createElement("div");
  element.setAttribute("data-indicator", "");
  element.style.borderBottom = vertical ? "" : "solid 1px black";
  element.style.borderLeft = vertical ? "solid 1px black" : "";
  element.style.boxSizing = "border-box";
  element.style.fontSize = "12px";
  element.style.display = "flex";
  element.style.alignItems = "center";
  element.style.justifyContent = "center";
  element.style.padding = "4px 2px";
  return {
    element,
    update: ({ value, top, left }: UpdateOptions) => {
      element.style.display = value <= 0 ? "none" : "flex";
      element.innerHTML = `${label ? `${label}: ` : ""}${Math.round(value)}`;
      element.style.position = "fixed";
      element.style.top = `${top}px`;
      element.style.left = `${left}px`;
      element.style.height = vertical ? `${value}px` : "";
      element.style.width = vertical ? "" : `${value}px`;
    },
  };
};
