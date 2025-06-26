import { ButtonHTMLAttributes, ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "warm" | "neutral";
  size?: "small" | "medium" | "large" | "xl";
  className?: string;
  intensity?: "light" | "medium" | "heavy" | "ultra";
} & ButtonHTMLAttributes<HTMLDivElement>;

// Glass Card with Heavy Blur Effect
const GlassCard = ({
  children,
  variant = "primary",
  size = "medium",
  intensity = "medium",
  className = "",
  onClick,
  ...props
}: GlassCardProps) => {
  const sizeClasses = {
    small: "p-4 rounded-xl",
    medium: "p-6 rounded-2xl",
    large: "p-8 rounded-3xl",
    xl: "p-10 rounded-3xl",
  };

  const intensityClasses = {
    light: "backdrop-blur-sm bg-white/10",
    medium: "backdrop-blur-md bg-white/15",
    heavy: "backdrop-blur-lg bg-white/20",
    ultra: "backdrop-blur-xl bg-white/25",
  };

  const variantClasses = {
    primary: "border-blue-400/40 shadow-blue-400/20",
    secondary: "border-emerald-400/40 shadow-emerald-400/20",
    accent: "border-violet-400/40 shadow-violet-400/20",
    warm: "border-amber-400/40 shadow-amber-400/20",
    neutral: "border-gray-400/40 shadow-gray-400/20",
  };

  const baseClasses = `
      relative overflow-hidden border
      shadow-xl transform transition-all duration-300 ease-out
      hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl
      ${onClick ? "cursor-pointer" : ""}
    `;

  return (
    <div
      className={`${baseClasses} ${sizeClasses[size]} ${intensityClasses[intensity]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {/* Multiple glass layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent rounded-inherit pointer-events-none"></div>
      <div className="absolute inset-2 bg-gradient-to-tl from-white/20 via-transparent to-white/30 rounded-inherit pointer-events-none"></div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassCard;
