"use client";

import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/lang-context";
import { CTA_LOGIN } from "@/lib/constants";

export default function VideoBanner() {
  const { t } = useLang();
  return (
    <section className="relative mt-16 h-[90vh] min-h-[560px] overflow-hidden flex items-center justify-center">
      {/* Full-bleed background video */}
      <video
        src="/0307.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 className="font-[family-name:var(--font-sans)] text-4xl md:text-6xl font-black text-white leading-tight mb-6">
          {t.videoBanner.headline}
        </h1>
        <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto">
          {t.videoBanner.body}
        </p>
        <a
          href={CTA_LOGIN}
          className={cn(buttonVariants({ size: "lg" }), "text-base px-10")}
        >
          {t.videoBanner.cta}
        </a>
      </div>
    </section>
  );
}
