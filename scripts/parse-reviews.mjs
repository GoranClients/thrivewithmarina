import fs from "fs";

const h = fs.readFileSync("temp.html", "utf8");
const chunks = h.split('<li class="reviews-item">').slice(1);

chunks.forEach((chunk, i) => {
  const isVideo = chunk.includes("review-video");
  if (isVideo) {
    const name = chunk.match(/review-video-content"><h3>([^<]+)/)?.[1];
    const age = chunk.match(/review-video-content"><h3>[^<]+<\/h3><div>([^<]+)/)?.[1];
    const poster =
      chunk.match(/data-poster-url="([^"]+)"/)?.[1] ||
      chunk.match(/class="review-poster"[^>]*src="([^"]+)"/)?.[1] ||
      chunk.match(/src="(https:\/\/cdn[^"]+\.webp)"/)?.[1];
    const mp4 = chunk.match(/data-video-urls="([^"]+)"/)?.[1]?.split(",")[0];
    const vimeo = chunk.match(/player\.vimeo\.com\/video\/(\d+)/)?.[1];
    console.log(JSON.stringify({ i, type: "video", name, age, poster, mp4, vimeo }));
  } else {
    const title = chunk.match(/review-content"><h3>([^<]+)/)?.[1];
    const body = chunk.match(/color-gray-200">([^<]+)/)?.[1];
    const author = chunk.match(/<span class="text">([^<]+)<\/span>\s*(\d+)/)?.[1];
    const age = chunk.match(/<span class="text">[^<]+<\/span>\s*(\d+)/)?.[1];
    console.log(JSON.stringify({ i, type: "text", title, body: body?.slice(0, 80), author, age }));
  }
});
