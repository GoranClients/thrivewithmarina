import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const outDir = "public/assets/reviews";
fs.mkdirSync(outDir, { recursive: true });

const videos = [
  {
    url: "https://filedn.eu/l2bgrrIQRqa4PNeyHfGlAW4/thrivewithmarina.com/17.mp4",
    dest: "natasha.mp4",
    poster: "natasha-poster.jpg",
  },
  {
    url: "https://filedn.eu/l2bgrrIQRqa4PNeyHfGlAW4/thrivewithmarina.com/18.mp4",
    dest: "rajvi.mp4",
    poster: "rajvi-poster.jpg",
  },
  {
    url: "https://filedn.eu/l2bgrrIQRqa4PNeyHfGlAW4/thrivewithmarina.com/19.mp4",
    dest: "aren.mp4",
    poster: "aren-poster.jpg",
  },
];

for (const { url, dest, poster } of videos) {
  const target = path.join(outDir, dest);
  console.log("fetch", dest);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${dest}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(target, buf);
  console.log("ok", dest, buf.length);

  const posterPath = path.join(outDir, poster);
  execSync(
    `ffmpeg -y -ss 2 -i "${target}" -frames:v 1 -q:v 2 "${posterPath}"`,
    { stdio: "inherit" },
  );
  console.log("poster", poster);
}
