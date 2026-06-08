import fs from "fs";

const h = fs.readFileSync("temp.html", "utf8");
const i = h.indexOf('class="footer footer"');
const slice = h.slice(i, i + 12000);

const newsletter = slice.match(/newsletter|Subscribe|Email/i);
console.log("newsletter hints", slice.match(/footer-top[\s\S]{0,2000}/)?.[0]?.slice(0, 1500));

const utility = [...slice.matchAll(/href="([^"]+)"[^>]*>([^<]+)</g)]
  .filter((m) => /privacy|terms|404|license|changelog/i.test(m[1] + m[2]))
  .map((m) => ({ href: m[1], label: m[2] }));

console.log("utility links", utility);

const menu = [...slice.matchAll(/footer-list[\s\S]*?<\/ul>/g)];
console.log("menu blocks", menu.length);
