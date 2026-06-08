import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "dark" | "green";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-pudra-500 hover:bg-pudra-100 focus-visible:ring-white/60",
  secondary:
    "bg-pudra-100 text-pudra-500 hover:bg-white focus-visible:ring-pudra-500/20",
  dark: "bg-pudra-500 text-white hover:bg-black focus-visible:ring-pudra-500/40",
  green:
    "bg-green text-pudra-100 hover:bg-green-secondary focus-visible:ring-green/40",
};

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  href?: string;
};

export function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-10 py-4 text-lg font-medium tracking-[-0.02em] transition-colors focus-visible:outline-none focus-visible:ring-2 ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
