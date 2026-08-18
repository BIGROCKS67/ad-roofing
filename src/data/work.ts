import { images } from "./images";

export type WorkItem = {
  id: string;
  title: string;
  pillar: "Roofing" | "Construction" | "Both";
  summary: string;
  image: string;
};

export const workItems: WorkItem[] = [
  {
    id: "extension-skylights",
    title: "Brick extension with new roof and skylights",
    pillar: "Both",
    summary: "New walls, slate-look tiles, lead abutment and two skylights — roof and build on the same job.",
    image: images.extensionSkylights,
  },
  {
    id: "timber-extension",
    title: "Gable extension, clay tiles and timber porch",
    pillar: "Both",
    summary: "Two gables, lead valley, brick and timber frame. Construction that still needs a proper roof.",
    image: images.extensionTimber,
  },
  {
    id: "beam-block",
    title: "Beam-and-block floor and drainage",
    pillar: "Construction",
    summary: "Foundations, T-beams, blocks and the orange drain in before anyone talks about the roof.",
    image: images.foundations,
  },
  {
    id: "renovation-strip",
    title: "Internal strip-out and renovation",
    pillar: "Construction",
    summary: "Partitions down, debris out, structure opened up for a full refurb.",
    image: images.renovate,
  },
  {
    id: "clay-roof",
    title: "Full clay-tile roof",
    pillar: "Roofing",
    summary: "Steep pitch, new red-orange clay, scaffolding in, ladder on the tiles.",
    image: images.roofClay,
  },
  {
    id: "lead-dormer",
    title: "Leadwork around a new dormer",
    pillar: "Roofing",
    summary: "Lead dressed into a dormer opening on a stone-tile roof.",
    image: images.roofLead,
  },
  {
    id: "valley-relay",
    title: "Clay roof valley and battens",
    pillar: "Roofing",
    summary: "Lead valley, new battens, tiles stacked ready to go back on.",
    image: images.roofValley,
  },
  {
    id: "slate-crew",
    title: "Slate roof, two-man crew",
    pillar: "Roofing",
    summary: "Pitched slate, Adam and Dan on the roof. The work that built the name.",
    image: images.aboutRoof,
  },
  {
    id: "dig",
    title: "Groundworks and enabling",
    pillar: "Construction",
    summary: "Dig, formation and the site work that starts a build.",
    image: images.digging,
  },
  {
    id: "underground",
    title: "Below-ground services",
    pillar: "Construction",
    summary: "Underground work before the slab goes down.",
    image: images.underground,
  },
  {
    id: "site-finish",
    title: "Build in progress",
    pillar: "Construction",
    summary: "Active site — structure up, programme moving.",
    image: images.constructSite,
  },
  {
    id: "exterior",
    title: "Exterior building works",
    pillar: "Construction",
    summary: "Outside works on a live residential job.",
    image: images.outside,
  },
];
