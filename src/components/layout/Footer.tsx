import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/data/site";
import { telHref } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo size="md" className="mb-6 brightness-0 invert" />
            <p className="text-sm leading-relaxed text-white/65">
              {siteConfig.tagline} Adam and Dan, {siteConfig.town}. Trading since{" "}
              {siteConfig.established}.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold tracking-wider text-white">
              Pages
            </h3>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/65 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold tracking-wider text-white">
              What we do
            </h3>
            <ul className="space-y-2 text-sm text-white/65">
              <li>
                <Link href="/roofing" className="hover:text-white">
                  Roofing
                </Link>
              </li>
              <li>
                <Link href="/construction" className="hover:text-white">
                  Construction
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white">
                  Recent work
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-red" />
                <a href={telHref(siteConfig.phone)} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-red" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red" />
                <span>
                  {siteConfig.town}, {siteConfig.county}
                </span>
              </li>
              <li>
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-sm text-white/45">
          <p>
            &copy; {year} {siteConfig.legalName}. Company no. {siteConfig.companyNumber}.
            Previously {siteConfig.previousName}.
          </p>
        </div>
      </div>
    </footer>
  );
}
