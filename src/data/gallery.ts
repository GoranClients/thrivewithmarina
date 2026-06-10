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

const variants: GalleryVariant[] = [
  "side-top",
  "middle-card",
  "right-top",
  "side-bottom",
  "middle-bottom",
  "right-bottom",
];

/** 6 most recent blog posts — grid order: 1,3,5 | 2,4,6 */
const blogPosts = [
  {
    href: "https://thrivewithmarina.com/your-identity-is-not-what-you-think-it-is-the-neuroscience-of-who-you-are-actually-becoming/",
    src: "https://thrivewithmarina.com/wp-content/uploads/2026/04/Your-Identity-Is-Not-What-You-Think-It-Is.webp",
    label: "Your Identity Is Not What You Think It Is",
  },
  {
    href: "https://thrivewithmarina.com/the-psychiatrist-who-discovered-that-the-breath-could-do-what-lsd-did/",
    src: "https://thrivewithmarina.com/wp-content/uploads/2026/04/The-Psychiatrist-Who-Discovered-That-the-Breath-Could-Do-What-LSD-Did.webp",
    label: "The Psychiatrist Who Discovered That the Breath Could Do What LSD Did",
  },
  {
    href: "https://thrivewithmarina.com/why-you-feel-constantly-activated-and-what-most-people-still-dont-understand-about-it/",
    src: "https://thrivewithmarina.com/wp-content/uploads/2026/03/69c519f2c1880-thumbnail.jpg",
    label: "Why You Feel Constantly Activated",
  },
  {
    href: "https://thrivewithmarina.com/when-the-world-feels-uncertain-what-happens-in-the-brain-and-nervous-system/",
    src: "https://thrivewithmarina.com/wp-content/uploads/2026/03/When-the-World-Feels-Uncertain-What-Happens-in-the-Brain-and-Nervous-System.webp",
    label: "When the World Feels Uncertain",
  },
  {
    href: "https://thrivewithmarina.com/unconditional-love-is-not-an-ideal/",
    src: "https://thrivewithmarina.com/wp-content/uploads/2026/02/Unconditional-Love-Is-Not-an-Ideal.webp",
    label: "Unconditional Love Is Not an Ideal",
  },
  {
    href: "https://thrivewithmarina.com/theta-brain-waves-the-hidden-key-to-unlocking-your-creative-genius-and-emotional-mastery/",
    src: "https://thrivewithmarina.com/wp-content/uploads/2026/01/Theta-Brain-Waves-The-Hidden-Key-to-Unlocking-Your-Creative-Genius-and-Emotional-Mastery.webp",
    label: "Theta Brain Waves",
  },
];

const gridOrder = [0, 3, 4, 1, 2, 5];

export const galleryItems: GalleryItem[] = gridOrder.map((postIndex, gridIndex) => {
  const post = blogPosts[postIndex];
  return {
    id: `blog-${postIndex + 1}`,
    href: post.href,
    src: post.src,
    alt: post.label,
    label: post.label,
    variant: variants[gridIndex],
  };
});
