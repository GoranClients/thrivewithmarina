"use client";

import Image from "next/image";
import Link from "next/link";
import { forwardRef, type RefObject } from "react";

import { parallaxPanels } from "@/data/parallax-panels";
import { containerClass } from "@/lib/layout";
import { CALENDLY_CLARITY_CALL_URL } from "@/lib/site";

type ParallaxPanelsProps = {
  sectionBackdropRef?: RefObject<HTMLDivElement | null>;
  backgroundUrl?: string;
};

const SECTION_TOP_MASK =
  "linear-gradient(to bottom, transparent 0%, rgba(31, 42, 28, 0.45) 14%, rgba(31, 42, 28, 0.92) 28%, #1f2a1c 42%, #1f2a1c 100%)";

export const ParallaxPanels = forwardRef<HTMLElement, ParallaxPanelsProps>(
  function ParallaxPanels({ sectionBackdropRef, backgroundUrl }, ref) {
    return (
      <section
        ref={ref}
        id="Sessions"
        data-header-theme="light"
        className="relative z-[7] min-h-svh pb-[3.75rem] md:pb-[var(--section-gap-md)]"
      >
        <div
          ref={sectionBackdropRef}
          className="pointer-events-none absolute inset-0 bg-marsh bg-cover bg-center bg-no-repeat opacity-[0.68]"
          style={{
            backgroundImage: backgroundUrl
              ? `url(${backgroundUrl})`
              : undefined,
            WebkitMaskImage: SECTION_TOP_MASK,
            maskImage: SECTION_TOP_MASK,
          }}
          aria-hidden
        />

        <div
          className={`${containerClass} relative z-10 flex min-h-svh flex-col justify-center pt-20 md:justify-start md:pt-[7.5rem]`}
        >
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
            <div
              data-wellness-reveal
              className="mb-6 flex max-w-[6.625rem] justify-center md:mb-0 md:pb-4"
            >
              <Image
                src="https://cdn.prod.website-files.com/69802b78489979b8502afdda/699c318b8f03d039741943da_home-hero-wellness-logo.svg"
                alt=""
                width={106}
                height={105}
                className="h-auto w-full"
              />
            </div>
            <h2
              data-wellness-reveal
              className="font-display text-[clamp(1.75rem,4vw,3rem)] font-light leading-tight text-white"
            >
              Inspiring mindful living through purposeful practice and wellness
            </h2>
            <p
              data-wellness-reveal
              className="mx-auto mt-6 max-w-[23.625rem] text-base text-white/80"
            >
              Discover calm, strength, and balance through mindful breathwork and
              somatic coaching.
            </p>
            <div className="relative z-20 mt-8">
              <Link
                href={CALENDLY_CLARITY_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-col items-center gap-2 text-burlywood transition-colors hover:text-shadow-gold"
              >
                <span className="rt-button-text text-burlywood">Book a Clarity Call</span>
                <span
                  className="h-px w-full bg-burlywood opacity-100 transition-opacity group-hover:opacity-100"
                  aria-hidden
                />
              </Link>
            </div>
          </div>

          <div className="mt-[1.875rem] md:mt-[7.1875rem]">
            <div className="relative grid grid-cols-2 gap-x-[1.7rem] gap-y-[1.7rem] md:grid-cols-4 md:gap-[2.375rem]">
              {parallaxPanels.map((panel) => (
                <article
                  key={panel.id}
                  data-wellness-reveal
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-5 flex h-14 w-14 max-w-[3.625rem] items-center justify-center md:mb-[1.4rem]">
                    <Image
                      src={panel.icon}
                      alt=""
                      width={59}
                      height={56}
                      className="h-auto w-full"
                    />
                  </div>
                  <h3 className="font-display text-lg text-white md:text-xl">
                    {panel.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/80">{panel.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  },
);
