import fs from "fs";

function decode(s) {
  return s
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&");
}

const h = fs.readFileSync("temp.html", "utf8");
const start = h.indexOf('id="Memberships"');
const end = h.indexOf("</section>", start);
const slice = h.slice(start, end);

const items = slice.split('class="plans-item').slice(1);
console.log("items", items.length);

items.forEach((chunk, idx) => {
  const vip = /plan-vip|background-green/.test(chunk);
  const tag = decode(chunk.match(/class="tag[^"]*">([^<]+)/)?.[1] || "");
  const price = chunk.match(/plan-price[^>]*>[\s\S]*?(\$[\d]+\/month)/)?.[1];
  const feats = [];
  const re = /class="text">([^<]+)/g;
  let m;
  while ((m = re.exec(chunk))) feats.push(decode(m[1].trim()));
  console.log(JSON.stringify({ idx, vip, tag, price, feats }, null, 2));
});
