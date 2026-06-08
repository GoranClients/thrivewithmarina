import fs from "fs";
import path from "path";

const outDir = "public/assets/reviews";
fs.mkdirSync(outDir, { recursive: true });

const files = [
  {
    url: "https://cdn.prod.website-files.com/65895731c304c2a9d2daba7b/65b4c5df8488b8b16ad63928_1156672379-7a07f12ca06c4dd96e0f3e9e3d8de4c73bf7d790478f00ce55124f0961d9ea25-d.webp",
    dest: "emily.webp",
  },
  {
    url: "https://cdn.prod.website-files.com/65895731c304c2a9d2daba7b/65b64ace0edca6f33a615c97_902225925-018b3da1a22b5eb0dbfc78aa124d6cddacc9d654c801fb1f61c4ed0d12377bc2-d.webp",
    dest: "olivia.webp",
  },
  {
    url: "https://cdn.prod.website-files.com/65895731c304c2a9d2daba7b/659d3e1cfad5b5ab4b57c23f_production_id_4352387%20(540p)-poster-00001.jpg",
    dest: "james-poster.jpg",
  },
  {
    url: "https://cdn.prod.website-files.com/65895731c304c2a9d2daba7b/659d3e1cfad5b5ab4b57c23f_production_id_4352387%20(540p)-transcode.mp4",
    dest: "james.mp4",
  },
];

for (const { url, dest } of files) {
  const target = path.join(outDir, dest);
  if (fs.existsSync(target)) {
    console.log("skip", dest);
    continue;
  }
  console.log("fetch", dest);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${dest}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(target, buf);
  console.log("ok", dest, buf.length);
}
