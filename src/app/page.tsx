import { Hero } from "@/components/home/Hero";
import { TwoDoors } from "@/components/home/TwoDoors";
import { Intro } from "@/components/home/Intro";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { WorksPreview } from "@/components/home/WorksPreview";
import { Process } from "@/components/home/Process";
import { WhyUs } from "@/components/home/WhyUs";
import { Testimonials } from "@/components/home/Testimonials";
import { Instagram } from "@/components/home/Instagram";
import { CTABanner } from "@/components/ui/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TwoDoors />
      <Intro />
      <FeaturedServices />
      <WorksPreview />
      <Process />
      <WhyUs />
      <Testimonials />
      <Instagram />
      <CTABanner />
    </>
  );
}
