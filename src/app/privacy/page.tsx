import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-24 md:px-[68px] md:py-32">
      <h1 className="font-display text-4xl tracking-[-0.04em] text-marsh">
        Privacy Policy
      </h1>
      <p className="mt-6 text-base leading-[1.6] text-gray-200">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder
        copy — replace with your studio&apos;s privacy policy.
      </p>
      <Link
        href="/"
        className="mt-10 inline-block text-marsh underline-offset-2 hover:underline"
      >
        Back to home
      </Link>
    </main>
  );
}
