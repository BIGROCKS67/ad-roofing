import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredHome } from "@/data/services";

export function FeaturedServices() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What we do"
          title="Roofing and construction, equally"
          description="Six of the jobs we actually take. Full lists live on the Roofing and Construction pages."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredHome.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.05}>
              <Link
                href={service.pillar === "roofing" ? "/roofing" : "/construction"}
                className="group relative block aspect-[4/3] overflow-hidden bg-ink"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red">
                    {service.pillar}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-white/70">{service.summary}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-white">
                    View
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
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
