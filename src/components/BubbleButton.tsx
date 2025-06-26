import { ButtonHTMLAttributes, ReactNode } from "react";

type BubbleButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "warm";
  size?: "small" | "medium" | "large" | "xl";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  bubbleCount?: number;
} & ButtonHTMLAttributes<HTMLButtonElement>;

// Bubble Button with Floating Particles
const BubbleButton = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  className = "",
  bubbleCount = 3,
  ...props
}: BubbleButtonProps) => {
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
      "bg-linear-to-br from-emerald-400 via-teal-400 to-cyan-400 shadow-emerald-500/30 hover:shadow-emerald-500/40",
    accent:
      "bg-linear-to-br from-violet-400 via-purple-400 to-pink-400 shadow-violet-500/30 hover:shadow-violet-500/40",
    warm: "bg-linear-to-br from-amber-400 via-orange-400 to-red-400 shadow-orange-500/30 hover:shadow-orange-500/40",
  };

  const baseClasses = `
      relative overflow-hidden font-medium
      shadow-lg transform transition-all duration-300 ease-out
      hover:shadow-xl hover:scale-105 hover:-translate-y-1
      active:scale-95 active:translate-y-0
      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0
      group cursor-pointer
    `;

  const bubbles = Array.from({ length: bubbleCount }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    x: Math.random() * 80 + 10,
    y: Math.random() * 80 + 10,
    opacity: Math.random() * 0.4 + 0.2,
    delay: Math.random() * 2,
  }));

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {/* Floating bubbles */}
      <div className="absolute inset-0">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              opacity: bubble.opacity,
              animationDelay: `${bubble.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-linear-to-br from-white/40 via-white/20 to-transparent rounded-inherit"></div>
      <span className="relative z-10 text-white drop-shadow-xs">
        {children}
      </span>
    </button>
  );
};

export default BubbleButton;