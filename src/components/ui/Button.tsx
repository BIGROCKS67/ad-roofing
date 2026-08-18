import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const variants = {
    primary: "bg-red text-white hover:bg-red-dark",
    secondary: "bg-ink text-white hover:bg-ink-soft",
    outline: "border-2 border-white/80 text-white hover:border-white hover:bg-white/10",
    ghost: "border-2 border-red text-red hover:bg-red hover:text-white",
  };

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-semibold uppercase tracking-wide transition-all duration-300 touch-manipulation",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
