import { createFileRoute } from "@tanstack/react-router";

import { LocalizedPage, type LocalizedPageContent } from "@/components/LocalizedPage";
import { SITE_URL, socialMeta, hreflangLinks } from "@/lib/seo";

const title = "Nous joindre — consultation académique | Yes We Do Your Projects";
const description =
  "Écrivez-nous sur WhatsApp ou par courriel pour réserver une consultation académique en français, en anglais ou en arabe. Réponse pendant les heures d'ouverture.";

export const Route = createFileRoute("/fr/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr" },
      { property: "og:url", content: `${SITE_URL}/fr/contact` },
      ...socialMeta(title, description),
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/fr/contact` }, ...hreflangLinks("/contact")],
  }),
  component: FrenchContact,
});

const content: LocalizedPageContent = {
  dir: "ltr",
  lang: "fr",
  eyebrow: "Contact",
  h1: "Réserver une consultation académique",
  intro:
    "Le plus rapide est un message WhatsApp. Indiquez votre programme, votre université, votre niveau, ce sur quoi vous travaillez et votre échéance ; nous vous répondrons avec ce que nous pouvons réellement offrir.",
  primaryCta: "Remplir le formulaire",
  whatsappCta: "Écrire sur WhatsApp",
  sections: [
    {
      heading: "Ce qu'il nous est utile de savoir",
      items: [
        { title: "Programme et cours", copy: "Le nom du cours nous aide à choisir la bonne personne." },
        { title: "Niveau d'études", copy: "Baccalauréat, maîtrise ou doctorat." },
        { title: "Université et pays", copy: "Pour tenir compte des exigences locales et du fuseau horaire." },
        { title: "Échéance", copy: "Pour être honnêtes sur ce qui est faisable dans le temps disponible." },
        { title: "Langue des séances", copy: "Français, anglais ou arabe." },
        { title: "Brève description", copy: "Quelques lignes sur la consigne et sur ce qui vous bloque." },
      ],
    },
    {
      heading: "Disponibilités et délais de réponse",
      paragraphs: [
        "Toutes les séances se déroulent en ligne et sont planifiées selon votre fuseau horaire, que vous soyez à Montréal, au Royaume-Uni, aux Émirats ou au Liban.",
        "Nous répondons aux messages WhatsApp et aux courriels pendant les heures d'ouverture. Sans réponse de notre part, réécrivez-nous : un message peut se perdre.",
      ],
    },
  ],
  faqHeading: "Avant d'écrire",
  faqs: [
    {
      question: "La première conversation engage-t-elle à quelque chose ?",
      answer: "Non. Posez vos questions, voyez notre réponse, puis décidez si vous souhaitez continuer.",
    },
    {
      question: "Et si mon sujet dépasse votre expertise ?",
      answer: "Nous vous le dirons clairement plutôt que d'accepter le mandat.",
    },
    {
      question: "Puis-je envoyer des fichiers ?",
      answer:
        "Oui : la consigne ou votre brouillon par WhatsApp ou par courriel nous aide à comprendre précisément la demande.",
    },
  ],
  integrityHeading: "Intégrité académique",
  integrity:
    "Nous offrons du tutorat, de l'encadrement et de la rétroaction. Nous ne rédigeons ni ne remettons de travaux à la place des étudiants.",
  closingHeading: "Écrivez-nous",
  closingCopy:
    "Un message sur WhatsApp ou un courriel suffit ; nous reviendrons vers vous avec une proposition claire.",
  contactHeading: "Nous joindre",
  englishNote: "Cette page existe aussi en",
  englishHref: "/contact",
};

function FrenchContact() {
  return <LocalizedPage content={content} />;
}
