import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { workItems } from "@/data/work";

export function WorksPreview() {
  const preview = workItems.slice(0, 6);

  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our works"
          title="Roof jobs and build jobs"
          description="A selection of recent projects and finishes — not an unlabelled camera roll."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((item, i) => (
            <FadeIn key={item.id} delay={(i % 3) * 0.05}>
              <Link href="/work" className="group block overflow-hidden bg-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="border-t-2 border-red px-5 py-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-red-dark">
                    {item.pillar}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/work" variant="ghost">
            All work
          </Button>
        </div>
      </div>
    </section>
  );
}
