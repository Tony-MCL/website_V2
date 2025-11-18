const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function BackgroundWatermark() {
  return (
    <div className="watermark-layer" aria-hidden="true">
      <img
        src={`${basePath}/images/mcl-watermark.png`}
        alt=""
      />
    </div>
  );
}
