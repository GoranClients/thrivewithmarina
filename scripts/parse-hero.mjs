import fs from "fs";

const h = fs.readFileSync("temp.html", "utf8");
const i = h.indexOf('id="Hero"');
console.log("Hero idx", i);
const slice = h.slice(i, i + 20000);
console.log("Contact count", (slice.match(/Contact/g) || []).length);
const classes = [...slice.matchAll(/class="([^"]+)"/g)].map((m) => m[1]);
const heroClasses = classes.filter((c) => /hero|overlay|blur|button/i.test(c));
console.log("relevant classes", [...new Set(heroClasses)].slice(0, 30));
const btn = slice.match(/>(Contact|Buy)[^<]*</g);
console.log("buttons", btn);
