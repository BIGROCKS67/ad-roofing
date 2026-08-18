import { cn } from "@/lib/utils";

type BrandDividerProps = {
  label?: string;
  light?: boolean;
  className?: string;
};

export function BrandDivider({ label, light = false, className }: BrandDividerProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className={cn("h-px flex-1", light ? "bg-red/50" : "bg-red/70")} />
      {label && (
        <span
          className={cn(
            "shrink-0 text-[11px] font-semibold uppercase tracking-[0.22em] sm:text-xs",
            light ? "text-white/80" : "text-red-dark"
          )}
        >
          {label}
        </span>
      )}
      <span className={cn("h-px flex-1", light ? "bg-red/50" : "bg-red/70")} />
    </div>
  );
}
