import { ButtonHTMLAttributes, ReactNode, useState } from "react";

type FrutigerButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "warm" | "success" | "danger";
  size?: "small" | "medium" | "large" | "xl";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

// Base Frutiger Aero Button Component
const FrutigerButton = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  className = "",
  ...props
}: FrutigerButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    small: "px-4 py-2 text-sm rounded-xl",
    medium: "px-6 py-3 text-base rounded-xl",
    large: "px-8 py-4 text-lg rounded-2xl",
    xl: "px-12 py-6 text-2xl rounded-3xl",
  };

  const variantClasses = {
    primary:
      "bg-linear-to-br from-blue-400 via-cyan-400 to-teal-400 shadow-blue-500/30 hover:shadow-blue-500/40",
    secondary:
      "bg-linear-to-br from-emerald-400/80 via-teal-400/80 to-cyan-400/80 shadow-emerald-500/25 hover:shadow-emerald-500/35 backdrop-blur-xs border border-white/30",
    accent:
      "bg-linear-to-br from-violet-400 via-purple-400 to-pink-400 shadow-violet-500/30 hover:shadow-violet-500/40",
    warm: "bg-linear-to-br from-amber-400 via-orange-400 to-red-400 shadow-orange-500/30 hover:shadow-orange-500/40",
    success:
      "bg-linear-to-br from-green-400 via-emerald-400 to-teal-400 shadow-green-500/30 hover:shadow-green-500/40",
    danger:
      "bg-linear-to-br from-red-400 via-pink-400 to-rose-400 shadow-red-500/30 hover:shadow-red-500/40",
  };

  const baseClasses = `
      relative overflow-hidden font-medium
      shadow-lg transform transition-all duration-300 ease-out
      hover:shadow-xl hover:scale-105 hover:-translate-y-1
      active:scale-95 active:translate-y-0
      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0
      group cursor-pointer
    `;

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {/* Glass reflection overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-white/40 via-white/20 to-transparent rounded-inherit"></div>

      {/* Animated highlight sweep */}
      <div
        className={`
          absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent
          transform transition-transform duration-700 ease-out
          ${isHovered ? "translate-x-full" : "-translate-x-full"}
          skew-x-12
        `}
      ></div>

      <span className="relative z-10 text-white drop-shadow-xs">
        {children}
      </span>
    </button>
  );
};

export default FrutigerButton;
