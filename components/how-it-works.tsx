"use client";

import Image from "next/image";
import { useLang } from "@/lib/lang-context";
import { APP_DEMO_URL, APP_GITHUB_URL } from "@/lib/constants";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

// Step 1: fridge/camera — what you photograph. Step 2: video (swipe). Step 3: planner/shopping.
const images = [
  "https://images.unsplash.com/photo-1584568694245-d8783759d468?w=800&q=80",
  null,
  "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800&q=80",
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
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={APP_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "text-base px-8")}
            >
              {t.howItWorks.tryAppCta} →
            </a>
            <a
              href={APP_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:underline"
            >
              {t.howItWorks.githubLink}
            </a>
          </div>
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
                {i === 1 ? (
                  <video
                    src="/swipe1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={images[i]!}
                    alt={step.alt}
                    fill
                    className="object-cover"
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
