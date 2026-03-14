"use client";

import { useLang } from "@/lib/lang-context";

const icons = [
  <svg key="1" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  <svg key="2" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>,
  <svg key="3" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
