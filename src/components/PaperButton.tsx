import { ButtonHTMLAttributes, ReactNode } from "react";

type PaperButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "success" | "danger";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const PaperButton = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  className = "",
  ...props
}: PaperButtonProps) => {
  const baseClasses = `
      inline-flex items-center justify-center
      font-medium rounded-md
      transition-all duration-200 ease-in-out
      focus:outline-hidden focus:ring-2 focus:ring-offset-2
      transform active:scale-95
      shadow-md hover:shadow-lg active:shadow-xs
      disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    `;

  const variants = {
    primary: `
        bg-white text-gray-700 border border-gray-200
        hover:bg-gray-50 hover:-translate-y-0.5
        focus:ring-blue-500
      `,
    secondary: `
        bg-gray-100 text-gray-700 border border-gray-300
        hover:bg-gray-200 hover:-translate-y-0.5
        focus:ring-gray-500
      `,
    accent: `
        bg-blue-50 text-blue-600 border border-blue-200
        hover:bg-blue-100 hover:-translate-y-0.5
        focus:ring-blue-500
      `,
    success: `
        bg-green-50 text-green-600 border border-green-200
        hover:bg-green-100 hover:-translate-y-0.5
        focus:ring-green-500
      `,
    danger: `
        bg-red-50 text-red-600 border border-red-200
        hover:bg-red-100 hover:-translate-y-0.5
        focus:ring-red-500
      `,
  };

  const sizes = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const combinedClasses = `
      ${baseClasses}
      ${variants[variant]}
      ${sizes[size]}
      ${className}
    `
    .replace(/\s+/g, " ")
    .trim();

  return (
    <button
      className={combinedClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default PaperButton;
