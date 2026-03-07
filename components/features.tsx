"use client";

import { useLang } from "@/lib/lang-context";

const icons = [
  <svg key="1" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>,
  <svg key="2" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>,
  <svg key="3" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>,
];

const nums = ["01", "02", "03"];

export default function Features() {
  const { t } = useLang();
  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-orange uppercase tracking-widest mb-3">{t.features.eyebrow}</p>
          <h2 className="font-[family-name:var(--font-nunito)] text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            {t.features.headline}
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-lg">
            {t.features.subheadline}
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-10">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-px border-t-2 border-dashed border-primary/30" />

          {t.features.steps.map((f, i) => (
            <div key={nums[i]} className="flex flex-col items-center text-center">
              {/* Circle with icon */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary ring-4 ring-white dark:ring-gray-950 shadow-md">
                  {icons[i]}
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-white text-xs font-black flex items-center justify-center shadow">
                  {i + 1}
                </span>
              </div>

              {/* Step label */}
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                {t.features.stepLabel} {nums[i]}
              </span>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-nunito)] text-xl font-extrabold text-gray-900 dark:text-white mb-3">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm max-w-xs">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
