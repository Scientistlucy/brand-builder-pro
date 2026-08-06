import { Boxes, Building2, Globe2 } from "lucide-react";
import residentialImg from "@/assets/residential.jpg";
import officeImg from "@/assets/office.jpg";
import internationalImg from "@/assets/international.jpg";

export const SERVICES = [
  {
    id: "residential",
    Icon: Boxes,
    title: "Residential Moving",
    summary: "House to house, apartment moves and full packing services.",
    detail:
      "From a bedsitter in Kilimani to a family home in Karen, we crate, wrap and label every item ourselves. Our zero-scratch packing system protects floors, doorframes and furniture edges as standard.",
    points: [
      "Full or partial packing and unpacking",
      "Furniture dismantling and reassembly",
      "Floor and doorframe protection",
      "Short-term storage on request",
    ],
    image: residentialImg,
  },
  {
    id: "office",
    Icon: Building2,
    title: "Office Relocation",
    summary: "Business moves, IT equipment, minimal downtime.",
    detail:
      "We plan office moves around your calendar — evenings, weekends, phased floors — so your team logs on Monday as if nothing happened. Servers and workstations travel in anti-static wrap on dedicated trolleys.",
    points: [
      "Out-of-hours and phased moves",
      "IT and server handling with asset tagging",
      "Workstation crating and labelled reinstatement",
      "Post-move debris clearance",
    ],
    image: officeImg,
  },
  {
    id: "international",
    Icon: Globe2,
    title: "International Moving",
    summary: "Cross-border relocation and customs clearance.",
    detail:
      "Sea freight, air freight and road corridors across East Africa and beyond. We prepare the paperwork, handle clearance at Mombasa and JKIA, and track your consignment to the doorstep.",
    points: [
      "Sea and air freight consolidation",
      "Customs documentation and clearance",
      "Export-grade crating for fragile goods",
      "Door-to-door tracking updates",
    ],
    image: internationalImg,
  },
] as const;
