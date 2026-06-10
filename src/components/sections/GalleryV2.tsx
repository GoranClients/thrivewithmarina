"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

import { galleryItems, type GalleryItem, type GalleryVariant } from "@/data/gallery";
import { containerClass } from "@/lib/layout";

const headingWords = [
  "A",
  "peaceful",
  { type: "circle" as const },
  "collection",
  "of",
  "moments",
  "from",
  "our",
  { type: "pill" as const },
  "sessions",
];

const imageRadius: Record<GalleryVariant, string> = {
  "side-top": "rounded-tl-[var(--radius-pill)]",
  "side-bottom": "rounded-bl-[var(--radius-pill)]",
  "middle-card": "",
  "middle-bottom": "",
  "right-top": "rounded-tr-[var(--radius-pill)]",
  "right-bottom": "rounded-br-[var(--radius-pill)]",
};

const wrapperOffset: Partial<Record<GalleryVariant, string>> = {
  "middle-card": "md:-mt-[6.9375rem] min-[992px]:-mt-[8.0625rem]",
};

function GalleryCard({
  item,
  reveal,
}: {
  item: GalleryItem;
  reveal?: boolean;
}) {
  return (
    <a
      href={item.src}
      target="_blank"
      rel="noopener noreferrer"
      data-gallery-reveal={reveal ? "" : undefined}
      className={`group block overflow-hidden ${wrapperOffset[item.variant] ?? ""}`}
    >
      <div
        className={`relative aspect-[720/1110] w-full overflow-hidden ${imageRadius[item.variant]}`}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 767px) 80vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-[#11111199] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
          <span className="relative block h-[3.125rem] w-[3.125rem]" aria-hidden>
            <span className="absolute left-1/2 top-1/2 h-px w-[3.125rem] -translate-x-1/2 -translate-y-1/2 bg-white" />
            <span className="absolute left-1/2 top-1/2 h-[3.125rem] w-px -translate-x-1/2 -translate-y-1/2 bg-white" />
          </span>
        </div>
      </div>
      <p className="pt-4 font-display text-2xl leading-tight tracking-[-0.03125rem] text-white">
        {item.label}
      </p>
    </a>
  );
}

export function GalleryV2() {
  const sectionRef = useRef<HTMLElement>(null);

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
      className="bg-marsh py-[15rem] text-grullo"
      style={{
        backgroundImage:
          'url("https://cdn.prod.website-files.com/69802b78489979b8502afdda/6996d55a56b093d81b59620a_class-timing-leaf-2.webp"), url("https://cdn.prod.website-files.com/69802b78489979b8502afdda/6996d55a2e31e8321e97bc21_class-timing-leaf-1.webp"), url("https://cdn.prod.website-files.com/69802b78489979b8502afdda/699d7566dbac86c108f7c236_Ellipse%206%20(1).svg"), url("https://cdn.prod.website-files.com/69802b78489979b8502afdda/699d7566fe54bea6277b5117_Ellipse%205.svg"), url("https://cdn.prod.website-files.com/69802b78489979b8502afdda/699d75666312c2295ee86dac_Ellipse%207%20(1).svg")',
        backgroundPosition: "0 118%, 100% 0, 0 0, 100% 100%, 0 0",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 919px, auto 622px, auto, auto, auto",
      }}
    >
      <div className={containerClass}>
        <div
          data-gallery-reveal
          className="flex flex-wrap items-center justify-center gap-x-[1.302vw] gap-y-[1.302vw] text-center max-md:mb-[1.875rem]"
        >
          {headingWords.map((word, index) => {
            if (typeof word === "object" && word.type === "circle") {
              return (
                <span
                  key={`circle-${index}`}
                  className="relative inline-block h-[3rem] w-[3rem] shrink-0 overflow-hidden rounded-full max-xl:h-[4.7rem] max-xl:w-[4.7rem] xl:h-[5.2rem] xl:w-[5.2rem]"
                >
                  <Image
                    src="https://cdn.prod.website-files.com/69802b78489979b8502afdda/699d4a8e7fa7999c802cdb84_home-v6-2.webp"
                    alt=""
                    fill
                    sizes="(max-width: 479px) 48px, 83px"
                    className="object-cover"
                  />
                </span>
              );
            }

            if (typeof word === "object" && word.type === "pill") {
              return (
                <span
                  key={`pill-${index}`}
                  className="relative mt-[0.6875rem] inline-block h-[2.5rem] w-[6.3rem] shrink-0 overflow-hidden rounded-[1.5625rem] max-md:h-[2rem] max-md:w-[3rem] md:h-auto md:w-[9.6rem] md:max-w-[9.6rem]"
                >
                  <Image
                    src="https://cdn.prod.website-files.com/69802b78489979b8502afdda/699d4a8edbac86c108eeb4bf_home-v6-1.webp"
                    alt=""
                    fill
                    sizes="(max-width: 479px) 48px, 154px"
                    className="object-cover"
                  />
                </span>
              );
            }

            return (
              <span
                key={`${word}-${index}`}
                className="font-display-alt text-[clamp(2.5rem,6.1vw,8.125rem)] font-light leading-none tracking-[-0.2rem]"
              >
                {word}
              </span>
            );
          })}
        </div>

        <div className="hidden grid-cols-3 items-start gap-x-[1.875rem] gap-y-[2.125rem] pt-[1.875rem] md:grid md:gap-y-[4.1875rem] md:pt-[14rem] min-[992px]:gap-y-[6.25rem] xl:gap-x-[6.8125rem]">
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} item={item} reveal />
          ))}
        </div>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:hidden">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              data-gallery-reveal
              className="w-[80vw] shrink-0 snap-center"
            >
              <GalleryCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
