"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { containerXxlClass } from "@/lib/layout";
import { INSTAGRAM_URL } from "@/lib/site";

const CDN =
  "https://cdn.prod.website-files.com/69802b78489979b8502afdda";

const FOOTER_MIDDLE_IMAGE = `${CDN}/6981b74698d35813deafc827_footer-middle-image.webp`;
const FOOTER_BTN_ICON = `${CDN}/6981b0c4ff1f1bb61cf35015_rt-footer-button-image.svg`;
const FOOTER_BTN_ICON_DARK = `${CDN}/69c230aed591903034ea4e8b_button-dark-icon.svg`;

const studioLinks = [
  { label: "About Marina", href: "#Experts" },
  { label: "Reviews", href: "#Reviews" },
  { label: "Memberships", href: "#Memberships" },
  { label: "Book a call", href: "#Contact" },
] as const;

const footerNavLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "404", href: "/404" },
] as const;

const socialLinks = [
  {
    label: "Facebook",
    href: INSTAGRAM_URL,
    light: `${CDN}/69c52765c627bfe8adcffe07_lite-facebook.svg`,
    gold: `${CDN}/69c5275e7343d14538987136_gold-facebook.svg`,
    dark: `${CDN}/69b946657d8d9acc7e550c2c_facebook.svg`,
    darkHover: `${CDN}/69b9485766f83605a19db6e6_facebook-dark.svg`,
  },
  {
    label: "Instagram",
    href: INSTAGRAM_URL,
    light: `${CDN}/69c52762a3c09cda57ecacf7_lite-instagram.svg`,
    gold: `${CDN}/69c5275e17a5f47b25dbb88c_gold-instagram.svg`,
    dark: `${CDN}/69b9466530d2269007813b0e_instagram.svg`,
    darkHover: `${CDN}/69b948571b58196e0611fa40_instagram-dark.svg`,
  },
  {
    label: "X",
    href: INSTAGRAM_URL,
    light: `${CDN}/69c52762b83d6695d9975832_lite-x-icon.svg`,
    gold: `${CDN}/69c5275faa607aaed58ec2fe_gold-xicon.svg`,
    dark: `${CDN}/69b94665e7b68e67d627d948_x-icon.svg`,
    darkHover: `${CDN}/69b94857a190bb1d9184dda3_x-icon-dark.svg`,
  },
  {
    label: "LinkedIn",
    href: INSTAGRAM_URL,
    light: `${CDN}/69c5276581f2a44b645e7d95_lite-linkdin.svg`,
    gold: `${CDN}/69c5275ed610c4c2ee775ec9_gold-linkdin.svg`,
    dark: `${CDN}/69b946656086b102dad155dd_linkdin.svg`,
    darkHover: `${CDN}/69b948579069879b3bf7ce74_linkdin-dark.svg`,
  },
] as const;

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <div className="font-display text-xl leading-[1.3] font-medium tracking-[-0.01875rem] text-soft-black">
      {children}
    </div>
  );
}

function FooterDash({ className = "bg-black" }: { className?: string }) {
  return <div className={`h-px w-[2.6875rem] ${className}`} aria-hidden />;
}

function FooterSocialIcon({
  href,
  label,
  primary,
  hover,
}: {
  href: string;
  label: string;
  primary: string;
  hover: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative flex max-w-5 flex-1 items-center justify-center md:flex-none"
    >
      <Image
        src={primary}
        alt=""
        width={20}
        height={20}
        className="transition-opacity duration-200 group-hover:opacity-0"
      />
      <Image
        src={hover}
        alt=""
        width={20}
        height={20}
        className="absolute opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      />
    </a>
  );
}

function FooterSocialList({ variant }: { variant: "light" | "dark" }) {
  return (
    <div className="flex items-center gap-3.5">
      {socialLinks.map((social) => (
        <FooterSocialIcon
          key={social.label}
          href={social.href}
          label={social.label}
          primary={variant === "light" ? social.light : social.dark}
          hover={variant === "light" ? social.gold : social.darkHover}
        />
      ))}
    </div>
  );
}

function FooterNavDots() {
  return (
    <nav
      aria-label="Footer utility"
      className="flex items-center justify-center gap-2.5 pt-[3.125rem] max-lg:hidden"
    >
      {footerNavLinks.map((link, index) => (
        <span key={link.href} className="flex items-center gap-2.5">
          <Link href={link.href} className="footer-link-v1 text-sm">
            {link.label}
          </Link>
          {index < footerNavLinks.length - 1 ? (
            <span
              className="size-[0.3125rem] rounded-full bg-platinum"
              aria-hidden
            />
          ) : null}
        </span>
      ))}
    </nav>
  );
}

function FooterCredits({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-2.5 ${className}`}>
      <p className="text-sm text-platinum">
        Designed by{" "}
        <a
          href="https://goranflow.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link-v1"
        >
          GoranFlow
        </a>
      </p>
      <p className="text-sm text-platinum">
        Production by{" "}
        <a
          href="https://goranflow.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link-v1"
        >
          GoranFlow
        </a>
      </p>
    </div>
  );
}

export function Footer() {
  return (
    <footer data-header-theme="light" className="footer-breathiva relative pt-[7.1625rem] pb-[2.4375rem] max-lg:pt-[3.4375rem] max-lg:pb-[1.5625rem]">
      <div className={containerXxlClass}>
        <div className="relative flex flex-col max-lg:gap-0">
          <div className="mb-20 flex items-center justify-between max-lg:mb-0 max-lg:grid max-lg:grid-cols-2 max-lg:gap-5 max-lg:pb-[6.9rem]">
            <div className="flex max-w-[10.5625rem] flex-col gap-[0.9rem] max-lg:flex-none">
              <div className="relative pl-[3.125rem] max-lg:pl-[2.4rem]">
                <FooterDash className="absolute top-1/2 left-0 -translate-y-1/2 bg-black max-lg:w-8" />
                <FooterHeading>Our studio</FooterHeading>
              </div>
              <nav
                aria-label="Footer studio"
                className="flex flex-col gap-5 max-lg:gap-[0.6875rem]"
              >
                {studioLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-display text-xl leading-[1.3] font-medium tracking-[-0.01875rem] text-soft-black transition-colors hover:text-shadow-gold"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div
              className="hidden h-px w-full bg-black/20 max-lg:col-span-2 max-lg:block lg:hidden"
              aria-hidden
            />

            <div className="-mt-[0.3125rem] flex flex-col items-end max-lg:col-span-1 max-lg:mt-0 max-lg:items-start max-lg:gap-5">
              <div className="flex items-start justify-between gap-[3.75rem] pb-[2.8rem] max-lg:w-full max-lg:gap-5 max-lg:pb-0">
                <div className="flex max-w-[10rem] flex-1 flex-col gap-[0.4rem] lg:max-w-none">
                  <p className="m-0 text-xl leading-[1.3] font-medium tracking-[-0.01875rem] text-soft-black max-lg:text-white">
                    Monday to Thursday
                  </p>
                  <p className="text-base text-soft-black max-lg:text-white">
                    6:00 AM — 8:00 PM
                  </p>
                  <FooterDash className="mt-[1.1rem] max-lg:mt-[0.9rem] max-lg:bg-white" />
                </div>
                <div className="flex max-w-[10.9375rem] flex-col gap-[0.4rem] max-lg:max-w-[11.4rem]">
                  <p className="m-0 text-xl leading-[1.3] font-medium tracking-[-0.01875rem] text-soft-black max-lg:text-white">
                    Friday &amp; Saturday
                  </p>
                  <p className="text-base text-soft-black max-lg:text-white">
                    6:00 AM — 4:00 PM
                  </p>
                  <p className="m-0 pt-[0.3rem] text-xl leading-[1.3] font-medium tracking-[-0.01875rem] text-soft-black max-lg:pt-0 max-lg:text-white">
                    Sunday closed
                  </p>
                </div>
              </div>

              <div className="flex w-full justify-center max-lg:justify-start">
                <Link
                  href="#Contact"
                  className="group flex items-center gap-[0.9375rem] border border-grullo bg-white px-[0.875rem] py-2.5 transition-colors hover:border-shadow-gold"
                >
                  <span className="rt-button-text text-soft-black uppercase">
                    start your wellness journey
                  </span>
                  <span className="relative block size-[29px]">
                    <Image
                      src={FOOTER_BTN_ICON}
                      alt=""
                      width={19}
                      height={29}
                      className="transition-opacity duration-200 group-hover:opacity-0"
                    />
                    <Image
                      src={FOOTER_BTN_ICON_DARK}
                      alt=""
                      width={19}
                      height={29}
                      className="absolute inset-0 m-auto opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    />
                  </span>
                </Link>
              </div>
            </div>

            <div className="hidden max-w-[11.9rem] flex-col gap-6 max-lg:col-span-1 max-lg:flex lg:hidden">
              <div className="flex max-w-[11.625rem] flex-col gap-[1.35rem]">
                <FooterHeading>Location</FooterHeading>
                <p className="text-base text-soft-black">
                  Dubai, United Arab Emirates
                </p>
              </div>
              <div className="flex flex-col gap-[1.35rem]">
                <FooterHeading>Follow us</FooterHeading>
                <FooterSocialList variant="dark" />
              </div>
            </div>
          </div>

          <div className="relative hidden justify-center md:flex">
            <div className="-ml-[1.375rem]">
              <div className="footer-large-text">Marina</div>
            </div>
          </div>

          <div className="relative z-[4] hidden items-end justify-between lg:flex">
            <div className="flex gap-6">
              <div className="flex max-w-[11.625rem] flex-col gap-[1.35rem]">
                <FooterHeading>
                  <span className="text-white">Location</span>
                </FooterHeading>
                <p className="text-base text-white">
                  Dubai, United Arab Emirates
                </p>
              </div>
              <div className="flex flex-col gap-[1.35rem]">
                <FooterHeading>
                  <span className="text-white">Follow us</span>
                </FooterHeading>
                <FooterSocialList variant="light" />
              </div>
            </div>
            <FooterCredits />
          </div>

          <FooterNavDots />

          <div className="order-last flex flex-col items-center lg:hidden">
            <div className="relative flex w-full flex-col items-center">
              <div className="footer-large-text text-center">Marina</div>
              <div className="pointer-events-none relative -mt-8 w-full max-w-[926px]">
                <Image
                  src={FOOTER_MIDDLE_IMAGE}
                  alt=""
                  width={926}
                  height={926}
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 767px) 100vw, 728px"
                />
              </div>
            </div>

            <nav
              aria-label="Footer utility mobile"
              className="flex items-center justify-center gap-2.5 pt-[1.875rem]"
            >
              {footerNavLinks.map((link, index) => (
                <span key={link.href} className="flex items-center gap-2.5">
                  <Link href={link.href} className="footer-link-v1 text-sm">
                    {link.label}
                  </Link>
                  {index < footerNavLinks.length - 1 ? (
                    <span
                      className="size-[0.3125rem] rounded-full bg-platinum"
                      aria-hidden
                    />
                  ) : null}
                </span>
              ))}
            </nav>

            <div className="flex flex-col items-center gap-[0.2rem] pt-2.5">
              <FooterCredits className="items-center text-center" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
