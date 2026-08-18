import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    n: "01",
    title: "Skilled workmanship",
    text: "Clean lines, strong fixing, a finish that lasts. Roof or build — the same pride in the work.",
  },
  {
    n: "02",
    title: "Quality materials",
    text: "Trusted materials and proven methods so the roof or the build holds up year after year.",
  },
  {
    n: "03",
    title: "They turn up",
    text: "The reviews say it: in the rain, under tarpaulin, back the next day to finish the cement. That is the company.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why us"
          title="Why people call Adam and Dan again"
          light
        />
        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((item, i) => (
            <FadeIn key={item.n} delay={i * 0.06}>
              <div className="h-full border border-white/10 px-6 py-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
                  {item.n}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
