import { ButtonHTMLAttributes, ReactNode, useState } from "react";
type FeatureCardProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "warm";
  size?: "small" | "medium" | "large" | "xl";
  onClick?: () => void;
  className?: string;
  title?: string;
  description?: string;
  icon?: ReactNode;
  glowIntensity?: "light" | "medium" | "heavy" | "ultra";
} & ButtonHTMLAttributes<HTMLDivElement>;

// Feature Card with Advanced Effects
const FeatureCard = ({
  title,
  description,
  icon,
  variant = "primary",
  size = "medium",
  glowIntensity = "medium",
  className = "",
  onClick,
  ...props
}: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    small: "p-4 rounded-xl",
    medium: "p-6 rounded-2xl",
    large: "p-8 rounded-3xl",
    xl: "p-10 rounded-3xl",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-br from-blue-500/30 via-cyan-500/30 to-teal-500/30 border-blue-400/50",
    secondary:
      "bg-gradient-to-br from-emerald-500/30 via-teal-500/30 to-cyan-500/30 border-emerald-400/50",
    accent:
      "bg-gradient-to-br from-violet-500/30 via-purple-500/30 to-pink-500/30 border-violet-400/50",
    warm: "bg-gradient-to-br from-amber-500/30 via-orange-500/30 to-red-500/30 border-amber-400/50",
  };

  const glowClasses = {
    light: "shadow-lg",
    medium: "shadow-xl",
    heavy: "shadow-2xl",
    ultra: "shadow-3xl",
  };

  const baseClasses = `
      relative overflow-hidden backdrop-blur-md border
      ${
        glowClasses[glowIntensity]
      } transform transition-all duration-300 ease-out
      hover:scale-[1.03] hover:-translate-y-2 hover:shadow-3xl
      ${onClick ? "cursor-pointer" : ""}
      group
    `;

  return (
    <div
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {/* Multiple glass layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent rounded-inherit pointer-events-none"></div>
      <div className="absolute inset-2 bg-gradient-to-tl from-white/20 via-transparent to-white/30 rounded-inherit pointer-events-none"></div>

      {/* Animated highlight sweep */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
          transform transition-transform duration-1000 ease-out pointer-events-none
          ${isHovered ? "translate-x-full" : "-translate-x-full"}
          skew-x-12
        `}
      ></div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 right-6 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
        <div className="absolute top-8 left-8 w-1 h-1 bg-white/60 rounded-full animate-ping"></div>
        <div className="absolute bottom-6 right-4 w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 space-y-4">
        {icon && (
          <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        )}

        {title && (
          <h3 className="text-xl font-semibold text-gray-800 drop-shadow-sm">
            {title}
          </h3>
        )}

        {description && (
          <p className="text-gray-600 leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;