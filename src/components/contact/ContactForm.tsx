"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { telHref } from "@/lib/utils";

export function ContactForm() {
  return (
    <form
      action={`https://formsubmit.co/${siteConfig.email}`}
      method="POST"
      className="space-y-5"
    >
      <input type="hidden" name="_subject" value="Website enquiry — A&D Roofing & Construction" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink">
          Full name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-sm border border-ink/10 bg-white px-4 py-3.5 text-base outline-none focus:border-red focus:ring-1 focus:ring-red"
          placeholder="Your name"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-ink">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-sm border border-ink/10 bg-white px-4 py-3.5 text-base outline-none focus:border-red focus:ring-1 focus:ring-red"
            placeholder="07XXX XXXXXX"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-sm border border-ink/10 bg-white px-4 py-3.5 text-base outline-none focus:border-red focus:ring-1 focus:ring-red"
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="job" className="mb-1 block text-sm font-medium text-ink">
          What do you need?
        </label>
        <select
          id="job"
          name="job"
          className="w-full rounded-sm border border-ink/10 bg-white px-4 py-3.5 text-base outline-none focus:border-red focus:ring-1 focus:ring-red"
          defaultValue=""
        >
          <option value="" disabled>
            Roof, build, or both
          </option>
          <option value="roofing">Roofing</option>
          <option value="construction">Construction</option>
          <option value="both">Both</option>
          <option value="not-sure">Not sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink">
          What’s the job? *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-sm border border-ink/10 bg-white px-4 py-3.5 text-base outline-none focus:border-red focus:ring-1 focus:ring-red"
          placeholder="Where is it, what needs doing, when do you want to start…"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-sm bg-red py-3.5 text-base font-semibold uppercase tracking-wide text-white transition-colors hover:bg-red-dark touch-manipulation sm:w-auto sm:px-10"
      >
        Send enquiry
      </button>
    </form>
  );
}

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-display text-xl font-semibold text-ink">Talk to Adam or Dan</h3>
        <p className="mt-2 text-sm leading-relaxed text-mute">
          Phone first if it is urgent. Otherwise send the job through and we will
          come back with a clear next step.
        </p>
      </div>

      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <Phone className="mt-0.5 h-5 w-5 shrink-0 text-red" />
          <div>
            <p className="text-sm font-medium text-ink">Phone</p>
            <a href={telHref(siteConfig.phone)} className="text-sm text-mute hover:text-red">
              {siteConfig.phone}
            </a>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <Mail className="mt-0.5 h-5 w-5 shrink-0 text-red" />
          <div>
            <p className="text-sm font-medium text-ink">Email</p>
            <a href={`mailto:${siteConfig.email}`} className="text-sm text-mute hover:text-red">
              {siteConfig.email}
            </a>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-red" />
          <div>
            <p className="text-sm font-medium text-ink">Based</p>
            <p className="text-sm text-mute">{siteConfig.address}</p>
            <p className="mt-1 text-sm text-mute">
              Covering {siteConfig.serviceAreas.join(", ")}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
