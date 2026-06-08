"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

import { Button } from "@/components/ui/Button";
import { containerClass } from "@/lib/layout";

export function Instructors() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const content = contentRef.current;
        const imageWrap = imageWrapRef.current;

        if (!content) return;

        const items = gsap.utils.toArray<HTMLElement>(
          "[data-instructors-reveal]",
          content,
        );

        gsap.from(items, {
          y: 48,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: content,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        if (imageWrap) {
          gsap.fromTo(
            imageWrap,
            { yPercent: 8 },
            {
              yPercent: -8,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }
      });

      ScrollTrigger.refresh();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="Experts"
      className="relative flex min-h-[min(180vh,1400px)] flex-col lg:min-h-[180vh]"
    >
      <div
        ref={contentRef}
        data-header-theme="dark"
        className="relative z-10 flex min-h-svh flex-1 items-center bg-pudra-100 py-20 md:py-[160px] lg:min-h-[56.25rem]"
      >
        <div
          className={`grid w-full gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 ${containerClass}`}
        >
          <div className="order-2 flex flex-col items-center gap-6 text-center lg:order-1 lg:items-start lg:text-left">
            <h2
              data-instructors-reveal
              className="heading-medium text-pudra-500"
            >
              <span className="italic">Expert </span>
              instructors
            </h2>

            <p
              data-instructors-reveal
              className="max-w-md text-base leading-[1.5] tracking-[-0.02em] text-pudra-500 lg:text-lg"
            >
              Each instructor is certified in their respective yoga discipline
              and is dedicated to guiding you on your journey with personalized
              attention.
            </p>

            <div data-instructors-reveal className="mt-2 w-full max-w-sm lg:mt-4">
              <Button href="#" variant="green" className="w-full lg:w-auto">
                Buy a subscription
              </Button>
            </div>
          </div>

          <div
            data-instructors-reveal
            className="order-1 flex justify-center lg:order-2"
          >
            <div
              ref={imageWrapRef}
              className="relative aspect-[1/1.36] w-full max-w-[290px] overflow-hidden rounded-[500px] lg:max-w-[540px]"
            >
              <Image
                src="/assets/instructors/instructor.webp"
                alt="Yoga instructor"
                fill
                sizes="(max-width: 1023px) 87vw, 540px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        data-header-theme="light"
        className="pointer-events-none sticky bottom-0 z-0 h-svh w-full shrink-0 overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/instructors/experts-bg-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/assets/instructors/experts-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/15" aria-hidden />
      </div>
    </section>
  );
}
