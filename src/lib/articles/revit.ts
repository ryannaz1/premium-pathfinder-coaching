import type { Article } from "./types";

export const revitArticle: Article = {
  slug: "revit-for-architecture-students",
  category: "Software",
  label: "Revit for architecture students",
  h1: "Revit for Architecture Students: A Practical Project Guide",
  title: "Revit for Architecture Students: A Practical Project Guide",
  description:
    "A practical Revit guide for architecture students: setting up a project, levels and grids, walls, doors, floors, roofs, views, sections, sheets, schedules and preparing a studio presentation.",
  intro:
    "Revit rewards students who set the model up properly and punishes those who treat it as a drawing program. This guide follows the order you would actually build a studio project — project setup, levels and grids, then the building elements, then views, sheets and presentation — and flags the decisions that cause the most rework later. It is an independent student guide and is not affiliated with or endorsed by Autodesk.",
  summary:
    "Setting up, modelling and documenting an architecture studio project in Revit without painting yourself into a corner.",
  readingTime: "13 min read",
  sections: [
    {
      heading: "What Revit is",
      blocks: [
        {
          kind: "p",
          text: "Revit is a building information modelling (BIM) application published by Autodesk. Instead of drawing lines that look like a wall, you place a wall object that knows its type, thickness, material layers, height and host relationships. Plans, sections, elevations, 3D views and schedules are all live views of that single model, so a change to the wall updates every drawing that shows it.",
        },
        {
          kind: "p",
          text: "That is the practical difference from CAD drafting: in AutoCAD you maintain each drawing; in Revit you maintain one model and generate drawings from it. The cost is that early modelling decisions propagate, which is why setup discipline matters more than tool tricks.",
        },
      ],
    },
    {
      heading: "How architecture students commonly use BIM tools",
      blocks: [
        {
          kind: "list",
          items: [
            "Studio design projects — developing and documenting a scheme from concept through to presentation drawings.",
            "Technology and construction modules — detailing wall build-ups, junctions and assemblies.",
            "Environmental modules — exporting geometry for daylight, energy or shading analysis.",
            "Quantity and specification exercises — using schedules to extract areas, door counts and material quantities.",
            "Final-year and thesis projects — coordinating a larger scheme with consistent drawing sets.",
          ],
        },
        {
          kind: "p",
          text: "Many students combine tools: massing and form exploration in Rhino or SketchUp, documentation in Revit, visualisation in 3ds Max or a real-time renderer, and 2D detailing in AutoCAD where a supervisor asks for it. Choose the pipeline your studio expects rather than the one you saw in a tutorial.",
        },
      ],
    },
    {
      heading: "Starting a project",
      blocks: [
        {
          kind: "steps",
          items: [
            "Start from your school's template if one exists; it carries the expected units, title blocks, line weights and view templates.",
            "Set project units (Manage → Project Units) before modelling — millimetres for most UK and EU work, feet and inches for US conventions.",
            "Enter project information (Manage → Project Information) so title blocks fill themselves.",
            "Set the project location and true north if you will run any solar or shadow study.",
            "Link or import the site survey or CAD base as a link, never a bound import, so it can be updated or removed cleanly.",
            "Save immediately into a structured folder with a version-numbered file name, and keep backups off your laptop.",
          ],
        },
        {
          kind: "note",
          text: "Model at full real-world size. Scale is a property of a view, not of the model — set it in the view's properties, and never scale geometry to make a drawing fit a sheet.",
        },
      ],
    },
    {
      heading: "Levels and grids",
      blocks: [
        {
          kind: "p",
          text: "Levels are the horizontal datums that host floors, walls and ceilings; grids are the vertical reference planes that organise structure. Both are created in an elevation or plan view respectively, and both should be established before you model anything substantial.",
        },
        {
          kind: "list",
          items: [
            "Create levels in a section or elevation view; name them meaningfully (Ground Floor, First Floor, Roof) rather than Level 1, Level 2.",
            "Creating a level with the Level tool generates an associated plan view; copying a level does not — a frequent source of missing views.",
            "Set finished floor level versus structural level intentionally and be consistent, or floor and wall heights will drift.",
            "Place grids in a plan view; they propagate through levels automatically. Number and letter them conventionally.",
            "Pin levels and grids (Modify → Pin) once agreed, so they cannot be dragged by accident.",
          ],
        },
      ],
    },
    {
      heading: "Walls",
      blocks: [
        {
          kind: "p",
          text: "Walls are system families: you edit the type, not the individual instance, to change construction. Duplicate an existing type before editing its structure, or you will silently change every wall of that type in the project.",
        },
        {
          kind: "list",
          items: [
            "Set the base constraint and top constraint to levels rather than typing an unconnected height, so walls follow level changes.",
            "Build up the layers in Edit Type → Structure with real materials and thicknesses; this is what makes sections readable.",
            "Watch the location line (wall centreline, core face, finish face) — mixing them is the main cause of misaligned walls.",
            "Use Attach Top/Base to tie walls cleanly to roofs and floors instead of guessing heights.",
            "Curtain walls are a separate wall type with grids, mullions and panels; use them for glazed facades rather than faking them with thin walls.",
          ],
        },
      ],
    },
    {
      heading: "Doors and windows",
      blocks: [
        {
          kind: "p",
          text: "Doors and windows are hosted components: they cut their opening automatically and move with the wall. Load the families you need from the library (Insert → Load Family) rather than modelling openings manually with voids.",
        },
        {
          kind: "list",
          items: [
            "Set the sill height and head height through the instance properties rather than by dragging.",
            "Press the spacebar while placing to flip the swing direction before clicking.",
            "Duplicate a family type to create a new size rather than stretching an instance.",
            "Keep type marks consistent — they drive your door and window schedules later.",
            "Deleting the host wall deletes its doors and windows; that is expected behaviour, not a bug.",
          ],
        },
      ],
    },
    {
      heading: "Floors, roofs and ceilings",
      blocks: [
        {
          kind: "p",
          text: "Floors are sketch-based: you draw a closed loop of boundary lines and finish the sketch. An unclosed or overlapping loop is the reason Revit refuses to create the floor, and the error dialogue usually highlights the offending line.",
        },
        {
          kind: "list",
          items: [
            "Use Pick Walls when sketching floors so the boundary updates if walls move.",
            "Build floor layers in the type structure — structure, insulation, screed, finish — so sections cut correctly.",
            "Roof by Footprint suits pitched and flat roofs defined in plan; Roof by Extrusion suits profiles defined in elevation, such as curved or asymmetric forms.",
            "Set the slope through the boundary line's slope-defining property, not by dragging vertices.",
            "Ceilings are placed in ceiling plan views; students frequently model them in the wrong view type and then cannot find them.",
            "Use Shape Editing (Add Point, Add Split Line, Modify Sub Elements) for drainage falls on flat roofs and terraces.",
          ],
        },
      ],
    },
    {
      heading: "Components, families and stairs",
      blocks: [
        {
          kind: "p",
          text: "Components — furniture, sanitaryware, fittings, planting, people — are loadable families placed into the model. Keep them proportionate: an overloaded model of high-detail downloaded families becomes slow, and slow models get abandoned near deadlines.",
        },
        {
          kind: "list",
          items: [
            "Load only the families you will actually show; purge unused ones (Manage → Purge Unused) before submission.",
            "Stairs and railings are their own tools with run, riser and tread rules; check your building regulations' rise and going limits rather than accepting defaults.",
            "For a bespoke element, prefer creating a simple loadable family in the Family Editor over in-place modelling, because it can be reused and scheduled.",
            "In-place families are fine for genuinely one-off geometry but bloat the file if overused.",
          ],
        },
      ],
    },
    {
      heading: "Views: plans, sections, elevations and 3D",
      blocks: [
        {
          kind: "p",
          text: "In Revit, views are how you communicate, and view control is where student drawings usually fall short. Each view has its own scale, detail level (Coarse, Medium, Fine), visual style, view range and visibility settings.",
        },
        { kind: "h3", text: "Plans" },
        {
          kind: "p",
          text: "If elements are missing from a plan, check the View Range before anything else: cut plane, top and bottom offsets determine what is seen and what is cut. Crop the view to the area you want on the sheet and use Annotation Crop to control tag overflow.",
        },
        { kind: "h3", text: "Sections" },
        {
          kind: "p",
          text: "Cut sections where the building is most informative — through stairs, level changes, double-height spaces — not simply through the middle. Set the far clip offset so you show the depth you want. Building sections, wall sections and detail sections are separate section types with their own view templates.",
        },
        { kind: "h3", text: "Elevations" },
        {
          kind: "p",
          text: "Exterior elevations come from the four default elevation markers; interior elevations are placed inside a room and are automatically bounded by it. Control line weights through Object Styles and view templates so elevations read with hierarchy rather than uniform thin lines.",
        },
        { kind: "h3", text: "3D views" },
        {
          kind: "p",
          text: "Duplicate the default 3D view for each purpose and name them — presentation axonometric, section perspective, working view. Use a Section Box to cut the model for a section perspective, and lock your camera views (Save Orientation and Lock View) so a stray orbit does not lose a composed image the night before a crit.",
        },
        {
          kind: "note",
          text: "Use view templates. Applying a template to all plans at once is the difference between a coherent drawing set and thirty individually tweaked views.",
        },
      ],
    },
    {
      heading: "Sheets and title blocks",
      blocks: [
        {
          kind: "steps",
          items: [
            "Create sheets from the View tab, choosing your school's title block family.",
            "Drag views from the Project Browser onto the sheet; set the view scale in the view, not on the sheet.",
            "Align views across sheets using guide grides so plans stack consistently between drawings.",
            "Rename views and set the title-on-sheet so drawing titles read professionally.",
            "Number sheets in a logical series (A-100 plans, A-200 elevations, A-300 sections) and keep the sheet list as a schedule.",
            "Export to PDF at the correct paper size with line weights checked on a test print before the final export.",
          ],
        },
        {
          kind: "p",
          text: "A single view can be placed on only one sheet. If you need the same plan twice, duplicate the view — duplicating as a dependent view keeps geometry linked while allowing separate cropping.",
        },
      ],
    },
    {
      heading: "Schedules",
      blocks: [
        {
          kind: "p",
          text: "Schedules are live tables generated from model data: door schedules, window schedules, room and area schedules, material takeoffs, sheet lists. They are one of the strongest arguments for modelling in BIM, because they cannot drift out of step with the drawings.",
        },
        {
          kind: "list",
          items: [
            "Create with View → Schedules → Schedule/Quantities and choose the category.",
            "Add fields, then use Sorting/Grouping with itemised instances turned off to produce a summarised table.",
            "Schedules are editable: changing a value in the schedule changes the element in the model.",
            "Place rooms properly (with room-bounding walls) before expecting area schedules to be correct.",
            "A schedule with blank rows usually means missing type marks or unplaced rooms, not a software fault.",
          ],
        },
      ],
    },
    {
      heading: "Project organisation and file hygiene",
      blocks: [
        {
          kind: "list",
          items: [
            "Organise the Project Browser with folders by view type or design phase so you can find views quickly.",
            "Adopt a naming convention for views, sheets and families in week one and keep it.",
            "Use worksets only if collaborating; for solo student work they add complexity without benefit.",
            "Keep CAD and image files as links in a single folder alongside the model.",
            "Purge unused families and audit the file periodically to control file size.",
            "Save incrementally with dated version names and keep at least one off-machine backup; corrupted files near submission are common and recoverable only from backups.",
          ],
        },
      ],
    },
    {
      heading: "Common student mistakes",
      blocks: [
        {
          kind: "list",
          items: [
            "Drawing lines in a plan view instead of modelling elements, then wondering why sections are empty.",
            "Modelling in the wrong units or scaling geometry to fit a sheet.",
            "Using unconnected heights instead of level constraints, so nothing updates when a level moves.",
            "Editing a wall type without duplicating it first and changing the whole project.",
            "Ignoring view range, then troubleshooting 'missing' walls for an hour.",
            "Downloading heavy families until the model becomes unusably slow.",
            "Leaving all sheet composition to the final night, when line weights and crops still need work.",
            "No backups.",
          ],
        },
      ],
    },
    {
      heading: "Preparing your final presentation",
      blocks: [
        {
          kind: "steps",
          items: [
            "Decide the drawing set first: which plans, sections, elevations, perspectives and details tell the argument of the scheme.",
            "Apply consistent view templates so line weight, detail level and graphics match across the set.",
            "Add people, planting and context at a sensible level of detail to communicate scale.",
            "Compose sheets with a clear hierarchy — one dominant drawing per sheet, supporting drawings around it.",
            "Export to PDF or image at high resolution and check line weights on a physical test print.",
            "Rehearse the narrative: what problem the scheme answers, how the plan works, and what the section reveals.",
          ],
        },
        {
          kind: "p",
          text: "If a physical model is also required, plan it in parallel — our guide to planning and building an architecture maquette covers scale selection, materials and build sequence.",
        },
      ],
    },
    {
      heading: "Where support helps",
      blocks: [
        {
          kind: "p",
          text: "Students most often need help with model setup, families, complex roofs, controlling views and getting a coherent drawing set onto sheets under time pressure. We provide tutoring and technical guidance for Revit, architecture projects, AutoCAD, 3ds Max and 3D modelling in English, Arabic and French. We teach the workflow and review your model with you; the design and the submitted work remain yours.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is Revit free for students?",
      answer:
        "Autodesk offers educational access to its software for eligible students and educators through its education programme, subject to its own eligibility rules and terms. Check the current terms directly with Autodesk and with your school's IT service; this guide is independent and not affiliated with Autodesk.",
    },
    {
      question: "Should I use Revit or AutoCAD for my studio project?",
      answer:
        "AutoCAD is 2D drafting; Revit is a coordinated 3D model that generates drawings. If your project needs a consistent set of plans, sections, elevations and schedules that update together, Revit usually pays back the setup time. For a single detail drawing, AutoCAD may be faster.",
    },
    {
      question: "Why can't I see my walls in a plan view?",
      answer:
        "In most cases the View Range is wrong: the cut plane or view depth sits above or below the elements. Check View Range first, then the crop region, visibility/graphics overrides and whether the element is on a different level.",
    },
    {
      question: "How do I change a wall's construction without affecting other walls?",
      answer:
        "Select the wall, open Edit Type, click Duplicate to create a new type, and edit the structure of the duplicate. Editing the original type changes every instance of it in the project.",
    },
    {
      question: "How do I stop my Revit file becoming slow?",
      answer:
        "Purge unused families and materials, avoid very high-detail downloaded components, limit in-place families, close unnecessary views, keep imported CAD as links, and audit the file periodically.",
    },
  ],
  related: [
    { label: "Revit Project Help", to: "/revit-project-help" },
    { label: "Architecture Project Help", to: "/architecture-project-help" },
    { label: "AutoCAD Help", to: "/autocad-help" },
    { label: "3ds Max Help", to: "/3d-max-help" },
    { label: "3D Modelling Help", to: "/3d-modelling-help" },
  ],
  sources: [
    { label: "Autodesk Revit official product documentation", url: "https://help.autodesk.com/view/RVT/2024/ENU/" },
    { label: "Autodesk Education access information", url: "https://www.autodesk.com/education/edu-software/overview" },
    { label: "UK BIM Framework — information management standards", url: "https://www.ukbimframework.org/standards-guidance/" },
  ],
};
