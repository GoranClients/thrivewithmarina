export type StatItem = {
  id: string;
  value: string;
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

/** Wireframe science stats — Breathiva counter style */
export const stats: StatItem[] = [
  {
    id: "body-brain",
    value: "80%",
    target: 80,
    suffix: "%",
    label: "Body-brain communication upward",
  },
  {
    id: "experience",
    value: "16+",
    target: 16,
    suffix: "+",
    label: "Years of experience",
  },
  {
    id: "method",
    value: "5",
    target: 5,
    label: "Pillars of the method",
  },
  {
    id: "flow",
    value: "1",
    target: 1,
    label: "Regulated nervous system",
  },
];
