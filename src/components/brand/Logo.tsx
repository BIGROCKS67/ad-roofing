import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { images } from "@/data/images";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
  linked?: boolean;
};

const heights = { sm: 56, md: 72, lg: 96 };

export function Logo({ size = "sm", className, linked = true }: LogoProps) {
  const h = heights[size];
  const inner = (
    <Image
      src={images.logo}
      alt="A&D Roofing & Construction"
      width={220}
      height={h}
      className="object-contain object-left"
      style={{ height: h, width: "auto" }}
      priority
    />
  );

  const classes = cn("inline-flex items-center touch-manipulation", className);

  if (!linked) {
    return <div className={classes}>{inner}</div>;
  }

  return (
    <Link href="/" className={classes} aria-label="A&D Roofing & Construction home">
      {inner}
    </Link>
  );
}
