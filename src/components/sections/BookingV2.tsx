"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

import { containerClass } from "@/lib/layout";
import { CALENDLY_CLARITY_CALL_URL } from "@/lib/site";

const CALENDLY_EMBED = `${CALENDLY_CLARITY_CALL_URL}?hide_gdpr_banner=1&background_color=f9f6f3&text_color=1f2a1c&primary_color=d8aa78`;

export function BookingV2() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from("[data-booking-reveal]", {
        y: 48,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="Contact"
      data-header-theme="dark"
      className={`relative z-10 -mb-16 overflow-hidden bg-vista-white py-20 md:-mb-20 md:py-[160px]`}
    >
      <div className={containerClass}>
        <div className="mb-12 text-center">
          <p
            data-booking-reveal
            className="font-display-alt text-[clamp(3rem,10vw,8rem)] leading-[0.85] text-marsh"
          >
            Book a call
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="space-y-8">
            <div data-booking-reveal>
              <h2 className="heading-medium text-marsh">
                Experience the method <span className="italic">today</span>
              </h2>
              <p className="mt-4 max-w-md text-base leading-[1.5] text-marsh/80">
                Schedule your Clarity Call with Marina. A space to explore where
                you are, what your body needs, and how we can work together.
              </p>
            </div>

            <div
              data-booking-reveal
              className="hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
            >
              <div className="relative aspect-[420/706] overflow-hidden rounded-[var(--radius-card)]">
                <Image
                  src="https://cdn.prod.website-files.com/69802b78489979b8502afdda/69b927aa76dc20111e0e831f_Rectangle%2017.avif"
                  alt="Marina coaching"
                  fill
                  sizes="(max-width: 1023px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative hidden aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] lg:block">
                <Image
                  src="https://cdn.prod.website-files.com/69802b78489979b8502afdda/6996bc8e317a4f77671010e4_book-class-image-2.webp"
                  alt=""
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div
            data-booking-reveal
            className="overflow-hidden rounded-[var(--radius-card)] border border-platinum bg-white shadow-[0_24px_64px_rgba(31,42,28,0.08)]"
          >
            <iframe
              title="Schedule a Clarity Call with Marina"
              src={CALENDLY_EMBED}
              className="h-[700px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
