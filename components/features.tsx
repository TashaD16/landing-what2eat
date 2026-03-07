"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLang } from "@/lib/lang-context";

const icons = [
  <svg key="1" className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>,
  <svg key="2" className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>,
  <svg key="3" className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>,
];

const steps = ["01", "02", "03"];

export default function Features() {
  const { t } = useLang();
  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-orange uppercase tracking-widest mb-2">{t.features.eyebrow}</p>
          <h2 className="font-[family-name:var(--font-nunito)] text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            {t.features.headline}
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            {t.features.subheadline}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.features.steps.map((f, i) => (
            <Card key={steps[i]} className="border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow dark:bg-gray-800">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-4">
                  {icons[i]}
                  <Badge variant="outline" className="text-primary border-primary font-bold">
                    {t.features.stepLabel} {steps[i]}
                  </Badge>
                </div>
                <h3 className="font-[family-name:var(--font-nunito)] text-xl font-bold text-gray-900 dark:text-white">{f.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{f.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
