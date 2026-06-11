"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useId, useRef, useState } from "react";

import { faqIntro, faqItems, faqOutro } from "@/data/faq";
import { containerClass } from "@/lib/layout";

const CDN =
  "https://cdn.prod.website-files.com/69802b78489979b8502afdda";

const FAQ_LEAF_1 = `${CDN}/69809c44ecf9d111c2531496_password-leaf-1.webp`;
const FAQ_LEAF_2 = `${CDN}/69809c44ac2cb3bdca7711d2_password-leaf-2.webp`;
const FAQ_MASK = `${CDN}/69a58881fd23578844672c87_faq-image-one-mask.svg`;
const FAQ_IMAGE = `${CDN}/699d6f822dad791a839b8422_home-gallery-4.webp`;

function FaqIcon({ open }: { open: boolean }) {
  return (
    <span
      className="relative mt-[0.1875rem] flex h-3 w-3 shrink-0 items-center justify-center"
      aria-hidden
    >
      <span className="absolute h-px w-3 bg-black" />
      <span
        className={`absolute h-3 w-px bg-black transition-opacity duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
    </span>
  );
}

function FaqAccordionItem({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}: {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `${id}-panel`;
  const buttonId = `${id}-button`;

  return (
    <div className="border-t border-black/20 last:border-b last:border-black/20">
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-[1.1rem] pr-6 text-left md:pr-[1.5625rem]"
      >
        <span className="font-display text-lg leading-[1.3] tracking-[-0.02em] text-soft-black md:text-xl">
          {question}
        </span>
        <FaqIcon open={isOpen} />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[32.6rem] pt-1 pb-[1.4rem] text-base leading-[1.55] text-marsh/80">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const sectionRef = useRef<HTMLElement>(null);
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from("[data-faq-reveal]", {
        y: 40,
        opacity: 0,
        duration: 0.85,
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
      id="FAQ"
      data-header-theme="dark"
      className="bg-platinum py-[6.875rem] pb-[var(--section-gap)]"
      style={{
        backgroundImage: `url("${FAQ_LEAF_1}"), url("${FAQ_LEAF_2}"), linear-gradient(to bottom, var(--platinum), var(--platinum))`,
        backgroundPosition: "100% 0, 0 100%, 0 0",
        backgroundRepeat: "no-repeat, no-repeat, repeat",
        backgroundSize: "45rem, 31.875rem, auto",
      }}
    >
      <div className={containerClass}>
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div
            data-faq-reveal
            className="relative hidden flex-1 flex-col items-end gap-10 lg:flex lg:max-w-[27.5rem]"
          >
            <p
              className="font-display-alt self-start text-[clamp(6rem,18vw,16.563rem)] leading-none font-light text-grullo"
              style={{ writingMode: "vertical-lr", transform: "rotate(-180deg)" }}
            >
              FAQ
            </p>
            <div
              className="relative w-full max-w-[21.875rem] overflow-hidden pl-0 lg:pl-20"
              style={{
                WebkitMaskImage: `url("${FAQ_MASK}")`,
                maskImage: `url("${FAQ_MASK}")`,
                WebkitMaskSize: "100%",
                maskSize: "100%",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            >
              <Image
                src={FAQ_IMAGE}
                alt=""
                width={350}
                height={420}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="w-full max-w-[46.875rem] flex-1">
            <div data-faq-reveal className="mb-[3.2rem] max-lg:mb-[2.1375rem]">
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-tight tracking-[-0.04em] text-marsh">
                Frequently Asked Questions
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-[1.55] text-marsh/80">
                {faqIntro}
              </p>
            </div>

            <div data-faq-reveal>
              {faqItems.map((item) => (
                <FaqAccordionItem
                  key={item.id}
                  id={`${baseId}-${item.id}`}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openId === item.id}
                  onToggle={() =>
                    setOpenId((current) =>
                      current === item.id ? null : item.id,
                    )
                  }
                />
              ))}
            </div>

            <p
              data-faq-reveal
              className="mt-8 max-w-2xl text-base leading-[1.55] text-marsh/80"
            >
              {faqOutro}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
