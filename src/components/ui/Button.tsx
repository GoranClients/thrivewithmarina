import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "dark" | "green" | "gold";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-marsh hover:bg-vista-white focus-visible:ring-white/60",
  secondary:
    "bg-vista-white text-marsh hover:bg-white focus-visible:ring-marsh/20",
  dark: "bg-marsh text-white hover:bg-green focus-visible:ring-marsh/40",
  green:
    "bg-green text-vista-white hover:bg-marsh focus-visible:ring-green/40",
  gold: "bg-burlywood text-marsh hover:bg-shadow-gold focus-visible:ring-burlywood/40",
};

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  href?: string;
  /** Breathiva underline CTA; default is pill (original site style). */
  showLine?: boolean;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  href,
  showLine = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const pillClasses = `inline-flex items-center justify-center rounded-full px-10 py-4 text-lg font-medium tracking-[-0.02em] transition-colors focus-visible:outline-none focus-visible:ring-2 ${variantClasses[variant]} ${className}`;

  const breathivaClasses = `group relative inline-flex flex-col items-center justify-center gap-2 px-8 py-3 transition-colors focus-visible:outline-none focus-visible:ring-2 ${variantClasses[variant]} ${className}`;

  const content = showLine ? (
    <>
      <span className="rt-button-text">{children}</span>
      <span
        className="h-px w-full bg-current opacity-30 transition-opacity group-hover:opacity-100"
        aria-hidden
      />
    </>
  ) : (
    children
  );

  const classes = showLine ? breathivaClasses : pillClasses;

  if (href) {
    const isExternal = href.startsWith("http://") || href.startsWith("https://");

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}
