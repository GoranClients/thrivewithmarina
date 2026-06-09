export type MembershipPlan = {
  id: string;
  name: string;
  price: string;
  features: string[];
  variant: "default" | "vip";
};

export const membershipPlans: MembershipPlan[] = [
  {
    id: "soul-led",
    name: "Soul-Led Body Coaching",
    price: "Transform your body. Elevate your vitality.",
    features: [
      "For the woman whose body is the bottleneck.",
      "A 1:1 holistic coaching journey combining biohacking, somatic movement, nutrition, and mindset work — tailored to your biology and your life.",
      "→ A body that supports your vision, not drains it.",
      "1:1 Coaching · Biohacking · Nutrition · Somatic Movement",
    ],
    variant: "default",
  },
  {
    id: "heartlead",
    name: "HeartLead Mentoring",
    price: "Rewire your nervous system. Lead from the inside out.",
    features: [
      "For the woman whose nervous system is the bottleneck.",
      "A 6 or 12-week 1:1 mentorship built on breathwork, somatic practices, and nervous system rewiring — to shift how you lead, relate, and create.",
      "→ Leadership that comes from coherence, not control.",
      "6 or 12 Weeks · Breathwork · 1:1 Mentoring · Nervous System",
    ],
    variant: "vip",
  },
];
