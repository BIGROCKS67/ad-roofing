import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import type { Service } from "@/data/services";

export function ServiceList({ services }: { services: Service[] }) {
  return (
    <div className="space-y-16 sm:space-y-24">
      {services.map((service, i) => {
        const reverse = i % 2 === 1;
        return (
          <FadeIn key={service.id}>
            <div
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-dark">
                  0{i + 1}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-mute">{service.description}</p>
                <ul className="mt-6 space-y-2">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm font-medium text-ink">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
