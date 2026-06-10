"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { Hero } from "@/components/sections/Hero";
import { ParallaxPanels } from "@/components/sections/ParallaxPanels";

/** Breathiva wellness overlap decorative background */
export const WELLNESS_SECTION_BG =
  "https://cdn.prod.website-files.com/69802b78489979b8502afdda/69a95215298649b1686dc9dc_home-one-bookig-background-image.svg";

const HERO_VIDEO_MP4 =
  "https://cdn.prod.website-files.com/69802b78489979b8502afdda%2F69a96115a4f3fb9f6af568df_3327726-hd_1920_1080_24fps%20%281%29_mp4.mp4";
const HERO_POSTER =
  "https://cdn.prod.website-files.com/69802b78489979b8502afdda%2F69a96115a4f3fb9f6af568df_3327726-hd_1920_1080_24fps%20%281%29_poster.0000000.jpg";

const OVERLAP_START_OPACITY = 0.68;

export function HeroWellnessStack() {
  const stackRef = useRef<HTMLDivElement>(null);
  const marshOverlayRef = useRef<HTMLDivElement>(null);
  const sectionBackdropRef = useRef<HTMLDivElement>(null);
  const wellnessRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const marshOverlay = marshOverlayRef.current;
      const sectionBackdrop = sectionBackdropRef.current;
      const wellness = wellnessRef.current;

      if (!marshOverlay || !sectionBackdrop || !wellness) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(sectionBackdrop, { opacity: OVERLAP_START_OPACITY });

        ScrollTrigger.create({
          trigger: wellness,
          start: "top bottom",
          end: "top top",
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(sectionBackdrop, {
              opacity:
                OVERLAP_START_OPACITY + progress * (1 - OVERLAP_START_OPACITY),
            });
            gsap.set(marshOverlay, { opacity: progress * 0.85 });
          },
        });

        gsap.utils
          .toArray<HTMLElement>("[data-wellness-reveal]", wellness)
          .forEach((el) => {
            gsap.fromTo(
              el,
              { y: 24, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 90%",
                  toggleActions: "play none none reverse",
                },
              },
            );
          });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(sectionBackdrop, { opacity: 1 });
        gsap.set(marshOverlay, { opacity: 1 });
      });
    },
    { scope: stackRef },
  );

  return (
    <div ref={stackRef} className="relative">
      <div className="sticky top-0 z-0 h-svh w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={HERO_POSTER}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={HERO_VIDEO_MP4} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/35" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #0a140abf 0%, rgba(0,0,0,0.2) 44%, rgba(8,16,8,0.41) 72%, rgba(10,20,10,0.44) 100%)",
          }}
          aria-hidden
        />
        <div
          ref={marshOverlayRef}
          className="pointer-events-none absolute inset-0 z-[3] opacity-0"
          style={{
            backgroundImage:
              "linear-gradient(0deg, #1f2a1c 8%, rgba(31,42,28,0) 31%)",
          }}
          aria-hidden
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[5] min-h-svh max-md:h-auto max-md:overflow-visible md:h-svh [&_#Hero]:pointer-events-auto">
        <Hero />
      </div>

      <ParallaxPanels
        ref={wellnessRef}
        sectionBackdropRef={sectionBackdropRef}
        backgroundUrl={WELLNESS_SECTION_BG}
      />
    </div>
  );
}
