import { ButtonHTMLAttributes, ReactNode } from "react";

type GlassButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "warm";
  size?: "small" | "medium" | "large" | "xl";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

// Glass Button with Backdrop Blur
const GlassButton = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  className = "",
  ...props
}: GlassButtonProps) => {
  const sizeClasses = {
    small: "px-4 py-2 text-sm rounded-xl",
    medium: "px-6 py-3 text-base rounded-xl",
    large: "px-8 py-4 text-lg rounded-2xl",
    xl: "px-12 py-6 text-2xl rounded-3xl",
  };

  const variantClasses = {
    primary:
      "bg-linear-to-br from-blue-400/70 via-cyan-400/70 to-teal-400/70 shadow-blue-500/25 hover:shadow-blue-500/35",
    secondary:
      "bg-linear-to-br from-emerald-400/70 via-teal-400/70 to-cyan-400/70 shadow-emerald-500/25 hover:shadow-emerald-500/35",
    accent:
      "bg-linear-to-br from-violet-400/70 via-purple-400/70 to-pink-400/70 shadow-violet-500/25 hover:shadow-violet-500/35",
    warm: "bg-linear-to-br from-amber-400/70 via-orange-400/70 to-red-400/70 shadow-orange-500/25 hover:shadow-orange-500/35",
  };

  const baseClasses = `
      relative overflow-hidden font-medium backdrop-blur-xs border border-white/30
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
      {...props}
    >
      <div className="absolute inset-0 bg-linear-to-br from-white/30 via-white/15 to-transparent rounded-inherit"></div>
      <span className="relative z-10 text-white drop-shadow-xs">
        {children}
      </span>
    </button>
  );
};

export default GlassButton;
