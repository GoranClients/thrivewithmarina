import fs from "fs";

const h = fs.readFileSync("temp.html", "utf8");
const chunks = h.split('<li class="reviews-item">').slice(1);

chunks.forEach((chunk, i) => {
  if (!chunk.includes("review-video")) return;
  const poster =
    chunk.match(/data-poster-url="([^"]+)"/)?.[1] ||
    chunk.match(/review-poster"[^>]*src="([^"]+)"/)?.[1];
  const mp4 = chunk.match(/data-video-urls="([^"]+)"/)?.[1]?.split(",")[0];
  const name = chunk.match(/review-video-content"><h3>([^<]+)/)?.[1];
  console.log(JSON.stringify({ i, name, poster, mp4 }));
});
