"use client";

import Image from "next/image";
import Link from "next/link";
import { type FormEvent, useState } from "react";

import { Button } from "@/components/ui/Button";
import { containerClass } from "@/lib/layout";
import { navLinks, socialLinks, utilityLinks } from "@/lib/navigation";

function ScrollToTopLink({ className = "" }: { className?: string }) {
  return (
    <Link
      href="#Hero"
      aria-label="Scroll to top"
      className={`flex size-[4.5rem] shrink-0 items-center justify-center rounded-full bg-white text-marsh transition-colors hover:bg-platinum ${className}`}
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M5.71373 14.787L12.501 7.99975L19.2863 14.787"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FooterNavColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-base font-medium tracking-[-0.02em] text-grullo">
        {title}
      </h3>
      <ul className="mt-5 flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm tracking-[-0.02em] text-vista-white transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("email");
    console.log({ newsletter: email });
    setSubscribed(true);
    event.currentTarget.reset();
  };

  return (
    <div data-header-theme="light" className="relative z-0 bg-marsh pt-20">
      <footer className="pb-5 pt-[8.75rem] text-vista-white">
        <div className={containerClass}>
          <div className="flex flex-col gap-10 border-b border-white/15 pb-16 lg:flex-row lg:items-end lg:justify-between lg:pb-20">
            <div className="w-full max-w-[30rem]">
              <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] italic leading-[1.05] tracking-[-0.04em] text-white">
                Subscribe to news
              </h2>

              <form onSubmit={handleSubscribe} className="relative mt-8">
                <label className="sr-only" htmlFor="newsletter-email">
                  Email
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Email"
                  className="h-[4.5625rem] w-full rounded-[10px] bg-platinum pr-44 pl-9 text-base text-marsh outline-none placeholder:text-grullo focus-visible:ring-2 focus-visible:ring-burlywood/40"
                />
                <Button
                  type="submit"
                  variant="green"
                  className="absolute top-2 right-2 min-w-[9.5rem] px-8 py-3"
                >
                  Subscribe
                </Button>
                {subscribed ? (
                  <p className="mt-3 text-sm text-platinum" role="status">
                    Thank you! Your submission has been received!
                  </p>
                ) : null}
              </form>
            </div>

            <ScrollToTopLink className="hidden lg:flex" />
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,310px)_1fr_auto] lg:items-start lg:gap-8">
            <div>
              <div className="flex items-start justify-between gap-4">
                <Link href="/" aria-label="ThriveWithMarina home">
                  <Image
                    src="/assets/brand/logo.svg"
                    alt=""
                    width={72}
                    height={72}
                    className="size-[72px] brightness-0 invert"
                  />
                </Link>
                <ScrollToTopLink className="lg:hidden" />
              </div>
              <p className="mt-8 max-w-[18rem] text-sm leading-[1.5] tracking-[-0.02em] text-vista-white/80">
                Breathwork & holistic coaching for visionary women in Dubai.
              </p>
            </div>

            <nav
              aria-label="Footer"
              className="flex flex-wrap gap-12 sm:gap-20 lg:justify-center"
            >
              <FooterNavColumn title="Menu" links={navLinks} />
              <FooterNavColumn title="Utility pages" links={utilityLinks} />
            </nav>

            <ul className="flex gap-2.5 lg:justify-end">
              {socialLinks.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-[4.5rem] items-center justify-center rounded-full bg-kaitoke-green text-white transition-colors hover:bg-burlywood hover:text-marsh"
                  >
                    <InstagramIcon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-8 text-sm text-grullo md:flex-row md:items-center md:justify-between">
            <p>© 2026 ThriveWithMarina</p>
            <p>
              by{" "}
              <a
                href="https://goranflow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vista-white underline-offset-2 hover:text-white hover:underline"
              >
                GoranFLow
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
