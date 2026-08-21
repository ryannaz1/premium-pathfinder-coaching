import type { Article } from "./types";

export const methodologyArticle: Article = {
  slug: "how-to-choose-dissertation-methodology",
  category: "Research methods",
  label: "Choosing a dissertation methodology",
  h1: "How to Choose a Dissertation Methodology: A Student Guide",
  title: "How to Choose a Dissertation Methodology: A Student Guide",
  description:
    "How to choose and justify a dissertation methodology: qualitative, quantitative and mixed methods, research design, sampling, data collection, reliability, validity, ethics and chapter structure.",
  intro:
    "The methodology chapter is where a dissertation is won or lost. It is not a description of what you did; it is an argument that what you did was the right way to answer your research question, and that you understood its limits. This guide explains how to reason from question to method, what each major approach can and cannot deliver, and how to structure the chapter so an examiner can follow your logic.",
  summary:
    "Reasoning from research question to method, and writing a methodology chapter that justifies itself.",
  readingTime: "13 min read",
  sections: [
    {
      heading: "What 'methodology' actually means",
      blocks: [
        {
          kind: "p",
          text: "Students often use 'methodology' and 'methods' interchangeably. They are different levels of the same argument, and examiners notice when the distinction is missing.",
        },
        {
          kind: "list",
          items: [
            "Methods are the specific procedures: a survey, semi-structured interviews, a laboratory experiment, a regression model.",
            "Methodology is the reasoning that explains why those methods are appropriate for this question, and what kind of knowledge they can produce.",
            "Underneath both sit philosophical assumptions — positivist, interpretivist, critical realist, pragmatist — about what counts as evidence. Many disciplines expect a short, honest paragraph on this rather than a philosophy essay.",
          ],
        },
      ],
    },
    {
      heading: "Start from the research question, not the method",
      blocks: [
        {
          kind: "p",
          text: "The most common structural error is choosing a method first — usually a questionnaire, because it feels manageable — and then bending the question to fit it. Reverse the order. Write the research question, then ask what evidence would genuinely answer it, then ask which method can produce that evidence within your time, access and skills.",
        },
        {
          kind: "table",
          caption: "Question type → what it asks for → typical approach",
          columns: ["Question begins with…", "What it asks for", "Approach that usually fits"],
          rows: [
            ["How many / how often / to what extent", "Measurement and prevalence", "Quantitative survey or secondary data analysis"],
            ["Is there a difference between…", "Comparison between groups", "Quantitative comparative or experimental design"],
            ["Does X cause / affect Y", "Causal inference", "Experimental or quasi-experimental design"],
            ["How do people experience / make sense of", "Meaning and interpretation", "Qualitative interviews, phenomenology, thematic analysis"],
            ["Why does X happen in this setting", "Process and context", "Case study, ethnography, qualitative fieldwork"],
            ["What is the relationship between the numbers and the reasons", "Both scale and explanation", "Mixed methods"],
            ["What does the existing evidence show", "Synthesis of published work", "Systematic or structured literature review"],
          ],
        },
        {
          kind: "note",
          text: "This table narrows options; it does not decide for you. Two students with similar questions can defensibly choose different designs depending on access, ethics, timescale and disciplinary convention.",
        },
      ],
    },
    {
      heading: "Qualitative research",
      blocks: [
        {
          kind: "p",
          text: "Qualitative research produces non-numerical data — words, images, observations — and seeks depth, meaning and context rather than generalisable measurement. Typical methods include semi-structured interviews, focus groups, participant observation, document analysis and case studies.",
        },
        { kind: "h3", text: "Strengths" },
        {
          kind: "list",
          items: [
            "Explains why and how, not just how much.",
            "Handles complex, sensitive or under-researched topics where variables are not yet known.",
            "Allows unexpected findings to emerge, because the design does not fix all categories in advance.",
          ],
        },
        { kind: "h3", text: "Costs and limits" },
        {
          kind: "list",
          items: [
            "Statistical generalisation to a population is not the aim, and claiming it will be criticised.",
            "Analysis is labour-intensive: transcription and coding take far longer than students expect.",
            "The researcher shapes the data, so reflexivity — an honest account of your position and influence — is part of the method, not an apology.",
          ],
        },
        {
          kind: "p",
          text: "Qualitative analysis needs a named, followed approach: reflexive thematic analysis, framework analysis, interpretative phenomenological analysis, grounded theory or content analysis. 'Themes emerged' is not a method; describe the coding process and how themes were developed and checked.",
        },
      ],
    },
    {
      heading: "Quantitative research",
      blocks: [
        {
          kind: "p",
          text: "Quantitative research measures variables numerically and tests relationships or differences statistically. Common designs include cross-sectional surveys, longitudinal studies, experiments with random allocation, quasi-experiments without it, and secondary analysis of existing datasets.",
        },
        {
          kind: "list",
          items: [
            "Strengths: precision, comparability, ability to test hypotheses and, in well-designed experiments, to support causal claims.",
            "Limits: it answers only the questions you thought to ask, and a well-run analysis of a badly designed instrument still produces meaningless numbers.",
            "Requirements: adequate sample size (ideally justified by a power analysis), validated measures where they exist, and pre-specified analysis.",
          ],
        },
        {
          kind: "p",
          text: "Decide the analysis plan before collecting data. If you cannot say which test will answer each research question, the questionnaire is not finished. Our guide to SPSS for dissertation data analysis covers how that plan turns into output and reporting.",
        },
      ],
    },
    {
      heading: "Mixed methods",
      blocks: [
        {
          kind: "p",
          text: "Mixed methods combine qualitative and quantitative components in one study. Done well, it answers a question neither strand could answer alone. Done badly, it is two under-powered mini-studies stapled together — a genuine risk at dissertation scale, where time is limited.",
        },
        {
          kind: "list",
          items: [
            "Explanatory sequential: quantitative first, then qualitative to explain the pattern found.",
            "Exploratory sequential: qualitative first to identify the constructs, then quantitative to measure them.",
            "Convergent parallel: both strands run concurrently and are compared at interpretation.",
          ],
        },
        {
          kind: "p",
          text: "If you choose mixed methods, state explicitly what integration you will perform and at which stage. Integration is the justification; without it, mixing adds workload rather than insight.",
        },
      ],
    },
    {
      heading: "Research design",
      blocks: [
        {
          kind: "p",
          text: "Design is the structure that connects question, data and inference. Specify at least the following, because vagueness here is where marks are lost.",
        },
        {
          kind: "list",
          items: [
            "Unit of analysis — individuals, organisations, documents, events?",
            "Time dimension — cross-sectional snapshot, longitudinal follow-up, or retrospective?",
            "Comparison — is there a control or comparison group, and how is it formed?",
            "Setting — where the data is collected, and any access constraints.",
            "Variables or constructs — what is being measured or explored, and how each is operationalised.",
          ],
        },
      ],
    },
    {
      heading: "Sampling",
      blocks: [
        {
          kind: "p",
          text: "Explain who you studied, how you reached them, and what that means for your conclusions. Sampling strategy should match the approach: probability sampling supports statistical generalisation; purposive sampling supports depth and relevance.",
        },
        {
          kind: "table",
          columns: ["Strategy", "How it works", "Typically used with"],
          rows: [
            ["Simple random", "Every member of the sampling frame has an equal chance", "Quantitative studies with a usable frame"],
            ["Stratified", "Population split into strata, sampled within each", "Quantitative studies needing subgroup precision"],
            ["Cluster", "Naturally occurring groups sampled, then members within", "Large, geographically spread populations"],
            ["Convenience", "Whoever is accessible and willing", "Pragmatic student studies — state the bias it introduces"],
            ["Purposive", "Selected because they have the relevant experience", "Qualitative interview and case-study work"],
            ["Snowball", "Participants refer further participants", "Hard-to-reach or hidden populations"],
          ],
        },
        {
          kind: "p",
          text: "State your sample size and how you arrived at it: a power calculation for quantitative work, or an argument about information richness and data saturation for qualitative work. Also record non-response and dropout — an unexplained gap between invitations and responses invites questions.",
        },
      ],
    },
    {
      heading: "Data collection",
      blocks: [
        {
          kind: "p",
          text: "Describe the instruments precisely enough that a competent reader could repeat the study. For a questionnaire, that means the source of each scale, response format, whether items were adapted, and whether you piloted it. For interviews, it means the topic guide, the mode (in person, video, phone), duration, language and recording method.",
        },
        {
          kind: "p",
          text: "Piloting is cheap insurance. A pilot with three or four people catches ambiguous wording, broken survey logic and interview questions that produce one-word answers — problems that are unfixable once the main data is in. Report the pilot and any changes it produced.",
        },
      ],
    },
    {
      heading: "Data analysis",
      blocks: [
        {
          kind: "p",
          text: "Say what you will do with the data before you have it, and connect each analysis to a specific research question. For quantitative work, name the tests, the software and version, the assumption checks and the handling of missing data. For qualitative work, name the analytic approach, describe the coding process, and say who coded and how disagreements were resolved.",
        },
        {
          kind: "note",
          text: "If the analysis changed after data collection because an assumption failed or recruitment fell short, document the change and the reason. Transparent deviation is normal research practice.",
        },
      ],
    },
    {
      heading: "Reliability, validity and their qualitative equivalents",
      blocks: [
        {
          kind: "list",
          items: [
            "Reliability — consistency of measurement: internal consistency of a scale, test-retest stability, inter-rater agreement.",
            "Internal validity — whether the design supports the causal or relational claim you make, and whether confounds were controlled.",
            "External validity — the extent to which findings transfer beyond your sample and setting.",
            "Construct validity — whether the instrument measures the concept it claims to measure.",
          ],
        },
        {
          kind: "p",
          text: "Qualitative work uses a parallel vocabulary of trustworthiness: credibility (member checking, prolonged engagement), transferability (thick description so readers can judge relevance), dependability (an audit trail of decisions) and confirmability (reflexivity about researcher influence). Use the vocabulary that fits your approach rather than importing the wrong one.",
        },
      ],
    },
    {
      heading: "Ethics",
      blocks: [
        {
          kind: "p",
          text: "Ethical approval is a requirement, not a formality, and most universities will not accept data collected before approval was granted. Build the approval timeline into your plan; committees meet on fixed dates.",
        },
        {
          kind: "list",
          items: [
            "Informed consent: participants understand the purpose, what participation involves, and that they may withdraw.",
            "Confidentiality and anonymity: how identifiers are removed, stored and reported.",
            "Data protection: secure storage, retention period and lawful basis for processing (GDPR or your jurisdiction's equivalent).",
            "Risk and vulnerability: additional safeguards for minors, patients or other vulnerable groups.",
            "Right to withdraw: how and by when, and what happens to already-collected data.",
          ],
        },
      ],
    },
    {
      heading: "Limitations",
      blocks: [
        {
          kind: "p",
          text: "Every design has limits. Naming them precisely demonstrates methodological understanding; hiding them suggests you did not notice. Distinguish limitations that follow from the design (a cross-sectional study cannot establish temporal order) from those caused by circumstance (a smaller sample than planned), and say what effect each has on your conclusions rather than listing them abstractly.",
        },
      ],
    },
    {
      heading: "How to justify your methodological choices",
      blocks: [
        {
          kind: "steps",
          items: [
            "Restate the research question and what kind of evidence would answer it.",
            "Name the approach you chose and connect it to that evidence requirement.",
            "Name the main alternative you rejected and give the reason — access, ethics, timescale, or fit to the question.",
            "Cite methodological literature, not only subject literature, to support the choice.",
            "State the trade-off you accepted and how you mitigated it.",
          ],
        },
        {
          kind: "p",
          text: "That five-move pattern, applied to each major decision, is what turns a description into a justification.",
        },
      ],
    },
    {
      heading: "How to structure the methodology chapter",
      blocks: [
        {
          kind: "list",
          items: [
            "Introduction — restate the research questions and outline the chapter.",
            "Research philosophy and approach — brief, honest, and only as deep as your discipline expects.",
            "Research design — the overall structure and why it fits.",
            "Population, sampling and participants — who, how many, how recruited.",
            "Data collection instruments and procedure — including piloting.",
            "Data analysis strategy — mapped to each research question.",
            "Reliability and validity, or trustworthiness.",
            "Ethical considerations and approval.",
            "Limitations of the methodology.",
            "Summary linking forward to the results chapter.",
          ],
        },
        {
          kind: "p",
          text: "Write in the past tense once the study is done, follow your department's handbook where it conflicts with generic advice, and keep instruments and approval letters in appendices.",
        },
      ],
    },
    {
      heading: "Common mistakes",
      blocks: [
        {
          kind: "list",
          items: [
            "Choosing the method before the question.",
            "Describing what you did without arguing why it was appropriate.",
            "A long philosophy section with no connection to the actual design.",
            "Sampling described as 'random' when it was convenience-based.",
            "Promising a mixed-methods study and never integrating the two strands.",
            "A methodology chapter that describes an analysis different from the one reported in results.",
            "Treating limitations as a confession rather than an analysis.",
            "Leaving ethical approval until after data collection has started.",
          ],
        },
      ],
    },
    {
      heading: "Getting a second perspective",
      blocks: [
        {
          kind: "p",
          text: "Your supervisor is the authority on what your department expects; ask early and bring a written draft rather than a verbal question. If you want additional coaching, we work with students on research methodology, research proposals, data analysis and full thesis or dissertation coaching in English, Arabic and French — talking through your design and your justification so you can write and defend it yourself.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is the difference between methodology and methods?",
      answer:
        "Methods are the specific procedures you used — a survey, interviews, an experiment. Methodology is the reasoned argument for why those procedures suit your research question and what kind of knowledge they can produce.",
    },
    {
      question: "Should I choose qualitative or quantitative for my dissertation?",
      answer:
        "It depends on the question. If you need to measure prevalence, compare groups or test relationships, quantitative fits. If you need to understand experience, meaning or process, qualitative fits. Neither is inherently more rigorous.",
    },
    {
      question: "How many participants do I need for a qualitative dissertation?",
      answer:
        "There is no fixed number. The defensible answer depends on your analytic approach, the homogeneity of your sample and information richness. Discuss the target with your supervisor and justify it in the chapter rather than citing a rule of thumb.",
    },
    {
      question: "Can I change my methodology after starting?",
      answer:
        "Often yes, in consultation with your supervisor and, where relevant, your ethics committee. Document the change and the reason in the methodology chapter — transparent deviation is normal research practice.",
    },
    {
      question: "Do I need a research philosophy section?",
      answer:
        "It depends on the discipline. Business, education and social science dissertations commonly expect one; many science and engineering dissertations do not. Follow your department's handbook and recent accepted dissertations in your field.",
    },
  ],
  related: [
    { label: "Thesis & Dissertation Coaching", to: "/thesis-dissertation-coaching" },
    { label: "Research Methodology Support", to: "/research-methodology-support" },
    { label: "Research Proposal Support", to: "/research-proposal-support" },
    { label: "Data Analysis & Statistics", to: "/data-analysis-statistics" },
  ],
  sources: [
    { label: "UK Research Integrity Office — guidance for researchers", url: "https://ukrio.org/publications/" },
    { label: "UK Data Service — research data management", url: "https://ukdataservice.ac.uk/learning-hub/research-data-management/" },
    { label: "Economic and Social Research Council — research ethics guidance", url: "https://www.ukri.org/councils/esrc/guidance-for-applicants/research-ethics-guidance/" },
  ],
};
