import * as React from "react";
import { Button } from "@react-email/components";
import { colors } from "../_utils";

interface HSButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const HSButton: React.FC<HSButtonProps> = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  const baseClasses = "inline-block font-medium text-center no-underline";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-base"
  };
  
  // Professional styling without hover states - using design tokens
  const variantStyles = {
    primary: {
      className: "bg-hs-purple-700 text-white",
      style: {
        backgroundColor: colors.purple[700],
        color: colors.white,
        borderRadius: '6px',
        textDecoration: 'none',
        display: 'inline-block',
        fontWeight: '500',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
      }
    },
    secondary: {
      className: "bg-hs-neutral-100 text-hs-neutral-900",
      style: {
        backgroundColor: colors.gray[100],
        color: colors.gray[900],
        borderRadius: '6px',
        textDecoration: 'none',
        display: 'inline-block',
        fontWeight: '500',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
      }
    },
    outline: {
      className: "bg-white text-hs-purple-700",
      style: {
        backgroundColor: colors.white,
        color: colors.purple[700],
        border: `1px solid ${colors.purple[700]}`,
        borderRadius: '6px',
        textDecoration: 'none',
        display: 'inline-block',
        fontWeight: '500'
      }
    }
  };

  const classes = [
    baseClasses,
    sizeClasses[size],
    variantStyles[variant].className,
    className
  ].filter(Boolean).join(" ");

  return (
    <Button
      href={href}
      className={classes}
      style={variantStyles[variant].style}
    >
      {children}
    </Button>
  );
};