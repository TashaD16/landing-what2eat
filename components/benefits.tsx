"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useLang } from "@/lib/lang-context";

const benefitIcons = ["🥦", "💰", "🌍", "🥗", "⏱️", "📱"];
const testimonialData = [
  { name: "Sarah K.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&q=80" },
  { name: "Marcus T.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&q=80" },
  { name: "Priya R.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&q=80" },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

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
                <Stars />
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonialData[i].avatar}
                    alt={testimonialData[i].name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
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
