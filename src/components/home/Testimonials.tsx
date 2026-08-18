import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What people say"
          title="Named. Not silhouettes."
          description="These are the three reviews already on the live site — kept, attributed, not rewritten."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.06}>
              <blockquote className="flex h-full flex-col bg-white px-6 py-8">
                <p className="flex-1 text-sm leading-relaxed text-ink/80">“{t.quote}”</p>
                <footer className="mt-6 border-t border-line pt-4">
                  <p className="font-display text-base font-semibold text-ink">{t.name}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-wider text-red-dark">{t.job}</p>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
