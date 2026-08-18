import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTABanner } from "@/components/ui/CTABanner";
import { images } from "@/data/images";
import { workItems } from "@/data/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Roofing and construction projects by A&D Roofing & Construction — extensions, roofs, foundations and renovations around Bicester.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        title="Our work"
        subtitle="Roof, build, and jobs that are both"
        image={images.extensionSkylights}
      />
      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Portfolio"
            title="Recent projects and finishes"
            description="Captioned from the photos already on the old site. Named jobs can replace these titles when Adam and Dan send them."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workItems.map((item, i) => (
              <FadeIn key={item.id} delay={(i % 3) * 0.05}>
                <article className="flex h-full flex-col overflow-hidden bg-white">
                  <div className="relative aspect-[16/11] overflow-hidden bg-ink">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col border-t-2 border-red px-5 py-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-red-dark">
                      {item.pillar}
                    </p>
                    <h2 className="mt-2 font-display text-xl font-semibold text-ink">
                      {item.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-mute">{item.summary}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <CTABanner title="Like the standard?" />
    </>
  );
}
