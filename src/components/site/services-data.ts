import { Boxes, Building2, Globe2, Package, Warehouse } from "lucide-react";

/**
 * Site imagery from user-generated Rahisi crew set.
 * Hero uses its own 5 only — not reused below.
 */
import photoArrive from "@/assets/user-photos/arrive-truck.png";
import photoTeam from "@/assets/user-photos/team-portrait.png";
import photoOffice from "@/assets/user-photos/office-night.png";
import photoExport from "@/assets/user-photos/export-crates.png";
import photoPackTape from "@/assets/user-photos/pack-tape.png";
import photoPackRoom from "@/assets/user-photos/pack-room.png";
import photoSurvey from "@/assets/user-photos/survey-tablets.png";
import photoKitchen from "@/assets/user-photos/pack-kitchen-a.png";
import photoSettleApt from "@/assets/user-photos/settle-apartment.png";
import photoSettleFrame from "@/assets/user-photos/settle-frame.png";
import photoCarry from "@/assets/user-photos/carry-stairs.png";

/* Earlier branded Gemini set — only used outside the new hero slides */
import legacyArrive from "@/assets/slides/slide-01-arrive.png";
import legacyPack from "@/assets/slides/slide-02-pack.png";
import legacyCarry from "@/assets/slides/slide-03-carry.png";
import legacyLoad from "@/assets/slides/slide-04-load.png";
import legacySettle from "@/assets/slides/slide-05-settle.png";

export const ABOUT_IMAGES = {
  hero: photoTeam,
  packing: photoKitchen,
  carry: photoSettleApt,
  load: photoArrive,
} as const;

export const SERVICES = [
  {
    id: "residential",
    Icon: Boxes,
    title: "Home moving",
    summary: "Bedsitters to family homes — pack, load, set up.",
    detail:
      "From a bedsitter in Kilimani to a house in Karen, we pack, label and protect your things. Floors, doors and furniture edges are covered as standard.",
    points: [
      "Full or partial packing",
      "Furniture dismantle & rebuild",
      "Floor and doorway protection",
      "Short-term storage on request",
    ],
    image: photoPackRoom,
    featured: true,
  },
  {
    id: "office",
    Icon: Building2,
    title: "Office moves",
    summary: "Weekend and phased moves so you open Monday.",
    detail:
      "Evenings, weekends or floor-by-floor — desks, screens and servers tagged and wrapped so the team is productive by Monday.",
    points: [
      "Out-of-hours moves",
      "IT packing with labels",
      "Workstation reinstatement",
      "Site clearance after",
    ],
    image: photoOffice,
    featured: false,
  },
  {
    id: "international",
    Icon: Globe2,
    title: "International",
    summary: "Road, sea and air with clearance help.",
    detail:
      "Region by road, Mombasa for sea, JKIA for air. Paperwork support, strong crating, updates until delivery.",
    points: [
      "Sea & air options",
      "Customs paperwork support",
      "Export crating",
      "Door-to-door updates",
    ],
    image: photoExport,
    featured: false,
  },
  {
    id: "packing",
    Icon: Package,
    title: "Packing only",
    summary: "Materials and crew to pack — you arrange transport or we do.",
    detail:
      "Professional packing service when you need boxes done right but want a smaller load day, or prep before your own transport.",
    points: [
      "Boxes, tape, bubble wrap",
      "Room-by-room labelling",
      "Fragile item priority",
      "Same-day packing crews",
    ],
    image: photoPackTape,
    featured: false,
  },
  {
    id: "storage",
    Icon: Warehouse,
    title: "Storage",
    summary: "Short-term secure storage between homes or leases.",
    detail:
      "Inventory-logged storage for the bridge between lease end and move-in — useful for renovations and delayed handovers.",
    points: [
      "Item inventory list",
      "Flexible weeks/months",
      "Access by appointment",
      "Delivery back when ready",
    ],
    image: legacyLoad,
    featured: false,
  },
] as const;

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Survey",
    body: "Free on-site or video walkthrough. We note rooms, access, stairs and timing — then send a fixed price.",
    image: photoSurvey,
  },
  {
    n: "02",
    title: "Pack",
    body: "Crew arrives with materials. Fragile first, labelled rooms, floors protected before anything rolls out the door.",
    image: legacyPack,
  },
  {
    n: "03",
    title: "Move",
    body: "Loaded truck, written schedule, live updates. Your inventory is our responsibility until you sign off.",
    image: legacyCarry,
  },
  {
    n: "04",
    title: "Settle",
    body: "Unload, place rooms where you want them, basic rebuild. Debris cleared. You keep our number for next time.",
    image: photoSettleFrame,
  },
] as const;

export const GALLERY = [
  {
    id: "g1",
    title: "Crew ready",
    tag: "Home",
    image: legacyArrive,
  },
  {
    id: "g2",
    title: "Team on the job",
    tag: "Home",
    image: photoTeam,
  },
  {
    id: "g3",
    title: "Kitchen packing",
    tag: "Home",
    image: photoKitchen,
  },
  {
    id: "g4",
    title: "Office night move",
    tag: "Office",
    image: photoOffice,
  },
  {
    id: "g5",
    title: "Export crates",
    tag: "International",
    image: photoExport,
  },
  {
    id: "g6",
    title: "Sealing boxes",
    tag: "Home",
    image: photoPackTape,
  },
  {
    id: "g7",
    title: "Survey walk-through",
    tag: "Home",
    image: photoSurvey,
  },
  {
    id: "g8",
    title: "Settling in",
    tag: "Home",
    image: photoSettleFrame,
  },
  {
    id: "g9",
    title: "Stairs & furniture",
    tag: "Home",
    image: photoCarry,
  },
] as const;

export const FAQS = [
  {
    q: "How do you price a move?",
    a: "After a free survey we give one fixed written price covering labour, truck and packing materials agreed in the scope. No surprise stair or fuel add-ons at the end.",
  },
  {
    q: "Do you cover outside Nairobi?",
    a: "Yes — across Kenya (Mombasa, Kisumu, Nakuru, Eldoret and more) and regional routes. Long distance uses a different rate band, always shown before you book.",
  },
  {
    q: "Are you insured?",
    a: "We operate licensed and insured. Goods-in-transit cover is part of professional moves; ask your coordinator for the cover summary on your booking.",
  },
  {
    q: "Can you only pack, not transport?",
    a: "Yes. Packing-only and storage are available when the date or logistics are split. See Services for details.",
  },
  {
    q: "How far in advance should I book?",
    a: "Weekends and end-of-month fill up fast. Ideally 5–10 days for local moves; more for full packing or out-of-town jobs.",
  },
  {
    q: "Where are you based?",
    a: "Enterprise Road, Industrial Area, Nairobi. Get directions on Google Maps from our Contact page.",
  },
] as const;
