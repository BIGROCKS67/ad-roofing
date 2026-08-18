import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { images } from "@/data/images";

const doors = [
  {
    href: "/roofing",
    label: "01",
    title: "Roofing",
    text: "Install, replace, leadwork, chimneys, gutters, emergency call-outs and period roofs.",
    image: images.aboutRoof,
    alt: "A&D crew on a slate roof",
  },
  {
    href: "/construction",
    label: "02",
    title: "Construction",
    text: "Extensions, new builds, renovations, foundations and commercial work — same standard.",
    image: images.foundations,
    alt: "A&D laying a beam-and-block floor",
  },
] as const;

export function TwoDoors() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-dark">
            Two sides of the same company
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Not roofing with construction tacked on
          </h2>
          <p className="mt-3 text-base text-mute sm:text-lg">
            Pick the door that matches the job. Plenty of work is both — we do
            that too.
          </p>
        </FadeIn>

        <div className="grid gap-5 lg:grid-cols-2">
          {doors.map((door, i) => (
            <FadeIn key={door.href} delay={i * 0.08}>
              <Link
                href={door.href}
                className="group relative block aspect-[16/11] overflow-hidden bg-ink sm:aspect-[16/10]"
              >
                <Image
                  src={door.image}
                  alt={door.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/15" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
                    {door.label}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
                    {door.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
                    {door.text}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white">
                    View {door.title.toLowerCase()}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
