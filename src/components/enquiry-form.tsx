"use client";

import { useState } from "react";

const field =
  "w-full border border-[var(--line)] bg-[rgba(255,255,255,0.02)] px-4 py-3.5 text-[0.92rem] text-white outline-none transition-colors placeholder:text-muted-2 focus:border-accent-bright focus:bg-[rgba(31,111,224,0.06)]";

const projectTypes = [
  "Civil Engineering & Execution",
  "PEB & Steel Structures",
  "Structural Engineering & Design",
  "Industrial / Infrastructure Project",
  "Surveying, Mapping & Geospatial",
  "Retrofitting & Strengthening",
  "Other / Not sure yet",
];

export default function EnquiryForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-5 sm:grid-cols-2"
    >
      <div className="sm:col-span-1">
        <label htmlFor="name" className="label text-muted-2">
          Name
        </label>
        <input id="name" name="name" required className={`${field} mt-3`} placeholder="Full name" />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="org" className="label text-muted-2">
          Organisation
        </label>
        <input id="org" name="org" className={`${field} mt-3`} placeholder="Company name" />
      </div>
      <div>
        <label htmlFor="email" className="label text-muted-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={`${field} mt-3`}
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="label text-muted-2">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className={`${field} mt-3`}
          placeholder="+91"
        />
      </div>
      <div>
        <label htmlFor="location" className="label text-muted-2">
          Location
        </label>
        <input
          id="location"
          name="location"
          className={`${field} mt-3`}
          placeholder="City / site location"
        />
      </div>
      <div>
        <label htmlFor="type" className="label text-muted-2">
          Project Type
        </label>
        <select id="type" name="type" className={`${field} mt-3 appearance-none`} defaultValue="">
          <option value="" disabled>
            Select a discipline
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t} className="bg-[#10161f]">
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="requirement" className="label text-muted-2">
          Requirement
        </label>
        <textarea
          id="requirement"
          name="requirement"
          rows={5}
          className={`${field} mt-3 resize-none`}
          placeholder="Tell us about the project, scope and timeline."
        />
      </div>

      <div className="sm:col-span-2 flex flex-wrap items-center gap-5">
        <button
          type="submit"
          className="label inline-flex items-center gap-3 bg-white px-7 py-4 text-[#06080c] transition-colors hover:bg-accent-bright hover:text-white"
        >
          Send Enquiry <span aria-hidden>→</span>
        </button>
        <p
          aria-live="polite"
          className={`font-mono text-[0.65rem] tracking-[0.12em] transition-opacity ${
            sent ? "text-accent-bright opacity-100" : "text-muted-2 opacity-100"
          }`}
        >
          {sent
            ? "DEMO FORM: NOT YET CONNECTED TO AN INBOX"
            : "PLACEHOLDER FORM: WIRE TO EMAIL BEFORE LAUNCH"}
        </p>
      </div>
    </form>
  );
}
