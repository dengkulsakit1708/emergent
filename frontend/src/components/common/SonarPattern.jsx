import React from "react";

// Subtle sonar/bathymetry SVG pattern used as background accent
export const SonarLines = ({ className = "", opacity = 0.08 }) => (
  <svg
    aria-hidden="true"
    className={className}
    width="100%"
    height="100%"
    style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity }}
    preserveAspectRatio="none"
  >
    <defs>
      <pattern id="sonar-lines" width="160" height="160" patternUnits="userSpaceOnUse">
        <path d="M0 80 Q40 40, 80 80 T160 80" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M0 120 Q40 80, 80 120 T160 120" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M0 40 Q40 0, 80 40 T160 40" fill="none" stroke="currentColor" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#sonar-lines)" />
  </svg>
);

export const SonarGrid = ({ className = "", opacity = 0.05 }) => (
  <div
    aria-hidden="true"
    className={`absolute inset-0 bg-bathymetry pointer-events-none ${className}`}
    style={{ opacity }}
  />
);

export const SonarPing = () => (
  <span className="relative inline-flex h-2.5 w-2.5">
    <span className="sonar-ping absolute inline-flex h-full w-full rounded-full" />
    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00AEEF]" />
  </span>
);
