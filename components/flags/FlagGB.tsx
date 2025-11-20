// components/flags/FlagGB.tsx
import React from "react";

type FlagProps = {
  className?: string;
};

export function FlagGB({ className }: FlagProps) {
  const blue = "#1e3a72";
  const red = "#b02030";
  const white = "#f7f3ec";

  return (
    <svg
      viewBox="0 0 24 16"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Blå bakgrunn */}
      <rect width="24" height="16" fill={blue} />

      {/* Hvite diagonaler */}
      <g stroke={white} strokeWidth={3}>
        <line x1="0" y1="0" x2="24" y2="16" />
        <line x1="24" y1="0" x2="0" y2="16" />
      </g>

      {/* Røde diagonaler */}
      <g stroke={red} strokeWidth={1.5}>
        <line x1="0" y1="0" x2="24" y2="16" />
        <line x1="24" y1="0" x2="0" y2="16" />
      </g>

      {/* Hvitt kors */}
      <rect x="0" y="6" width="24" height="4" fill={white} />
      <rect x="10" y="0" width="4" height="16" fill={white} />

      {/* Rødt kors */}
      <rect x="0" y="7" width="24" height="2" fill={red} />
      <rect x="11" y="0" width="2" height="16" fill={red} />
    </svg>
  );
}
