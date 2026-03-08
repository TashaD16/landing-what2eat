"use client";

import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/lang-context";

export default function VideoBanner() {
  const { t } = useLang();
  return (
    <section className="relative mt-16 h-[90vh] min-h-[560px] overflow-hidden flex items-start justify-center">
      {/* Full-bleed background video — no overlay, full quality */}
      <video
        src="/0307.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content pinned to top so the video centre stays visible */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-10">
        <div className="inline-block rounded-2xl bg-black/40 backdrop-blur-sm px-8 py-6">
          <h2 className="font-[family-name:var(--font-sans)] text-4xl md:text-6xl font-black text-white leading-tight mb-4">
            {t.videoBanner.headline}
          </h2>
          <p className="text-gray-100 text-lg md:text-xl leading-relaxed mb-8 max-w-lg mx-auto">
            {t.videoBanner.body}
          </p>
          <a
            href="https://what2eat-zeta.vercel.app/"
            className={cn(buttonVariants({ size: "lg" }), "text-base px-10")}
          >
            {t.videoBanner.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
