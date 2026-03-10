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
          <p className="font-[family-name:var(--font-nunito)] text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white leading-snug mb-5">
            {t.hero.tagline}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {t.hero.body}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="https://what2eat-zeta.vercel.app/"
              className={cn(buttonVariants({ size: "lg" }), "text-base px-8")}
            >
              {t.hero.ctaPrimary}
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[
                { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&q=80", alt: "Home cook" },
                { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&q=80", alt: "Home cook" },
                { src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&q=80", alt: "Home cook" },
                { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&q=80", alt: "Home cook" },
              ].map((avatar) => (
                <Image
                  key={avatar.src}
                  src={avatar.src}
                  alt={avatar.alt}
                  width={32}
                  height={32}
                  className="rounded-full ring-2 ring-white dark:ring-gray-900 object-cover"
                />
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
