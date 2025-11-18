import Image from "next/image";

export function BackgroundWatermark() {
  return (
    <div className="watermark-layer" aria-hidden="true">
      <Image
        src="/images/mcl-watermark.png"
        alt=""
        width={640}
        height={640}
      />
    </div>
  );
}
