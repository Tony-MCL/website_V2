const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function BackgroundWatermark() {
  const svgUrl = `${basePath}/images/mcl-watermark.svg`;

  return (
    <div
      className="watermark-layer"
      aria-hidden="true"
      style={{
        WebkitMaskImage: `url(${svgUrl})`,
        maskImage: `url(${svgUrl})`
      }}
    />
  );
}
