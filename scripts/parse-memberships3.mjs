import fs from "fs";

const h = fs.readFileSync("temp.html", "utf8");
const start = h.indexOf('id="Memberships"');
const end = h.indexOf("</section>", start);
const slice = h.slice(start, end);

const items = slice.split('class="plans-item').slice(1);
items.forEach((chunk, idx) => {
  const tag =
    chunk.match(/class="tag[^"]*">\s*<div>([^<]+)/)?.[1] ||
    chunk.match(/class="tag-white[^"]*">\s*<div>([^<]+)/)?.[1] ||
    chunk.match(/>(Basic membership|Vip membership|Online membership)</)?.[1];
  const vip = chunk.includes("background-green");
  console.log(idx, tag, vip, chunk.slice(0, 200));
});
