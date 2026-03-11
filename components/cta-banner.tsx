"use client";

import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/lang-context";
import { CTA_LOGIN } from "@/lib/constants";

export default function CtaBanner() {
  const { t } = useLang();
  return (
    <section className="py-24 bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="font-[family-name:var(--font-nunito)] text-3xl md:text-5xl font-black mb-5 leading-tight">
          {t.ctaBanner.headline}
        </h2>
        <p className="text-green-100 text-lg mb-10 max-w-xl mx-auto">
          {t.ctaBanner.body}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={CTA_LOGIN}
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-white text-primary hover:bg-green-50 text-base px-8 font-semibold"
            )}
          >
            {t.ctaBanner.ctaPrimary}
          </a>
        </div>
      </div>
    </section>
  );
}
