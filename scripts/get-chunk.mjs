import fs from "fs";
const h = fs.readFileSync("temp.html", "utf8");
const chunks = h.split('<li class="reviews-item">').slice(1);
[1, 5].forEach((i) => {
  const c = chunks[i];
  const img = c.match(/src="(https:\/\/cdn[^"]+\.webp)"/)?.[1];
  const json = c.match(/w-json">(\{[\s\S]*?\})<\/script>/)?.[1];
  console.log("---", i, "---");
  console.log("img", img);
  if (json) console.log("json", json.slice(0, 200));
});
