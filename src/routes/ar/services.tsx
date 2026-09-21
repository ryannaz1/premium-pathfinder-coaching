import { createFileRoute } from "@tanstack/react-router";

import { LocalizedPage, type LocalizedPageContent } from "@/components/LocalizedPage";
import { SITE_URL, socialMeta, hreflangLinks, breadcrumbScript } from "@/lib/seo";

const title = "خدماتنا الأكاديمية — تدريس وإرشاد ودعم بحثي | Yes We Do Your Projects";
const description =
  "تفاصيل خدماتنا: تدريس جامعي، إرشاد أكاديمي، دعم الأطروحات والرسائل، منهجية البحث، التحليل الإحصائي، الكتابة الأكاديمية، والمراجعة اللغوية — بالعربية والإنكليزية والفرنسية.";

export const Route = createFileRoute("/ar/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ar" },
      { property: "og:url", content: `${SITE_URL}/ar/services` },
      ...socialMeta(title, description),
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/ar/services` }, ...hreflangLinks("/services")],
    scripts: [
      breadcrumbScript([
        { name: "الرئيسية", path: "/" },
        { name: "العربية", path: "/ar" },
        { name: "الخدمات", path: "/ar/services" },
      ]),
    ],
  }),
  component: ArabicServices,
});

const content: LocalizedPageContent = {
  dir: "rtl",
  lang: "ar",
  eyebrow: "الخدمات",
  h1: "خدماتنا الأكاديمية والتقنية",
  intro:
    "كل خدمة تُقدَّم في جلسات فردية عبر الإنترنت، بالعربية أو الإنكليزية أو الفرنسية. نبدأ دائماً بفهم مقررك ومتطلبات جامعتك وموعد التسليم، ثم نتفق على شكل الدعم المناسب.",
  primaryCta: "اطلب الدعم الآن",
  whatsappCta: "تواصل عبر واتساب",
  sections: [
    {
      heading: "الخدمات الأساسية",
      items: [
        {
          title: "التدريس الجامعي",
          copy: "شرح المفاهيم الصعبة في مقررك، حل تمارين نموذجية معك، والتحضير للامتحانات.",
        },
        {
          title: "الإرشاد الأكاديمي",
          copy: "تنظيم الوقت، ترتيب الأولويات بين المقررات، وخطة عمل أسبوعية قابلة للتنفيذ.",
        },
        {
          title: "دعم الرسائل والأطروحات",
          copy: "من اختيار الموضوع وصياغة سؤال البحث إلى بنية الفصول والتحضير للمناقشة.",
        },
        {
          title: "منهجية البحث",
          copy: "اختيار المنهج الكمي أو النوعي أو المختلط، تصميم الاستبيان أو المقابلة، والأخلاقيات البحثية.",
        },
        {
          title: "تحليل البيانات والإحصاء",
          copy: "اختيار الاختبار الإحصائي المناسب، تنفيذه في SPSS أو Excel، وتفسير المخرجات بلغة واضحة.",
        },
        {
          title: "الكتابة الأكاديمية",
          copy: "بناء الفقرة والحجة، الاقتباس والتوثيق (APA وHarvard وغيرهما)، وتجنّب الانتحال.",
        },
        {
          title: "المراجعة والتدقيق",
          copy: "ملاحظات على الوضوح والأسلوب والتنسيق على نصّك أنت، من دون إعادة كتابته نيابة عنك.",
        },
        {
          title: "المشاريع التقنية",
          copy: "مشاريع الهندسة والعمارة والحاسوب: Revit، AutoCAD، 3ds Max، MATLAB، Arduino، GIS والماكيتات.",
        },
      ],
    },
    {
      heading: "لمن هذه الخدمات",
      paragraphs: [
        "طلاب البكالوريوس الذين يحتاجون فهماً أعمق للمقرر أو دعماً في الواجبات ومشروع السنة النهائية.",
        "طلاب الماجستير الذين يعملون على أطروحة أو مشروع بحثي ويحتاجون بنية واضحة ومنهجية سليمة.",
        "طلاب الدكتوراه الذين يحتاجون نقاشاً منهجياً جدياً، مراجعة أدبيات منظّمة، وتحضيراً للنشر أو المناقشة.",
      ],
    },
  ],
  faqHeading: "أسئلة شائعة عن الخدمات",
  faqs: [
    {
      question: "هل يمكن حجز جلسة واحدة فقط؟",
      answer:
        "نعم. كثير من الطلاب يبدأون بجلسة واحدة لمناقشة المنهجية أو مراجعة خطة العمل، ثم يقررون إن كانوا بحاجة إلى متابعة.",
    },
    {
      question: "هل تصحّحون النص وتعيدون كتابته؟",
      answer:
        "نقدّم ملاحظات وتوجيهاً على نصّك: أين الحجة ضعيفة، أين التوثيق ناقص، وكيف تحسّن البنية. إعادة الكتابة تبقى مهمتك.",
    },
    {
      question: "كم تستغرق الجلسة؟",
      answer:
        "عادةً بين ٤٥ و٩٠ دقيقة حسب الموضوع. نتفق على المدة والتكرار مسبقاً بحسب حاجتك وموعد التسليم.",
    },
  ],
  integrityHeading: "النزاهة الأكاديمية",
  integrity:
    "جميع خدماتنا إرشادية وتعليمية. لا نكتب ولا نسلّم عملاً أكاديمياً نيابة عن الطالب، ولا نقدّم أي ضمان بالعلامات.",
  closingHeading: "أي خدمة تناسبك؟",
  closingCopy: "أرسل لنا تفاصيل مقررك وموعد التسليم وسنقترح عليك الخدمة المناسبة بصراحة.",
  contactHeading: "للتواصل",
  englishNote: "هذه الصفحة متوفرة أيضاً بـ",
  englishHref: "/services",
};

function ArabicServices() {
  return <LocalizedPage content={content} />;
}
