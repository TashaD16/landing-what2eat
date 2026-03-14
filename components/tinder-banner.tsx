"use client";

export default function TinderBanner() {
  return (
    <section className="relative min-h-[520px] overflow-hidden flex items-center justify-center bg-gray-900">
      <video
        src="/swipe1.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-contain"
      />
    </section>
  );
}
