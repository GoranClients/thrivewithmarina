import fs from "fs";
import path from "path";

const outDir = "public/assets/journey";
fs.mkdirSync(outDir, { recursive: true });

const urls = [
  "https://cdn.prod.website-files.com/65895731c304c2a9d2daba7b/65a9669d2c432b2486fce7b8_Property%201%3DVariant11%402x.webp",
  "https://cdn.prod.website-files.com/65895731c304c2a9d2daba7b/65a9669d15fd777e7790d6fc_Property%201%3DVariant12%402x.webp",
  "https://cdn.prod.website-files.com/65895731c304c2a9d2daba7b/65a9669f2d5b7841418c5681_Property%201%3DVariant13%402x.webp",
  "https://cdn.prod.website-files.com/65895731c304c2a9d2daba7b/65a9669e04b331b27c56ea9e_Property%201%3DVariant16%402x.webp",
  "https://cdn.prod.website-files.com/65895731c304c2a9d2daba7b/65b0e23c51bd15cb61a27722_Property%201%3DVariant18%402x.webp",
];

for (let i = 0; i < urls.length; i++) {
  const dest = path.join(outDir, `slide-${i + 1}.webp`);
  if (fs.existsSync(dest)) {
    console.log("skip", dest);
    continue;
  }
  const res = await fetch(urls[i]);
  if (!res.ok) throw new Error(`${i + 1}: ${res.status}`);
  fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
  console.log("ok", dest);
}
