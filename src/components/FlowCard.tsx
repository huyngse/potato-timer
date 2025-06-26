import { ButtonHTMLAttributes, ReactNode } from "react";

type FlowCardProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "warm";
  size?: "small" | "medium" | "large" | "xl";
  className?: string;
  hover?: boolean;
  flowPattern?: "wave" | "organic" | "flowing";
} & ButtonHTMLAttributes<HTMLDivElement>;

// Organic Flow Card with SVG Background
const FlowCard = ({
  children,
  variant = "primary",
  size = "medium",
  flowPattern = "wave",
  className = "",
  onClick,
  ...props
}: FlowCardProps) => {
  const sizeClasses = {
    small: "p-4 rounded-xl",
    medium: "p-6 rounded-2xl",
    large: "p-8 rounded-3xl",
    xl: "p-10 rounded-3xl",
  };

  const variantClasses = {
    primary:
      "bg-linear-to-br from-blue-400/20 via-cyan-400/20 to-teal-400/20 border-blue-400/30",
    secondary:
      "bg-linear-to-br from-emerald-400/20 via-teal-400/20 to-cyan-400/20 border-emerald-400/30",
    accent:
      "bg-linear-to-br from-violet-400/20 via-purple-400/20 to-pink-400/20 border-violet-400/30",
    warm: "bg-linear-to-br from-amber-400/20 via-orange-400/20 to-red-400/20 border-amber-400/30",
  };

  const flowPatterns = {
    wave: "M0,60 Q25,20 50,60 T100,60 L100,100 L0,100 Z",
    organic: "M0,50 C20,20 40,80 60,50 C80,20 100,80 100,50 L100,100 L0,100 Z",
    flowing: "M0,40 Q20,60 40,40 Q60,20 80,40 Q100,60 100,40 L100,100 L0,100 Z",
  };

  const baseClasses = `
      relative overflow-hidden backdrop-blur-xs border
      shadow-xl transform transition-all duration-500 ease-out
      hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl
      ${onClick ? "cursor-pointer" : ""}
    `;

  return (
    <div
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {/* Organic flowing background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d={flowPatterns[flowPattern]}
            fill="url(#flowCardGradient)"
            className="transform transition-all duration-700 hover:scale-110"
          />
          <defs>
            <linearGradient
              id="flowCardGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Glass overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-white/25 via-white/10 to-transparent rounded-inherit pointer-events-none"></div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default FlowCard;
