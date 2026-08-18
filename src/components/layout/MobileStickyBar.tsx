"use client";

import Link from "next/link";
import { MessageSquare, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { telHref } from "@/lib/utils";

export function MobileStickyBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/98 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="grid grid-cols-2 gap-px bg-white/10">
        <a
          href={telHref(siteConfig.phone)}
          className="flex min-h-[3.25rem] items-center justify-center gap-2 bg-ink py-3 text-sm font-semibold text-white touch-manipulation"
        >
          <Phone className="h-5 w-5 shrink-0 text-red" />
          Call now
        </a>
        <Link
          href="/contact"
          className="flex min-h-[3.25rem] items-center justify-center gap-2 bg-red py-3 text-sm font-semibold text-white touch-manipulation"
        >
          <MessageSquare className="h-5 w-5 shrink-0" />
          Free quote
        </Link>
      </div>
    </div>
  );
}
