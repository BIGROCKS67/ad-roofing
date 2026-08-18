import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";

export function Intro() {
  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <FadeIn>
          <SectionHeading
            align="left"
            label="Adam & Dan"
            title="Built properly, finished well"
          />
          <div className="space-y-4 text-base leading-relaxed text-mute">
            <p>
              {siteConfig.legalName} has traded since October {siteConfig.established}.
              The company was incorporated as {siteConfig.previousName} and renamed
              in January 2026 when the work outgrew the old name.
            </p>
            <p>
              Owners Adam and Dan bring {siteConfig.experience} years of combined
              experience across roofing and construction. Natural slate, stone,
              concrete tiles, fibre cement, leadwork, foundations, extensions and
              full builds — the right method for the job, not a one-size pitch.
            </p>
            <p>
              We run projects with clear communication and realistic timelines.
              Period restorations, extensions, new roofs, new builds. First visit
              to handover.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="grid grid-cols-2 gap-3">
          <div className="relative aspect-[3/4] overflow-hidden bg-ink">
            <Image
              src={images.aboutRoof}
              alt="A&D on a slate roof"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 24vw, 50vw"
            />
          </div>
          <div className="relative mt-8 aspect-[3/4] overflow-hidden bg-ink">
            <Image
              src={images.foundations}
              alt="A&D laying foundations"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 24vw, 50vw"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
