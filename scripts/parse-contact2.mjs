import fs from "fs";

const h = fs.readFileSync("temp.html", "utf8");
const i = h.indexOf("contact-image");
const slice = h.slice(i - 3000, i + 4000);

console.log(slice.slice(0, 500));
console.log("---");
const imgs = [...slice.matchAll(/src="(https:\/\/cdn[^"]+)"/g)].map((m) => m[1]);
console.log("imgs", imgs);

const hasMessage = slice.includes("Message");
console.log("hasMessage", hasMessage, "textarea", slice.includes("textarea"));
