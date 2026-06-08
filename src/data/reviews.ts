export type TextReview = {
  id: string;
  kind: "text";
  title: string;
  body: string;
  author: string;
  age: number;
};

export type VideoReview = {
  id: string;
  kind: "video";
  name: string;
  age: number;
  poster: string;
  mp4?: string;
  vimeoId?: string;
};

export type Review = TextReview | VideoReview;

export const reviews: Review[] = [
  {
    id: "review-0",
    kind: "text",
    title: "The yoga studio is a source of harmony and positive emotions!",
    body: '"The ThriveWithMarina yoga studio is a source of harmony and positive emotions! I\'ve been attending classes for a year and a half now, and the results are astonishing. The instructors are fantastic at what they do and always help find the right level of challenge. I\'ve found not only physical activity but also friends among like-minded individuals. Thanks to the instructors, I\'ve become more flexible and calm."',
    author: "John Smith",
    age: 26,
  },
  {
    id: "review-1",
    kind: "video",
    name: "Emily Johnson",
    age: 23,
    poster: "/assets/reviews/emily.webp",
    vimeoId: "559580269",
  },
  {
    id: "review-2",
    kind: "text",
    title: "I've been practicing yoga here for years",
    body: "I've been practicing yoga here for years, and I'm continuously amazed by the positive impact it has on my physical and mental well-being. The community here is supportive and inspiring",
    author: "William Davis",
    age: 19,
  },
  {
    id: "review-3",
    kind: "text",
    title: "I've found my sanctuary at this yoga studio.",
    body: "I've found my sanctuary at this yoga studio. The instructors are incredibly knowledgeable and create a welcoming atmosphere that makes each class a rejuvenating experience.",
    author: "Sophia Brown",
    age: 20,
  },
  {
    id: "review-4",
    kind: "text",
    title: "This yoga studio is a hidden gem!",
    body: '"This yoga studio is a hidden gem! The variety of classes suits all levels, and the peaceful ambiance instantly puts you in a zen state of mind. The instructors are fantastic at what they do and always help find the right level of challenge. I\'ve found not only physical activity but also friends among like-minded individuals. Thanks to the instructors, I\'ve become more flexible and calm."',
    author: "Daniel Wilson",
    age: 31,
  },
  {
    id: "review-5",
    kind: "video",
    name: "Olivia Martinez",
    age: 27,
    poster: "/assets/reviews/olivia.webp",
    vimeoId: "424982514",
  },
  {
    id: "review-6",
    kind: "video",
    name: "James Anderson",
    age: 24,
    poster: "/assets/reviews/james-poster.jpg",
    mp4: "/assets/reviews/james.mp4",
    vimeoId: "416320503",
  },
  {
    id: "review-7",
    kind: "text",
    title: "The yoga studio offers a perfect blend.",
    body: "The yoga studio offers a perfect blend of traditional and modern yoga practices. The serene setting and expert guidance make it an ideal place to escape the daily hustle and find inner balance.",
    author: "Emma Taylor",
    age: 22,
  },
  {
    id: "review-8",
    kind: "text",
    title: "Attending classes at this yoga studio has truly transformed my life.",
    body: "Attending classes at this yoga studio has truly transformed my life. The skilled instructors encourage personal growth, and I leave each session feeling stronger, both physically and mentally. I cannot express how grateful I am for this yoga studio. The instructors' dedication to their craft is evident in every class, and the sense of harmony and mindfulness they cultivate is truly exceptional",
    author: "Benjamin Walker",
    age: 34,
  },
];
