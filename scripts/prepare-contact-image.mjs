import { execFileSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

import { removeBackground } from "@imgly/background-removal-node";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const source = path.join(
  root,
  "scripts/assets/marina-contact-source.jpg",
);
const outDir = path.join(root, "public/assets/contact");
const croppedPath = path.join(outDir, "marina-cropped.png");
const cutoutPath = path.join(outDir, "marina-cutout.png");
const dest = path.join(outDir, "contact.webp");

const PUDRA_100 = "0xf9f7f6";
const CANVAS_W = 1080;
const CANVAS_H = Math.round(CANVAS_W * 1.36);

fs.mkdirSync(outDir, { recursive: true });

function probeSize(file) {
  const output = execFileSync(
    "ffprobe",
    [
      "-v",
      "error",
      "-select_streams",
      "v:0",
      "-show_entries",
      "stream=width,height",
      "-of",
      "csv=p=0:s=x",
      file,
    ],
    { encoding: "utf8" },
  ).trim();

  const [width, height] = output.split("x").map(Number);
  return { width, height };
}

const { width, height } = probeSize(source);
const cropLeft = Math.round(width * 0.48);
const cropWidth = width - cropLeft;

execFileSync(
  "ffmpeg",
  [
    "-y",
    "-i",
    source,
    "-vf",
    `crop=${cropWidth}:${height}:${cropLeft}:0`,
    "-update",
    "1",
    "-frames:v",
    "1",
    croppedPath,
  ],
  { stdio: "inherit" },
);

console.log("cropped", croppedPath);

const cutoutBlob = await removeBackground(pathToFileURL(croppedPath).href, {
  model: "medium",
  output: { format: "image/png", quality: 1 },
});

fs.writeFileSync(cutoutPath, Buffer.from(await cutoutBlob.arrayBuffer()));
console.log("cutout", cutoutPath);

const cutoutSize = probeSize(cutoutPath);
const subjectMaxHeight = Math.round(CANVAS_H * 0.92);
const subjectHeight = Math.min(subjectMaxHeight, cutoutSize.height);
const subjectWidth = Math.round(
  (cutoutSize.width / cutoutSize.height) * subjectHeight,
);
const left = Math.round((CANVAS_W - subjectWidth) / 2);
const top = Math.round(CANVAS_H - subjectHeight - CANVAS_H * 0.02);

execFileSync(
  "ffmpeg",
  [
    "-y",
    "-f",
    "lavfi",
    "-i",
    `color=c=${PUDRA_100}:s=${CANVAS_W}x${CANVAS_H}`,
    "-i",
    cutoutPath,
    "-filter_complex",
    `[1:v]scale=${subjectWidth}:${subjectHeight}[fg];[0:v][fg]overlay=${left}:${top}`,
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
