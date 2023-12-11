import { layout } from "@gyldendal/kobber-base/themes/default/tokens.json";

const canvas = document.querySelector<HTMLCanvasElement>("#fluid");
const context = canvas?.getContext("2d");
if (!canvas || !context) throw new Error("No context");
canvas.width = 1600;
canvas.height = 400;

const gap = 20;

const setFont = () => {
  const fontScale = canvas.width / canvas.getBoundingClientRect().width;
  context.font = `${fontScale * 12}px Inter, "Inter Variable"`;
};

const drawBreakPoints = () => {
  setFont();
  context.strokeStyle = "#ccc";
  Object.entries(layout.viewportWidth).forEach(([key, value]) => {
    const x = gap + value.min;
    const y = gap;
    context.fillText(
      `${key} (${value.min}px - ${value.max ? `${value.max}px` : "Infinity"})`,
      x,
      y
    );
    context.moveTo(x, y + gap);
    context.lineTo(x, canvas.height - gap);
  });
  context.stroke();
};

drawBreakPoints();

const drawMinWidth = () => {
  setFont();
  const color = "#ccc";
  const minWidth = layout.minWidth;
  const x = gap + minWidth;
  const y = gap;
  context.fillStyle = color;
  context.fillText(`min-width (${minWidth}px)`, x, y);

  context.beginPath();
  context.moveTo(x, y + gap);
  context.lineTo(x, canvas.height - gap);
  context.lineWidth = 2;

  context.strokeStyle = color;
  context.stroke();
};

drawMinWidth();

export const drawSlope = (
  minLabel: string,
  maxLabel: string,
  min: number,
  max: number
) => {
  setFont();
  const x = 0;
  const y = 100;
  const width = canvas.width;
  const height = canvas.height - y;

  const bottom = height - min * height;
  const top = height - max * height;

  const color = "black";
  context.fillStyle = color;
  context.save();
  context.translate(x, y);

  context.strokeStyle = "black";
  context.beginPath();
  context.moveTo(gap, bottom);
  context.fillText(minLabel, gap, bottom - gap);

  context.lineTo(gap + layout.minWidth, bottom);
  context.fillText(minLabel, gap + layout.minWidth, bottom - gap);

  context.lineTo(gap + layout.viewportWidth.large.min, top);
  context.fillText(maxLabel, gap + layout.viewportWidth.large.min, top - gap);

  const measurement = context.measureText("Infinity");
  context.lineTo(width - gap, top);
  context.fillText(maxLabel, width - gap - measurement.width, top - gap);
  context.stroke();
  context.restore();
};
