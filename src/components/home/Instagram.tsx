"use client";

import Script from "next/script";
import { useEffect } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/data/site";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

function processEmbed() {
  window.instgrm?.Embeds.process();
}

function fitCard() {
  const card = document.querySelector<HTMLElement>("[data-ig-card]");
  const frame = document.querySelector<HTMLElement>(
    "[data-ig-card] iframe, [data-ig-card] .instagram-media",
  );
  if (!card || !frame) return;
  const width = Math.round(frame.getBoundingClientRect().width);
  if (width >= 280) {
    card.style.width = `${width}px`;
  }
}

export function Instagram() {
  useEffect(() => {
    processEmbed();
    const t1 = window.setTimeout(() => {
      processEmbed();
      fitCard();
    }, 800);
    const t2 = window.setTimeout(fitCard, 1800);
    const t3 = window.setTimeout(fitCard, 3200);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, []);

  return (
    <section id="instagram" className="bg-ink py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          <FadeIn className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red">
              Instagram
            </p>
            <h2 className="mt-3 max-w-[14ch] font-display text-3xl font-bold text-white sm:text-5xl">
              The jobs, as they go on
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-white/65 sm:text-lg">
              Live from {siteConfig.instagramHandle}. Roofs and builds around
              Bicester. New posts show up here.
            </p>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-[3rem] items-center gap-2 rounded-sm bg-[#0095f6] px-7 text-sm font-semibold text-white hover:bg-[#1877f2]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 4.8A4.2 4.2 0 1 0 16.2 12 4.2 4.2 0 0 0 12 7.8Zm0 6.9A2.7 2.7 0 1 1 14.7 12 2.7 2.7 0 0 1 12 14.7ZM17.35 6.4a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z" />
              </svg>
              Follow {siteConfig.instagramHandle}
            </a>
          </FadeIn>

          <FadeIn delay={0.08} className="min-w-0">
            <div
              data-ig-card
              className="mx-auto w-[326px] max-w-full overflow-hidden lg:mx-0"
            >
              <blockquote
                className="instagram-media ig-embed"
                data-instgrm-permalink="https://www.instagram.com/aanddroofingandconstruction/?utm_source=ig_embed&utm_campaign=loading"
                data-instgrm-version="14"
              >
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="block px-4 py-8 text-center text-sm font-semibold text-[#0095f6]"
                >
                  View {siteConfig.instagramHandle} on Instagram
                </a>
              </blockquote>
            </div>
          </FadeIn>
        </div>
      </div>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          processEmbed();
          fitCard();
        }}
      />
    </section>
  );
}
