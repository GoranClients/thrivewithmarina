"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { heroWords, type HeroWord } from "@/data/hero-words";
import { containerXlClass } from "@/lib/layout";
import {
  CALENDLY_CLARITY_CALL_URL,
  FREE_BREATHWORK_ANCHOR,
} from "@/lib/site";

function HeroWordItem({
  item,
  isOpen,
  onOpen,
  onClose,
  useClick,
  align = "right",
}: {
  item: HeroWord;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  useClick: boolean;
  align?: "left" | "right";
}) {
  const answerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const answer = answerRef.current;
    const inner = innerRef.current;
    if (!answer || !inner) return;

    if (isOpen) {
      gsap.to(answer, {
        height: inner.offsetHeight,
        duration: 0.45,
        ease: "power2.out",
      });
    } else {
      gsap.to(answer, {
        height: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  return (
    <div
      className={`flex w-full cursor-pointer flex-col gap-0 ${
        align === "left" ? "items-start text-left" : "items-end text-right"
      }`}
      onMouseEnter={() => {
        if (!useClick) onOpen();
      }}
      onMouseLeave={() => {
        if (!useClick) onClose();
      }}
      onClick={() => {
        if (useClick) {
          if (isOpen) onClose();
          else onOpen();
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (isOpen) onClose();
          else onOpen();
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
    >
      <div className="font-display text-[22px] leading-[1.1] text-white md:text-[34px]">
        {item.word}
      </div>
      <div ref={answerRef} className="h-0 w-full max-w-[21.25rem] overflow-hidden">
        <div ref={innerRef} className="pt-[1.6rem]">
          <p
            className={`text-sm leading-[1.35] text-white/90 md:text-base ${
              align === "left" ? "text-left" : "text-right"
            }`}
          >
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const [activeWordId, setActiveWordId] = useState<string | null>(null);
  const [useClick, setUseClick] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setUseClick(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const heroWordItems = (align: "left" | "right") =>
    heroWords.map((item) => (
      <HeroWordItem
        key={item.id}
        item={item}
        align={align}
        isOpen={activeWordId === item.id}
        useClick={useClick}
        onOpen={() => setActiveWordId(item.id)}
        onClose={() =>
          setActiveWordId((current) => (current === item.id ? null : current))
        }
      />
    ));

  return (
    <section
      id="Hero"
      data-header-theme="light"
      className="relative z-[5] min-h-svh w-full max-md:overflow-visible md:h-svh md:overflow-hidden"
    >
      <div
        className={`relative z-10 mx-auto flex min-h-svh w-full items-start pt-32 pb-10 md:h-full md:items-center md:py-[7.5rem] ${containerXlClass}`}
      >
        <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-[57.5rem] shrink-0">
            <h1 className="font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] text-white">
              You&apos;ve built
              <br />
              the success.
              <br />
              But your body is
              <br />
              running on empty.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-[1.4] tracking-[-0.02em] text-white/90 md:text-lg">
              I help visionary women lead from a regulated nervous system — so your
              energy, your presence, and your legacy finally match the vision you
              carry inside.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={CALENDLY_CLARITY_CALL_URL} variant="primary">
                Book a Clarity Call
              </Button>
              <Button href={FREE_BREATHWORK_ANCHOR} variant="secondary">
                Free Breathwork Practice
              </Button>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 lg:hidden">
              {heroWordItems("left")}
            </div>
          </div>

          <div className="hidden w-full flex-col items-end gap-5 lg:flex lg:max-w-[21.25rem] lg:shrink-0">
            {heroWordItems("right")}
          </div>
        </div>
      </div>
    </section>
  );
}
