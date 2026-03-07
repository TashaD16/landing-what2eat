"use client";

import Image from "next/image";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/lang-context";

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-green-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <p className="text-sm font-semibold text-orange uppercase tracking-widest mb-3">
            {t.hero.eyebrow}
          </p>
          <h1 className="font-[family-name:var(--font-nunito)] text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-5">
            {t.hero.headline1}{" "}
            <span className="text-primary">{t.hero.headline2}</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {t.hero.body}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="https://what2eat.com/login"
              className={cn(buttonVariants({ size: "lg" }), "text-base px-8")}
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="https://what2eat.com/download"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "text-base px-8")}
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {["A", "B", "C", "D"].map((l) => (
                <div
                  key={l}
                  className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold ring-2 ring-white"
                >
                  {l}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-gray-900 dark:text-white">50,000+</span> {t.hero.trustText}
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
          <Image
            src="https://images.unsplash.com/photo-1543352634-99a5d50ae78e?w=800&q=80"
            alt="Fresh colorful vegetables and ingredients spread on a kitchen counter"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
