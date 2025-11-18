const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function BackgroundWatermark() {
  return (
    <div className="watermark-layer" aria-hidden="true">
      <img
        src={`${basePath}/images/mcl-watermark.svg`}
        alt=""
        className="watermark-image"
      />
    </div>
  );
}
