import {
  integrityDefault,
  languagesDefault,
  levelsDefault,
  type LandingContent,
} from "./types";

const vendorFaq = {
  question: "Are you affiliated with the software company?",
  answer:
    "No. We are an independent academic coaching service. We are not certified by, endorsed by or affiliated with any software vendor, and all product names belong to their owners.",
};

export const softwareLandings: LandingContent[] = [
  {
    slug: "spss-statistics-help",
    group: "Software",
    label: "SPSS help",
    eyebrow: "Software · SPSS",
    h1: "SPSS help for university students",
    title: "SPSS Help for University Students | Data Analysis Support",
    description:
      "Tutoring in SPSS for student research: data entry and coding, choosing tests, running analyses, checking assumptions and reporting output in APA style.",
    intro:
      "SPSS is easy to click through and easy to misuse. We teach you to set the dataset up correctly, choose a test your design justifies, check the assumptions behind it, and read the output well enough to explain it in a viva.",
    highlights: [
      {
        title: "Dataset setup",
        copy: "Variable types, value labels, missing data and recoding — where most student errors are actually created.",
      },
      {
        title: "Test selection",
        copy: "Deciding between t-tests, ANOVA, regression, chi-square and non-parametric alternatives based on your design.",
      },
      {
        title: "Assumption checking",
        copy: "Normality, homogeneity, multicollinearity and what to do when an assumption fails.",
      },
      {
        title: "APA-style reporting",
        copy: "Turning output tables into clean results paragraphs with correct statistics and no overclaiming.",
      },
    ],
    lists: [
      {
        heading: "Analyses covered",
        items: [
          "Descriptives and frequencies",
          "Independent and paired t-tests",
          "One-way and factorial ANOVA",
          "Correlation and multiple regression",
          "Chi-square and crosstabs",
          "Reliability and factor analysis",
        ],
      },
      {
        heading: "Who uses this",
        items: [
          "Psychology and social science students",
          "Business and marketing researchers",
          "Nursing and public health students",
          "Master's and PhD candidates",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      {
        question: "Can you run my analysis for me?",
        answer:
          "No. We work through it with you on screen so you can repeat and defend every step.",
      },
      vendorFaq,
      {
        question: "I do not have SPSS. Can you help with Excel or R?",
        answer:
          "Yes. We cover Excel analysis and basic R workflows for the same tests.",
      },
      {
        question: "Can you help interpret output I already have?",
        answer:
          "Yes — reading the tables, judging whether the test was appropriate and writing the results section.",
      },
    ],
    related: [
      { label: "Data analysis & statistics", to: "/data-analysis-statistics" },
      { label: "Research methodology support", to: "/research-methodology-support" },
      { label: "Social science academic support", to: "/social-science-academic-support" },
      { label: "Medicine & health support", to: "/medicine-academic-support" },
    ],
    serviceType: "SPSS and statistics tutoring",
  },
  {
    slug: "gis-project-help",
    group: "Software",
    label: "GIS project help",
    eyebrow: "Software · GIS",
    h1: "GIS project help for university students",
    title: "GIS Project Help | Spatial Analysis & Mapping Support for Students",
    description:
      "Tutoring for GIS coursework and projects: data sourcing, projections, layers, spatial analysis, cartographic output and writing up spatial results.",
    intro:
      "GIS coursework goes wrong quietly: a mismatched projection, an inappropriate join, a map that looks finished but misrepresents the data. We coach the spatial reasoning first and the button sequence second.",
    highlights: [
      {
        title: "Data and projections",
        copy: "Sourcing spatial data, coordinate systems, reprojection and why your layers do not line up.",
      },
      {
        title: "Spatial analysis",
        copy: "Buffers, overlays, joins, interpolation, suitability analysis and density mapping used with intent.",
      },
      {
        title: "Cartographic output",
        copy: "Classification choices, colour schemes, legends and scale so the map communicates honestly.",
      },
      {
        title: "Writing up spatial work",
        copy: "Describing method reproducibly and interpreting spatial patterns without inferring causation.",
      },
    ],
    lists: [
      {
        heading: "Typical uses",
        items: [
          "Urban planning studies",
          "Environmental and geography coursework",
          "Site suitability and accessibility analysis",
          "Transport and infrastructure projects",
          "Public health spatial studies",
        ],
      },
      {
        heading: "Tools",
        items: [
          "QGIS workflows",
          "ArcGIS-style workflows where your course requires them",
          "Spatial data formats and attribute tables",
          "Remote sensing basics",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      vendorFaq,
      {
        question: "Do you cover both QGIS and ArcGIS?",
        answer:
          "Yes, at the level typically required in university coursework. Concepts transfer between them.",
      },
      {
        question: "Can you make my maps?",
        answer:
          "No. We teach the workflow and critique your output; you produce the submitted maps.",
      },
      {
        question: "Can you help with the report as well?",
        answer:
          "Yes. Method description, figure captions and interpretation are part of the coaching.",
      },
    ],
    related: [
      { label: "Engineering project help", to: "/engineering-project-help" },
      { label: "Science academic support", to: "/science-academic-support" },
      { label: "Architecture project help", to: "/architecture-project-help" },
      { label: "Data analysis & statistics", to: "/data-analysis-statistics" },
    ],
    serviceType: "GIS academic tutoring",
  },
  {
    slug: "autocad-help",
    group: "Software",
    label: "AutoCAD help",
    eyebrow: "Software · AutoCAD",
    h1: "AutoCAD help for architecture and engineering students",
    title: "AutoCAD Help for Students | Technical Drawing & Drafting Support",
    description:
      "Tutoring in AutoCAD for university coursework: drafting standards, layers, dimensioning, layouts, plotting and producing coordinated drawing sets.",
    intro:
      "Drawings are marked on convention as much as content. Layer discipline, line weights, dimensioning and a clean sheet layout are what make a set look professional — and they are all teachable in a few focused sessions.",
    highlights: [
      {
        title: "Drafting fundamentals",
        copy: "Drawing setup, units, layers, blocks and templates that keep a project manageable as it grows.",
      },
      {
        title: "Annotation and dimensioning",
        copy: "Dimension styles, text scaling and annotation that stays legible at plot scale.",
      },
      {
        title: "Layouts and plotting",
        copy: "Paper space, viewports, title blocks and exporting a clean PDF set for submission.",
      },
      {
        title: "Drawing conventions",
        copy: "Plans, sections, elevations and details that follow the standards your school expects.",
      },
    ],
    lists: [
      {
        heading: "Coursework we support",
        items: [
          "Architectural plans and sections",
          "Structural and civil drawings",
          "Mechanical part and assembly drawings",
          "Site and layout plans",
          "Detail drawings",
        ],
      },
      {
        heading: "Skills taught",
        items: [
          "Efficient command workflow",
          "Layer and block management",
          "Xrefs and coordination",
          "Scale and plotting",
          "Exporting for boards and reports",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      vendorFaq,
      {
        question: "Will you draw my project?",
        answer:
          "No. We teach the technique and review your drawings; the submitted set must be your own.",
      },
      {
        question: "Can you help me fix a messy file?",
        answer:
          "Yes. We go through layer structure, scaling and plotting problems with you and show how to prevent them.",
      },
      {
        question: "Do you also cover Revit?",
        answer: "Yes, on our dedicated Revit page.",
      },
    ],
    related: [
      { label: "Revit project help", to: "/revit-project-help" },
      { label: "Architecture project help", to: "/architecture-project-help" },
      { label: "Engineering software support", to: "/engineering-software-support" },
      { label: "3D modelling help", to: "/3d-modelling-help" },
    ],
    serviceType: "AutoCAD academic tutoring",
  },
  {
    slug: "revit-project-help",
    group: "Software",
    label: "Revit project help",
    eyebrow: "Software · Revit & BIM",
    h1: "Revit project help and BIM coaching for students",
    title: "Revit Project Help | BIM Modelling Support for Architecture Students",
    description:
      "Tutoring in Revit and BIM for university projects: model setup, families, levels, views, schedules, sheets and coordinated documentation.",
    intro:
      "Revit rewards students who set the model up properly and punishes those who fight it. We teach the logic — levels, families, view templates, schedules — so the documentation falls out of the model instead of being drawn twice.",
    highlights: [
      {
        title: "Model structure",
        copy: "Levels, grids, worksets and naming conventions that keep a studio project coherent to submission.",
      },
      {
        title: "Families and components",
        copy: "Using, editing and building families without breaking parametric behaviour.",
      },
      {
        title: "Views, sheets and schedules",
        copy: "View templates, graphic overrides, schedules and a sheet set that prints consistently.",
      },
      {
        title: "BIM thinking",
        copy: "Why information modelling differs from drafting, and how to talk about it in your report or crit.",
      },
    ],
    lists: [
      {
        heading: "Project support",
        items: [
          "Studio design projects",
          "Technical documentation packages",
          "Construction detail modelling",
          "Renders and visual output from Revit",
          "Coordination with AutoCAD and 3ds Max",
        ],
      },
      {
        heading: "Common problems we fix",
        items: [
          "Broken or over-constrained families",
          "Views that will not display correctly",
          "Inconsistent annotation scale",
          "Slow, oversized models",
          "Sheets that do not match the model",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      vendorFaq,
      {
        question: "Do you model the project for me?",
        answer: "No. We coach the workflow; you build and submit your own model.",
      },
      {
        question: "I am a complete beginner. Where do we start?",
        answer:
          "With project setup and the concepts behind it, which saves weeks compared with learning commands in isolation.",
      },
      {
        question: "Can you help before a crit?",
        answer:
          "Yes. Short, focused sessions on output and sheet presentation are common in crit week.",
      },
    ],
    related: [
      { label: "Architecture project help", to: "/architecture-project-help" },
      { label: "AutoCAD help", to: "/autocad-help" },
      { label: "3ds Max help", to: "/3d-max-help" },
      { label: "Building model help", to: "/building-model-help" },
    ],
    serviceType: "Revit and BIM academic tutoring",
  },
  {
    slug: "3d-max-help",
    group: "Software",
    label: "3ds Max help",
    eyebrow: "Software · 3ds Max",
    h1: "3ds Max help for architecture and design students",
    title: "3ds Max Help for Students | 3D Modelling, Lighting & Rendering",
    description:
      "Tutoring in 3ds Max for university projects: modelling, materials, lighting, camera setup, rendering and post-production for presentation boards.",
    intro:
      "A render is an argument about atmosphere and scale, not a screenshot. We coach the modelling discipline, lighting logic and camera choices that make a student render read as designed rather than generated.",
    highlights: [
      {
        title: "Modelling for render",
        copy: "Clean geometry, modifiers and scene organisation that survive iteration.",
      },
      {
        title: "Materials and texturing",
        copy: "Material setup, mapping and realistic surface behaviour without bloating render times.",
      },
      {
        title: "Lighting and cameras",
        copy: "Daylight and interior lighting, exposure and camera framing that supports your concept.",
      },
      {
        title: "Render and post-production",
        copy: "Render settings, output resolution and Photoshop post-production for boards and portfolios.",
      },
    ],
    lists: [
      {
        heading: "Used for",
        items: [
          "Architectural visualisation",
          "Interior design presentation",
          "Product and industrial design renders",
          "Concept imagery for studio crits",
          "Portfolio imagery",
        ],
      },
      {
        heading: "Skills taught",
        items: [
          "Scene setup and units",
          "Modifier workflow",
          "Material editor",
          "Lighting rigs",
          "Render output and post",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      vendorFaq,
      {
        question: "Will you render my project?",
        answer:
          "No. We teach the workflow and critique your images; you produce the submitted output.",
      },
      {
        question: "My renders take hours. Can you help?",
        answer:
          "Yes. Render settings, geometry weight and lighting complexity are usually the cause, and all three are fixable.",
      },
      {
        question: "Can you help with post-production?",
        answer:
          "Yes — Photoshop post, entourage, atmosphere and board composition.",
      },
    ],
    related: [
      { label: "3D modelling help", to: "/3d-modelling-help" },
      { label: "Photoshop academic project help", to: "/photoshop-academic-project-help" },
      { label: "Architecture project help", to: "/architecture-project-help" },
      { label: "Design academic support", to: "/design-academic-support" },
    ],
    serviceType: "3ds Max academic tutoring",
  },
  {
    slug: "arduino-project-help",
    group: "Software",
    label: "Arduino project help",
    eyebrow: "Hardware · Arduino",
    h1: "Arduino project help for engineering students",
    title: "Arduino Project Help | Prototyping & Embedded Coursework Support",
    description:
      "Coaching for Arduino university projects: circuit design, sensors, wiring, code structure, debugging, testing and documenting your prototype.",
    intro:
      "Arduino projects fail on the boring parts: a floating input, a shared ground missed, blocking code in a loop that needs to be responsive. We work through the electronics and the firmware with you until the prototype behaves predictably.",
    highlights: [
      {
        title: "Circuit and wiring",
        copy: "Power, grounding, pull-up resistors, sensor interfacing and protecting the board from your own prototype.",
      },
      {
        title: "Code structure",
        copy: "Non-blocking timing, state machines, libraries and serial debugging instead of one enormous loop.",
      },
      {
        title: "Sensors and actuators",
        copy: "Reading sensors reliably, calibration, and driving motors, servos and displays.",
      },
      {
        title: "Testing and documentation",
        copy: "Test plans, results tables, circuit diagrams and a report that evidences the engineering.",
      },
    ],
    lists: [
      {
        heading: "Typical projects",
        items: [
          "Sensor monitoring systems",
          "Automation and control prototypes",
          "Robotics and motor control",
          "IoT and data-logging projects",
          "Mechatronics coursework",
        ],
      },
      {
        heading: "Support includes",
        items: [
          "Component selection",
          "Breadboard to stripboard planning",
          "Debugging sessions",
          "Power budgeting",
          "Demonstration preparation",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      vendorFaq,
      {
        question: "Do you build the prototype for me?",
        answer:
          "No. We guide design, code and debugging; you build, test and submit your own project.",
      },
      {
        question: "Can you help debug live?",
        answer:
          "Yes. Screen-share sessions with serial output visible are the fastest way to resolve most faults.",
      },
      {
        question: "Can you help write the report?",
        answer:
          "Yes — structure, diagrams, test evidence and discussion.",
      },
    ],
    related: [
      { label: "Engineering project help", to: "/engineering-project-help" },
      { label: "Engineering software support", to: "/engineering-software-support" },
      { label: "Computer science support", to: "/computer-science-academic-support" },
      { label: "Final-year project support", to: "/final-year-project-support" },
    ],
    serviceType: "Arduino and prototyping academic tutoring",
  },
  {
    slug: "photoshop-academic-project-help",
    group: "Software",
    label: "Photoshop help",
    eyebrow: "Software · Photoshop",
    h1: "Photoshop help for academic and design projects",
    title: "Photoshop Help for Academic Projects | Boards, Diagrams & Portfolios",
    description:
      "Tutoring in Photoshop for university projects: presentation boards, architectural post-production, diagrams, portfolio layout and export for print.",
    intro:
      "For architecture and design students, Photoshop is a presentation instrument. We coach the compositional and technical craft — layers, masks, colour, resolution — that separates a board that reads instantly from one a jury has to decode.",
    highlights: [
      {
        title: "Board composition",
        copy: "Hierarchy, grid, whitespace and sequencing so the viewer reads your project in the order you intend.",
      },
      {
        title: "Architectural post-production",
        copy: "Entourage, skies, shadows, atmosphere and colour grading over renders or line work.",
      },
      {
        title: "Diagrams that explain",
        copy: "Concept, circulation and analysis diagrams built cleanly and consistently.",
      },
      {
        title: "Print-ready output",
        copy: "Resolution, colour mode, bleed and file size for A1 boards and portfolio PDFs.",
      },
    ],
    lists: [
      {
        heading: "Skills covered",
        items: [
          "Layers, masks and smart objects",
          "Colour adjustment and grading",
          "Compositing and cut-outs",
          "Typography on boards",
          "Export and print preparation",
        ],
      },
      {
        heading: "Used for",
        items: [
          "Studio presentation boards",
          "Portfolio layouts",
          "Report figures and diagrams",
          "Poster presentations",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      vendorFaq,
      {
        question: "Will you make my board?",
        answer: "No. We teach and critique; you produce the submitted board.",
      },
      {
        question: "My board prints blurry. Why?",
        answer:
          "Usually resolution and scale set incorrectly at document creation. We cover that in the first session.",
      },
      {
        question: "Can you help with portfolio design for applications?",
        answer:
          "Yes — selection, sequencing, layout and export.",
      },
    ],
    related: [
      { label: "Design academic support", to: "/design-academic-support" },
      { label: "Architecture project help", to: "/architecture-project-help" },
      { label: "3ds Max help", to: "/3d-max-help" },
      { label: "Physical project models", to: "/physical-project-models" },
    ],
    serviceType: "Photoshop academic tutoring",
  },
  {
    slug: "3d-modelling-help",
    group: "Software",
    label: "3D modelling help",
    eyebrow: "Software · 3D modelling",
    h1: "3D modelling help for university projects",
    title: "3D Modelling Help for Students | CAD, Digital Models & Visualisation",
    description:
      "Tutoring in 3D modelling for academic projects: modelling strategy, CAD workflows, digital models for architecture, engineering and design, and output.",
    intro:
      "Whatever the package, 3D modelling rewards the same habits: model at the right level of detail, keep geometry clean, and know what the model is for before you start. We coach that judgement alongside the software technique.",
    highlights: [
      {
        title: "Modelling strategy",
        copy: "Deciding detail level, tolerances and organisation based on whether the model is for analysis, fabrication or presentation.",
      },
      {
        title: "Clean geometry",
        copy: "Avoiding the mesh and solid problems that break renders, prints and simulations later.",
      },
      {
        title: "Cross-package workflow",
        copy: "Moving models between CAD, BIM and visualisation tools without losing structure or scale.",
      },
      {
        title: "Output and fabrication",
        copy: "Preparing models for rendering, 3D printing, laser cutting or physical model making.",
      },
    ],
    lists: [
      {
        heading: "Contexts",
        items: [
          "Architectural and interior models",
          "Engineering parts and assemblies",
          "Product and industrial design",
          "Digital models feeding physical maquettes",
          "Visualisation for boards and reports",
        ],
      },
      {
        heading: "Related tools",
        items: ["AutoCAD", "Revit", "3ds Max", "SketchUp-style modellers", "Slicing and CAM basics"],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      vendorFaq,
      {
        question: "Which software do you teach?",
        answer:
          "Most commonly AutoCAD, Revit and 3ds Max, plus general modelling principles that transfer to other packages.",
      },
      {
        question: "Can you prepare my model for 3D printing?",
        answer:
          "We teach you how to check and prepare it — watertight geometry, wall thickness, orientation and supports.",
      },
      {
        question: "Do you model on behalf of students?",
        answer: "No. Coaching and critique only.",
      },
    ],
    related: [
      { label: "3ds Max help", to: "/3d-max-help" },
      { label: "Physical project models", to: "/physical-project-models" },
      { label: "Engineering software support", to: "/engineering-software-support" },
      { label: "Design academic support", to: "/design-academic-support" },
    ],
    serviceType: "3D modelling academic tutoring",
  },
  {
    slug: "engineering-software-support",
    group: "Software",
    label: "Engineering software support",
    eyebrow: "Software · Engineering tools",
    h1: "Engineering software support for university students",
    title: "Engineering Software Support | CAD, Modelling & Analysis Tools",
    description:
      "Academic tutoring in the software engineering students actually use: CAD and drafting, modelling, simulation output, Arduino, GIS and statistical analysis.",
    intro:
      "Engineering degrees assume you will pick the software up on your own, then mark you as if you were trained. This page collects the tool support we provide, always taught as transferable technique rather than a sequence of clicks.",
    highlights: [
      {
        title: "Drafting and CAD",
        copy: "AutoCAD drafting standards, drawing sets, layouts and coordinated documentation.",
      },
      {
        title: "Modelling and BIM",
        copy: "Revit and 3D modelling workflows, from concept geometry to schedules and detail.",
      },
      {
        title: "Analysis and data",
        copy: "Interpreting simulation output, statistical analysis in SPSS or Excel, and presenting results credibly.",
      },
      {
        title: "Prototyping and spatial tools",
        copy: "Arduino electronics and firmware, plus GIS for infrastructure, environmental and planning work.",
      },
    ],
    lists: [
      {
        heading: "Tools we tutor",
        items: [
          "AutoCAD",
          "Revit and BIM",
          "3ds Max",
          "GIS and ArcGIS-style workflows",
          "Arduino",
          "SPSS and Excel",
          "Photoshop for technical presentation",
        ],
      },
      {
        heading: "Applied to",
        items: [
          "Technical drawings",
          "Engineering and architectural modelling",
          "Statistical analysis",
          "Prototype development",
          "Project boards and reports",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity: integrityDefault,
    faqs: [
      vendorFaq,
      {
        question: "Can you teach a tool not listed here?",
        answer:
          "Ask. If it is outside what we can genuinely support, we will tell you rather than take the booking.",
      },
      {
        question: "Do you complete software coursework?",
        answer: "No. We teach the skills; the submitted files are yours.",
      },
      {
        question: "How long does it take to learn a package?",
        answer:
          "For coursework purposes, most students become productive within three or four focused sessions plus practice.",
      },
    ],
    related: [
      { label: "Engineering project help", to: "/engineering-project-help" },
      { label: "AutoCAD help", to: "/autocad-help" },
      { label: "Arduino project help", to: "/arduino-project-help" },
      { label: "GIS project help", to: "/gis-project-help" },
    ],
    serviceType: "Engineering software academic tutoring",
  },
];
