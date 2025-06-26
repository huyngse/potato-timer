import { ButtonHTMLAttributes, ReactNode } from "react";

type FloatingCardProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "warm";
  size?: "small" | "medium" | "large" | "xl";
  className?: string;
  particleCount?: number;
} & ButtonHTMLAttributes<HTMLDivElement>;

// Floating Card with Particles
const FloatingCard = ({
  children,
  variant = "primary",
  size = "medium",
  particleCount = 8,
  className = "",
  onClick,
  ...props
}: FloatingCardProps) => {
  const sizeClasses = {
    small: "p-4 rounded-xl",
    medium: "p-6 rounded-2xl",
    large: "p-8 rounded-3xl",
    xl: "p-10 rounded-3xl",
  };

  const variantClasses = {
    primary:
      "bg-linear-to-br from-blue-400/25 via-cyan-400/25 to-teal-400/25 border-blue-400/40 shadow-blue-400/30",
    secondary:
      "bg-linear-to-br from-emerald-400/25 via-teal-400/25 to-cyan-400/25 border-emerald-400/40 shadow-emerald-400/30",
    accent:
      "bg-linear-to-br from-violet-400/25 via-purple-400/25 to-pink-400/25 border-violet-400/40 shadow-violet-400/30",
    warm: "bg-linear-to-br from-amber-400/25 via-orange-400/25 to-red-400/25 border-amber-400/40 shadow-amber-400/30",
  };

  const baseClasses = `
      relative overflow-hidden backdrop-blur-xs border
      shadow-2xl transform transition-all duration-500 ease-out
      hover:scale-[1.03] hover:-translate-y-2 hover:shadow-3xl
      ${onClick ? "cursor-pointer" : ""}
    `;

  // Generate random particles
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 90 + 5,
    y: Math.random() * 90 + 5,
    opacity: Math.random() * 0.6 + 0.2,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 2,
  }));

  return (
    <div
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-white rounded-full animate-ping"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Glass overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-white/30 via-white/15 to-transparent rounded-inherit pointer-events-none"></div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default FloatingCard;
