"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { headerShellClass } from "@/lib/layout";
import { isExternalNavLink, navLinks } from "@/lib/navigation";
import { CALENDLY_CLARITY_CALL_URL } from "@/lib/site";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        setScrolled(self.scroll() > 24);
      },
    });

    const darkThemeTrigger = ScrollTrigger.create({
      trigger: "[data-header-theme='dark']",
      start: "top 89px",
      end: "bottom 89px",
      onEnter: () => headerRef.current?.setAttribute("data-theme", "dark"),
      onEnterBack: () => headerRef.current?.setAttribute("data-theme", "dark"),
    });

    const lightThemeTrigger = ScrollTrigger.create({
      trigger: "[data-header-theme='light']",
      start: "top 89px",
      end: "bottom 89px",
      onEnter: () => headerRef.current?.setAttribute("data-theme", "light"),
      onEnterBack: () => headerRef.current?.setAttribute("data-theme", "light"),
      onLeave: () => headerRef.current?.setAttribute("data-theme", "dark"),
      onLeaveBack: () => headerRef.current?.setAttribute("data-theme", "dark"),
    });

    return () => {
      trigger.kill();
      darkThemeTrigger.kill();
      lightThemeTrigger.kill();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        data-theme="light"
        data-scrolled={scrolled ? "true" : "false"}
        className={`fixed inset-x-0 top-0 z-50 px-4 pt-[18px] transition-[padding] duration-300 md:px-5 lg:px-[68px] ${scrolled ? "pt-3" : ""}`}
      >
        <div
          className={`${headerShellClass} transition-all duration-500 ${
            scrolled
              ? "bg-white/90 shadow-[0_8px_32px_rgba(31,42,28,0.08)] backdrop-blur-xl"
              : "bg-white/[0.12] backdrop-blur-[60px]"
          }`}
        >
          <Link
            href="/"
            aria-label="ThriveWithMarina home"
            className="relative flex size-[56px] shrink-0 items-center justify-center rounded-full bg-white md:size-[72px]"
          >
            <Image
              src="/assets/brand/logo.svg"
              alt=""
              width={36}
              height={36}
              className="size-9 md:size-11"
            />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden min-w-0 flex-1 items-center justify-end gap-4 xl:flex xl:gap-5"
          >
            <ul className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-x-4 gap-y-2 xl:gap-x-5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    {...(isExternalNavLink(link.href)
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="header-link whitespace-nowrap text-[0.9375rem] font-medium tracking-[-0.02em] transition-colors xl:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              href={CALENDLY_CLARITY_CALL_URL}
              variant="primary"
              className="shrink-0 px-6 py-2.5 text-sm xl:px-8 xl:py-3 xl:text-base"
            >
              Book a Clarity Call
            </Button>
          </nav>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className={`relative flex size-[56px] shrink-0 items-center justify-center rounded-full bg-white lg:hidden ${menuOpen ? "pointer-events-none opacity-0" : ""}`}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span className="block h-0.5 w-full bg-marsh" />
              <span className="block h-0.5 w-full bg-marsh" />
              <span className="block h-0.5 w-full bg-marsh" />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-marsh/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />

      <nav
        aria-label="Mobile"
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(100%,320px)] flex-col bg-vista-white px-8 py-28 transition-transform duration-500 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 flex size-12 items-center justify-center rounded-full text-marsh transition-colors hover:bg-marsh/5"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <ul className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                {...(isExternalNavLink(link.href)
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-display text-marsh"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Button
            href={CALENDLY_CLARITY_CALL_URL}
            variant="primary"
            className="w-full"
          >
            Book a Clarity Call
          </Button>
        </div>
      </nav>
    </>
  );
}
