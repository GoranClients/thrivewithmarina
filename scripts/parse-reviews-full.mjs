import fs from "fs";

function decode(s) {
  return s
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&");
}

const h = fs.readFileSync("temp.html", "utf8");
const chunks = h.split('<li class="reviews-item">').slice(1);
const out = [];

chunks.forEach((chunk, i) => {
  const isVideo = chunk.includes("review-video");
  if (isVideo) {
    const name = chunk.match(/review-video-content"><h3>([^<]+)/)?.[1];
    const ageMatch = chunk.match(/review-video-content"><h3>[^<]+<\/h3><div>([^<]+)/)?.[1];
    const age = parseInt(ageMatch, 10);
    const poster =
      chunk.match(/data-poster-url="([^"]+)"/)?.[1] ||
      chunk.match(/class="review-poster"[^>]*src="([^"]+)"/)?.[1] ||
      chunk.match(/src="(https:\/\/cdn[^"]+\.webp)"/)?.[1];
    const mp4 = chunk.match(/data-video-urls="([^"]+)"/)?.[1]?.split(",")[0];
    const vimeo = chunk.match(/player\.vimeo\.com\/video\/(\d+)/)?.[1];
    out.push({
      id: `review-${i}`,
      kind: "video",
      name,
      age,
      poster,
      mp4: mp4 || undefined,
      vimeoId: vimeo || undefined,
    });
  } else {
    const title = decode(chunk.match(/review-content"><h3>([^<]+)/)?.[1] || "");
    const body = decode(chunk.match(/color-gray-200">([\s\S]*?)<\/p>/)?.[1] || "");
    const author = chunk.match(/<span class="text">([^<]+)<\/span>\s*(\d+)/);
    out.push({
      id: `review-${i}`,
      kind: "text",
      title,
      body,
      author: author?.[1]?.replace(/,\s*$/, "") || "",
      age: parseInt(author?.[2], 10),
    });
  }
});

console.log(JSON.stringify(out, null, 2));
