import type { Article } from "./types";

export const spssArticle: Article = {
  slug: "spss-dissertation-data-analysis-guide",
  category: "Data analysis",
  label: "SPSS for dissertation data analysis",
  h1: "SPSS for Dissertation Data Analysis: A Practical Student Guide",
  title: "SPSS for Dissertation Data Analysis: A Practical Student Guide",
  description:
    "A practical SPSS guide for dissertation students: preparing data, coding variables, cleaning, descriptives, correlation, t-tests, ANOVA, regression, choosing a test and reporting results.",
  intro:
    "Most dissertation students meet SPSS at the worst possible moment: the data is collected, the deadline is close, and the software expects decisions that should have been made months earlier. This guide walks through the whole process in the order you will actually need it — from setting up a dataset to reporting output in your results chapter — and explains how to choose an analysis that matches your research question rather than one you happened to find in a tutorial.",
  summary:
    "How to prepare data, run the main analyses and report results in a dissertation using SPSS.",
  readingTime: "14 min read",
  sections: [
    {
      heading: "What SPSS is and who uses it",
      blocks: [
        {
          kind: "p",
          text: "SPSS (Statistical Package for the Social Sciences, now published by IBM as IBM SPSS Statistics) is a point-and-click statistics program. You enter or import a dataset, define what each variable means, and run analyses from menus rather than by writing code — though every menu action can also be saved as syntax, which is worth knowing about for reproducibility.",
        },
        {
          kind: "p",
          text: "It is widely used in psychology, education, nursing and health sciences, business and management, sociology and other social sciences, mainly because survey and questionnaire data fit its data model well. Other tools — R, Python, Stata, Jamovi, Excel — do overlapping work. SPSS is not better or worse in the abstract; it is simply what many departments teach and support, so it is usually the tool your supervisor can read your output from.",
        },
      ],
    },
    {
      heading: "Why students use SPSS in a dissertation",
      blocks: [
        {
          kind: "list",
          items: [
            "It handles the standard quantitative dissertation toolkit — descriptives, group comparisons, correlation and regression — without programming.",
            "Output tables map closely to how quantitative results are conventionally reported, which makes writing the results chapter easier.",
            "Most universities license it and teach it, so support, lab access and marking expectations are aligned with it.",
            "Reliability checks such as Cronbach's alpha for questionnaire scales are built in and commonly required for scale-based studies.",
          ],
        },
        {
          kind: "note",
          text: "SPSS does not decide anything for you. It will happily run a test that is completely inappropriate for your design and print a p-value. The thinking is yours; the software only executes it.",
        },
      ],
    },
    {
      heading: "Preparing your dataset before you open SPSS",
      blocks: [
        {
          kind: "p",
          text: "The single biggest time saver is arranging the raw data correctly before importing. SPSS expects a rectangular dataset in Data View: one row per case (usually one participant) and one column per variable. A questionnaire with 30 items produces at least 30 columns, not one column called \"answers\".",
        },
        {
          kind: "steps",
          items: [
            "Export your survey platform's responses to Excel or CSV and keep an untouched master copy you never edit.",
            "Give each participant a unique ID in the first column so you can trace any anomaly back to a response.",
            "Delete test responses and any incomplete cases you have decided (and can justify) to exclude.",
            "Give each column a short header without spaces or symbols — SPSS variable names must start with a letter.",
            "Make sure every cell contains either a number, a short text code, or a consistent missing-value marker — never a comment.",
            "Import into SPSS (File → Open → Data, or File → Import Data) and immediately save as a .sav file.",
          ],
        },
      ],
    },
    {
      heading: "Variables, measurement levels and coding",
      blocks: [
        {
          kind: "p",
          text: "Variable View is where a dataset becomes analysable. For each variable you set the name, type, value labels, missing values and — critically — the measurement level: Nominal (unordered categories such as degree programme), Ordinal (ordered categories such as a Likert response), or Scale (continuous or interval-like measures such as age, score or reaction time).",
        },
        {
          kind: "p",
          text: "Measurement level drives which analyses are defensible. A five-point Likert item is strictly ordinal; many disciplines treat a summed multi-item scale as approximately continuous. That is a convention with an argument behind it, not a law, and you should state which convention you follow and why in your methodology chapter.",
        },
        {
          kind: "h3", text: "Coding categorical data",
        },
        {
          kind: "p",
          text: "Enter categories as numbers and attach value labels (for example 1 = Female, 2 = Male, 3 = Prefer to self-describe). Keep a codebook — a simple table listing each variable, its question wording, its codes and its measurement level. Examiners often ask for it as an appendix, and it saves you when you return to the dataset after three weeks of writing.",
        },
        {
          kind: "p",
          text: "Reverse-scored items need recoding before you compute a scale total, or your reliability statistics will look inexplicably poor. Use Transform → Recode into Different Variables so the original data stays intact.",
        },
      ],
    },
    {
      heading: "Data cleaning",
      blocks: [
        {
          kind: "p",
          text: "Cleaning is a documented stage of your analysis, not housekeeping to hide. Report what you did and how many cases it affected.",
        },
        {
          kind: "list",
          items: [
            "Run Frequencies on every variable first: impossible values (an age of 213, a 7 on a five-point scale) show up immediately.",
            "Define missing values explicitly in Variable View rather than leaving blank cells to be interpreted by accident.",
            "Decide and justify how missing data is handled — listwise exclusion, pairwise exclusion or an imputation approach — and be consistent.",
            "Check for duplicate IDs and for straight-lining responses where a participant gave the same answer to every item.",
            "Inspect outliers with boxplots. An outlier is not automatically an error; removing one needs a reason beyond it being inconvenient.",
            "Check the assumptions relevant to your planned analysis (for example normality, homogeneity of variance, linearity, multicollinearity) rather than assuming them.",
          ],
        },
      ],
    },
    {
      heading: "Descriptive statistics",
      blocks: [
        {
          kind: "p",
          text: "Descriptives come first in almost every results chapter: they describe the sample and make the inferential tests interpretable. Analyze → Descriptive Statistics is the relevant menu.",
        },
        {
          kind: "h3", text: "Frequencies" },
        {
          kind: "p",
          text: "Use Frequencies for categorical variables — counts and percentages for gender, year of study, department. This is also the fastest sanity check on a new dataset.",
        },
        { kind: "h3", text: "Means, medians and standard deviation" },
        {
          kind: "p",
          text: "For continuous variables report a measure of central tendency and a measure of spread. The mean with the standard deviation suits roughly symmetric data; the median with the interquartile range is more honest for skewed data. Reporting a mean for a badly skewed distribution is a common and avoidable criticism.",
        },
        { kind: "h3", text: "Cross-tabulations" },
        {
          kind: "p",
          text: "Analyze → Descriptive Statistics → Crosstabs shows the relationship between two categorical variables, and the Statistics button adds a chi-square test of independence. Watch the expected-count assumption: chi-square becomes unreliable when expected counts in cells are very small.",
        },
      ],
    },
    {
      heading: "Correlation",
      blocks: [
        {
          kind: "p",
          text: "Correlation quantifies how strongly two variables move together. Pearson's r assumes roughly linear relationships between continuous variables; Spearman's rho ranks the data and is the usual choice for ordinal variables or non-linear monotonic relationships.",
        },
        {
          kind: "p",
          text: "Always plot a scatterplot before trusting a correlation coefficient. Two very different patterns can produce the same r. And a correlation between study hours and grades does not establish that studying caused the grades — a point worth stating explicitly in your discussion rather than leaving to the examiner to raise.",
        },
      ],
    },
    {
      heading: "Comparing groups: t-tests and ANOVA",
      blocks: [
        {
          kind: "p",
          text: "An independent-samples t-test compares the means of two separate groups. A paired-samples t-test compares two measurements from the same participants, such as pre-test and post-test. A one-sample t-test compares your sample mean to a known value.",
        },
        {
          kind: "p",
          text: "ANOVA extends the logic to three or more groups. One-way ANOVA tests one categorical predictor; factorial ANOVA tests two or more and their interaction; repeated-measures ANOVA handles the same participants measured several times. A significant ANOVA tells you the groups are not all equal — it does not say which pairs differ, so you need post-hoc comparisons (Tukey, Bonferroni and similar) with correction for multiple testing.",
        },
        {
          kind: "p",
          text: "When assumptions are clearly violated, non-parametric alternatives exist: Mann-Whitney U instead of the independent t-test, Wilcoxon signed-rank instead of the paired t-test, Kruskal-Wallis instead of one-way ANOVA. Report effect sizes alongside p-values; a statistically significant difference can still be trivially small.",
        },
      ],
    },
    {
      heading: "Regression",
      blocks: [
        {
          kind: "p",
          text: "Linear regression models a continuous outcome from one or more predictors, and answers a different question from correlation: how much of the variation in the outcome the predictors explain, and how much the outcome changes per unit of each predictor while the others are held constant.",
        },
        {
          kind: "list",
          items: [
            "Simple linear regression — one continuous predictor, one continuous outcome.",
            "Multiple linear regression — several predictors; check multicollinearity via VIF and tolerance.",
            "Hierarchical regression — predictors entered in theory-driven blocks so you can see the change in R² each block adds.",
            "Binary logistic regression — for a two-category outcome such as pass/fail or retained/left; reports odds ratios rather than unstandardised coefficients.",
          ],
        },
        {
          kind: "p",
          text: "Report the model fit (R² or Nagelkerke R²), the overall test of the model, and the coefficients with their significance and confidence intervals. Residual plots are part of the analysis, not optional decoration.",
        },
      ],
    },
    {
      heading: "Choosing an appropriate statistical test",
      blocks: [
        {
          kind: "p",
          text: "There is no universally correct test. The defensible choice depends on your research question, your study design, the measurement level of your variables, whether observations are independent or repeated, and whether the assumptions of the candidate test hold in your data. The table below is a starting point for a conversation with your supervisor, not a substitute for one.",
        },
        {
          kind: "table",
          caption: "Research question → type of data → possible analysis",
          columns: ["Research question", "Type of data", "Possible analysis"],
          rows: [
            ["How is the sample distributed across categories?", "One categorical variable", "Frequencies, percentages, bar chart"],
            ["What is the typical value and spread?", "One continuous variable", "Mean and SD, or median and IQR; histogram"],
            ["Are two categorical variables related?", "Two categorical variables", "Crosstabs with chi-square test of independence"],
            ["Do two independent groups differ on a continuous measure?", "One categorical (2 groups) + one continuous", "Independent-samples t-test, or Mann-Whitney U if assumptions fail"],
            ["Did the same people change between two time points?", "Paired continuous measurements", "Paired-samples t-test, or Wilcoxon signed-rank"],
            ["Do three or more groups differ?", "One categorical (3+ groups) + one continuous", "One-way ANOVA with post-hoc tests, or Kruskal-Wallis"],
            ["Do two factors interact in their effect?", "Two categorical + one continuous", "Factorial ANOVA including the interaction term"],
            ["Are two continuous variables associated?", "Two continuous variables", "Pearson's r; Spearman's rho for ordinal or non-linear monotonic data"],
            ["How well do several variables predict an outcome?", "Several predictors + one continuous outcome", "Multiple or hierarchical linear regression"],
            ["What predicts a yes/no outcome?", "Several predictors + one binary outcome", "Binary logistic regression"],
            ["Is a multi-item questionnaire scale internally consistent?", "Multiple items forming a scale", "Reliability analysis (Cronbach's alpha)"],
          ],
        },
        {
          kind: "note",
          text: "If two analyses are both plausible, say so in the methodology chapter and explain why you chose one. Examiners reward a reasoned choice far more than a confident but unargued one.",
        },
      ],
    },
    {
      heading: "Interpreting SPSS output",
      blocks: [
        {
          kind: "list",
          items: [
            "Read the descriptives table first and check the N — a smaller N than expected usually means missing data was excluded silently.",
            "Check the assumption tests SPSS prints (for example Levene's test in a t-test or ANOVA) before reading the main result, and use the appropriate row of the output.",
            "A p-value below your alpha means the data would be unlikely under the null hypothesis; it does not measure the size or importance of the effect.",
            "Report effect sizes (Cohen's d, eta squared, r, R², odds ratios) so readers can judge magnitude.",
            "Confidence intervals communicate precision and are increasingly expected in reporting guidelines.",
            "'Sig. = .000' means p < .001. Write it that way; a probability is never exactly zero.",
          ],
        },
      ],
    },
    {
      heading: "Presenting results in your dissertation",
      blocks: [
        {
          kind: "p",
          text: "Do not paste raw SPSS output into the body of your dissertation. Rebuild the numbers into clean tables in your word processor, formatted to your department's style guide (APA 7 in many social science departments), and keep the full output as an appendix if required.",
        },
        {
          kind: "steps",
          items: [
            "Open the results chapter with a short paragraph describing the sample and the data-cleaning decisions.",
            "Present descriptive statistics, then each inferential analysis in the order your research questions appear.",
            "For each analysis: state the test, why it was used, the result with effect size, and one sentence of plain-language interpretation.",
            "Use tables for numbers and figures only where a chart genuinely adds understanding.",
            "Keep interpretation of what results mean for theory and practice in the discussion chapter, not the results chapter.",
          ],
        },
      ],
    },
    {
      heading: "Common mistakes",
      blocks: [
        {
          kind: "list",
          items: [
            "Collecting data before deciding how it will be analysed — the most expensive mistake, because some designs cannot answer the question afterwards.",
            "Treating measurement level carelessly, then running a mean on a nominal variable.",
            "Forgetting to reverse-code items before computing scale scores.",
            "Running many tests and reporting only the significant ones without correcting for multiple comparisons.",
            "Confusing statistical significance with practical importance.",
            "Reporting p-values with no effect sizes, sample sizes or confidence intervals.",
            "Pasting screenshots of SPSS output into the chapter body.",
            "Describing an analysis in the methodology chapter that differs from the one actually run.",
          ],
        },
      ],
    },
    {
      heading: "How SPSS fits into your methodology and results chapters",
      blocks: [
        {
          kind: "p",
          text: "Your methodology chapter should already name the software and version, the analytical strategy, the tests planned for each research question, the assumption checks, and the handling of missing data and ethics approval. The results chapter then reports what those analyses produced, without introducing new methods.",
        },
        {
          kind: "p",
          text: "If your analysis had to change after data collection — an assumption failed, a group turned out too small — write that honestly into the methodology as a documented deviation. A transparent deviation is a normal feature of real research; an undisclosed one looks like something else entirely.",
        },
      ],
    },
    {
      heading: "When should you ask for support?",
      blocks: [
        {
          kind: "p",
          text: "Students often benefit from guidance well before the analysis stage: understanding their own methodology, deciding which analyses suit their research question and design, checking assumptions, reading output correctly and presenting findings clearly in their own words. If you can run the test but cannot explain in a sentence why it is the right test, that is the moment to ask.",
        },
        {
          kind: "p",
          text: "Start with your supervisor and your university's statistics or academic-skills service — they know your department's expectations. If you want additional one-to-one coaching, we offer sessions in English, Arabic and French on SPSS statistics help, data analysis, research methodology and thesis or dissertation coaching. We work through your dataset and your reasoning with you; you run, write and submit your own analysis.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Do I need SPSS for a dissertation?",
      answer:
        "Only if your study is quantitative and your department expects it. Qualitative dissertations use approaches such as thematic analysis instead, sometimes with NVivo. R, Jamovi, Stata and Python are legitimate alternatives if your supervisor accepts them.",
    },
    {
      question: "Which statistical test should I use?",
      answer:
        "It depends on your research question, study design, the measurement level of your variables, whether the observations are independent or repeated, and whether the test's assumptions hold. The decision table in this guide narrows the options, but the final choice should be justified in your methodology chapter and agreed with your supervisor.",
    },
    {
      question: "What does 'Sig. = .000' mean in SPSS output?",
      answer:
        "It means the p-value is smaller than .001, rounded to three decimal places. Report it as p < .001 rather than p = .000.",
    },
    {
      question: "Can I get help with my SPSS analysis without breaking academic integrity rules?",
      answer:
        "Yes. Tutoring, coaching and feedback on your understanding are normal parts of study support. What matters is that you make the analytical decisions, run and understand the analysis, and write and submit the work yourself.",
    },
    {
      question: "How much data do I need?",
      answer:
        "There is no single number. The required sample size depends on the analysis, the expected effect size, the desired statistical power and your alpha level. A power analysis planned before data collection is the defensible way to answer this for your study.",
    },
  ],
  related: [
    { label: "SPSS Statistics Help", to: "/spss-statistics-help" },
    { label: "Data Analysis & Statistics", to: "/data-analysis-statistics" },
    { label: "Research Methodology Support", to: "/research-methodology-support" },
    { label: "Thesis & Dissertation Coaching", to: "/thesis-dissertation-coaching" },
  ],
  sources: [
    { label: "IBM SPSS Statistics documentation", url: "https://www.ibm.com/docs/en/spss-statistics" },
    {
      label: "UK Data Service — data management and preparation guidance",
      url: "https://ukdataservice.ac.uk/learning-hub/research-data-management/",
    },
    {
      label: "APA Style — statistics and reporting standards",
      url: "https://apastyle.apa.org/instructional-aids/numbers-statistics-guide.pdf",
    },
  ],
};
