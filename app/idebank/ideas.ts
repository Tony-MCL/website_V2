// app/idebank/ideas.ts

export type IdeaStatus = "pending" | "in-progress" | "released";

export type Idea = {
  id: string;
  title: string;
  description?: string;
  status: IdeaStatus;
};

export type HallOfFameEntry = {
  name: string;
  contribution: string;
  year: number;
};

export const ideaPipeline: Idea[] = [
  {
    id: "formula-library",
    title: "Digital formelsamling – videreutvikling",
    description:
      "Forslag til nye moduler, beregninger og visninger basert på konkrete behov i felt og prosjekter.",
    status: "in-progress"
  },
  {
    id: "manage-progress-flow",
    title: "Manage Progress – smartere arbeidsflyt",
    description:
      "Idéer rundt filtrering, visninger for ulike roller og enklere håndtering av milepæler.",
    status: "pending"
  }
];

export const hallOfFame: HallOfFameEntry[] = [
  {
    name: "Eksempelnavn",
    contribution:
      "Foreslo strukturen som gjorde at en liten intern idé ble til et faktisk MCL-verktøy.",
    year: 2024
  }
];
