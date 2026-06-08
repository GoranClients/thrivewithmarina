import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-pudra-100 px-5 py-24 text-center">
      <h1 className="font-display text-5xl tracking-[-0.04em] text-pudra-500">
        404
      </h1>
      <p className="mt-4 max-w-md text-lg text-gray-200">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex rounded-full bg-pudra-500 px-10 py-4 text-lg font-medium text-white"
      >
        Back to home
      </Link>
    </main>
  );
}
