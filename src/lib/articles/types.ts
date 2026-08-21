import type { FaqItem } from "@/components/FAQ";

export type Block =
  | { kind: "p"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "steps"; items: string[] }
  | { kind: "table"; caption?: string; columns: string[]; rows: string[][] }
  | { kind: "note"; text: string };

export type ArticleSection = {
  heading: string;
  blocks: Block[];
};

export type Article = {
  slug: string;
  category: string;
  label: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  summary: string;
  readingTime: string;
  sections: ArticleSection[];
  faqs: FaqItem[];
  related: { label: string; to: string }[];
  sources?: { label: string; url: string }[];
};

export const integrityNote =
  "We coach, tutor and give feedback. Students research, write, build and submit their own assessed work, which keeps them inside their institution's academic integrity rules.";
