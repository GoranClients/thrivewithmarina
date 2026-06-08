import fs from "fs";
import path from "path";

const outDir = "public/assets/contact";
fs.mkdirSync(outDir, { recursive: true });

const url =
  "https://cdn.prod.website-files.com/65895731c304c2a9d2daba7b/659fce8ace279afecfd46fb4_Rectangle%202%402x.webp";
const dest = path.join(outDir, "contact.webp");

if (fs.existsSync(dest)) {
  console.log("skip", dest);
  process.exit(0);
}

const res = await fetch(url);
if (!res.ok) throw new Error(res.status);
fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
console.log("ok", dest);
