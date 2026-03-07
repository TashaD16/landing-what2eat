"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useLang } from "@/lib/lang-context";

const benefitIcons = ["🥦", "💰", "🌍", "🥗", "⏱️", "📱"];
const testimonialData = [
  { name: "Sarah K.", initials: "SK" },
  { name: "Marcus T.", initials: "MT" },
  { name: "Priya R.", initials: "PR" },
];

export default function Benefits() {
  const { t } = useLang();
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        {/* Benefits grid */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-orange uppercase tracking-widest mb-2">{t.benefits.eyebrow}</p>
          <h2 className="font-[family-name:var(--font-nunito)] text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            {t.benefits.headline}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {t.benefits.items.map((b, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-green-50 hover:bg-green-100 dark:bg-green-950/40 dark:hover:bg-green-950/60 transition-colors"
            >
              <span className="text-3xl block mb-3">{benefitIcons[i]}</span>
              <h3 className="font-[family-name:var(--font-nunito)] text-lg font-bold text-gray-900 dark:text-white mb-2">{b.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-nunito)] text-3xl font-extrabold text-gray-900 dark:text-white">
            {t.benefits.testimonialsHeadline}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {t.benefits.testimonials.map((testimonial, i) => (
            <Card key={i} className="border border-gray-100 dark:border-gray-700 shadow-sm dark:bg-gray-800">
              <CardContent className="pt-6">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">
                    {testimonialData[i].initials}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{testimonialData[i].name}</p>
                    <p className="text-gray-400 dark:text-gray-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
