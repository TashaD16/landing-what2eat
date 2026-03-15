"use client";

import { useLang } from "@/lib/lang-context";

const numbers = ["01", "02", "03"];

export default function HowItWorks() {
  const { t } = useLang();
  return (
    <section id="how-it-works" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-orange uppercase tracking-widest mb-2">{t.howItWorks.eyebrow}</p>
          <h2 className="font-[family-name:var(--font-nunito)] text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            {t.howItWorks.headline}
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {t.howItWorks.steps.map((step, i) => (
            <div
              key={numbers[i]}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 relative rounded-2xl overflow-hidden shadow-lg aspect-video w-full bg-gray-200 dark:bg-gray-700">
                {i === 0 ? (
                  <video
                    src="/0315.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : i === 1 ? (
                  <video
                    src="/swipe1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src="/0316.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="flex-1">
                <span className="font-[family-name:var(--font-nunito)] text-7xl font-black text-primary/10 leading-none block mb-2">
                  {numbers[i]}
                </span>
                <h3 className="font-[family-name:var(--font-nunito)] text-2xl font-extrabold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
