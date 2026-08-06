/**
 * Generate unique Rahisi Movers images via Gemini image models.
 * Reads GEMINI_API_KEY from .env — never commit that file.
 *
 * Usage: node scripts/generate-brand-images.mjs
 * Optional: node scripts/generate-brand-images.mjs --only svc-home,svc-office
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "src", "assets", "generated");

const BRAND = `Photoreal documentary photo. East African / Kenyan people with natural skin tones. Professional movers wearing black t-shirts with a bright orange circular "RM" chest badge and small white text "Rahisi Movers". Clean modern crew uniforms. No extra brand names. Setting looks like Nairobi (apartment estates, Industrial Area, urban Kenya) — not USA suburb. Soft natural light or realistic evening light. No watermarks, no text overlays, no floating logos, no UI chrome. High commercial photography detail. Landscape 16:9.`;

const JOBS = [
  {
    file: "svc-home.jpg",
    prompt: `${BRAND} Scene: family apartment home move mid-job in a Nairobi 2BR flat — mattress and dining chairs near a balcony, city estate outside, warm afternoon light, 3 branded movers working.`,
  },
  {
    file: "svc-office.jpg",
    prompt: `${BRAND} Scene: corporate open-plan office after-hours move — desks with cable ties, monitors in foam wrap, navy carpet, cool fluorescent plus window night glow, crew packing IT gear.`,
  },
  {
    file: "svc-intl.jpg",
    prompt: `${BRAND} Scene: export shipping prep in industrial warehouse — wooden crates and shrink-wrapped pallets beside a box truck, Industrial Area Nairobi atmosphere, strong bay lights, no readable text.`,
  },
  {
    file: "svc-pack.jpg",
    prompt: `${BRAND} Scene: packing-only station indoors — tape gun, bubble wrap sheets, labeled cardboard boxes on the floor, close-medium shot, no truck visible.`,
  },
  {
    file: "svc-store.jpg",
    prompt: `${BRAND} Scene: secure storage aisle — stacked labeled cartons on pallets, clean warehouse, inventory tags, soft overhead lights, one mover checking boxes.`,
  },
  {
    file: "proc-01.jpg",
    prompt: `${BRAND} Scene: free survey walkthrough — one coordinator with tablet walking empty rooms with a client, pointing at stairs and door width, morning light.`,
  },
  {
    file: "proc-02.jpg",
    prompt: `${BRAND} Scene: packing day in a kitchen — two crew members wrapping glasses and plates with bubble wrap, cardboard boxes open, careful hands, different angle from living-room packing.`,
  },
  {
    file: "proc-03.jpg",
    prompt: `${BRAND} Scene: on-road move — loaded white box truck on a Nairobi dual carriageway with light city traffic soft in background, side of truck visible, daytime.`,
  },
  {
    file: "proc-04.jpg",
    prompt: `${BRAND} Scene: settle-in at new home — movers placing a sofa and assembling a bed frame in a bright empty living room, afternoon sun through windows.`,
  },
  {
    file: "gal-01.jpg",
    prompt: `${BRAND} Scene: residential tower lift lobby — movers carefully guiding a tall fridge onto an elevator pad, floor protection down.`,
  },
  {
    file: "gal-02.jpg",
    prompt: `${BRAND} Scene: floor protection prep — cardboard runners and door-edge foam guards being laid before the move starts, corridor of apartment block.`,
  },
  {
    file: "gal-03.jpg",
    prompt: `${BRAND} Scene: outdoor estate path at sunset — crew carrying wardrobe boxes toward a box truck parked under trees at a Nairobi compound.`,
  },
  {
    file: "gal-04.jpg",
    prompt: `${BRAND} Scene: unload finish — last carton labeled kitchen area set down in a new kitchen, tired but professional crew.`,
  },
  {
    file: "gal-05.jpg",
    prompt: `${BRAND} Scene: IT office move — servers and monitors wrapped on dollies in a glass-walled office, evening.`,
  },
  {
    file: "gal-06.jpg",
    prompt: `${BRAND} Scene: open-plan office clear-out — rows of emptied workstations, cable labels, evening after-hours move energy.`,
  },
  {
    file: "gal-07.jpg",
    prompt: `${BRAND} Scene: long-haul load bay at night — stacked furniture and cartons strapped inside truck cargo bay, industrial lighting.`,
  },
  {
    file: "gal-08.jpg",
    prompt: `${BRAND} Scene: crew huddle briefing next to truck before job start — route discussion, coffee cups, morning light, no readable paper text.`,
  },
  {
    file: "about-hero.jpg",
    prompt: `${BRAND} Scene: group portrait of mixed East African crew of 6–8 movers standing proudly by a branded box truck, Industrial Area warehouse backdrop, golden hour, confident smiles.`,
  },
  {
    file: "about-a.jpg",
    prompt: `${BRAND} Scene: coordinator planning at a table with clipboard and house floor sketch, soft office light, no readable words on paper.`,
  },
  {
    file: "about-b.jpg",
    prompt: `${BRAND} Scene: mid-move staircase — mover with boxes on shoulder on apartment stairs, dynamic angle, different from any other shot.`,
  },
  {
    file: "about-c.jpg",
    prompt: `${BRAND} Scene: two drivers checking tailgate straps and locking bars on truck before departure at warehouse yard.`,
  },
];

const MODELS = [
  "gemini-2.5-flash-image",
  "gemini-2.0-flash-preview-image-generation",
  "gemini-3.1-flash-image",
];

function loadKey() {
  const envPath = join(ROOT, ".env");
  if (!existsSync(envPath)) throw new Error(".env not found");
  const raw = readFileSync(envPath, "utf8");
  const m = raw.match(/^\s*GEMINI_API_KEY\s*=\s*(.+)\s*$/m);
  if (!m) throw new Error("GEMINI_API_KEY missing in .env");
  return m[1].trim().replace(/^["']|["']$/g, "");
}

function parseOnly() {
  const i = process.argv.indexOf("--only");
  if (i === -1) return null;
  return new Set(
    process.argv[i + 1]
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
  );
}

function skipExisting() {
  return process.argv.includes("--skip-existing");
}

async function generateOnce(apiKey, model, prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const body = {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig: {
      responseModalities: ["TEXT", "IMAGE"],
    },
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(`Non-JSON (${res.status}): ${text.slice(0, 200)}`);
  }

  if (!res.ok) {
    const msg =
      data?.error?.message || data?.error?.status || text.slice(0, 300);
    const err = new Error(`${model} ${res.status}: ${msg}`);
    err.status = res.status;
    throw err;
  }

  const parts = data?.candidates?.[0]?.content?.parts || [];
  for (const part of parts) {
    const inline = part.inlineData || part.inline_data;
    if (inline?.data) {
      return {
        data: Buffer.from(inline.data, "base64"),
        mime: inline.mimeType || inline.mime_type || "image/png",
      };
    }
  }
  throw new Error(`${model}: no image in response`);
}

async function generateImage(apiKey, prompt) {
  let lastErr;
  for (const model of MODELS) {
    try {
      return await generateOnce(apiKey, model, prompt);
    } catch (e) {
      lastErr = e;
      // model not found / not supported → try next
      if (e.status === 404 || e.status === 400) continue;
      if (String(e.message).includes("not found")) continue;
      // rate limit → wait and retry same model once
      if (e.status === 429) {
        await new Promise((r) => setTimeout(r, 15000));
        try {
          return await generateOnce(apiKey, model, prompt);
        } catch (e2) {
          lastErr = e2;
          continue;
        }
      }
    }
  }
  throw lastErr || new Error("all models failed");
}

function writeImage(file, buf, mime) {
  mkdirSync(OUT_DIR, { recursive: true });
  // Keep requested .jpg names; if API returns PNG, still write bytes as .jpg extension
  // OR convert naming to actual mime. Prefer saving correct extension sibling if PNG.
  let out = join(OUT_DIR, file);
  if (mime.includes("png") && file.endsWith(".jpg")) {
    // save as png then also .jpg name with png bytes is bad for browsers — save png and update later
    out = join(OUT_DIR, file.replace(/\.jpg$/i, ".png"));
  }
  writeFileSync(out, buf);
  return out;
}

async function main() {
  const apiKey = loadKey();
  const only = parseOnly();
  const skip = skipExisting();
  const jobs = JOBS.filter((j) => !only || only.has(j.file.replace(/\.\w+$/, "")) || only.has(j.file));

  console.log(`Generating ${jobs.length} images → ${OUT_DIR}`);
  let ok = 0;
  let fail = 0;
  const results = [];

  for (const job of jobs) {
    const stem = job.file.replace(/\.\w+$/, "");
    const existingJpg = join(OUT_DIR, `${stem}.jpg`);
    const existingPng = join(OUT_DIR, `${stem}.png`);
    if (skip && (existsSync(existingJpg) || existsSync(existingPng))) {
      console.log(`SKIP ${job.file}`);
      results.push({ file: job.file, status: "skip" });
      continue;
    }

    process.stdout.write(`GEN  ${job.file} ... `);
    try {
      const img = await generateImage(apiKey, job.prompt);
      const path = writeImage(job.file, img.data, img.mime);
      console.log(`OK (${img.data.length} bytes, ${img.mime}) → ${path}`);
      ok++;
      results.push({ file: job.file, status: "ok", path });
      // polite pause between calls
      await new Promise((r) => setTimeout(r, 2000));
    } catch (e) {
      console.log(`FAIL: ${e.message}`);
      fail++;
      results.push({ file: job.file, status: "fail", error: e.message });
      await new Promise((r) => setTimeout(r, 3000));
    }
  }

  console.log(`\nDone. ok=${ok} fail=${fail}`);
  writeFileSync(
    join(OUT_DIR, "_generation-log.json"),
    JSON.stringify({ at: new Date().toISOString(), results }, null, 2),
  );
  if (fail && !ok) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
