"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { headerShellClass } from "@/lib/layout";
import { navLinks } from "@/lib/navigation";
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
        className={`fixed inset-x-0 top-0 z-50 px-4 pt-[18px] transition-[padding] duration-300 md:px-[68px] ${scrolled ? "pt-3" : ""}`}
      >
        <div
          className={`${headerShellClass} transition-all duration-500 ${
            scrolled
              ? "bg-white/90 shadow-[0_8px_32px_rgba(34,30,32,0.08)] backdrop-blur-xl"
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
            className="hidden items-center gap-8 lg:flex"
          >
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="header-link text-lg font-medium tracking-[-0.02em] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              href={CALENDLY_CLARITY_CALL_URL}
              variant="primary"
              className="px-8 py-3 text-base"
            >
              Book a Clarity Call
            </Button>
          </nav>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="relative flex size-[56px] shrink-0 items-center justify-center rounded-full bg-white lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <span
              className={`flex w-5 flex-col gap-1.5 ${menuOpen ? "gap-0" : ""}`}
            >
              <span
                className={`block h-0.5 w-full bg-pudra-500 transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-full bg-pudra-500 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-full bg-pudra-500 transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-pudra-500/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />

      <nav
        aria-label="Mobile"
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(100%,320px)] flex-col bg-pudra-100 px-8 py-28 transition-transform duration-500 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-display text-pudra-500"
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
