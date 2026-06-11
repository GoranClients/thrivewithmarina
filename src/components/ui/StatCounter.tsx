"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type StatCounterProps = {
  target: number;
  displayValue: string;
  suffix?: string;
  prefix?: string;
  delay?: number;
};

export function StatCounter({
  target,
  displayValue,
  suffix = "",
  prefix = "",
  delay = 0,
}: StatCounterProps) {
  const valueRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = valueRef.current;
      if (!el) return;

      gsap.registerPlugin(ScrollTrigger);

      const trigger = el.closest("[data-stats-grid]");
      if (!trigger) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const counter = { value: 0 };

        gsap.to(counter, {
          value: target,
          duration: 2.2,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger,
            start: "top 88%",
            once: true,
          },
          onUpdate() {
            el.textContent = `${prefix}${Math.round(counter.value)}${suffix}`;
          },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        el.textContent = displayValue;
      });

      return () => mm.revert();
    },
    { scope: valueRef, dependencies: [target, displayValue, suffix, prefix, delay] },
  );

  return (
    <span ref={valueRef}>
      {prefix}0{suffix}
    </span>
  );
}
