import fs from "fs";

const h = fs.readFileSync("temp.html", "utf8");
const i = h.indexOf('class="section contact"');
const start = i >= 0 ? i : h.indexOf('id="Contact"');
const end = h.indexOf("</section>", start) + 12;
const slice = h.slice(start, end);

console.log("start", start, "len", slice.length);

const imgs = [...slice.matchAll(/src="(https:\/\/cdn[^"]+\.(?:webp|jpg|png))"/g)].map(
  (m) => m[1],
);
console.log("images", imgs);

const title = slice.match(/<h2[^>]*>([\s\S]*?)<\/h2>/)?.[1];
console.log("title", title?.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());

const inputs = [...slice.matchAll(/placeholder="([^"]+)"|name="([^"]+)"|type="([^"]+)"/g)].slice(
  0,
  15,
);
console.log("form bits", slice.includes("Send message"), slice.includes("Name"), slice.includes("Email"));
