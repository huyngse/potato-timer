import { ButtonHTMLAttributes, ReactNode } from "react";

type FlowButtonProps = {
    children: ReactNode;
    variant?: "primary" | "secondary" | "accent" | "warm";
    size?: "small" | "medium" | "large" | "xl";
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
  } & ButtonHTMLAttributes<HTMLButtonElement>;

// Organic Flow Button with SVG Overlay
const FlowButton = ({ 
    children, 
    variant = 'primary', 
    size = 'medium', 
    onClick, 
    disabled = false,
    className = '',
    ...props 
  }: FlowButtonProps) => {
    const sizeClasses = {
      small: 'px-4 py-2 text-sm rounded-xl',
      medium: 'px-6 py-3 text-base rounded-xl',
      large: 'px-8 py-4 text-lg rounded-2xl',
      xl: 'px-12 py-6 text-2xl rounded-3xl'
    };
  
    const variantClasses = {
      primary: 'bg-linear-to-br from-blue-400 via-cyan-400 to-teal-400 shadow-blue-500/30 hover:shadow-blue-500/40',
      secondary: 'bg-linear-to-br from-emerald-400 via-teal-400 to-cyan-400 shadow-emerald-500/30 hover:shadow-emerald-500/40',
      accent: 'bg-linear-to-br from-violet-400 via-purple-400 to-pink-400 shadow-violet-500/30 hover:shadow-violet-500/40',
      warm: 'bg-linear-to-br from-amber-400 via-orange-400 to-red-400 shadow-orange-500/30 hover:shadow-orange-500/40'
    };
  
    const baseClasses = `
      relative overflow-hidden font-medium
      shadow-lg transform transition-all duration-500 ease-out
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
        {/* Organic flowing overlay */}
        <div className="absolute inset-0 opacity-40">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path 
              d="M0,50 Q25,20 50,50 T100,50 L100,100 L0,100 Z" 
              fill="url(#flowGradient)"
              className="transform transition-all duration-700 group-hover:scale-110"
            />
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <span className="relative z-10 text-white drop-shadow-xs">
          {children}
        </span>
      </button>
    );
  };

  export default FlowButton;