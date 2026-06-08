import fs from "fs";

const h = fs.readFileSync("temp.html", "utf8");
const i = h.indexOf('class="section journey"');
const end = h.indexOf("</section>", i) + 12;
const slice = h.slice(i, end);

console.log("length", slice.length);

const title = slice.match(/<h2[^>]*>([\s\S]*?)<\/h2>/)?.[1]?.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
console.log("title", title);

const imgs = [...slice.matchAll(/src="(https:\/\/cdn[^"]+\.(?:webp|jpg|png))"/g)].map((m) => m[1]);
console.log("images", imgs.length, imgs);

const classes = [...slice.matchAll(/class="([^"]+)"/g)].map((m) => m[1]);
console.log("unique classes", [...new Set(classes)].filter((c) => /journey|slider|slide|arrow|navigation/i.test(c)));
