"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { journeySlides } from "@/data/journey";
import {
  containerClass,
  journeyTitleClass,
  sectionHeaderMbClass,
  sectionYClass,
} from "@/lib/layout";

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      className={className}
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
  );
}

export function GroupSlider() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);

  const goTo = useCallback((next: number) => {
    const total = journeySlides.length;
    const wrapped = ((next % total) + total) % total;
    indexRef.current = wrapped;
    setIndex(wrapped);
  }, []);

  const goPrev = useCallback(() => goTo(indexRef.current - 1), [goTo]);
  const goNext = useCallback(() => goTo(indexRef.current + 1), [goTo]);

  const animateToIndex = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const slide = track?.firstElementChild as HTMLElement | null;
    if (!viewport || !track || !slide) return;

    const styles = getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;
    const slideWidth = slide.offsetWidth;
    const step = slideWidth + gap;
    const x = viewport.clientWidth / 2 - slideWidth / 2 - indexRef.current * step;

    gsap.to(track, {
      x,
      duration: 0.65,
      ease: "power2.inOut",
    });
  }, []);

  useEffect(() => {
    indexRef.current = index;
    animateToIndex();
  }, [index, animateToIndex]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    animateToIndex();
    const ro = new ResizeObserver(animateToIndex);
    ro.observe(viewport);
    return () => ro.disconnect();
  }, [animateToIndex]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (titleRef.current) {
          gsap.from(titleRef.current, {
            y: 60,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        }

        if (viewportRef.current) {
          gsap.from(viewportRef.current, {
            y: 60,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: viewportRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });

      ScrollTrigger.refresh();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      data-header-theme="dark"
      className={`overflow-hidden bg-white ${sectionYClass}`}
    >
      <div className={containerClass}>
        <header className={`mx-auto text-center ${sectionHeaderMbClass}`}>
          <h2
            ref={titleRef}
            className={`${journeyTitleClass} mx-auto text-pudra-500`}
          >
            A visual <span className="italic">journey</span> of mind and body
            harmony
          </h2>
        </header>
      </div>

      <div className="relative w-full">
        <div ref={viewportRef} className="w-full overflow-hidden">
          <div ref={trackRef} className="flex gap-5 will-change-transform">
            {journeySlides.map((slide) => (
              <div
                key={slide.id}
                className="journey-slide w-[94vw] max-w-[79rem] shrink-0"
              >
                <div className="relative aspect-[1.625/1] w-full overflow-hidden rounded-[40px]">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 1023px) 94vw, 1264px"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide"
          className="absolute top-1/2 left-[2%] z-10 hidden size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-pudra-500 transition-colors hover:bg-gray lg:flex md:size-20"
        >
          <ChevronIcon className="-rotate-90" />
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          className="absolute top-1/2 right-[2%] z-10 hidden size-16 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-pudra-500 transition-colors hover:bg-gray lg:flex md:size-20"
        >
          <ChevronIcon className="rotate-90" />
        </button>
      </div>

      <div className={`${containerClass} mt-8 flex justify-center gap-2 lg:hidden`}>
          {journeySlides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              onClick={() => goTo(i)}
              className={`size-2 rounded-full transition-colors ${
                i === index ? "bg-pudra-500" : "bg-gray-100"
              }`}
            />
          ))}
      </div>
    </section>
  );
}
