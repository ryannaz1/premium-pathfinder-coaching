import { createFileRoute } from "@tanstack/react-router";

import { LocalizedPage, type LocalizedPageContent } from "@/components/LocalizedPage";
import { SITE_URL, socialMeta, hreflangLinks } from "@/lib/seo";

const title = "تواصل معنا — استشارة أكاديمية | Yes We Do Your Projects";
const description =
  "تواصل معنا عبر واتساب أو البريد الإلكتروني لحجز استشارة أكاديمية بالعربية أو الإنكليزية أو الفرنسية. نردّ عادة خلال ساعات العمل.";

export const Route = createFileRoute("/ar/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ar" },
      { property: "og:url", content: `${SITE_URL}/ar/contact` },
      ...socialMeta(title, description),
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/ar/contact` }, ...hreflangLinks("/contact")],
  }),
  component: ArabicContact,
});

const content: LocalizedPageContent = {
  dir: "rtl",
  lang: "ar",
  eyebrow: "تواصل معنا",
  h1: "احجز استشارة أكاديمية",
  intro:
    "أسرع طريقة للبدء هي رسالة على واتساب. اذكر تخصصك، جامعتك، مستواك الدراسي، وما تعمل عليه مع موعد التسليم، وسنردّ عليك بما نستطيع تقديمه فعلاً وبأي شكل.",
  primaryCta: "املأ نموذج طلب الدعم",
  whatsappCta: "تواصل عبر واتساب",
  sections: [
    {
      heading: "ما الذي يفيدنا معرفته",
      items: [
        { title: "التخصص والمقرر", copy: "اسم المقرر والمادة يساعدنا على تحديد المختص المناسب." },
        { title: "المستوى الدراسي", copy: "بكالوريوس، ماجستير أو دكتوراه." },
        { title: "الجامعة والبلد", copy: "لمراعاة متطلبات جامعتك وفارق التوقيت." },
        { title: "الموعد النهائي", copy: "حتى نكون صريحين معك بشأن ما يمكن إنجازه في الوقت المتاح." },
        { title: "لغة الجلسة", copy: "العربية أو الإنكليزية أو الفرنسية." },
        { title: "وصف مختصر", copy: "بضعة أسطر عن المطلوب منك وأين تشعر بالصعوبة." },
      ],
    },
    {
      heading: "أوقات العمل والردود",
      paragraphs: [
        "الجلسات كلها عبر الإنترنت، ونرتّب المواعيد بحسب توقيتك سواء كنت في بريطانيا أو الإمارات أو كندا أو لبنان.",
        "نردّ على رسائل واتساب والبريد الإلكتروني خلال ساعات العمل عادةً. إن لم تصلك إجابة، أعد الإرسال — أحياناً تضيع الرسائل.",
      ],
    },
  ],
  faqHeading: "قبل أن ترسل",
  faqs: [
    {
      question: "هل الاستشارة الأولى ملزمة؟",
      answer: "لا. يمكنك أن تسأل وتعرف رأينا، ثم تقرر إن كنت تريد المتابعة.",
    },
    {
      question: "ماذا لو كان موضوعي خارج اختصاصكم؟",
      answer: "سنقول لك ذلك بوضوح بدل أن نقبل العمل. الصراحة أفضل لك ولنا.",
    },
    {
      question: "هل يمكنني إرسال ملفات؟",
      answer:
        "نعم، يمكنك إرسال ملف المتطلبات أو مسودتك عبر واتساب أو البريد الإلكتروني لنفهم المطلوب بدقة.",
    },
  ],
  integrityHeading: "النزاهة الأكاديمية",
  integrity:
    "نقدّم تدريساً وإرشاداً وملاحظات فقط. لا نكتب ولا نسلّم أي عمل أكاديمي نيابة عن الطالب.",
  closingHeading: "أرسل لنا رسالة",
  closingCopy: "اكتب لنا على واتساب أو البريد الإلكتروني وسنعود إليك باقتراح واضح للدعم المناسب.",
  contactHeading: "للتواصل",
  englishNote: "هذه الصفحة متوفرة أيضاً بـ",
  englishHref: "/contact",
};

function ArabicContact() {
  return <LocalizedPage content={content} />;
}
