import fs from "fs";

const html = fs.readFileSync("scripts/breathiva.html", "utf8");

function extractSection(className) {
  const re = new RegExp(
    `<section[^>]*class="[^"]*${className}[^"]*"[^>]*>([\\s\\S]*?)</section>`,
    "i",
  );
  const m = html.match(re);
  return m ? m[1] : null;
}

// Hero FAQ words
const hero = extractSection("rt-home-hero");
const faqBlocks = [...(hero?.matchAll(/rt-home-hero-page-block[\s\S]*?rt-home-hero-faq-description[\s\S]*?<\/div>/g) ?? [])];
console.log("FAQ blocks count:", faqBlocks.length);

// Wellness panels
const wellness = extractSection("rt-wellness");
const benefits = [...(wellness?.matchAll(/rt-wellness-benefits-v1[\s\S]*?<\/div>\s*<\/div>/g) ?? [])];
console.log("Wellness benefits:", benefits.length);

// Counter numbers in about
const about = extractSection("rt-about");
const counters = about?.match(/rt-counter-number-text[^>]*>([^<]+)/g);
console.log("Counters:", counters);

// Pricing cards
const pricing = extractSection("rt-pricing-v2");
const prices = pricing?.match(/\$[\d]+/g);
console.log("Prices:", prices);

// Growth section - for breathwork?
const growth = extractSection("rt-growth");
console.log("\nGROWTH snippet:", growth?.slice(0, 1500));
