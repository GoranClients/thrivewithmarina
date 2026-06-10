"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { type FormEvent, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { containerClass, sectionYClass } from "@/lib/layout";

export function FreeBreathwork() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from("[data-breathwork-reveal]", {
        y: 48,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("email");
    console.log({ freeBreathwork: email });
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section
      ref={sectionRef}
      id="FreeBreathwork"
      data-header-theme="dark"
      className={`bg-vista-white ${sectionYClass}`}
    >
      <div className={containerClass}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              data-breathwork-reveal
              className="heading-medium text-marsh"
            >
              Free breathwork <span className="italic">practice</span>
            </h2>
            <p
              data-breathwork-reveal
              className="mt-6 max-w-md text-base leading-[1.5] text-marsh/80 md:text-lg"
            >
              Regulate your nervous system, boost your clarity, and start your day
              from a place of power — not pressure. In just 5 minutes, every
              morning.
            </p>

            <form
              data-breathwork-reveal
              onSubmit={handleSubmit}
              className="mt-8 max-w-md"
            >
              <label className="sr-only" htmlFor="breathwork-email">
                Email
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="breathwork-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Your email"
                  className="h-14 flex-1 rounded-[var(--radius-input)] border border-platinum bg-white px-5 text-marsh outline-none placeholder:text-grullo focus-visible:ring-2 focus-visible:ring-burlywood/50"
                />
                <Button type="submit" variant="dark" showLine={false}>
                  Get access
                </Button>
              </div>
              <p className="mt-3 text-xs text-grullo">
                We respect your privacy. Unsubscribe anytime.
              </p>
              {submitted ? (
                <p className="mt-3 text-sm text-kaitoke-green" role="status">
                  Thank you! Check your inbox for your free practice.
                </p>
              ) : null}
            </form>
          </div>

          <div
            data-breathwork-reveal
            className="relative grid grid-cols-2 gap-4"
          >
            <div className="relative aspect-square overflow-hidden rounded-[var(--radius-card)]">
              <Image
                src="https://cdn.prod.website-files.com/69802b78489979b8502afdda/699d3eecee8c59dd8c0c83c0_rt-home-v3-2.webp"
                alt="Breathwork practice"
                fill
                sizes="(max-width: 1023px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative mt-12 aspect-square overflow-hidden rounded-[var(--radius-card)]">
              <Image
                src="https://cdn.prod.website-files.com/69802b78489979b8502afdda/699d3ed977b7cc8ae95f4a08_rt-home-v3-1.webp"
                alt="Studio session"
                fill
                sizes="(max-width: 1023px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
