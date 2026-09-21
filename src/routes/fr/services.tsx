import { createFileRoute } from "@tanstack/react-router";

import { LocalizedPage, type LocalizedPageContent } from "@/components/LocalizedPage";
import { SITE_URL, socialMeta, hreflangLinks, breadcrumbScript } from "@/lib/seo";

const title = "Nos services — tutorat, encadrement et soutien à la recherche | Yes We Do Your Projects";
const description =
  "Tutorat universitaire, encadrement académique, soutien au mémoire et à la thèse, méthodologie, analyse statistique, rédaction académique et révision — en français, en anglais et en arabe.";

export const Route = createFileRoute("/fr/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr" },
      { property: "og:url", content: `${SITE_URL}/fr/services` },
      ...socialMeta(title, description),
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/fr/services` }, ...hreflangLinks("/services")],
    scripts: [
      breadcrumbScript([
        { name: "Accueil", path: "/" },
        { name: "Français", path: "/fr" },
        { name: "Services", path: "/fr/services" },
      ]),
    ],
  }),
  component: FrenchServices,
});

const content: LocalizedPageContent = {
  dir: "ltr",
  lang: "fr",
  eyebrow: "Services",
  h1: "Nos services académiques et techniques",
  intro:
    "Chaque service est offert en séances individuelles en ligne, en français, en anglais ou en arabe. Nous commençons toujours par comprendre votre cours, les exigences de votre université et votre échéance avant de proposer un format de soutien.",
  primaryCta: "Obtenir du soutien",
  whatsappCta: "Écrire sur WhatsApp",
  sections: [
    {
      heading: "Services principaux",
      items: [
        {
          title: "Tutorat universitaire",
          copy: "Explication des notions difficiles, exercices résolus ensemble et préparation aux examens.",
        },
        {
          title: "Encadrement académique",
          copy: "Gestion du temps, priorisation des cours et plan de travail hebdomadaire réaliste.",
        },
        {
          title: "Mémoire et thèse",
          copy: "Du choix du sujet à la structure des chapitres, jusqu'à la préparation de la soutenance.",
        },
        {
          title: "Méthodologie de recherche",
          copy: "Approche quantitative, qualitative ou mixte, conception du questionnaire ou des entretiens, et éthique de la recherche.",
        },
        {
          title: "Analyse de données et statistiques",
          copy: "Choix du test approprié, exécution dans SPSS ou Excel et interprétation claire des résultats.",
        },
        {
          title: "Rédaction académique",
          copy: "Construction de l'argument, citations et références (APA, Harvard, etc.) et prévention du plagiat.",
        },
        {
          title: "Révision et relecture",
          copy: "Rétroaction sur la clarté, le style et la mise en forme de votre texte, sans le réécrire à votre place.",
        },
        {
          title: "Projets techniques",
          copy: "Ingénierie, architecture et informatique : Revit, AutoCAD, 3ds Max, MATLAB, Arduino, SIG et maquettes.",
        },
      ],
    },
    {
      heading: "À qui s'adressent ces services",
      paragraphs: [
        "Étudiants au baccalauréat qui veulent mieux comprendre leurs cours ou avancer sur leurs travaux et leur projet de fin d'études.",
        "Étudiants à la maîtrise qui rédigent un mémoire et ont besoin d'une structure claire et d'une méthodologie solide.",
        "Doctorants qui cherchent une discussion méthodologique sérieuse, une revue de littérature organisée et une préparation à la publication ou à la soutenance.",
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur les services",
  faqs: [
    {
      question: "Peut-on réserver une seule séance ?",
      answer:
        "Oui. Beaucoup d'étudiants commencent par une séance unique sur la méthodologie ou le plan de travail, puis décident s'ils veulent poursuivre.",
    },
    {
      question: "Corrigez-vous et réécrivez-vous le texte ?",
      answer:
        "Nous commentons votre texte : argument à renforcer, référence manquante, structure à revoir. La réécriture demeure votre travail.",
    },
    {
      question: "Combien de temps dure une séance ?",
      answer:
        "Généralement de 45 à 90 minutes selon le sujet. La durée et la fréquence sont convenues à l'avance selon votre échéance.",
    },
  ],
  integrityHeading: "Intégrité académique",
  integrity:
    "Tous nos services sont pédagogiques. Nous ne rédigeons ni ne remettons de travaux à la place des étudiants et nous ne garantissons aucune note.",
  closingHeading: "Quel service vous convient ?",
  closingCopy:
    "Envoyez-nous les détails de votre cours et votre échéance ; nous vous dirons franchement quel soutien est approprié.",
  contactHeading: "Nous joindre",
  englishNote: "Cette page existe aussi en",
  englishHref: "/services",
};

function FrenchServices() {
  return <LocalizedPage content={content} />;
}
