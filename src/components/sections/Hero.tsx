"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

import { Button } from "@/components/ui/Button";
import { containerClass, heroTitleClass } from "@/lib/layout";

const carouselImages = [
  "/assets/hero/carousel-1.jpg",
  "/assets/hero/carousel-2.jpg",
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const slides = gsap.utils.toArray<HTMLElement>(
        ".hero-slide",
        slidesRef.current,
      );

      if (slides.length < 2) return;

      gsap.set(slides[0], { opacity: 1 });
      gsap.set(slides.slice(1), { opacity: 0 });

      const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

      slides.forEach((slide, index) => {
        const next = slides[(index + 1) % slides.length];
        timeline.to(slide, { opacity: 0, duration: 1.8, ease: "power2.inOut" });
        timeline.to(
          next,
          { opacity: 1, duration: 1.8, ease: "power2.inOut" },
          "<",
        );
        timeline.to({}, { duration: 4 });
      });

      gsap.matchMedia().add("(prefers-reduced-motion: reduce)", () => {
        timeline.pause();
        gsap.set(slides, { opacity: 0 });
        gsap.set(slides[0], { opacity: 1 });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="Hero"
      data-header-theme="light"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-32 md:min-h-[56.25rem] md:pb-[5.625rem] md:pt-[22.8125rem]"
    >
      <div ref={slidesRef} className="absolute inset-0">
        {carouselImages.map((src, index) => (
          <div
            key={src}
            className="hero-slide absolute inset-0 opacity-0 will-change-[opacity]"
            aria-hidden={index !== 0}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
        <div
          className="hero-overlay pointer-events-none absolute inset-0 z-[1] bg-black/20"
          aria-hidden
        />
      </div>

      <div
        className={`relative z-10 grid w-full gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,0.5fr)] md:grid-rows-[auto_auto_auto] md:gap-x-[9.5rem] md:gap-y-10 ${containerClass}`}
      >
        <h1
          className={`${heroTitleClass} order-1 text-center text-white md:order-none md:col-start-1 md:row-start-1 md:text-left`}
        >
          <span className="block">
            Discover <span className="italic">balance</span> and
          </span>
          <span className="block">
            <span className="italic">inner harmony</span> at our
          </span>
          <span className="block">yoga studio</span>
        </h1>

        <div className="order-2 mx-auto flex w-full max-w-[280px] justify-center md:order-none md:col-start-2 md:row-span-3 md:row-start-1 md:mx-0 md:max-w-[324px] md:self-center">
          <div className="relative aspect-[324/434] w-full overflow-hidden rounded-[999px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/assets/hero/hero-video-poster.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/assets/hero/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <p className="order-3 max-w-[28.5556em] text-center text-base leading-[1.4] tracking-[-0.02em] text-white md:order-none md:col-start-1 md:row-start-2 md:text-left md:text-lg">
          We believe in the transformative power of yoga to nurture not just the
          body, but also the mind and soul.
        </p>

        <div className="order-4 flex justify-center md:order-none md:col-start-1 md:row-start-3 md:justify-start">
          <Button href="#Contact" variant="primary">
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}
