"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/data/site";
import { cn, telHref } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/97 pt-[env(safe-area-inset-top,0px)] shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 lg:h-24 lg:px-8">
        <Logo size="md" />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[13px] font-semibold uppercase tracking-wider transition-colors hover:text-red",
                pathname === item.href ? "text-red" : "text-ink/80"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={telHref(siteConfig.phone)}
            className="flex items-center gap-2 text-sm font-medium text-ink hover:text-red"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-sm bg-red px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-red-dark"
          >
            Get a quote
          </Link>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={telHref(siteConfig.phone)}
            className="flex h-11 w-11 items-center justify-center text-ink touch-manipulation"
            aria-label={`Call ${siteConfig.phone}`}
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center text-ink touch-manipulation"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[4.5rem] z-40 overflow-y-auto bg-white sm:top-20 lg:hidden">
          <nav className="flex flex-col px-4 py-2 pb-24" aria-label="Mobile">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex min-h-[3rem] items-center border-b border-line text-base font-semibold uppercase tracking-wider",
                  pathname === item.href ? "text-red" : "text-ink"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-6 flex min-h-[3rem] items-center justify-center rounded-sm bg-red text-base font-semibold uppercase tracking-wide text-white"
            >
              Get a quote
            </Link>
            <a
              href={telHref(siteConfig.phone)}
              className="mt-3 flex min-h-[3rem] items-center justify-center gap-2 rounded-sm border border-ink/15 text-base font-semibold text-ink"
            >
              <Phone className="h-5 w-5 text-red" />
              {siteConfig.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
