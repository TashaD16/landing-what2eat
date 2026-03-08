"use client";

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
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Slogan */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="font-[family-name:var(--font-nunito)] text-3xl md:text-5xl font-black text-white leading-tight drop-shadow-lg">
          {t.tinderBanner.slogan}
        </p>
      </div>
    </section>
  );
}
