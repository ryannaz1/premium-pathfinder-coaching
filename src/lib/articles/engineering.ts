import type { Article } from "./types";

export const engineeringArticle: Article = {
  slug: "engineering-final-year-project-guide",
  category: "Projects",
  label: "Engineering final-year project",
  h1: "Engineering Final-Year Project: A Complete Student Guide",
  title: "Engineering Final-Year Project: A Complete Student Guide",
  description:
    "A complete guide to the engineering final-year project: choosing a topic, defining the problem, objectives, requirements, design, simulation, prototyping, testing, safety, documentation and the viva presentation.",
  intro:
    "A final-year project (FYP) is the first time most engineering students own a problem end to end: define it, scope it, design a solution, build or model it, test it honestly and defend the result. It is also the module where the failure mode is rarely technical inability — it is scope, planning and documentation. This guide follows the project in the order it happens, across civil, mechanical, electrical, electronics, computer, chemical, biomedical, environmental, mechatronics and industrial engineering.",
  summary:
    "From topic selection to viva: scoping, designing, testing and documenting an engineering FYP.",
  readingTime: "15 min read",
  sections: [
    {
      heading: "Choosing a project topic",
      blocks: [
        {
          kind: "p",
          text: "A good FYP topic is narrow enough to finish, technical enough to assess, and connected to something you can actually access — a lab, a dataset, a site, a component budget. Ambition is assessed through the depth of your engineering reasoning, not the size of the headline.",
        },
        {
          kind: "list",
          items: [
            "Start from your strengths and the modules you did well in; the project rewards depth, not novelty for its own sake.",
            "Check supervisor availability early — the right supervisor for your topic matters more than the topic being exciting.",
            "Confirm resources before committing: lab time, software licences, test equipment, site access, component lead times.",
            "Prefer a well-executed narrow problem to a broad one you can only sketch.",
            "Check whether the topic requires ethical approval (human participants, patient data, field surveys) — biomedical and environmental projects often do.",
          ],
        },
        {
          kind: "table",
          caption: "Typical FYP shapes by discipline",
          columns: ["Discipline", "Common project shapes", "Tools often involved"],
          rows: [
            ["Civil", "Structural design and analysis, transport study, water or drainage design, site assessment", "AutoCAD, Revit, GIS, structural analysis software"],
            ["Mechanical", "Component or mechanism design, thermal or fluid analysis, test rig", "CAD, FEA, CFD, 3D modelling"],
            ["Electrical", "Power system study, motor drive, renewable integration", "Circuit simulation, MATLAB/Simulink"],
            ["Electronics", "Embedded system, sensor node, PCB design", "Arduino, microcontroller toolchains, PCB software"],
            ["Computer", "Software system, machine learning application, network study", "Version control, data analysis, testing frameworks"],
            ["Chemical", "Process design, reactor modelling, separation study", "Process simulation, mass and energy balances"],
            ["Biomedical", "Instrumentation, signal processing, assistive device", "Signal analysis, CAD, data analysis"],
            ["Environmental", "Air, water or waste study, spatial analysis, impact assessment", "GIS, data analysis, field sampling"],
            ["Mechatronics", "Robotic or automated system integrating sensing and actuation", "Arduino, CAD, control simulation"],
            ["Industrial", "Process improvement, layout optimisation, supply chain or quality study", "Simulation, data analysis, statistics"],
          ],
        },
      ],
    },
    {
      heading: "Defining the engineering problem",
      blocks: [
        {
          kind: "p",
          text: "A topic is an area; a problem statement is specific, bounded and testable. Write it as a single paragraph that says what is wrong or missing, for whom, under what conditions, and what would count as an improvement. If you cannot state how you would recognise success, the problem is not defined yet.",
        },
        {
          kind: "p",
          text: "Weak: 'This project is about solar energy.' Better: 'Rooftop PV output at the campus site underperforms expectations. This project quantifies the loss attributable to shading and soiling and evaluates two mitigation options against installed cost and annual yield.'",
        },
      ],
    },
    {
      heading: "Aim and objectives",
      blocks: [
        {
          kind: "p",
          text: "The aim is one sentence describing the overall purpose. Objectives are the three to six steps that deliver it, each specific and verifiable. Assessors use the objectives as the checklist for whether the project succeeded, so write them as things you can demonstrably complete rather than as aspirations.",
        },
        {
          kind: "list",
          items: [
            "Use action verbs with clear endpoints: quantify, design, simulate, fabricate, validate, compare.",
            "Attach an acceptance criterion where possible — a tolerance, a target efficiency, a compliance standard.",
            "Keep at least one objective achievable early, so a slipped component order does not leave you with nothing.",
          ],
        },
      ],
    },
    {
      heading: "Literature and background research",
      blocks: [
        {
          kind: "p",
          text: "The background chapter exists to show that your approach is informed, not invented from scratch. Cover the underlying theory, existing solutions and their limitations, relevant standards and codes, and the specific gap your project addresses.",
        },
        {
          kind: "list",
          items: [
            "Use your library's databases (IEEE Xplore, ScienceDirect, ASCE, Scopus) rather than general web search.",
            "Include standards and codes where the discipline requires them — Eurocodes, IEEE, ISO, ASTM, ASHRAE, national building or electrical codes.",
            "Manufacturer datasheets are legitimate engineering sources; cite them properly.",
            "Keep a reference manager from day one; retro-fitting citations at the end wastes days.",
            "Summarise critically — what each source got right, what it did not address — rather than listing papers.",
          ],
        },
      ],
    },
    {
      heading: "Requirements and specification",
      blocks: [
        {
          kind: "p",
          text: "Before designing anything, write the requirements the solution must satisfy. Separate functional requirements (what it must do) from non-functional ones (cost, weight, power budget, accuracy, compliance, maintainability). Mark each as essential or desirable, and give each a measurable target where possible — 'accurate' is not a requirement, '±2 °C across 0–100 °C' is.",
        },
        {
          kind: "note",
          text: "A requirements table with an ID per row is one of the highest-value pages in an FYP report. You will use it again in testing: every requirement should map to a test that verifies it.",
        },
      ],
    },
    {
      heading: "Project planning",
      blocks: [
        {
          kind: "p",
          text: "Plan backwards from the submission date. Place the demo, the report deadline and the presentation first, then work back through testing, build, design and research, leaving genuine slack. Long-lead items — component orders, lab bookings, ethics approval, software licences — go in first because they are the most common cause of a stalled project.",
        },
        {
          kind: "table",
          caption: "Indicative two-semester timeline (adapt to your own module deadlines)",
          columns: ["Stage", "Typical window", "Output"],
          rows: [
            ["Topic selection and supervisor agreement", "Weeks 1–2", "Agreed title and scope"],
            ["Literature and background", "Weeks 2–6", "Background chapter draft"],
            ["Problem definition, objectives, requirements", "Weeks 4–7", "Specification and project plan"],
            ["Interim report / proposal submission", "End of semester 1", "Interim deliverable"],
            ["Design and modelling", "Weeks 8–14", "Drawings, models, calculations"],
            ["Simulation and analysis", "Weeks 12–18", "Simulation results"],
            ["Build or prototype", "Weeks 14–20", "Working prototype or validated model"],
            ["Testing and data collection", "Weeks 18–23", "Test data and analysis"],
            ["Report writing", "Runs throughout; final push weeks 20–25", "Full report draft"],
            ["Presentation and viva preparation", "Final 2 weeks", "Slides, demo, rehearsed answers"],
          ],
        },
        {
          kind: "p",
          text: "Track progress with a Gantt chart and keep a dated logbook or engineering notebook. Many departments assess the logbook; even where they do not, it is what saves you when you need to explain a decision made five months earlier.",
        },
      ],
    },
    {
      heading: "The design process",
      blocks: [
        {
          kind: "steps",
          items: [
            "Generate at least two or three genuine concepts, not one concept and two straw men.",
            "Evaluate them against your requirements using an explicit method — a weighted decision matrix works well and is easy to defend.",
            "Select a concept and record the reasoning, including what you traded away.",
            "Develop the detailed design: dimensions, materials, tolerances, circuit values, control logic, process parameters.",
            "Verify against the requirements before building, using hand calculations and simulation.",
            "Iterate — and document each iteration, because the iteration history is evidence of engineering judgement.",
          ],
        },
      ],
    },
    {
      heading: "Calculations, modelling and simulation",
      blocks: [
        {
          kind: "p",
          text: "Where the discipline requires it, show the analysis rather than only the result. Present the governing equations, the assumptions, the input values with their sources, and the worked calculation. Assumptions stated openly are strength; assumptions buried are the first thing an examiner probes.",
        },
        {
          kind: "list",
          items: [
            "Always sanity-check simulation against a simplified hand calculation — an FEA result no one has bounded is not a result.",
            "Report mesh, timestep or convergence settings so the analysis is reproducible.",
            "State units consistently and check dimensional consistency; unit errors remain a leading cause of wrong answers.",
            "Include a sensitivity check on the inputs you are least confident about.",
          ],
        },
      ],
    },
    {
      heading: "Software and technical tools",
      blocks: [
        {
          kind: "p",
          text: "Use the tool your department supports and your supervisor can review. Common choices across FYPs include AutoCAD for 2D drafting, Revit for building information modelling, GIS for spatial and environmental analysis, Arduino and similar microcontroller platforms for embedded prototyping, general CAD and 3D modelling for parts and assemblies, and statistical or data-analysis tools for test results.",
        },
        {
          kind: "p",
          text: "Learn the tool on a throwaway practice file before your real model. Rebuilding a badly organised model in the final month is a preventable loss, and it is the most common technical regret students report.",
        },
      ],
    },
    {
      heading: "Prototyping",
      blocks: [
        {
          kind: "list",
          items: [
            "Build the smallest thing that tests the riskiest assumption first, rather than assembling the full system last.",
            "Order components early and order spares of anything fragile or cheap.",
            "Photograph each build stage; those images become report figures and evidence of your own work.",
            "Version your firmware and code in Git, with meaningful commit messages.",
            "Book workshop or lab time in advance and confirm any required induction or training.",
          ],
        },
      ],
    },
    {
      heading: "Testing",
      blocks: [
        {
          kind: "p",
          text: "A test plan written before testing separates engineering from tinkering. For each requirement, specify the test, the equipment, the conditions, the procedure, the number of repeats and the acceptance criterion. Then run it and record what actually happened, including the runs that failed.",
        },
        {
          kind: "list",
          items: [
            "Repeat measurements; a single reading has no uncertainty estimate.",
            "Record instrument make, model and calibration status.",
            "Quantify uncertainty and error rather than describing results as 'accurate'.",
            "Keep raw data files — examiners may ask, and processed data alone is weak evidence.",
          ],
        },
      ],
    },
    {
      heading: "Results and discussion",
      blocks: [
        {
          kind: "p",
          text: "Present results cleanly — labelled axes, units, uncertainty bars where relevant — and interpret them separately. The discussion should compare measured against predicted values, explain discrepancies with physical reasoning, and evaluate performance against the original requirements one by one.",
        },
        {
          kind: "note",
          text: "A project that did not meet its target but explains why, with evidence, scores better than one claiming unqualified success it cannot support. Negative results are results.",
        },
      ],
    },
    {
      heading: "Risk and safety",
      blocks: [
        {
          kind: "p",
          text: "Most departments require a documented risk assessment before lab or workshop access, and many assess it. Cover the hazard, who might be harmed, existing controls, residual risk and additional measures.",
        },
        {
          kind: "list",
          items: [
            "Electrical work: isolation, current limits, insulation, working practices for live testing.",
            "Mechanical work: rotating parts, stored energy, guarding, PPE, lifting.",
            "Chemical work: COSHH or equivalent assessment, ventilation, storage, disposal.",
            "Site or field work: access permission, lone-working policy, weather and transport.",
            "Human participants or patient data: ethical approval, consent and data protection.",
            "Project risk as distinct from safety risk: supplier delay, equipment failure, scope creep — with a mitigation for each.",
          ],
        },
        {
          kind: "p",
          text: "Follow your institution's own safety rules and induction requirements; they override any general advice, including this guide.",
        },
      ],
    },
    {
      heading: "Documentation and report structure",
      blocks: [
        {
          kind: "list",
          items: [
            "Abstract — problem, method, key result, conclusion in around 200 words.",
            "Introduction — context, problem statement, aim and objectives, report structure.",
            "Literature and background — theory, existing work, standards, the gap.",
            "Requirements and specification.",
            "Design and methodology — concepts, selection, detailed design, calculations.",
            "Implementation — build, code, model or process as executed.",
            "Testing and results — plan, data, analysis.",
            "Discussion — interpretation against requirements and literature.",
            "Conclusions and future work — what was achieved, what remains.",
            "References and appendices — drawings, code, datasheets, risk assessment, logbook extracts.",
          ],
        },
        {
          kind: "p",
          text: "Write throughout the year, not at the end. Every figure, drawing and test table you produce during the work is a report section you will not have to reconstruct in April. Cite everything you did not create yourself, including code libraries and CAD blocks.",
        },
      ],
    },
    {
      heading: "The final presentation and viva",
      blocks: [
        {
          kind: "steps",
          items: [
            "Structure the talk as problem, approach, key result, evaluation, conclusion — not as a chronological diary.",
            "Rehearse to time; overrunning is one of the easiest marks to lose.",
            "Prepare a video of any demo as a fallback in case hardware fails on the day.",
            "Know your numbers: assessors ask where a value came from, what the assumption was, and why the alternative was rejected.",
            "Answer 'I don't know, but here is how I would find out' honestly rather than improvising.",
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
            "Scope far too broad for the available time.",
            "Ordering long-lead components in month five.",
            "Leaving all report writing until after testing.",
            "Presenting simulation output with no validation or assumption statement.",
            "Objectives too vague to be verified, so success cannot be demonstrated.",
            "A results section that shows only the runs that worked.",
            "Skipping or back-dating the risk assessment.",
            "Poor version control leading to lost work.",
            "No contingency for the week when something breaks — and something always breaks.",
          ],
        },
      ],
    },
    {
      heading: "Planning checklist",
      blocks: [
        {
          kind: "list",
          items: [
            "Title and scope agreed with supervisor, in writing.",
            "Problem statement, aim and three to six verifiable objectives.",
            "Requirements table with measurable targets and IDs.",
            "Gantt chart with long-lead items and slack.",
            "Risk assessment approved and safety induction completed.",
            "Ethical approval, if applicable, granted before any data collection.",
            "Reference manager set up and populated.",
            "Version control repository or structured backup in place.",
            "Test plan mapping every requirement to a test.",
            "Report skeleton created in week one and filled in as you go.",
          ],
        },
      ],
    },
    {
      heading: "Where support helps",
      blocks: [
        {
          kind: "p",
          text: "Students most often get stuck at scoping, at the modelling or simulation step, or at turning a pile of test data into a defensible discussion. We provide coaching and technical guidance for engineering projects and final-year projects, including AutoCAD, Revit, GIS and Arduino work, in English, Arabic and French. We help you understand and plan the work; you design, build, write and submit it yourself.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How do I choose a final-year project topic?",
      answer:
        "Pick something narrow, aligned with modules you are strong in, supported by an available supervisor, and feasible with the lab time, software and components you can realistically access. Confirm resources before committing to the title.",
    },
    {
      question: "How long should an engineering FYP report be?",
      answer:
        "Follow your department's handbook — the limits vary widely, and exceeding them is penalised. Where a range is given, quality of analysis matters more than reaching the upper bound.",
    },
    {
      question: "What if my prototype does not work?",
      answer:
        "Document what you built, what you measured, why it failed and what the evidence suggests. A rigorous failure analysis with clear reasoning is assessable engineering work; an unexplained gap is not.",
    },
    {
      question: "Do I need a risk assessment for my project?",
      answer:
        "Almost certainly, if any lab, workshop, field or human-participant work is involved. Most institutions require an approved assessment before access is granted, so complete it early rather than retrospectively.",
    },
    {
      question: "Can I use AutoCAD, Revit, GIS or Arduino in my project?",
      answer:
        "Yes, where they suit the problem and your department supports them. Choose the tool your supervisor can review, learn it on a practice file first, and document your model or code so it can be understood by someone else.",
    },
  ],
  related: [
    { label: "Engineering Project Help", to: "/engineering-project-help" },
    { label: "Final-Year Project Support", to: "/final-year-project-support" },
    { label: "AutoCAD Help", to: "/autocad-help" },
    { label: "Revit Project Help", to: "/revit-project-help" },
    { label: "GIS Project Help", to: "/gis-project-help" },
    { label: "Arduino Project Help", to: "/arduino-project-help" },
  ],
  sources: [
    { label: "Engineering Council UK — accreditation and competence standards", url: "https://www.engc.org.uk/standards-guidance/standards/" },
    { label: "UK Health and Safety Executive — risk assessment guidance", url: "https://www.hse.gov.uk/simple-health-safety/risk/" },
    { label: "IEEE Xplore — engineering literature", url: "https://ieeexplore.ieee.org/" },
  ],
};
