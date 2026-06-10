"use client";



import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";

import Image from "next/image";

import { useRef } from "react";



import { Button } from "@/components/ui/Button";

import { stats } from "@/data/stats";

import { containerClass } from "@/lib/layout";



export function Instructors() {

  const sectionRef = useRef<HTMLElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const imageWrapRef = useRef<HTMLDivElement>(null);



  useGSAP(

    () => {

      gsap.registerPlugin(ScrollTrigger);



      const mm = gsap.matchMedia();



      mm.add("(prefers-reduced-motion: no-preference)", () => {

        const content = contentRef.current;

        const imageWrap = imageWrapRef.current;



        if (!content) return;



        const items = gsap.utils.toArray<HTMLElement>(

          "[data-instructors-reveal]",

          content,

        );



        gsap.from(items, {

          y: 48,

          opacity: 0,

          duration: 0.9,

          stagger: 0.12,

          ease: "power3.out",

          scrollTrigger: {

            trigger: content,

            start: "top 80%",

            toggleActions: "play none none reverse",

          },

        });



        if (imageWrap) {

          gsap.fromTo(

            imageWrap,

            { yPercent: 6 },

            {

              yPercent: -6,

              ease: "none",

              scrollTrigger: {

                trigger: content,

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



  return (

    <section ref={sectionRef} id="Experts" className="relative bg-pudra-100">

      <div

        ref={contentRef}

        data-header-theme="dark"

        className="py-20 md:py-[160px]"

      >

        <div

          className={`flex flex-col gap-20 md:gap-[7.5rem] lg:gap-[10rem] ${containerClass}`}

        >

          <div className="grid w-full gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

            <div className="order-2 flex flex-col items-center gap-6 text-center lg:order-1 lg:items-start lg:text-left">

              <h2

                data-instructors-reveal

                className="heading-medium text-pudra-500"

              >

                <span className="block">

                  You can&apos;t think your way into a thriving body.

                </span>

                <span className="block">

                  You have to <span className="italic">feel your way back.</span>

                </span>

              </h2>



              <p

                data-instructors-reveal

                className="max-w-md text-base leading-[1.5] tracking-[-0.02em] text-pudra-500 lg:text-lg"

              >

                I spent 16 years studying the body — through movement, breath,

                trauma healing, biohacking, and nervous system science. I work

                with women who are done performing wellness and ready to actually

                live it — in their cells, their relationships, and the way they

                lead.

              </p>



              <div className="mt-2 w-full max-w-sm lg:mt-4">
                <Button href="#" variant="green" className="w-full lg:w-auto">
                  Learn my full story
                </Button>
              </div>

            </div>



            <div

              data-instructors-reveal

              className="order-1 flex justify-center lg:order-2"

            >

              <div

                ref={imageWrapRef}

                className="relative aspect-[1/1.36] w-full max-w-[290px] overflow-hidden rounded-[500px] lg:max-w-[540px]"

              >

                <Image

                  src="/assets/instructors/marina.png"

                  alt="Marina Savic"

                  fill

                  sizes="(max-width: 1023px) 87vw, 540px"

                  className="object-cover object-center"

                />

              </div>

            </div>

          </div>



          <div

            data-instructors-reveal

            className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8"

          >

            {stats.map((stat) => (

              <div key={stat.id} className="text-center">

                <p className="font-display text-[clamp(3.125rem,8vw,6rem)] leading-none text-marsh">

                  {stat.value}

                </p>

                <p className="rt-button-text mt-6 text-grullo">{stat.label}</p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

}


