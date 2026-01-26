import * as React from "react";
import { cn } from "@/app/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
};

export const Button = ({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) => {
  const variantClasses: Record<string, string> = {
    default: "bg-blue-600 text-white shadow-xs hover:bg-blue-700",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    ghost: "bg-transparent text-gray-800 hover:bg-gray-100",
    link: "text-blue-600 underline hover:text-blue-700",
  };

  const sizeClasses: Record<string, string> = {
    default: "h-9 px-6 py-2",
    sm: "h-8 px-3 py-1.5",
    lg: "h-10 px-6 py-3",
    icon: "h-9 w-9 p-0",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all disabled:opacity-50 disabled:pointer-events-none",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
};
