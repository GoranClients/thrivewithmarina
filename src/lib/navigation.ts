import {
  BLOG_ANCHOR,
  FREE_BREATHWORK_ANCHOR,
  HEARTLEAD_MENTORING_ANCHOR,
  INSTAGRAM_URL,
  SOUL_LED_BODY_COACHING_ANCHOR,
} from "@/lib/site";

export const navLinks = [
  { label: "About Me", href: "#Experts" },
  { label: "HeartLead Mentoring", href: HEARTLEAD_MENTORING_ANCHOR },
  { label: "Soul-led Body Coaching", href: SOUL_LED_BODY_COACHING_ANCHOR },
  { label: "Freebies", href: FREE_BREATHWORK_ANCHOR },
  { label: "Blog", href: BLOG_ANCHOR },
  { label: "What do they say", href: "#Reviews" },
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

export function isExternalNavLink(href: string) {
  return href.startsWith("http");
}
