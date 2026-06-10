"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef, useState } from "react";

import { galleryItems } from "@/data/gallery";
import { containerClass } from "@/lib/layout";

const variantClasses: Record<
  (typeof galleryItems)[number]["variant"],
  string
> = {
  "side-top": "rounded-tl-[var(--radius-pill)]",
  "side-bottom": "rounded-bl-[var(--radius-pill)]",
  middle: "-mt-32",
  "right-top": "rounded-tr-[var(--radius-pill)]",
  "right-bottom": "rounded-br-[var(--radius-pill)]",
};

export function GalleryV2() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from("[data-gallery-reveal]", {
        y: 48,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
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
      data-header-theme="light"
      className="bg-marsh py-[15rem] text-white"
      style={{
        backgroundImage:
          'url("https://cdn.prod.website-files.com/69802b78489979b8502afdda/6996d55a56b093d81b59620a_class-timing-leaf-2.webp"), url("https://cdn.prod.website-files.com/69802b78489979b8502afdda/6996d55a2e31e8321e97bc21_class-timing-leaf-1.webp")',
        backgroundPosition: "0 118%, 100% 0",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 919px, auto 622px",
      }}
    >
      <div className={containerClass}>
        <div
          data-gallery-reveal
          className="mb-20 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center"
        >
          <span className="font-display-alt text-[clamp(2rem,5vw,4.5rem)] leading-none">
            A
          </span>
          <span className="font-display-alt text-[clamp(2rem,5vw,4.5rem)] leading-none">
            peaceful
          </span>
          <span className="relative mx-2 inline-block h-16 w-16 overflow-hidden rounded-full">
            <Image
              src="https://cdn.prod.website-files.com/69802b78489979b8502afdda/699d4a8e7fa7999c802cdb84_home-v6-2.webp"
              alt=""
              fill
              sizes="64px"
              className="object-cover"
            />
          </span>
          <span className="font-display-alt text-[clamp(2rem,5vw,4.5rem)] leading-none">
            collection of moments from our
          </span>
          <span className="relative mx-2 inline-block h-12 w-32 overflow-hidden rounded-[1.5625rem]">
            <Image
              src="https://cdn.prod.website-files.com/69802b78489979b8502afdda/699d4a8edbac86c108eeb4bf_home-v6-1.webp"
              alt=""
              fill
              sizes="128px"
              className="object-cover"
            />
          </span>
          <span className="font-display-alt text-[clamp(2rem,5vw,4.5rem)] leading-none">
            sessions
          </span>
        </div>

        <div className="hidden grid-cols-3 gap-[1.875rem] md:grid">
          {galleryItems.map((item) => (
            <button
              key={item.id}
              type="button"
              data-gallery-reveal
              className={`group relative overflow-hidden text-left ${variantClasses[item.variant]} ${
                item.variant === "middle" ? "col-span-1" : ""
              }`}
              onMouseEnter={() => setActiveId(item.id)}
              onMouseLeave={() => setActiveId(null)}
              onFocus={() => setActiveId(item.id)}
              onBlur={() => setActiveId(null)}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1023px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center bg-black/50 transition-opacity duration-500 ${
                    activeId === item.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="rt-button-text text-white">{item.label}</span>
                  <span className="mt-4 h-px w-8 bg-white" aria-hidden />
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:hidden">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              data-gallery-reveal
              className="w-[80vw] shrink-0 snap-center overflow-hidden rounded-[var(--radius-card)]"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="80vw"
                  className="object-cover"
                />
              </div>
              <p className="p-4 text-center rt-button-text">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
