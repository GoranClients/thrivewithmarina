import fs from "fs";

function decode(s) {
  return s
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&");
}

const h = fs.readFileSync("temp.html", "utf8");
const i = h.indexOf('id="Memberships"');
if (i < 0) {
  const alt = h.indexOf('section#Memberships');
  console.log("alt idx", alt);
}
const start = h.indexOf('id="Memberships"');
const end = h.indexOf("</section>", start) + 12;
const slice = h.slice(start, end);

console.log("len", slice.length);

const title = slice.match(/<h2[^>]*>([\s\S]*?)<\/h2>/)?.[1];
console.log("title html", title?.slice(0, 200));

const plans = slice.split('class="plan ').slice(1);
console.log("plans count", plans.length);

plans.forEach((chunk, idx) => {
  const isVip = chunk.includes("plan-vip") || chunk.includes("vip");
  const tag = chunk.match(/class="tag[^"]*">([^<]+)/)?.[1];
  const price = chunk.match(/\$[\d]+\/month/)?.[0];
  const features = [...chunk.matchAll(/class="text">([^<]+)/g)].map((m) =>
    decode(m[1].trim()),
  );
  console.log(
    JSON.stringify({ idx, isVip, tag, price, features: features.slice(0, 5) }),
  );
});
