import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    n: "01",
    title: "Consultation and assessment",
    text: "We look at the job properly — roof, build, or both — and tell you what it actually needs. No scare quotes.",
  },
  {
    n: "02",
    title: "Planning and delivery",
    text: "Clear stages, realistic dates, someone who answers the phone. Site kept tidy while the work is on.",
  },
  {
    n: "03",
    title: "Final checks and handover",
    text: "Walk-through at the end. If it is not up to standard, it is not finished.",
  },
];

export function Process() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="How it runs"
          title="Work process"
          description="Simple and organised. Same process whether we are replacing tiles or building an extension."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <FadeIn key={step.n} delay={i * 0.06}>
              <div className="h-full border border-line bg-paper px-6 py-8">
                <p className="font-display text-3xl font-bold text-red">{step.n}</p>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{step.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
