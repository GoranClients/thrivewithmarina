export type MembershipPlan = {
  id: string;
  name: string;
  price: string;
  features: string[];
  variant: "default" | "vip";
};

export const membershipPlans: MembershipPlan[] = [
  {
    id: "basic",
    name: "Basic membership",
    price: "$125/month",
    features: [
      "Unlimited access to yoga classes for one month",
      "Participation in group classes of various yoga styles",
      "Access to equipment and recreational areas at the studio",
    ],
    variant: "default",
  },
  {
    id: "vip",
    name: "Vip membership",
    price: "$150/month",
    features: [
      'All the benefits of the "Basic Membership"',
      "Personalized individual sessions with an experienced instructor",
      "Priority booking for high-demand classes",
    ],
    variant: "vip",
  },
  {
    id: "online",
    name: "Online membership",
    price: "$225/month",
    features: [
      "Access to an online platform for yoga classes from anywhere in the world",
      "Daily live streams with professional instructors",
      "The ability to view recordings of previous classes at your convenience",
    ],
    variant: "default",
  },
];
