interface WoodWingImageProps {
  asset: {
    previewUrl: string;
    hotspot?: { x: number; y: number };
    crop?: { top: number; bottom: number; left: number; right: number };
  };
  width?: number;
  height?: number;
  className?: string;
}

export function WoodWingImage({ asset, width, height, className }: WoodWingImageProps) {
  const { previewUrl, hotspot, crop } = asset;

  // Calculate the focal point based on hotspot
  const focalPoint = hotspot
    ? {
        x: hotspot.x * 100,
        y: hotspot.y * 100,
      }
    : { x: 50, y: 50 };

  // Calculate the crop area
  const cropStyle = crop
    ? {
        objectPosition: `${crop.left}% ${crop.top}%`,
        width: `${100 - crop.left - crop.right}%`,
        height: `${100 - crop.top - crop.bottom}%`,
      }
    : {};

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: width || "100%",
        height: height || "auto",
        overflow: "hidden",
      }}
    >
      <img
        src={previewUrl}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: `${focalPoint.x}% ${focalPoint.y}%`,
          ...cropStyle,
        }}
      />
    </div>
  );
}
