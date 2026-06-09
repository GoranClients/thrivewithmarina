"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { type FormEvent, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { containerClass } from "@/lib/layout";

const inputClassName =
  "h-[4.625rem] w-full rounded-[10px] bg-gray-100 px-7 text-base text-pudra-500 outline-none placeholder:text-gray-200 focus-visible:ring-2 focus-visible:ring-green/40";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const content = contentRef.current;
        const imageWrap = imageWrapRef.current;

        if (content) {
          const items = gsap.utils.toArray<HTMLElement>(
            "[data-contact-reveal]",
            content,
          );

          gsap.from(items, {
            y: 48,
            opacity: 0,
            duration: 0.9,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: content,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
        }

        if (imageWrap) {
          gsap.fromTo(
            imageWrap,
            { yPercent: 6 },
            {
              yPercent: -6,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }
      });

      ScrollTrigger.refresh();
    },
    { scope: sectionRef },
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    console.log({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section
      ref={sectionRef}
      id="Contact"
      data-header-theme="dark"
      className="relative z-10 -mb-16 overflow-hidden bg-pudra-100 py-20 md:-mb-20 md:py-[160px]"
    >
      <div
        className={`flex flex-col-reverse items-center gap-12 md:gap-16 lg:flex-row lg:items-center lg:justify-center lg:gap-[90px] ${containerClass}`}
      >
        <div
          ref={contentRef}
          className="flex w-full max-w-[464px] flex-col items-center text-center"
        >
          <h2
            data-contact-reveal
            className="heading-medium text-pudra-500"
          >
            Get in <span className="italic">touch</span>
          </h2>

          <p
            data-contact-reveal
            className="mt-10 max-w-md text-base leading-[1.5] tracking-[-0.02em] text-pudra-500"
          >
            Your input is valuable to us. Kindly complete the form, and we&apos;ll
            get back to you
          </p>

          <form
            data-contact-reveal
            onSubmit={handleSubmit}
            className="mt-10 flex w-full flex-col gap-5"
            noValidate
          >
            <label className="sr-only" htmlFor="contact-name">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Name*"
              className={inputClassName}
            />

            <label className="sr-only" htmlFor="contact-email">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Email*"
              className={inputClassName}
            />

            <label className="sr-only" htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              placeholder="Message*"
              className={`${inputClassName} min-h-[9rem] resize-y py-5`}
            />

            <div className="flex justify-center pt-4">
              <Button type="submit" variant="dark" className="min-w-[216px]">
                Send message
              </Button>
            </div>

            {submitted ? (
              <p
                className="text-center text-sm text-green-secondary"
                role="status"
              >
                Thank you! Your submission has been received!
              </p>
            ) : null}
          </form>
        </div>

        <div className="flex w-full max-w-[540px] justify-center lg:shrink-0">
          <div
            ref={imageWrapRef}
            className="relative aspect-[1/1.36] w-full max-w-[400px] overflow-hidden rounded-[500px] bg-[#E8E7E0] lg:max-w-[540px]"
          >
            <Image
              src="/assets/contact/contact.webp"
              alt="Marina meditating on a cushion in studio"
              fill
              sizes="(max-width: 1023px) 87vw, 540px"
              className="object-cover object-center scale-[1.12]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
