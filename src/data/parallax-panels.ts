export type ParallaxPanel = {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
};

/** Breathiva wellness / therapy panels */
export const parallaxPanels: ParallaxPanel[] = [
  {
    id: "meditation",
    title: "Meditation",
    description:
      "Calm the mind through breathing, stillness, and daily awareness.",
    icon: "https://cdn.prod.website-files.com/69802b78489979b8502afdda/69968beea4278634fbc56b91_class-logo-1.svg",
    image:
      "https://cdn.prod.website-files.com/69802b78489979b8502afdda/699d27968716e3fcd6a5f771_rt-home-v2-1.webp",
  },
  {
    id: "aromatherapy",
    title: "Aromatherapy",
    description:
      "Natural essential oils support relaxation and emotional balance.",
    icon: "https://cdn.prod.website-files.com/69802b78489979b8502afdda/69968bef8c25d3ba9a0a4cbc_class-logo-2.svg",
    image:
      "https://cdn.prod.website-files.com/69802b78489979b8502afdda/699d2796afab459a7be62366_rt-home-v2-3.webp",
  },
  {
    id: "somatic",
    title: "Somatic practice",
    description:
      "Traditional movement builds strength, balance, and body flexibility.",
    icon: "https://cdn.prod.website-files.com/69802b78489979b8502afdda/69968bee74a5b343a1ac7917_class-logo-3.svg",
    image:
      "https://cdn.prod.website-files.com/69802b78489979b8502afdda/699d279664b9256eaf330d25_rt-home-v2-2.webp",
  },
  {
    id: "breathwork",
    title: "Breathwork",
    description:
      "Healing breath patterns promote relaxation and inner harmony.",
    icon: "https://cdn.prod.website-files.com/69802b78489979b8502afdda/69968beed005d21fe6c56ae7_class-logo-4.svg",
    image:
      "https://cdn.prod.website-files.com/69802b78489979b8502afdda/699d3eecee8c59dd8c0c83c0_rt-home-v3-2.webp",
  },
];
