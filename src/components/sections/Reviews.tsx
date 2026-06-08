"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

import { StarRating } from "@/components/ui/StarRating";
import {
  VideoLightbox,
  type LightboxMedia,
} from "@/components/ui/VideoLightbox";
import { reviews, type Review, type VideoReview } from "@/data/reviews";
import {
  containerClass,
  sectionHeaderMbClass,
  sectionYClass,
} from "@/lib/layout";

const MOBILE_STACK_TOP_BASE = 100;
const MOBILE_STACK_PEEK = 14;

function PlayButton() {
  return (
    <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <span className="flex size-14 items-center justify-center rounded-full bg-white text-pudra-500 shadow-lg">
        <svg width="20" height="22" viewBox="0 0 20 22" fill="currentColor" aria-hidden>
          <path d="M0 0v22l20-11L0 0z" />
        </svg>
      </span>
    </span>
  );
}

function TextReviewCard({
  review,
  className = "",
}: {
  review: Extract<Review, { kind: "text" }>;
  className?: string;
}) {
  return (
    <article
      data-review-card
      className={`break-inside-avoid rounded-[32px] bg-white p-8 text-pudra-500 ${className}`}
    >
      <StarRating className="mb-6 text-green" />
      <h3 className="font-display text-2xl leading-[1.15] tracking-[-0.04em]">
        {review.title}
      </h3>
      <p className="mt-4 text-base leading-[1.5] tracking-[-0.02em] text-gray-200">
        {review.body}
      </p>
      <p className="mt-8 text-sm tracking-[-0.02em] text-gray-300">
        <span className="text-pudra-500">{review.author},</span> {review.age} years
      </p>
    </article>
  );
}

function VideoReviewCard({
  review,
  onPlay,
  className = "",
}: {
  review: VideoReview;
  onPlay: (media: LightboxMedia) => void;
  className?: string;
}) {
  const openLightbox = () => {
    if (review.mp4) {
      onPlay({ type: "mp4", src: review.mp4 });
      return;
    }
    if (review.vimeoId) {
      onPlay({ type: "vimeo", vimeoId: review.vimeoId });
    }
  };

  return (
    <article data-review-card className={`break-inside-avoid ${className}`}>
      <button
        type="button"
        onClick={openLightbox}
        className="relative block w-full overflow-hidden rounded-[32px] text-left"
        aria-label={`Play video review from ${review.name}`}
      >
        <div className="relative aspect-[1/1.2] w-full bg-pudra-200">
          {review.mp4 ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={review.poster}
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={review.mp4} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={review.poster}
              alt=""
              fill
              sizes="(max-width: 1023px) 100vw, 30vw"
              className="object-cover"
            />
          )}
          <PlayButton />
        </div>
      </button>
      <div className="mt-4 text-center text-white lg:text-left">
        <h3 className="font-display text-xl tracking-[-0.03em]">{review.name}</h3>
        <p className="mt-1 text-sm text-pudra-200">{review.age} years</p>
      </div>
    </article>
  );
}

function ReviewCard({
  review,
  onPlay,
  className = "",
}: {
  review: Review;
  onPlay: (media: LightboxMedia) => void;
  className?: string;
}) {
  if (review.kind === "text") {
    return <TextReviewCard review={review} className={className} />;
  }

  return <VideoReviewCard review={review} onPlay={onPlay} className={className} />;
}

export function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [lightbox, setLightbox] = useState<LightboxMedia | null>(null);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const title = titleRef.current;

        if (title) {
          gsap.from(title, {
            y: 60,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: title,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        }

        const cards = gsap.utils.toArray<HTMLElement>(
          ".reviews-masonry [data-review-card]",
          sectionRef.current,
        );

        if (cards.length) {
          gsap.from(cards, {
            y: 40,
            opacity: 0,
            duration: 0.75,
            stagger: 0.08,
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
      id="Reviews"
      data-header-theme="dark"
      className={`bg-pudra-500 ${sectionYClass}`}
    >
      <div className={containerClass}>
        <header
          className={`mx-auto max-w-4xl text-center ${sectionHeaderMbClass}`}
        >
          <h2 ref={titleRef} className="heading-medium text-white">
            Celebrating yoga <span className="italic">success.</span> Hear what{" "}
            <span className="italic">our</span> clients have to say
          </h2>
        </header>

        {/* Desktop: masonry */}
        <div className="reviews-masonry hidden columns-3 gap-5 lg:block">
          {reviews.map((review) =>
            review.kind === "text" ? (
              <TextReviewCard key={review.id} review={review} className="mb-5" />
            ) : (
              <VideoReviewCard
                key={review.id}
                review={review}
                onPlay={setLightbox}
                className="mb-5"
              />
            ),
          )}
        </div>

        {/* Mobile / tablet — wallet stack (sticky scroll) */}
        <div className="relative lg:hidden">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="sticky mb-5"
              style={{
                top: MOBILE_STACK_TOP_BASE + index * MOBILE_STACK_PEEK,
                zIndex: index + 1,
              }}
            >
              <ReviewCard
                review={review}
                onPlay={setLightbox}
                className="w-full shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
              />
            </div>
          ))}
          <div aria-hidden className="h-[55vh]" />
        </div>
      </div>

      <VideoLightbox media={lightbox} onClose={closeLightbox} />
    </section>
  );
}
