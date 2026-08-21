import {
  integrityDefault,
  languagesDefault,
  levelsDefault,
  type LandingContent,
} from "./types";

export const modelLandings: LandingContent[] = [
  {
    slug: "architecture-maquette-help",
    group: "Models",
    label: "Architecture maquette help",
    eyebrow: "Physical models · Maquettes",
    h1: "Architecture maquette help and model-making guidance",
    title: "Architecture Maquette Help | Model-Making Guidance for Students",
    description:
      "Guidance on architectural maquettes: scale choice, materials, construction sequence, site models, finishing and photographing models for submission.",
    intro:
      "A maquette is an argument in three dimensions. Scale, material and level of abstraction all say something about the project, and a jury reads them before you speak. We coach those decisions and the craft that executes them.",
    highlights: [
      {
        title: "Scale and abstraction",
        copy: "Choosing a scale and a level of detail that communicates the idea instead of exhausting your week.",
      },
      {
        title: "Material strategy",
        copy: "Card, foam, timber, acrylic and 3D printed parts — what each material implies and how each behaves.",
      },
      {
        title: "Construction sequence",
        copy: "Planning cuts, jigs, assembly order and tolerances so the model does not warp or fail late.",
      },
      {
        title: "Finishing and photography",
        copy: "Clean edges, base treatment, lighting and photographs that stand in for the model on a board.",
      },
    ],
    lists: [
      {
        heading: "Model types",
        items: [
          "Concept and massing models",
          "Site and context models",
          "Sectional models",
          "Detail and fragment models",
          "Final presentation models",
        ],
      },
      {
        heading: "Planning support",
        items: [
          "Material lists and budgeting",
          "Laser cutting and 3D print preparation",
          "Time planning before crits",
          "Transport and protection of models",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity:
      "We provide guidance, planning and technique coaching for physical models. We do not build or supply models for submission — the assessed artefact must be made by the student.",
    faqs: [
      {
        question: "Do you build maquettes for students?",
        answer:
          "No. We advise on scale, materials, sequence and finishing so you build a better model yourself.",
      },
      {
        question: "Can you review a model in progress?",
        answer:
          "Yes. Photos or a video call are enough for us to advise on corrections before you commit further material.",
      },
      {
        question: "Can you help me prepare files for laser cutting?",
        answer:
          "Yes — layer setup, kerf allowance, tabs and nesting.",
      },
      {
        question: "What if I have no workshop access?",
        answer:
          "We plan the model around hand tools and materials you can actually obtain.",
      },
    ],
    related: [
      { label: "Building model help", to: "/building-model-help" },
      { label: "Physical project models", to: "/physical-project-models" },
      { label: "Architecture project help", to: "/architecture-project-help" },
      { label: "3D modelling help", to: "/3d-modelling-help" },
    ],
    serviceType: "Architectural model-making guidance",
  },
  {
    slug: "building-model-help",
    group: "Models",
    label: "Building model help",
    eyebrow: "Physical models · Building models",
    h1: "Building model help for architecture and construction students",
    title: "Building Model Help | Scale Models for Architecture & Construction",
    description:
      "Support for building models: structural logic, scale detailing, façade treatment, materials, sectional cutaways and presentation for university juries.",
    intro:
      "Building models have to be right as well as attractive: floor-to-floor heights, structural grid, façade rhythm and openings all get checked against your drawings. We help you plan a model that agrees with the project it represents.",
    highlights: [
      {
        title: "Consistency with drawings",
        copy: "Making sure the model matches your plans and sections, because juries notice when it does not.",
      },
      {
        title: "Structure and assembly",
        copy: "Floor plates, cores, frames and how to build them so the model stays square and rigid.",
      },
      {
        title: "Façade and openings",
        copy: "Representing glazing, shading and material change at scale without clutter.",
      },
      {
        title: "Cutaways and interiors",
        copy: "Sectional models and removable floors that let a jury see inside the building.",
      },
    ],
    lists: [
      {
        heading: "Applications",
        items: [
          "Studio building projects",
          "Construction technology coursework",
          "Structural demonstration models",
          "Interior spatial models",
          "Competition and portfolio models",
        ],
      },
      {
        heading: "Techniques",
        items: [
          "Card and foamboard construction",
          "Laser-cut components",
          "3D printed elements",
          "Acrylic glazing",
          "Base and landscape treatment",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity:
      "Support is advisory. We coach planning, technique and quality control; students construct and submit their own models.",
    faqs: [
      {
        question: "What scale should my building model be?",
        answer:
          "It depends on the drawing set and what you need to show. We help you choose between context, building and detail scales.",
      },
      {
        question: "Can you help me mix 3D printing and hand-built parts?",
        answer:
          "Yes. Hybrid models are common and we plan which elements suit which method.",
      },
      {
        question: "How long should I allow?",
        answer:
          "More than you think. We build a realistic schedule backwards from your crit date.",
      },
      {
        question: "Do you supply materials?",
        answer:
          "No. We advise on what to buy and how much of it.",
      },
    ],
    related: [
      { label: "Architecture maquette help", to: "/architecture-maquette-help" },
      { label: "Physical project models", to: "/physical-project-models" },
      { label: "Revit project help", to: "/revit-project-help" },
      { label: "Architecture project help", to: "/architecture-project-help" },
    ],
    serviceType: "Building model guidance",
  },
  {
    slug: "physical-project-models",
    group: "Models",
    label: "Physical project models",
    eyebrow: "Physical models · All disciplines",
    h1: "Physical project models and presentation model support",
    title: "Physical Project Models | Presentation & Prototype Model Support",
    description:
      "Guidance on physical project models across engineering, architecture and design: prototypes, presentation models, project boards and technical drawings.",
    intro:
      "Engineering rigs, product prototypes, architectural presentation models and project boards are all assessed artefacts with the same underlying question: does this object demonstrate what you claim it demonstrates? We coach the planning, making and presentation that answer it.",
    highlights: [
      {
        title: "Purpose-led making",
        copy: "Deciding whether the model proves a mechanism, communicates a space or demonstrates a concept — each leads to a different object.",
      },
      {
        title: "Materials and fabrication",
        copy: "Choosing materials and methods available to you, including 3D printing, laser cutting and hand fabrication.",
      },
      {
        title: "Project boards",
        copy: "Boards that pair the physical object with drawings, diagrams and text at the right level of detail.",
      },
      {
        title: "Demonstration day",
        copy: "Setting up, testing beforehand, and explaining the model under questioning.",
      },
    ],
    lists: [
      {
        heading: "Model types",
        items: [
          "Architectural presentation models",
          "Engineering prototypes and test rigs",
          "Product design mock-ups",
          "Working mechanism models",
          "Project display boards",
        ],
      },
      {
        heading: "Support includes",
        items: [
          "Feasibility and scoping",
          "Material and cost planning",
          "Technical drawings for fabrication",
          "Build sequence planning",
          "Documentation and photography",
        ],
      },
    ],
    levelsNote: levelsDefault,
    languages: languagesDefault,
    integrity:
      "We coach and advise. Physical models submitted for assessment must be planned, built and presented by the student.",
    faqs: [
      {
        question: "Do you make models for students?",
        answer:
          "No. We provide guidance, planning and technique so students make their own.",
      },
      {
        question: "Can you help with an engineering test rig?",
        answer:
          "Yes — what it must measure, how to build it safely with available materials, and how to record results.",
      },
      {
        question: "Can you review my project board layout?",
        answer:
          "Yes. Board hierarchy and content selection are a common source of lost marks.",
      },
      {
        question: "Is this available in Arabic or French?",
        answer: "Yes. All coaching is available in English, Arabic and French.",
      },
    ],
    related: [
      { label: "Architecture maquette help", to: "/architecture-maquette-help" },
      { label: "Building model help", to: "/building-model-help" },
      { label: "Engineering project help", to: "/engineering-project-help" },
      { label: "Final-year project support", to: "/final-year-project-support" },
    ],
    serviceType: "Physical project model guidance",
  },
];
