"use client";

import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/lang-context";

export default function TinderBanner() {
  const { t } = useLang();
  return (
    <section className="relative h-[70vh] min-h-[480px] overflow-hidden flex items-center justify-center">
      {/* Background video */}
      <video
        src="/0803sv.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Slogan + CTA */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h2 className="font-[family-name:var(--font-nunito)] text-3xl md:text-5xl font-black text-white leading-tight drop-shadow-lg mb-8">
          {t.tinderBanner.slogan.split("\n").map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h2>
        <a
          href="https://what2eat.com/login"
          className={cn(buttonVariants({ size: "lg" }), "text-base px-10")}
        >
          {t.tinderBanner.cta}
        </a>
      </div>
    </section>
  );
}
