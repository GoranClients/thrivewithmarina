"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

import { sessions } from "@/data/sessions";
import {
  containerClass,
  sectionHeaderMbClass,
  sessionsTitleClass,
} from "@/lib/layout";

const MOBILE_STACK_TOP_BASE = 100; // px — ispod header shell-a (89px)
const MOBILE_STACK_PEEK = 14; // px — vidljiv rub prethodne kartice

function getCardGap(list: HTMLElement) {
  const styles = getComputedStyle(list);
  const rawGap = styles.columnGap || styles.gap || "20";
  const gap = parseFloat(rawGap);

  return Number.isFinite(gap) ? gap : 20;
}

function getScrollDistance(list: HTMLElement, track: HTMLElement) {
  const gap = getCardGap(list);

  return Math.max(list.scrollWidth + gap - track.clientWidth, 0);
}

function SessionCard({
  title,
  description,
  className = "",
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <article
      className={`session-card flex min-h-[29.25rem] flex-col gap-5 rounded-2xl bg-gradient-to-b from-[#879c98] to-green p-8 text-white ${className}`}
    >
      <div className="flex size-[3.75rem] items-center justify-center rounded-[10px] bg-white">
        <Image
          src="/assets/sessions/session-logo.svg"
          alt=""
          width={22}
          height={18}
          className="h-[18px] w-[22px]"
        />
      </div>
      <h3 className="font-display text-[2.25rem] leading-none tracking-[-0.05em]">
        {title}
      </h3>
      <p className="mt-auto text-base leading-[1.4] tracking-[-0.02em]">
        {description}
      </p>
    </article>
  );
}

function SessionsHeading({ className = "" }: { className?: string }) {
  return (
    <h2
      className={`${sessionsTitleClass} mx-auto text-center ${className}`}
    >
      Yoga sessions this{" "}
      <span className="italic">find balance</span> and inner peace
    </h2>
  );
}

export function Sessions() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const scrollTrack = scrollTrackRef.current;
        const list = listRef.current;
        const track = trackRef.current;
        const progress = progressRef.current;

        if (!scrollTrack || !list || !track || !progress) return;

        const getDistance = () => getScrollDistance(list, track);

        const tween = gsap.to(list, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: scrollTrack,
            start: "top 18%",
            end: () => `+=${Math.max(getDistance() * 0.55, 480)}`,
            scrub: 0.35,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              gsap.set(progress, { scaleX: self.progress });
            },
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      ScrollTrigger.refresh();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="Sessions"
      data-header-theme="dark"
      className="relative bg-pudra-100"
    >
      <div className={`${containerClass} pb-10 pt-24 md:pt-[7.5rem] lg:hidden`}>
        <SessionsHeading className={sectionHeaderMbClass} />
      </div>

      {/* Desktop — horizontal scroll */}
      <div
        ref={scrollTrackRef}
        className="relative hidden lg:block"
        style={{ height: "calc(115vh + 8rem)" }}
      >
        <div className="sticky top-28 z-10 flex flex-col gap-14 pb-10 pt-8">
          <div className={containerClass}>
            <SessionsHeading className={sectionHeaderMbClass} />
          </div>

          <div ref={trackRef} className="w-full overflow-hidden">
            <div
              ref={listRef}
              className="flex w-max gap-5 pl-5 pr-5 will-change-transform md:pl-[68px] md:pr-[68px]"
            >
              {sessions.map((session) => (
                <SessionCard
                  key={session.id}
                  title={session.title}
                  description={session.description}
                  className="w-[min(85vw,26.25rem)] shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile — vertikalni stack (kartice jedna preko druge) */}
      <div className="relative px-5 pb-8 lg:hidden">
        {sessions.map((session, index) => (
          <div
            key={session.id}
            className="sticky mb-5"
            style={{
              top: MOBILE_STACK_TOP_BASE + index * MOBILE_STACK_PEEK,
              zIndex: index + 1,
            }}
          >
            <SessionCard
              title={session.title}
              description={session.description}
              className="w-full shadow-[0_12px_40px_rgba(34,30,32,0.12)]"
            />
          </div>
        ))}
        <div aria-hidden className="h-[28vh]" />
      </div>

      {/* Progress bar — samo desktop */}
      <div className={`${containerClass} mt-10 hidden max-w-[1304px] pb-16 lg:block`}>
        <div className="h-[3px] overflow-hidden rounded-full bg-gray-100">
          <div
            ref={progressRef}
            className="h-full origin-left scale-x-0 rounded-full bg-green will-change-transform"
          />
        </div>
      </div>
    </section>
  );
}
