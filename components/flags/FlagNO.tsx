// components/flags/FlagNO.tsx
import React from "react";

type FlagProps = {
  className?: string;
};

export function FlagNO({ className }: FlagProps) {
  return (
    <svg
      viewBox="0 0 24 16"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Bakgrunn – rød */}
      <rect width="24" height="16" fill="#b02030" />
      {/* Hvitt kors */}
      <rect x="0" y="6" width="24" height="4" fill="#f7f3ec" />
      <rect x="8" y="0" width="4" height="16" fill="#f7f3ec" />
      {/* Blått kors */}
      <rect x="0" y="7" width="24" height="2" fill="#1b3f7a" />
      <rect x="9" y="0" width="2" height="16" fill="#1b3f7a" />
    </svg>
  );
}
