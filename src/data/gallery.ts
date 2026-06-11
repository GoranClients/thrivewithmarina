export type GalleryVariant =
  | "side-top"
  | "side-bottom"
  | "middle-card"
  | "middle-bottom"
  | "right-top"
  | "right-bottom";

export type GalleryItem = {
  id: string;
  href: string;
  src: string;
  alt: string;
  label: string;
  variant: GalleryVariant;
};

const CDN =
  "https://cdn.prod.website-files.com/69802b78489979b8502afdda";

const variants: GalleryVariant[] = [
  "side-top",
  "middle-card",
  "right-top",
  "side-bottom",
  "middle-bottom",
  "right-bottom",
];

/** 6 blog posts — text-free Breathiva wellness covers matched to each theme */
const blogPosts = [
  {
    href: "https://thrivewithmarina.com/your-identity-is-not-what-you-think-it-is-the-neuroscience-of-who-you-are-actually-becoming/",
    cover: `${CDN}/699d6f822dad791a839b8422_home-gallery-4.webp`,
    alt: "Quiet meditation practice",
    label: "Your Identity Is Not What You Think It Is",
  },
  {
    href: "https://thrivewithmarina.com/the-psychiatrist-who-discovered-that-the-breath-could-do-what-lsd-did/",
    cover: `${CDN}/699d6711a1d9a34f42c6cd1b_home-gallery-1.webp`,
    alt: "Breathwork session",
    label: "The Psychiatrist Who Discovered That the Breath Could Do What LSD Did",
  },
  {
    href: "https://thrivewithmarina.com/why-you-feel-constantly-activated-and-what-most-people-still-dont-understand-about-it/",
    cover: `${CDN}/699d670e0b46c3452f6961a5_home-gallery-5.webp`,
    alt: "Coaching conversation",
    label: "Why You Feel Constantly Activated",
  },
  {
    href: "https://thrivewithmarina.com/when-the-world-feels-uncertain-what-happens-in-the-brain-and-nervous-system/",
    cover: `${CDN}/699d670edb82dc0a321fdfa3_home-gallery-2.webp`,
    alt: "Grounded studio practice",
    label: "When the World Feels Uncertain",
  },
  {
    href: "https://thrivewithmarina.com/unconditional-love-is-not-an-ideal/",
    cover: `${CDN}/699d6f81236b4ac2a2578add_home-gallery-3.webp`,
    alt: "Group wellness session",
    label: "Unconditional Love Is Not an Ideal",
  },
  {
    href: "https://thrivewithmarina.com/theta-brain-waves-the-hidden-key-to-unlocking-your-creative-genius-and-emotional-mastery/",
    cover: `${CDN}/699d670e4a80df9dcc44573b_home-gallery-6.webp`,
    alt: "Mindful movement",
    label: "Theta Brain Waves",
  },
];

const gridOrder = [0, 3, 4, 1, 2, 5];

export const galleryItems: GalleryItem[] = gridOrder.map((postIndex, gridIndex) => {
  const post = blogPosts[postIndex];
  return {
    id: `blog-${postIndex + 1}`,
    href: post.href,
    src: post.cover,
    alt: post.alt,
    label: post.label,
    variant: variants[gridIndex],
  };
});
