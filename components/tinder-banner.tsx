"use client";

import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/lang-context";
import { CTA_LOGIN } from "@/lib/constants";

export default function TinderBanner() {
  const { t } = useLang();
  return (
    <section className="relative min-h-[520px] overflow-hidden flex items-center">
      {/* Video shifted right: swipe (center of frame) lands at ~66% of page width */}
      <video
        src="/0803sv.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: "translateX(16.7%)", transformOrigin: "center center" }}
      />

      {/* Gradient: dark left (text readable) → transparent right (swipe visible) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />

      {/* Text on the left, vertically centered */}
      <div className="relative z-10 w-full px-12 py-20">
        <div className="w-full md:w-[38%] text-center">
          <h2 className="font-[family-name:var(--font-nunito)] text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-lg mb-8">
            {t.tinderBanner.slogan.split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
          <a
            href={CTA_LOGIN}
            className={cn(buttonVariants({ size: "lg" }), "text-base px-10 bg-white text-primary hover:bg-white/90")}
          >
            {t.tinderBanner.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
