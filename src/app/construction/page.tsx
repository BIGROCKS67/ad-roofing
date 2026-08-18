import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceList } from "@/components/services/ServiceList";
import { images } from "@/data/images";
import { constructionServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Construction",
  description:
    "Extensions, new builds, renovations, foundations and commercial construction from A&D Roofing & Construction in Bicester.",
};

export default function ConstructionPage() {
  return (
    <>
      <PageHero
        title="Construction"
        subtitle="Extensions, new builds, renovations — not an add-on"
        image={images.constructHero}
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Construction"
            title="The build, from the ground up"
            description="Same team as the roof. Foundations, walls, interiors and the finish — not a different company bolted on at the bottom of the page."
          />
          <ServiceList services={constructionServices} />
        </div>
      </section>
      <CTABanner
        title="Planning a build?"
        description="Extension, renovation or new work. Send the outline and we will tell you how we would run it."
      />
    </>
  );
}
