import fs from "fs";

const h = fs.readFileSync("temp.html", "utf8");
const i = h.indexOf('id="Hero"');
const end = h.indexOf("</section>", i);
const slice = h.slice(i, end);

const overlayIdx = slice.indexOf("hero-overlay");
console.log("hero-overlay snippet:", slice.slice(overlayIdx, overlayIdx + 400));

const btnIdx = slice.indexOf('class="button w-inline-block"');
console.log("hero button snippet:", slice.slice(btnIdx, btnIdx + 600));

// header blur
const header = h.slice(0, i);
const blurIdx = header.lastIndexOf("header-blur");
console.log("header-blur near:", header.slice(blurIdx - 200, blurIdx + 300));
