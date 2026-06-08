"use client";

import Image from "next/image";
import Link from "next/link";
import { type FormEvent, useState } from "react";

import { Button } from "@/components/ui/Button";
import { containerClass } from "@/lib/layout";
import { navLinks, socialLinks, utilityLinks } from "@/lib/navigation";

function ScrollToTopLink({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Link
      href="#Hero"
      aria-label="Scroll to top"
      className={`flex size-[4.5rem] shrink-0 items-center justify-center rounded-full bg-white text-pudra-500 transition-colors hover:bg-gray-100 ${className}`}
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

function LinkedInIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="currentColor" aria-hidden>
      <path d="M6.30527 19.5H2.7808V8.14997H6.30527V19.5ZM4.54114 6.60172C3.41413 6.60172 2.5 5.66822 2.5 4.54118C2.5 3.99983 2.71505 3.48065 3.09784 3.09785C3.48062 2.71505 3.99979 2.5 4.54114 2.5C5.08248 2.5 5.60165 2.71505 5.98444 3.09785C6.36723 3.48065 6.58228 3.99983 6.58228 4.54118C6.58228 5.66822 5.66777 6.60172 4.54114 6.60172ZM19.4962 19.5H15.9793V13.9749C15.9793 12.6581 15.9528 10.9695 14.1469 10.9695C12.3145 10.9695 12.0337 12.4001 12.0337 13.88V19.5H8.51299V8.14997H11.8933V9.69822H11.9426C12.4131 8.80646 13.5625 7.86537 15.2773 7.86537C18.8443 7.86537 19.5 10.2143 19.5 13.2653V19.5H19.4962Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.99 2H21.298L14.071 10.26L22.573 21.5H15.916L10.702 14.683L4.736 21.5H1.426L9.156 12.665L1 2H7.826L12.539 8.231L17.99 2ZM16.829 19.52H18.662L6.83 3.876H4.863L16.829 19.52Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="currentColor" aria-hidden>
      <path d="M15.6194 5.82003H17.4994V2.64003C16.5891 2.54538 15.6745 2.49865 14.7594 2.50003C12.0394 2.50003 10.1794 4.16003 10.1794 7.20003V9.82003H7.10938V13.38H10.1794V22.5H13.8594V13.38H16.9194L17.3794 9.82003H13.8594V7.55003C13.8594 6.50003 14.1394 5.82003 15.6194 5.82003Z" />
    </svg>
  );
}

const socialIcons = {
  LinkedIn: LinkedInIcon,
  Twitter: TwitterIcon,
  Facebook: FacebookIcon,
} as const;

function FooterNavColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-base font-medium tracking-[-0.02em] text-gray-200">
        {title}
      </h3>
      <ul className="mt-5 flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm tracking-[-0.02em] text-pudra-100 transition-colors hover:text-white"
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
    <div
      data-header-theme="light"
      className="relative z-0 bg-pudra-500 pt-20"
    >
      <footer className="pb-5 pt-[8.75rem] text-pudra-100">
        <div className={containerClass}>
          <div className="flex flex-col gap-10 border-b border-gray-300 pb-16 lg:flex-row lg:items-end lg:justify-between lg:pb-20">
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
                  className="h-[4.5625rem] w-full rounded-[10px] bg-gray-100 pr-44 pl-9 text-base text-pudra-500 outline-none placeholder:text-gray-200 focus-visible:ring-2 focus-visible:ring-green/40"
                />
                <Button
                  type="submit"
                  variant="green"
                  className="absolute top-2 right-2 min-w-[9.5rem] px-8 py-3"
                >
                  Subscribe
                </Button>
                {subscribed ? (
                  <p className="mt-3 text-sm text-pudra-200" role="status">
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
                    className="size-[72px]"
                  />
                </Link>
                <ScrollToTopLink className="lg:hidden" />
              </div>
              <p className="mt-8 max-w-[18rem] text-sm leading-[1.5] tracking-[-0.02em] text-pudra-100">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor. Voluptate exercitation incididunt aliquip
                serunt
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
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];

                return (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex size-[4.5rem] items-center justify-center rounded-full bg-gray-300 text-white transition-colors hover:bg-gray-200"
                    >
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-gray-300/30 pt-8 text-sm text-gray-200 md:flex-row md:items-center md:justify-between">
            <p>© 2026 ThriveWithMarina</p>
            <p>
              by{" "}
              <a
                href="https://goranflow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pudra-100 underline-offset-2 hover:text-white hover:underline"
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
