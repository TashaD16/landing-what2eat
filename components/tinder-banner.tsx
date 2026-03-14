"use client";

export default function TinderBanner() {
  return (
    <section className="relative min-h-[520px] overflow-hidden flex items-center">
      <video
        src="/swipe1.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  );
}
