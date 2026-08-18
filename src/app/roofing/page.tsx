import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceList } from "@/components/services/ServiceList";
import { images } from "@/data/images";
import { roofingServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Roofing",
  description:
    "Roof installation, replacement, leadwork, chimneys, gutters, emergency repairs and period roofs from A&D Roofing & Construction in Bicester.",
};

export default function RoofingPage() {
  return (
    <>
      <PageHero
        title="Roofing"
        subtitle="Install, repair, restore — the work that built the company"
        image={images.hero}
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Roofing"
            title="The full roof, done properly"
            description="From a cracked tile in the rain to a full slate replacement. Same crew, same standard as the build work."
          />
          <ServiceList services={roofingServices} />
        </div>
      </section>
      <CTABanner
        title="Need the roof looking at?"
        description="Emergency or planned — tell us what you are seeing and we will come back straight."
      />
    </>
  );
}
