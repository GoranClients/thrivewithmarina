export type TextReview = {
  id: string;
  kind: "text";
  title: string;
  body: string;
  author: string;
};

export type VideoReview = {
  id: string;
  kind: "video";
  name: string;
  poster: string;
  mp4: string;
};

export type Review = TextReview | VideoReview;

export const reviews: Review[] = [
  {
    id: "review-kie-kono",
    kind: "text",
    title: "Marina is the best coach you can ever have.",
    body: "We all need to do some exercise to live healthy and we all know it but it's not easy to do it because we are too busy with work, being a mom, etc… I used to be the one who loves any kind of exercise but for me it's such a hustle to move out of the couch or wake up early in the morning to go to a gym. Marina is not just ordinally personal trainer, she will be committed to your goal 120%. She can guide you with healthy meal plans, moreover, not just physical trainingadvice but advice for your heart and mind as well. If you are ready to take the first step to achieve how you want to grow, not just physically but as a person, Marina is the best coach you can ever have like how she has been to me. I can guarantee every cent and minute you will spend with her, will be your lifetime treasure.",
    author: "Kie Kono",
  },
  {
    id: "review-natasha-rockstrom",
    kind: "video",
    name: "Natasha Rockstrom",
    poster: "/assets/reviews/natasha-poster.jpg",
    mp4: "/assets/reviews/natasha.mp4",
  },
  {
    id: "review-plamena-petrova",
    kind: "text",
    title: "Like spending an hour with a friend.",
    body: "I met Marina back in 2015 when I signed in a professional gym for the first time. I had no idea from where to start, how to train, what to eat. Marina helped me ease my way in to working out and eating a balanced diet. She is so enthusiastic, motivating, and knowledgeable about all things fitness. Marina pushed me slowly to do more and more and to push myself to new limits. It was so much more enjoyable than I had ever imagined. It was like spending an hour with a friend, we chat and laugh and the whole time get a great work out. I can say we built the foundation of Strength and Power. She is very creative in progressing sessions, making them fun and challenging at the same time. There are many personal trainers \"out there\", but few personal trainers who have as vast an amount of specialized & diverse training, knowledge, experience sensitivity & dedication to her clients as My Marina.",
    author: "Plamena Petrova",
  },
  {
    id: "review-houri-elmayan",
    kind: "text",
    title: "She helped me overcome my fears.",
    body: "I had the pleasure of training with Marina Savic for about a year and was very surprised at the change my body went through with her guidance and teachings. For all of my life I avoided the gym and was afraid to workout with personal trainers but she helped me overcome my fears and got me motivated to work out with her as often as possible. I benefited greatly with her custom-made workout routines which were always fun, new, never repetitive, and achievable. But she also challenged me out of my comfort zone to try new things. Within that period, I saw how my posture changed, my back aches reduced drastically while my mood uplifted. I would still continue to work out with Marina if I didn't have to travel. In fact, the only thing I wanted to bring to the new country was her. Her presence is very entertaining and she makes the workout time fly by with her humor and beautiful energy.",
    author: "Houri Elmayan",
  },
  {
    id: "review-rajvi-rahemtulla",
    kind: "video",
    name: "Rajvi Rahemtulla",
    poster: "/assets/reviews/rajvi-poster.jpg",
    mp4: "/assets/reviews/rajvi.mp4",
  },
  {
    id: "review-serge-massaad",
    kind: "text",
    title: "Mental wellbeing comes before physical wellbeing.",
    body: "There are many personal trainers in Dubai, but few personal trainers who have as vast an amount of specialized & diverse training, knowledge, experience sensitivity & dedication to her clients as Marina. Recommended by a friend, I decided to train with her on a short trip to Dubai. Little did I know that the bond will be strong since she works first on the mental well being of her clients before the physical well being. This is the art!",
    author: "Serge J. Massaad",
  },
  {
    id: "review-aren-khachadourian",
    kind: "video",
    name: "Aren Der Khachadourian",
    poster: "/assets/reviews/aren-poster.jpg",
    mp4: "/assets/reviews/aren.mp4",
  },
  {
    id: "review-saad-siddiqui",
    kind: "text",
    title: "One of the most caring professionals around.",
    body: "I've trained with Marina for almost 2 years and can easily say she is one of the most experienced, talented, committed and most importantly caring professionals around. She helped me to achieve my goals, developed my interest in self care and helped me to understand different perspectives of life. My fitness both physical and mental has definitely improved under her guidance and the best part is she helped me develop this into a habit. I would definitely recommend Marina.",
    author: "Saad Siddiqui",
  },
  {
    id: "review-reanna-mulholand",
    kind: "text",
    title: "The best shape of my life — and a mentor and friend.",
    body: "I was fortunate enough to have Marina come into my life at a time I needed it most! Not only did she get me in the best shape of my life, she also became a mentor and friend over the years. Her knowledge of fitness, health and well-being always made me confident I was in very capable hands and her positivity became something I craved each session! I highly recommend any journey you choose to take with Marina!",
    author: "Reanna Mulholand",
  },
];
