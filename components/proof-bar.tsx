"use client";

import { useLang } from "@/lib/lang-context";

const stats = [
  { value: "50K+", key: "activeCooks" as const },
  { value: "200K+", key: "recipesMatched" as const },
  { value: "30%", key: "lessFoodWaste" as const },
  { value: "4.8★", key: "appStoreRating" as const },
];

export default function ProofBar() {
  const { t } = useLang();
  return (
    <section className="bg-primary py-10">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        {stats.map((s) => (
          <div key={s.key}>
            <p className="font-[family-name:var(--font-nunito)] text-3xl font-extrabold">{s.value}</p>
            <p className="text-green-100 text-sm mt-1">{t.proofBar[s.key]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
