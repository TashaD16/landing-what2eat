"use client";

import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/lang-context";

export default function TinderBanner() {
  const { t } = useLang();
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[480px]">
        {/* Left: video */}
        <div className="relative w-full md:w-1/2 min-h-[300px]">
          <video
            src="/0803sv-crop.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right: text */}
        <div className="w-full md:w-1/2 bg-gray-900 flex items-center justify-start px-10 py-16 md:py-20">
          <div className="max-w-sm">
            <h2 className="font-[family-name:var(--font-nunito)] text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-8">
              {t.tinderBanner.slogan.split("\n").map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h2>
            <a
              href="https://what2eat.com/login"
              className={cn(buttonVariants({ size: "lg" }), "text-base px-10 bg-white text-primary hover:bg-white/90")}
            >
              {t.tinderBanner.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
