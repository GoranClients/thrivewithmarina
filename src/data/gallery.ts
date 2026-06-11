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

/** 6 blog posts — custom text-free covers matched to each theme */
const blogPosts = [
  {
    href: "https://thrivewithmarina.com/your-identity-is-not-what-you-think-it-is-the-neuroscience-of-who-you-are-actually-becoming/",
    cover: "/assets/blog/cover-identity.png",
    alt: "Quiet reflection on identity and becoming",
    label: "Your Identity Is Not What You Think It Is",
  },
  {
    href: "https://thrivewithmarina.com/the-psychiatrist-who-discovered-that-the-breath-could-do-what-lsd-did/",
    cover: "/assets/blog/cover-breath-psychiatrist.png",
    alt: "Conscious breathwork in a serene studio",
    label: "The Psychiatrist Who Discovered That the Breath Could Do What LSD Did",
  },
  {
    href: "https://thrivewithmarina.com/why-you-feel-constantly-activated-and-what-most-people-still-dont-understand-about-it/",
    cover: "/assets/blog/cover-constantly-activated.png",
    alt: "Restorative stillness after nervous system activation",
    label: "Why You Feel Constantly Activated",
  },
  {
    href: "https://thrivewithmarina.com/when-the-world-feels-uncertain-what-happens-in-the-brain-and-nervous-system/",
    cover: "/assets/blog/cover-uncertain-world.png",
    alt: "Grounded calm amid uncertainty",
    label: "When the World Feels Uncertain",
  },
  {
    href: "https://thrivewithmarina.com/unconditional-love-is-not-an-ideal/",
    cover: "/assets/blog/cover-unconditional-love.png",
    alt: "Embodied self-compassion and warmth",
    label: "Unconditional Love Is Not an Ideal",
  },
  {
    href: "https://thrivewithmarina.com/theta-brain-waves-the-hidden-key-to-unlocking-your-creative-genius-and-emotional-mastery/",
    cover: "/assets/blog/cover-theta-waves.png",
    alt: "Dreamy meditative state and creative flow",
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
