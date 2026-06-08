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

function PlanCard({ plan }: { plan: MembershipPlan }) {
  const isVip = plan.variant === "vip";

  return (
    <article
      data-membership-card
      className={`flex w-full flex-col rounded-[20px] p-8 lg:min-h-[41rem] lg:p-10 ${
        isVip
          ? "bg-green text-pudra-100 lg:scale-[1.03] lg:shadow-[0_24px_64px_rgba(34,30,32,0.12)]"
          : "bg-white text-pudra-500"
      }`}
    >
      <div
        className={`inline-flex h-10 items-center rounded-full px-5 text-base font-medium tracking-[-0.02em] ${
          isVip ? "bg-pudra-100 text-pudra-500" : "bg-green text-white"
        }`}
      >
        {plan.name}
      </div>

      <h3 className="mt-8 font-display text-[clamp(2rem,4vw,2.25rem)] leading-none tracking-[-0.04em]">
        {plan.price}
      </h3>

      <ul
        className={`mt-10 flex flex-col gap-4 border-t pt-10 lg:flex-1 ${
          isVip ? "border-white/25" : "border-pudra-200"
        }`}
      >
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="relative pl-4 text-base leading-[1.5] tracking-[-0.02em]"
          >
            <span
              className={`absolute top-[0.6em] left-0 size-1 rounded-full ${
                isVip ? "bg-pudra-100" : "bg-pudra-500"
              }`}
              aria-hidden
            />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-10 pt-2">
        <Button
          href="#"
          variant={isVip ? "primary" : "dark"}
          className="w-full"
        >
          Buy a subscription
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

      ScrollTrigger.refresh();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="Memberships"
      data-header-theme="dark"
      className={`bg-pudra-100 ${sectionYClass}`}
    >
      <div className={containerClass}>
        <header className={`mx-auto text-center ${sectionHeaderMbClass}`}>
          <h2
            ref={titleRef}
            className={`${plansTitleClass} mx-auto text-pudra-500`}
          >
            Pricing <span className="italic">plans</span> for your yoga{" "}
            <span className="italic">wellness journey</span>
          </h2>
        </header>

        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-3 lg:items-stretch lg:gap-5">
          {membershipPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
