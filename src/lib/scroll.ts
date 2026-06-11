export function scrollToTop() {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const lenis = (window as Window & { __lenis?: LenisLike }).__lenis;

  if (lenis) {
    lenis.scrollTo(0, {
      immediate: reducedMotion,
      duration: reducedMotion ? 0 : 1.1,
    });
    return;
  }

  window.scrollTo({
    top: 0,
    behavior: reducedMotion ? "auto" : "smooth",
  });
}

type LenisLike = {
  scrollTo: (
    target: number,
    options?: { immediate?: boolean; duration?: number },
  ) => void;
};
