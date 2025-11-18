export function BackgroundWatermark() {
  return (
    <div className="watermark-layer" aria-hidden="true">
      <img
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/mcl-watermark.svg`}
        alt=""
        className="watermark-svg"
      />
    </div>
  );
}
