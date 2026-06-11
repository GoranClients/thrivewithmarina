"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { Button } from "@/components/ui/Button";
import { membershipPlans, type MembershipPlan } from "@/data/memberships";
import {
  containerClass,
  plansTitleClass,
  sectionHeaderMbClass,
  sectionYClass,
} from "@/lib/layout";

const planBackgrounds = [
  "https://cdn.prod.website-files.com/69802b78489979b8502afdda/698ed2468999d2a9cf8e54d6_pricing-two-home.webp",
  "https://cdn.prod.website-files.com/69802b78489979b8502afdda/698ed2b8f5509be05529aec0_pricing-three-studio.webp",
];

function PlanCard({
  plan,
  background,
}: {
  plan: MembershipPlan;
  background: string;
}) {
  return (
    <article
      id={plan.anchorId}
      data-membership-card
      className="relative flex min-h-[36rem] flex-col justify-between overflow-hidden rounded-[var(--radius-card)] p-8 text-white md:min-h-[42rem] md:p-10"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle farthest-corner at 50% 35%, rgba(31,42,28,0) 0%, rgba(31,42,28,0.55) 58%, #1f2a1c 99%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[78%] md:h-[74%]"
        style={{
          backgroundImage:
            "linear-gradient(to top, #1f2a1c 0%, rgba(31,42,28,0.96) 34%, rgba(31,42,28,0.78) 58%, rgba(31,42,28,0.2) 82%, transparent 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10">
        <div className="rt-button-text text-burlywood">{plan.name}</div>
        <h3 className="mt-8 font-display text-[clamp(1.75rem,3vw,2.25rem)] leading-tight">
          {plan.price}
        </h3>
      </div>

      <ul className="relative z-10 mt-10 flex flex-col gap-4 border-t border-white/20 pt-10">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="relative pl-4 text-sm leading-[1.5] md:text-base"
          >
            <span
              className="absolute top-[0.6em] left-0 size-1 rounded-full bg-white"
              aria-hidden
            />
            {feature}
          </li>
        ))}
      </ul>

      <div className="relative z-10 mt-10">
        <Button href="#" variant="gold">
          Explore this path
        </Button>
      </div>
    </article>
  );
}

export function Memberships() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

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

        const cards = gsap.utils.toArray<HTMLElement>(
          "[data-membership-card]",
          sectionRef.current,
        );

        if (cards.length) {
          gsap.from(cards, {
            y: 48,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="Memberships"
      data-header-theme="dark"
      className={`bg-vista-white ${sectionYClass}`}
    >
      <div className={containerClass}>
        <header className={`mx-auto max-w-3xl text-center ${sectionHeaderMbClass}`}>
          <h2
            ref={titleRef}
            className={`${plansTitleClass} mx-auto text-marsh`}
          >
            Two ways to work <span className="italic">with me</span>
          </h2>
          <p className="mt-6 text-base text-marsh/80">
            Explore flexible paths designed to support your wellness and leadership
            goals.
          </p>
        </header>

        <div className="grid gap-5 lg:grid-cols-2">
          {membershipPlans.map((plan, index) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              background={planBackgrounds[index] ?? planBackgrounds[0]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
