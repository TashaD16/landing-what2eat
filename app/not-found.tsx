import { buttonVariants } from "@/lib/button-variants";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center bg-white dark:bg-gray-950">
      <p className="text-8xl font-black font-[family-name:var(--font-nunito)] text-primary">404</p>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Page not found</h1>
      <p className="text-gray-500 dark:text-gray-400 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <a href="/" className={buttonVariants()}>Go home</a>
    </main>
  );
}
