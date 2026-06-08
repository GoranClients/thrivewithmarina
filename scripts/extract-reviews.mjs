import fs from "fs";

const h = fs.readFileSync("temp.html", "utf8");
const base = "https://cdn.prod.website-files.com/65895731c304c2a9d2daba7b/";

const chunks = h.split('<li class="reviews-item">').slice(1);
console.log("items", chunks.length);

chunks.forEach((chunk, i) => {
  const isVideo = chunk.includes("review-video");
  if (isVideo) {
    const name = chunk.match(/review-video-content"><h3>([^<]+)/)?.[1];
    const age = chunk.match(/review-video-content"><h3>[^<]+<\/h3><div>([^<]+)/)?.[1];
    const poster = chunk.match(/src="(https:\/\/cdn[^"]+\.webp)"/)?.[1];
    const mp4 = chunk.match(/(659d[^"']+transcode\.mp4)/)?.[1];
    console.log(i, "VIDEO", name, age, mp4?.slice(0, 40));
    return;
  }
  const title = chunk.match(/review-content"><h3>([^<]+)/)?.[1]?.replace(/&#x27;/g, "'");
  const author = chunk.match(/<span class="text">([^<]+),<\/span>\s*([^<]+)/);
  console.log(i, "TEXT", title?.slice(0, 50), author?.[1], author?.[2]);
});
