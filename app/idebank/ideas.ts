// app/idebank/ideas.ts

export type Idea = {
  id: string;
  title: string;
  description?: string;
  status: "pending" | "in-progress" | "released";
};

export type HallOfFameEntry = {
  name: string;
  contribution: string;
  year: number;
};

export const ideaPipeline: Idea[] = [
  {
    id: "formula-library",
    title: "Utvidet formelsamling",
    description: "Flere moduler og beregningsverktøy etter ønsker fra brukere.",
    status: "in-progress"
  },
  {
    id: "progress-upgrade",
    title: "Manage Progress – avanserte visninger",
    description: "Filter, roller og smart-flyt for prosjektledere.",
    status: "pending"
  }
];

export const hallOfFame: HallOfFameEntry[] = [
  {
    name: "Ola",
    contribution: "Idéen bak modul for sikker dokumentdeling",
    year: 2024
  }
];
