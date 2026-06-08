export type Session = {
  id: string;
  title: string;
  description: string;
};

export const sessions: Session[] = [
  {
    id: "vinyasa-flow",
    title: "Vinyasa Flow",
    description:
      "Vinyasa Flow is a dynamic and fluid style of yoga that synchronizes breath with movement. The classes involve a sequence of poses that transition smoothly, promoting strength, flexibility, and mindfulness. It's a great way to build heat in the body and enhance cardiovascular fitness.",
  },
  {
    id: "hatha-yoga",
    title: "Hatha Yoga",
    description:
      "Hatha Yoga focuses on the fundamental postures and breathing techniques. It's a great starting point for beginners and emphasizes balance, flexibility, and relaxation. Hatha classes often incorporate a mix of poses and relaxation techniques to promote overall well-being.",
  },
  {
    id: "kundalini-yoga",
    title: "Kundalini Yoga",
    description:
      "Kundalini Yoga aims to awaken the spiritual energy within the body through a combination of breathwork, meditation, and dynamic postures. This practice focuses on expanding consciousness and achieving a deeper sense of self-awareness. Kundalini classes often incorporate mantra chanting and meditation.",
  },
  {
    id: "yin-yoga",
    title: "Yin Yoga",
    description:
      "Yin Yoga is a slow-paced style that targets the connective tissues and joints. Poses are held for longer durations, promoting deep relaxation and increased flexibility. Yin Yoga is a wonderful way to release tension and cultivate mindfulness, making it suitable for both beginners and experienced practitioners.",
  },
  {
    id: "power-yoga",
    title: "Power Yoga",
    description:
      "Power Yoga is a more vigorous and fitness-focused style. It builds strength, endurance, and flexibility through a series of challenging poses. Classes often include elements of cardio and can be physically demanding. Power Yoga is perfect for those looking to combine a workout with their yoga practice.",
  },
];
