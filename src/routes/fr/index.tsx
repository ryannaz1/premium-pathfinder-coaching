import { createFileRoute } from "@tanstack/react-router";

import { LocalizedPage, type LocalizedPageContent } from "@/components/LocalizedPage";
import { SITE_URL, socialMeta, hreflangLinks } from "@/lib/seo";

const title = "Soutien académique et technique pour étudiants universitaires | Yes We Do Your Projects";
const description =
  "Tutorat universitaire, encadrement académique, aide à la méthodologie de recherche et soutien aux projets techniques, du baccalauréat au doctorat — en français, en anglais et en arabe.";

export const Route = createFileRoute("/fr/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr" },
      { property: "og:url", content: `${SITE_URL}/fr` },
      ...socialMeta(title, description),
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/fr` }, ...hreflangLinks("")],
  }),
  component: FrenchHome,
});

const content: LocalizedPageContent = {
  dir: "ltr",
  lang: "fr",
  eyebrow: "En français",
  h1: "Soutien académique et technique pour étudiants universitaires",
  intro:
    "Tutorat individuel, encadrement académique, accompagnement en recherche et soutien aux projets techniques, toutes disciplines confondues, de la première année du baccalauréat jusqu'à la thèse de doctorat. Nous expliquons, structurons et donnons de la rétroaction : la rédaction et la remise restent votre travail.",
  primaryCta: "Obtenir du soutien",
  whatsappCta: "Écrire sur WhatsApp",
  sections: [
    {
      heading: "Avec quoi pouvons-nous vous aider ?",
      items: [
        {
          title: "Travaux et cours",
          copy: "Comprendre la matière, décoder la consigne, structurer vos idées et recevoir une rétroaction détaillée sur votre propre brouillon.",
        },
        {
          title: "Mémoires et thèses",
          copy: "Formuler la question de recherche, bâtir le plan des chapitres, faire la revue de littérature et préparer la soutenance.",
        },
        {
          title: "Méthodologie et statistiques",
          copy: "Choix de la méthode, conception des instruments, analyse avec SPSS ou Excel et interprétation des résultats.",
        },
        {
          title: "Projets d'ingénierie",
          copy: "Projet de fin d'études, calculs, rapports techniques, prototypes et documentation.",
        },
        {
          title: "Architecture et design",
          copy: "Dessins techniques, Revit, AutoCAD, 3ds Max, maquettes et préparation de la présentation devant le jury.",
        },
        {
          title: "Programmation et informatique",
          copy: "Algorithmes, débogage, structure du code et explications pas à pas.",
        },
      ],
    },
    {
      heading: "Comment ça fonctionne",
      items: [
        { title: "1. Parlez-nous du travail", copy: "Votre programme, votre niveau et ce sur quoi vous travaillez." },
        { title: "2. On cible le besoin", copy: "Nous proposons honnêtement le type de soutien approprié — ou nous vous le disons si c'est hors de notre champ." },
        { title: "3. On travaille ensemble", copy: "Séances individuelles en ligne, orientation claire et rétroaction écrite." },
        { title: "4. Vous terminez en confiance", copy: "Vous comprenez la matière, puis vous rédigez et remettez votre propre travail." },
      ],
    },
    {
      heading: "Où nous accompagnons des étudiants",
      intro:
        "Tout se fait en ligne, selon votre fuseau horaire. Nous travaillons avec des étudiants de Montréal et du Québec (McGill, Concordia, UdeM, UQAM, HEC, Polytechnique), du Royaume-Uni, de Dubaï et d'Abou Dhabi, ainsi que des universités francophones du Liban comme l'Université Saint-Joseph.",
    },
  ],
  faqHeading: "Questions fréquentes",
  faqs: [
    {
      question: "Rédigez-vous les travaux à la place des étudiants ?",
      answer:
        "Non. Nous offrons du tutorat, de l'encadrement et de la rétroaction. L'étudiant rédige et remet son propre travail, conformément aux règles d'intégrité académique de son université.",
    },
    {
      question: "Dans quelle langue se déroulent les séances ?",
      answer:
        "En français, en anglais ou en arabe, selon votre préférence. Il est courant de recevoir les explications en français et de rédiger en anglais, ou l'inverse.",
    },
    {
      question: "Accompagnez-vous la maîtrise et le doctorat ?",
      answer:
        "Oui : problématique, méthodologie, revue de littérature, analyse des données, plan des chapitres et préparation à la soutenance.",
    },
    {
      question: "Comment commencer ?",
      answer:
        "Écrivez-nous sur WhatsApp ou remplissez le formulaire de demande avec votre cours et votre échéance. Nous vous répondrons avec ce que nous pouvons réellement offrir.",
    },
  ],
  integrityHeading: "Intégrité académique",
  integrity:
    "Nos services sont pédagogiques et consultatifs. Nous ne rédigeons pas, ne complétons pas et ne remettons pas de travaux à la place des étudiants, et nous ne promettons aucune note. Notre objectif est que vous compreniez votre matière et remettiez un travail qui est le vôtre.",
  closingHeading: "Dites-nous sur quoi vous travaillez",
  closingCopy:
    "Travail de session, projet d'ingénierie, mémoire de maîtrise ou recherche doctorale — envoyez les détails et nous proposerons le soutien approprié.",
  contactHeading: "Nous joindre",
  englishNote: "Cette page existe aussi en",
  englishHref: "/",
};

function FrenchHome() {
  return <LocalizedPage content={content} />;
}
