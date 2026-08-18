import { images } from "./images";

export type Service = {
  id: string;
  pillar: "roofing" | "construction";
  title: string;
  summary: string;
  description: string;
  highlights: string[];
  image: string;
};

export const roofingServices: Service[] = [
  {
    id: "install",
    pillar: "roofing",
    title: "Roof installation & replacement",
    summary:
      "Clay, concrete, slate and single-ply — taken off and put back properly.",
    description:
      "Full roof replacements and new installations. Clay plain tiles, concrete tiles, natural slate and modern single-ply systems. We strip, check the structure, and finish clean so the house looks looked-after, not patched.",
    highlights: [
      "Clay, concrete and slate",
      "Single-ply systems",
      "Strip and replace, site left tidy",
    ],
    image: images.roofClay,
  },
  {
    id: "leadwork",
    pillar: "roofing",
    title: "Leadwork",
    summary: "Flashings and detailing on the parts of the roof that take the weather.",
    description:
      "Lead flashings, valleys and dormer detailing fitted so water goes where it should. The work that stops the leak coming back next winter.",
    highlights: ["Flashings and valleys", "Dormers and abutments", "Code-correct lead"],
    image: images.roofLead,
  },
  {
    id: "chimney",
    pillar: "roofing",
    title: "Chimney repairs",
    summary: "Repointing, flashing and structural work so the stack stays safe.",
    description:
      "Chimney repairs including repointing, lead flashing and structural work. We keep the stack stable, weatherproof and in keeping with the rest of the roof.",
    highlights: ["Repointing", "Lead flashing", "Structural repairs"],
    image: images.roofValley,
  },
  {
    id: "gutters",
    pillar: "roofing",
    title: "Guttering and fascias",
    summary: "Rainwater gear that actually drains — no staining down the brick.",
    description:
      "Guttering and fascia installation, repairs and replacements. Keeps rainwater moving and stops damp and staining on the walls.",
    highlights: ["New gutters and downpipes", "Fascia and soffit", "Repairs and replacements"],
    image: images.roofDetail,
  },
  {
    id: "emergency",
    pillar: "roofing",
    title: "Emergency roofing",
    summary: "Storm damage and active leaks — we turn up and make it safe.",
    description:
      "Fast call-outs for storm damage and active leaks. Practical first-fix to stop the water, then a proper repair when the weather allows. The reviews already say we do this in the rain.",
    highlights: ["Storm damage", "Active leaks", "Same-day make-safe where we can"],
    image: images.aboutRoof,
  },
  {
    id: "heritage",
    pillar: "roofing",
    title: "Period and heritage roofs",
    summary: "Older properties, right materials, look kept, lifespan improved.",
    description:
      "Careful work on older and period properties. Natural slate, stone, fibre cement and lead — methods that keep the look and last.",
    highlights: ["Natural slate and stone", "Leadwork on period roofs", "Listed-sensitive approach"],
    image: images.hero,
  },
];

export const constructionServices: Service[] = [
  {
    id: "extensions",
    pillar: "construction",
    title: "Extensions",
    summary: "Groundworks through to the roof and a finish you can live in.",
    description:
      "Kitchen extensions, home offices and extra living space. We take the build from the ground up — foundations, walls, roof, and the details that make it look like it was always there.",
    highlights: ["Kitchen and side returns", "Home offices", "Groundworks to roof"],
    image: images.extensionSkylights,
  },
  {
    id: "new-builds",
    pillar: "construction",
    title: "New builds",
    summary: "Full builds with clear stages and someone who actually updates you.",
    description:
      "New-build houses, bungalows and self-builds. Organised site, regular updates, and a finish that holds up. Same team that does the roof stays on the job.",
    highlights: ["Detached homes", "Bungalows", "Self-builds"],
    image: images.constructWork,
  },
  {
    id: "renovations",
    pillar: "construction",
    title: "Renovations",
    summary: "Layouts, structure, plaster and the bits that pull a house together.",
    description:
      "Full refurbishments, period upgrades and reconfigurations. Structural work, roofing, plastering and the finish — one team coordinating the trades.",
    highlights: ["Full refurbs", "Period upgrades", "Reconfigurations"],
    image: images.renovate,
  },
  {
    id: "foundations",
    pillar: "construction",
    title: "Foundations and groundworks",
    summary: "Beam and block, drainage, dig — the bit everything else sits on.",
    description:
      "Foundations, beam-and-block floors, drainage and enabling works. The construction work that has to be right before anyone talks about kitchens.",
    highlights: ["Beam and block", "Drainage", "Site enabling"],
    image: images.foundations,
  },
  {
    id: "commercial",
    pillar: "construction",
    title: "Commercial builds",
    summary: "Retail, offices and fit-outs. Tidy site, agreed programme.",
    description:
      "Construction for commercial spaces — retail units, offices, refits and fit-outs. We keep the site tidy, talk straight, and work to the dates we agreed.",
    highlights: ["Retail and offices", "Refits", "Programme-led"],
    image: images.outside,
  },
  {
    id: "residential",
    pillar: "construction",
    title: "Residential building",
    summary: "Additions, structural upgrades and custom homes under one team.",
    description:
      "Residential building work with the trades coordinated and quality checked as we go. Custom homes, additions and structural upgrades — not a different company from the roofers.",
    highlights: ["Custom homes", "Additions", "Structural upgrades"],
    image: images.extensionTimber,
  },
];

export const allServices = [...roofingServices, ...constructionServices];

export const featuredHome = [
  roofingServices[0],
  constructionServices[0],
  roofingServices[1],
  constructionServices[2],
  roofingServices[4],
  constructionServices[3],
];
