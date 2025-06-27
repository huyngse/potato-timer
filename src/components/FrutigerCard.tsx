import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode, useState } from "react";

type FrutigerCardProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "warm" | "neutral" | "dark";
  size?: "small" | "medium" | "large" | "xl";
  className?: string;
  hover?: boolean;
  glow?: boolean;
} & ButtonHTMLAttributes<HTMLDivElement>;

const FrutigerCard = ({
  children,
  variant = "primary",
  size = "medium",
  hover = true,
  glow = false,
  className = "",
  onClick,
  ...props
}: FrutigerCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

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
    neutral:
      "bg-linear-to-br from-gray-400/20 via-slate-400/20 to-gray-400/20 border-gray-400/30",
    dark: "bg-linear-to-br from-gray-800/40 via-slate-800/40 to-gray-900/40 border-gray-700/50",
  };

  const glowClasses = {
    primary: "shadow-blue-400/20",
    secondary: "shadow-emerald-400/20",
    accent: "shadow-violet-400/20",
    warm: "shadow-amber-400/20",
    neutral: "shadow-gray-400/20",
    dark: "shadow-gray-800/20",
  };

  const baseClasses = `
      relative overflow-hidden backdrop-blur-xs border
      ${
        hover
          ? "transform transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1"
          : ""
      }
      ${
        glow
          ? `shadow-2xl ${glowClasses[variant]} hover:shadow-3xl`
          : "shadow-lg shadow-black/10"
      }
      ${onClick ? "cursor-pointer" : ""}
    `;

  return (
    <div
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {/* Glass reflection overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-white/30 via-white/10 to-transparent rounded-inherit pointer-events-none"></div>

      {/* Animated highlight sweep */}
      {hover && (
        <div
          className={`
            absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent
            transform transition-transform duration-1000 ease-out pointer-events-none
            ${isHovered ? "translate-x-full" : "-translate-x-full"}
            skew-x-12
          `}
        ></div>
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default FrutigerCard;
