import type { Article } from "./types";

export const maquetteArticle: Article = {
  slug: "architecture-maquette-guide",
  category: "Projects",
  label: "Architecture maquette guide",
  h1: "How to Plan and Build an Architecture Maquette: A Student Guide",
  title: "How to Plan and Build an Architecture Maquette: A Student Guide",
  description:
    "A practical student guide to planning and building an architecture maquette: choosing scale, reading drawings, materials, tools and safety, base preparation, walls, openings, roofs, landscape, finishing and presentation.",
  intro:
    "A maquette is an argument made in three dimensions. It should show what your drawings cannot — mass, rhythm, light, the relationship between building and ground — and it should do so at a level of detail you can finish before the crit. Most model failures are planning failures: the wrong scale, the wrong material, or a build sequence that leaves the fiddly work until the last night. This guide walks through the process in build order.",
  summary:
    "Choosing scale, materials and a build sequence for a physical architectural model you can finish well.",
  readingTime: "12 min read",
  sections: [
    {
      heading: "What an architectural maquette is",
      blocks: [
        {
          kind: "p",
          text: "A maquette (also called a physical model or study model) is a scaled three-dimensional representation of a building, an interior or a site. In studio culture it plays two distinct roles: the working model you build quickly to test an idea, and the presentation model you build carefully to communicate a resolved scheme. Confusing the two is expensive — students often over-finish a study model and then have no time for the one that will be marked.",
        },
      ],
    },
    {
      heading: "Purpose: what a physical model does that drawings don't",
      blocks: [
        {
          kind: "list",
          items: [
            "Shows mass, proportion and the relationship to neighbouring buildings at a glance.",
            "Reveals real shadow and light behaviour when moved under a lamp or daylight.",
            "Exposes junctions and thicknesses that plans allow you to leave unresolved.",
            "Lets a tutor or juror walk around the scheme and ask spatial questions.",
            "Forces decisions: a model cannot be ambiguous about where the ground meets the wall.",
          ],
        },
        {
          kind: "p",
          text: "Decide the model's job before choosing anything else. A massing model of a whole block, a sectional model of one bay, and a detailed interior model are three different objects with different scales, materials and levels of finish.",
        },
      ],
    },
    {
      heading: "Choosing a scale",
      blocks: [
        {
          kind: "p",
          text: "Scale follows purpose and available table space. Check your brief first — many studios specify the scale, and submitting at the wrong one loses marks regardless of craft.",
        },
        {
          kind: "table",
          caption: "Commonly used model scales",
          columns: ["Scale", "Typically used for", "Practical notes"],
          rows: [
            ["1:1000 / 1:500", "Urban context and masterplanning", "Buildings become simple blocks; the ground plane carries the information"],
            ["1:200", "Whole building in its site", "Openings read as recesses, not framed windows"],
            ["1:100", "Whole building, common studio default", "Wall thickness starts to matter; 3 mm board reads as roughly 300 mm"],
            ["1:50", "Part of a building, sectional models", "Floor build-ups, stairs and door thickness become visible"],
            ["1:20 / 1:10", "Detail, junctions, interior fragments", "Layers of construction must be modelled honestly"],
            ["1:5 / 1:1", "Component and material detail", "Usually a fabrication or technology module rather than studio"],
          ],
        },
        {
          kind: "p",
          text: "Convert once and write the numbers down. At 1:100, one metre is 10 mm; at 1:50, one metre is 20 mm. Produce a small conversion table for your key dimensions — floor-to-floor height, wall thickness, door width — and tape it to the workbench. Most cutting errors come from converting in your head mid-cut.",
        },
      ],
    },
    {
      heading: "Reading your drawings before you cut",
      blocks: [
        {
          kind: "steps",
          items: [
            "Print plans, sections and elevations at exactly the model scale — the printed drawing then becomes a template.",
            "Check that plan and section agree on floor levels and heights; models expose contradictions drawings hide.",
            "Decide whether walls are modelled to the outside face, the centreline or the internal face, and keep that convention throughout.",
            "Account for material thickness: four 3 mm walls butted together add 6 mm to the outside dimension unless you plan the joints.",
            "Mark on the printout every piece you need to cut and label each with its location and quantity.",
          ],
        },
        {
          kind: "note",
          text: "Producing a cutting list before touching material is the single strongest predictor of a model that gets finished. It also tells you how much board to buy in one trip.",
        },
      ],
    },
    {
      heading: "Materials",
      blocks: [
        {
          kind: "p",
          text: "Choose material for what it communicates as much as for workability. A monochrome model in one material reads as an architectural proposition; a model in five colours of found material reads as a craft project. Use material change deliberately — for example one material for context and another for your building.",
        },
        {
          kind: "table",
          columns: ["Material", "Good for", "Watch out for"],
          rows: [
            ["Foam board (3–5 mm)", "Fast massing, walls at 1:200–1:100", "Crushed edges; the foam core shows unless edges are treated"],
            ["Mount / museum board", "Clean walls and floors, presentation models", "Warps with wet glue; cut in several passes"],
            ["Grey or white card (1–2 mm)", "Study models, curved surfaces, quick tests", "Too flexible for large unsupported spans"],
            ["Corrugated card", "Bulk site build-up and contour cores", "Rough edges; hide inside, not on show"],
            ["Balsa and basswood", "Structure, frames, timber-expressed schemes", "Grain splits at small sections; pre-drill fine members"],
            ["MDF and plywood (laser cut)", "Robust bases and repeated components", "Needs workshop access, booking and induction"],
            ["Acrylic (clear or frosted)", "Glazing, water, floor plates", "Scratches easily; keep the protective film on until final assembly"],
            ["Modelling foam / XPS", "Carved topography and massing", "Solvent glues and spray paint can dissolve it — test first"],
            ["3D-printed parts", "Complex geometry, repeated components", "Print time and queues; plan days ahead of the deadline"],
          ],
        },
        {
          kind: "p",
          text: "For adhesives: PVA for wood and porous card, a glue gun for speed on hidden joints, cyanoacrylate for small precise fixings, spray adhesive for laminating sheets (in a ventilated area only), and solvent cement for acrylic. Double-sided tape is useful for temporary positioning while you check a layout.",
        },
      ],
    },
    {
      heading: "Tools and safety",
      blocks: [
        {
          kind: "list",
          items: [
            "Scalpel or snap-off knife with a genuinely sharp blade — a blunt blade slips and causes most injuries.",
            "Metal safety ruler, not plastic; keep fingers behind the raised edge.",
            "Self-healing cutting mat, large enough for your biggest piece.",
            "Set square, fine pencil, and a steel rule marked in millimetres.",
            "Sanding block and fine abrasive paper for edges.",
            "Cutting-mat clamps or weights so the workpiece cannot move.",
            "PPE where relevant: eye protection, dust mask for sanding, gloves for solvents.",
          ],
        },
        {
          kind: "p",
          text: "Cut away from your body, in several light passes rather than one heavy one, and change blades often. Use spray adhesives and solvents only in ventilated spaces or a spray booth. Laser cutters, band saws, 3D printers and workshop machinery require your institution's induction and supervision — book both in advance.",
        },
        {
          kind: "note",
          text: "Follow your institution's project brief and its safety instructions and workshop rules at all times. Where anything in this guide conflicts with your school's requirements, your school's requirements apply.",
        },
      ],
    },
    {
      heading: "Preparing the site and base",
      blocks: [
        {
          kind: "p",
          text: "Build the base first. It sets the model's footprint, keeps everything square and gives you something to work on. A base that warps or bows ruins an otherwise good model, so use a rigid material — laser-cut MDF, thick foam board with an internal frame, or a stiff board with battens underneath.",
        },
        {
          kind: "steps",
          items: [
            "Size the base to include enough context to explain the site, with a consistent border margin.",
            "Fix the site plan printout to the base as a setting-out guide, or score the key lines directly.",
            "For sloping sites, build contours by stacking cut layers of card or foam, one layer per contour interval, then either leave the steps expressed or fill and sand to a smooth surface.",
            "Cut openings for basements or sunken courtyards before assembly, not after.",
            "Seal or paint the base before the building goes on it.",
          ],
        },
      ],
    },
    {
      heading: "Walls and structural elements",
      blocks: [
        {
          kind: "list",
          items: [
            "Cut all pieces of one type in a batch so thicknesses and heights are consistent.",
            "Decide the corner joint in advance: butt joints are quick, mitred corners look far cleaner and hide the core material.",
            "Use internal gussets or floor plates as jigs to hold walls square while glue sets.",
            "Apply glue sparingly — excess glue swells card and shows through paint.",
            "Dry-fit the whole storey before gluing anything permanently.",
            "For expressed structure, cut columns and beams from consistent stock and set them out from a marked grid rather than by eye.",
          ],
        },
      ],
    },
    {
      heading: "Openings: windows and doors",
      blocks: [
        {
          kind: "p",
          text: "Cut openings while the wall panel is flat on the mat, before assembly. Cutting a window in an assembled model almost always damages something. Mark the openings from the printed elevation, then cut with the ruler on the piece you are keeping.",
        },
        {
          kind: "list",
          items: [
            "At small scales, a clean void often reads better than an attempted frame.",
            "For glazing, back the opening with clear or frosted acrylic or acetate fixed from inside.",
            "Consistency matters more than realism: identical reveals across the facade read as considered design.",
            "If the scheme depends on depth in the facade, model the reveal — a flush cut loses the shadow that carries your idea.",
          ],
        },
      ],
    },
    {
      heading: "Roofs",
      blocks: [
        {
          kind: "steps",
          items: [
            "Take true roof-plane dimensions from the section, not the plan — a pitched plane is longer than its plan projection.",
            "Cut the pieces slightly oversize and trim to fit after the walls are up.",
            "Mitre the ridge and hip edges for a clean line, or accept a visible edge and make it consistent.",
            "Consider making the roof removable so the interior can be shown — a common request in crits, and impressive when it works cleanly.",
            "For curved or complex roofs, either laminate thin card over formers or use a 3D print, and budget the extra time.",
          ],
        },
      ],
    },
    {
      heading: "Landscape and site elements",
      blocks: [
        {
          kind: "p",
          text: "Landscape should support the building, not compete with it. Restraint is what separates an architectural model from a hobby diorama.",
        },
        {
          kind: "list",
          items: [
            "Keep context buildings abstract and in a single neutral material so your scheme reads as the subject.",
            "Represent trees consistently and at the correct scaled height — one simplified species is usually stronger than several realistic ones.",
            "Hard and soft landscape can be shown by texture and subtle tone change rather than colour.",
            "Water can be acrylic, gloss card or a resin pour, depending on time and scale.",
            "Add one or two scale figures where they help a viewer read size; do not populate the model.",
          ],
        },
      ],
    },
    {
      heading: "Detailing and finishing",
      blocks: [
        {
          kind: "list",
          items: [
            "Sand every visible edge lightly; crisp edges are what makes a model look professional.",
            "Fill foam-board edges with filler or cap them with card strips if the core shows.",
            "Prime before painting card or foam, and use light coats from a distance to avoid warping.",
            "Test any spray paint on an offcut first — some solvents dissolve polystyrene foam entirely.",
            "Clean glue residue and pencil marks before the final assembly, not after.",
            "Match the level of detail across the whole model; one hyper-detailed corner makes the rest look unfinished.",
          ],
        },
      ],
    },
    {
      heading: "Presentation",
      blocks: [
        {
          kind: "steps",
          items: [
            "Label the model discreetly with your name, project title, scale and a north point.",
            "Photograph it before transport, on a plain background with raking light to bring out shadow and depth.",
            "Shoot at eye level relative to the model for images that read architecturally, plus one aerial for the site relationship.",
            "Plan transport: a rigid box, a carrying base and a repair kit of spare card, blade and glue.",
            "Know how you will talk about it — what the model shows that the drawings do not.",
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
            "Building at a scale the brief did not ask for.",
            "Ignoring material thickness, so the model ends up several hundred scaled millimetres oversize.",
            "A flexible base that bows and cracks the joints.",
            "Wet glue on thin card causing warping.",
            "Mixed materials and colours that read as decoration instead of architecture.",
            "Uneven detail: a finely detailed entrance on an otherwise rough model.",
            "Cutting openings after assembly.",
            "Leaving spray painting or a 3D print until the final night, when the booth is busy or the queue is full.",
            "No cutting list, so the material runs out mid-build.",
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
            "Brief re-read: required scale, size limits, materials permitted, submission format.",
            "Model purpose defined — massing, sectional, detail or presentation.",
            "Scale chosen and a conversion table written out.",
            "Drawings printed at model scale as templates.",
            "Cutting list and material quantities prepared.",
            "Materials, blades and adhesives bought in one trip.",
            "Workshop induction completed and machine time booked.",
            "Build sequence agreed: base, contours, floors, walls, openings, roof, landscape, finishing.",
            "Two spare days reserved for finishing and repairs.",
            "Transport box and photography plan ready before the crit.",
          ],
        },
      ],
    },
    {
      heading: "Where support helps",
      blocks: [
        {
          kind: "p",
          text: "Students most often ask for help with scale decisions, material choice for a specific scheme, and sequencing the build so it can be finished on time. We provide coaching and technical guidance for architecture maquettes and physical models, architecture projects, 3D modelling and design coursework, in English, Arabic and French. We help you plan and understand the work; you build and submit your own model.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What scale should my architecture model be?",
      answer:
        "Check the brief first, because many studios specify it. Otherwise, 1:500 or 1:200 suits site and massing, 1:100 is a common whole-building default, 1:50 suits sectional models, and 1:20 or finer suits detail fragments.",
    },
    {
      question: "What material is best for an architecture maquette?",
      answer:
        "There is no single best material. Foam board and card are fast and forgiving for study models, mount board and timber give a cleaner presentation finish, acrylic reads as glazing, and laser-cut MDF makes a rigid base. Choose for the scale, the message and the time you have.",
    },
    {
      question: "How do I stop card warping when I glue it?",
      answer:
        "Use adhesive sparingly, prefer spray adhesive or double-sided tape for laminating large surfaces, and press pieces flat under weights while they dry. Heavy wet PVA on thin card is the usual cause.",
    },
    {
      question: "How long does a student architecture model take to build?",
      answer:
        "It depends entirely on scale and detail, but the reliable planning rule is to reserve at least two full days at the end for finishing, repairs and photography — those stages are always underestimated.",
    },
    {
      question: "Can I 3D print or laser cut parts of my model?",
      answer:
        "Usually yes, if your brief allows it and you have completed your school's workshop induction. Book machine time early; queues near submission deadlines are the main reason printed parts arrive too late to use.",
    },
  ],
  related: [
    { label: "Architecture Maquette Help", to: "/architecture-maquette-help" },
    { label: "Architecture Project Help", to: "/architecture-project-help" },
    { label: "3D Modelling Help", to: "/3d-modelling-help" },
    { label: "Design Academic Support", to: "/design-academic-support" },
  ],
  sources: [
    { label: "UK Health and Safety Executive — safe use of workshop equipment", url: "https://www.hse.gov.uk/woodworking/index.htm" },
    { label: "RIBA — architectural models and representation resources", url: "https://www.architecture.com/knowledge-and-resources" },
  ],
};
