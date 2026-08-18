"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BrandDivider } from "@/components/brand/BrandDivider";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-ink pt-20 lg:pt-24">
      <Image
        src={images.hero}
        alt="Clay roof tiles on an A&D job"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-6 max-w-xs"
        >
          <BrandDivider label={`${siteConfig.town} · ${siteConfig.county}`} light />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70"
        >
          A&D Roofing & Construction
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Roofing and construction.
          <span className="block text-red">Built properly. Finished well.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg"
        >
          Adam and Dan. Same team on the roof and on the build — extensions,
          renovations, new work and the roof that goes on it. Bicester and
          across Oxfordshire.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex w-full flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center"
        >
          <Button href="/contact" variant="primary" className="px-8">
            Get a quote
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/work" variant="outline">
            See the work
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
