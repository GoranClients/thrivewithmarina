export type GalleryVariant =
  | "side-top"
  | "side-bottom"
  | "middle-card"
  | "middle-bottom"
  | "right-top"
  | "right-bottom";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  label: string;
  variant: GalleryVariant;
};

/** Figma rt-gallery-v2 — grid order: g1, g3, g5 | g2, g4, g6 */
export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    src: "https://cdn.prod.website-files.com/69802b78489979b8502afdda/699d6711a1d9a34f42c6cd1b_home-gallery-1.webp",
    alt: "Breathwork session",
    label: "Breathwork",
    variant: "side-top",
  },
  {
    id: "g3",
    src: "https://cdn.prod.website-files.com/69802b78489979b8502afdda/699d6f81236b4ac2a2578add_home-gallery-3.webp",
    alt: "Group session",
    label: "Group session",
    variant: "middle-card",
  },
  {
    id: "g5",
    src: "https://cdn.prod.website-files.com/69802b78489979b8502afdda/699d670e0b46c3452f6961a5_home-gallery-5.webp",
    alt: "Coaching",
    label: "Coaching",
    variant: "right-top",
  },
  {
    id: "g2",
    src: "https://cdn.prod.website-files.com/69802b78489979b8502afdda/699d670edb82dc0a321fdfa3_home-gallery-2.webp",
    alt: "Studio practice",
    label: "Studio",
    variant: "side-bottom",
  },
  {
    id: "g4",
    src: "https://cdn.prod.website-files.com/69802b78489979b8502afdda/699d6f822dad791a839b8422_home-gallery-4.webp",
    alt: "Meditation",
    label: "Meditation",
    variant: "middle-bottom",
  },
  {
    id: "g6",
    src: "https://cdn.prod.website-files.com/69802b78489979b8502afdda/699d670e4a80df9dcc44573b_home-gallery-6.webp",
    alt: "Movement",
    label: "Movement",
    variant: "right-bottom",
  },
];
