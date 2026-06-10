import { INSTAGRAM_URL } from "@/lib/site";

export const navLinks = [
  { label: "Trainers", href: "#Experts" },
  { label: "Reviews", href: "#Reviews" },
  { label: "Memberships", href: "#Memberships" },
  { label: "Classes", href: "#Sessions" },
] as const;

export const utilityLinks = [
  { label: "404 Not Found Page", href: "/404" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;

export const socialLinks = [
  {
    label: "Instagram",
    href: INSTAGRAM_URL,
  },
] as const;
