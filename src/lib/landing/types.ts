import type { FaqItem } from "@/components/FAQ";

export type LandingGroup =
  | "Locations"
  | "Subjects"
  | "Services"
  | "Software"
  | "Models"
  | "Students";

export type LandingContent = {
  slug: string;
  group: LandingGroup;
  label: string;
  eyebrow: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  highlights: { title: string; copy: string }[];
  lists: { heading: string; items: string[] }[];
  levelsNote: string;
  languages: string;
  integrity: string;
  faqs: FaqItem[];
  related: { label: string; to: string }[];
  serviceType: string;
  areaServed?: string;
};

export const integrityDefault =
  "We coach, tutor and give feedback. Students research, build and submit their own assessed work, which keeps them inside their institution's academic integrity rules.";

export const languagesDefault =
  "Sessions are available in English, Arabic and French, so you can think through difficult ideas in the language you reason fastest in and still submit in the language your university requires.";

export const levelsDefault =
  "We work with undergraduate and Bachelor's students on assignments, coursework, reports and final-year or capstone projects, and with Master's and PhD students on research proposals, literature reviews, methodology, data analysis, theses and dissertations.";
