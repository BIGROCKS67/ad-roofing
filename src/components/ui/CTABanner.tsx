import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

type CTABannerProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
};

export function CTABanner({
  title = "Tell us about the job",
  description = "Roof, build, or both. Call Adam and Dan or send the details — we’ll come back with a straight quote.",
  buttonText = "Request a quote",
  buttonHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-ink py-14 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--red)_0%,_transparent_50%)] opacity-25" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <SectionHeading title={title} description={description} light />
        <Button href={buttonHref} variant="primary" className="mt-6 w-full px-8 sm:mt-8 sm:w-auto">
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
