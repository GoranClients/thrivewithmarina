import { execFileSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const source = path.join(root, "scripts/assets/contact-marina-final.png");
const dest = path.join(root, "public/assets/contact/contact.webp");

const WIDTH = 1080;
const HEIGHT = 1464;

execFileSync(
  "ffmpeg",
  [
    "-y",
    "-f",
    "lavfi",
    "-i",
    `gradients=s=${WIDTH}x${HEIGHT}:nb_colors=3:c0=0xF0EFEA:c1=0xE8E7E0:c2=0xDAD9D0:x0=540:y0=0:x1=540:y1=${HEIGHT}`,
    "-i",
    source,
    "-filter_complex",
    `[1:v]crop=iw*0.64:ih*0.64:(iw-ow)/2:(ih-oh)/2,colorkey=0x000000:0.28:0.65,scale=1700:2300:flags=lanczos,format=rgba[fg];[0:v][fg]overlay=(W-w)/2:(H-h)/2`,
    "-c:v",
    "libwebp",
    "-quality",
    "88",
    "-update",
    "1",
    "-frames:v",
    "1",
    dest,
  ],
  { stdio: "inherit" },
);

console.log("saved", dest);
