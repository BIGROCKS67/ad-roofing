import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTABanner } from "@/components/ui/CTABanner";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "A&D Roofing & Construction Limited — Adam and Dan, Bicester. Trading since 2015. Previously A&D Roofing Solutions Limited.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About A&D"
        subtitle="Adam and Dan · Bicester · since 2015"
        image={images.aboutRoof}
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <FadeIn>
            <SectionHeading align="left" label="The company" title="The name caught up with the work" />
            <div className="space-y-4 text-base leading-relaxed text-mute">
              <p>
                {siteConfig.legalName} (company no. {siteConfig.companyNumber}) was
                incorporated on 23 October {siteConfig.established} as{" "}
                {siteConfig.previousName}. The legal name changed on 29 January 2026
                to match what the company actually does: roofing and construction.
              </p>
              <p>
                Adam Edmonds and Dan Price run it. Combined, over{" "}
                {siteConfig.experience} years on roofs and on builds. The vans still
                say the old URL — that stays. The website no longer pretends they
                only do tiles.
              </p>
              <p>
                Based at {siteConfig.address}. Covering {siteConfig.serviceAreas.join(", ")}.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.08} className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[3/4] overflow-hidden bg-ink">
              <Image
                src={images.aboutRoof}
                alt="Roofing crew"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 24vw, 50vw"
              />
            </div>
            <div className="relative mt-10 aspect-[3/4] overflow-hidden bg-ink">
              <Image
                src={images.foundations}
                alt="Construction crew"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 24vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="How we work"
            title="Turn up. Do it properly. Come back if the weather stops you."
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "One team",
                text: "The people on the roof are the people on the extension. You are not handed off.",
              },
              {
                title: "Straight talk",
                text: "Realistic timelines. Honest scope. The quote matches the job we intend to do.",
              },
              {
                title: "Finish",
                text: "Walk-through at the end. Tidy site. The reviews are about the rain and the next-day cement for a reason.",
              },
            ].map((v) => (
              <FadeIn key={v.title}>
                <div className="h-full border-l-2 border-red bg-white px-6 py-7">
                  <h3 className="font-display text-xl font-semibold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{v.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
