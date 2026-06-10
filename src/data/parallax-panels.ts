export type ParallaxPanel = {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
};

/** Wellness pillars — Biology, Mindset, Planning, Leadership */
export const parallaxPanels: ParallaxPanel[] = [
  {
    id: "biology",
    title: "Biology",
    description:
      "Exhaustion, weight gain, and hormonal swings are not your normal—optimize sleep, nutrition, movement, and stress with minimal time so daily rituals support your whole bodily system.",
    icon: "/assets/wellness/biology.svg",
    image: "",
  },
  {
    id: "mindset-energy",
    title: "Mindset energy",
    description:
      "Your mindset generates energy—we uncover subconscious patterns, trauma, and self-talk that limit you, then replace them with habits for clarity and higher performance.",
    icon: "/assets/wellness/mindset-energy.svg",
    image: "",
  },
  {
    id: "planning",
    title: "Planning",
    description:
      "Structure is freedom—we set non-negotiable boundaries, streamline your calendar, and protect time for what you love so you maximize output and perform at your highest level.",
    icon: "/assets/wellness/planning.svg",
    image: "",
  },
  {
    id: "leadership",
    title: "Healthy Authentic Leadership",
    description:
      "You cannot lead others until you lead yourself—build conscious awareness, step beyond comfort zones, and influence those around you, because what you do matters.",
    icon: "/assets/wellness/leadership.svg",
    image: "",
  },
];
