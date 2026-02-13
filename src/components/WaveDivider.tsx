"use client";

interface WaveDividerProps {
  variant?: 1 | 2 | 3 | 4 | 5;
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({
  variant = 1,
  flip = false,
  className = "",
}: WaveDividerProps) {
  const paths: Record<number, string> = {
    1: "M0,64 C120,90 240,30 360,64 C480,98 600,40 720,64 C840,88 960,50 1080,64 C1200,78 1320,55 1440,64 L1440,0 L0,0 Z",
    2: "M0,48 C180,80 360,20 540,56 C720,92 900,32 1080,56 C1260,80 1350,48 1440,48 L1440,0 L0,0 Z",
    3: "M0,56 C160,72 320,24 480,48 C640,72 800,36 960,56 C1120,76 1280,40 1440,56 L1440,0 L0,0 Z",
    4: "M0,40 C200,76 400,28 600,52 C800,76 1000,32 1200,52 C1320,64 1400,44 1440,40 L1440,0 L0,0 Z",
    5: "M0,52 C140,68 280,32 420,52 C560,72 700,36 840,52 C980,68 1120,40 1260,52 C1350,60 1410,48 1440,52 L1440,0 L0,0 Z",
  };

  return (
    <div
      className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-12 sm:h-16 md:h-20"
      >
        <defs>
          <linearGradient id={`wave-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E8E0F0" />
            <stop offset="50%" stopColor="#D0D8F0" />
            <stop offset="100%" stopColor="#D8EAF5" />
          </linearGradient>
        </defs>
        <path d={paths[variant]} fill={`url(#wave-grad-${variant})`} />
      </svg>
    </div>
  );
}
