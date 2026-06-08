"use client";

import { useEffect } from "react";

export type LightboxMedia =
  | { type: "vimeo"; vimeoId: string }
  | { type: "mp4"; src: string };

type VideoLightboxProps = {
  media: LightboxMedia | null;
  onClose: () => void;
};

export function VideoLightbox({ media, onClose }: VideoLightboxProps) {
  useEffect(() => {
    if (!media) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [media, onClose]);

  if (!media) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-5"
      role="dialog"
      aria-modal="true"
      aria-label="Video review"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
        aria-label="Close"
      >
        ×
      </button>

      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-black aspect-[9/16] max-h-[85vh] sm:aspect-video sm:max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {media.type === "vimeo" ? (
          <iframe
            src={`https://player.vimeo.com/video/${media.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
            title="Review video"
            className="absolute inset-0 h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            src={media.src}
            controls
            autoPlay
            playsInline
            className="h-full w-full object-contain"
          />
        )}
      </div>
    </div>
  );
}
