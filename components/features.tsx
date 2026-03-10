"use client";

import { useLang } from "@/lib/lang-context";

const icons = [
  <svg key="1" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>,
  <svg key="2" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>,
  <svg key="3" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>,
];

const nums = ["01", "02", "03"];

export default function Features() {
  const { t } = useLang();
  return (
    <section id="features" className="py-28 bg-gray-950 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-orange uppercase tracking-widest mb-4">{t.features.eyebrow}</p>
          <h2 className="font-[family-name:var(--font-nunito)] text-3xl md:text-5xl font-extrabold text-white">
            {t.features.headline}
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg">
            {t.features.subheadline}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.features.steps.map((f, i) => (
            <div
              key={nums[i]}
              className="relative group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 overflow-hidden hover:border-primary/50 hover:bg-white/8 transition-all duration-300"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at top left, rgba(34,197,94,0.08) 0%, transparent 70%)" }} />

              {/* Big faded number */}
              <span className="absolute -top-4 -right-2 text-[8rem] font-black leading-none text-white/4 select-none pointer-events-none">
                {nums[i]}
              </span>

              {/* Icon */}
              <div className="relative w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/25 transition-colors">
                {icons[i]}
              </div>

              {/* Step label */}
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">
                {t.features.stepLabel} {nums[i]}
              </p>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-nunito)] text-xl font-extrabold text-white mb-3 leading-snug">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-sm">
                {f.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
