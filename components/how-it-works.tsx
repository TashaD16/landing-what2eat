"use client";

import Image from "next/image";
import { useLang } from "@/lib/lang-context";

const images = [
  "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=700&q=80",
  "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=700&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80",
];

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
        </div>

        <div className="flex flex-col gap-20">
          {t.howItWorks.steps.map((step, i) => (
            <div
              key={numbers[i]}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 relative rounded-2xl overflow-hidden shadow-lg aspect-video w-full">
                <Image
                  src={images[i]}
                  alt={step.alt}
                  fill
                  className="object-cover"
                />
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
