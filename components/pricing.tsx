"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/lib/button-variants";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/lang-context";

const prices = ["$0", "$5.99"];
const featured = [false, true];

export default function Pricing() {
  const { t } = useLang();
  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-orange uppercase tracking-widest mb-2">{t.pricing.eyebrow}</p>
          <h2 className="font-[family-name:var(--font-nunito)] text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            {t.pricing.headline}
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            {t.pricing.subheadline}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {t.pricing.plans.map((plan, i) => (
            <Card
              key={i}
              className={cn(
                "relative dark:bg-gray-900",
                featured[i]
                  ? "ring-2 ring-primary shadow-lg"
                  : "border border-gray-200 dark:border-gray-700 shadow-sm"
              )}
            >
              {featured[i] && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-white px-4 py-1 shadow">{t.pricing.mostPopular}</Badge>
                </div>
              )}
              <CardHeader className="pb-4">
                <h3 className="font-[family-name:var(--font-nunito)] text-xl font-extrabold text-gray-900 dark:text-white">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="font-[family-name:var(--font-nunito)] text-4xl font-black text-gray-900 dark:text-white">{prices[i]}</span>
                  <span className="text-gray-400 dark:text-gray-500 text-sm">/ {plan.period}</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{plan.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="https://what2eat-zeta.vercel.app/"
                  className={cn(
                    buttonVariants({ variant: featured[i] ? "default" : "outline" }),
                    "w-full text-center"
                  )}
                >
                  {plan.cta}
                </a>
                <Separator />
                <ul className="space-y-2">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                  {plan.missing.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
