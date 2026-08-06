/**
 * Free Pollinations Flux batch (no API key required).
 * node scripts/pollinations-brand.mjs
 */
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "src", "assets", "generated");
mkdirSync(OUT, { recursive: true });

const BRAND =
  "Photoreal documentary. East African Kenyan professional movers. Black t-shirts with bright orange circular RM chest badge text Rahisi Movers. Nairobi Kenya setting not USA. Natural light commercial photo. No watermarks no UI overlay. 16:9";

const JOBS = [
  ["svc-home.jpg", 20101, "family apartment home move 2BR flats Nairobi packing mattress dining chairs balcony afternoon three movers"],
  ["svc-office.jpg", 20102, "corporate open-plan office after hours packing desks monitors foam wrap cool fluorescent evening"],
  ["svc-intl.jpg", 20103, "warehouse export crates pallets box truck Industrial Area Nairobi shipping prep bay lights"],
  ["svc-pack.jpg", 20104, "packing only indoor tape bubble wrap labeled cardboard boxes close shot no truck"],
  ["svc-store.jpg", 20105, "secure storage warehouse aisle stacked labeled cartons pallets inventory one mover"],
  ["proc-01.jpg", 20201, "survey walkthrough coordinator tablet empty rooms client pointing stairs morning light"],
  ["proc-02.jpg", 20202, "kitchen packing glasses plates bubble wrap two movers cardboard boxes"],
  ["proc-03.jpg", 20203, "loaded white box truck on Nairobi dual carriageway daytime city road"],
  ["proc-04.jpg", 20204, "new home settle movers placing sofa assembling bed bright living room afternoon"],
  ["gal-01.jpg", 20301, "residential tower lift lobby movers guiding fridge onto elevator pad"],
  ["gal-02.jpg", 20302, "floor protection cardboard runners door edge foam guards apartment corridor prep"],
  ["gal-03.jpg", 20303, "outdoor Nairobi estate path sunset crew carrying wardrobe boxes to truck"],
  ["gal-04.jpg", 20304, "last carton set in new kitchen unload finish movers"],
  ["gal-05.jpg", 20305, "IT office move servers monitors wrapped dollies glass office evening"],
  ["gal-06.jpg", 20306, "open plan office emptied workstations after hours move"],
  ["gal-07.jpg", 20307, "long haul load bay night furniture cartons strapped truck cargo industrial lights"],
  ["gal-08.jpg", 20308, "crew huddle briefing beside truck morning coffee route discussion"],
  ["about-hero.jpg", 20401, "group portrait seven East African movers by box truck Industrial Area warehouse golden hour"],
  ["about-a.jpg", 20402, "coordinator planning table clipboard house floor sketch soft office light"],
  ["about-b.jpg", 20403, "mover carrying boxes on apartment stairs dynamic mid move angle"],
  ["about-c.jpg", 20404, "two drivers checking truck tailgate straps warehouse yard departure"],
];

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function one(file, seed, scene) {
  const prompt = `${BRAND} Scene: ${scene}`;
  const url =
    "https://image.pollinations.ai/prompt/" +
    encodeURIComponent(prompt) +
    `?width=1280&height=720&nologo=true&seed=${seed}&model=flux`;
  const path = join(OUT, file);
  for (let attempt = 1; attempt <= 4; attempt++) {
    process.stdout.write(`GEN ${file} (try ${attempt}) ... `);
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": "RahisiMovers/1.0" },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 18000) throw new Error(`too small ${buf.length}`);
      writeFileSync(path, buf);
      console.log(`OK ${buf.length}`);
      return { file, status: "ok", bytes: buf.length };
    } catch (e) {
      console.log(`fail: ${e.message}`);
      // Free tier often 429s — back off hard (2–10 min)
      const wait = e.message.includes("429")
        ? 120000 * attempt
        : 8000 * attempt;
      console.log(`waiting ${Math.round(wait / 1000)}s...`);
      await sleep(wait);
    }
  }
  return { file, status: "fail" };
}

const only = process.argv.includes("--only")
  ? new Set(process.argv[process.argv.indexOf("--only") + 1].split(","))
  : null;

const jobs = JOBS.filter(([f]) => !only || only.has(f) || only.has(f.replace(".jpg", "")));

const results = [];
for (const [file, seed, scene] of jobs) {
  results.push(await one(file, seed, scene));
  await sleep(4500);
}
writeFileSync(join(OUT, "_pollinations-log.json"), JSON.stringify({ at: new Date().toISOString(), results }, null, 2));
const ok = results.filter((r) => r.status === "ok").length;
console.log(`DONE ok=${ok}/${results.length}`);
process.exit(ok === results.length ? 0 : 1);
