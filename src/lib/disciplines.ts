export const helpAreas = [
  "University assignments",
  "Coursework",
  "Reports",
  "Research projects",
  "Senior projects",
  "Final-year projects",
  "Capstone projects",
  "Bachelor's projects",
  "Master's theses",
  "Master's dissertations",
  "PhD research",
  "Research proposals",
  "Literature reviews",
  "Research methodology",
  "Data analysis",
  "Presentations",
  "Academic writing",
  "Referencing",
  "Exam preparation",
  "Technical university projects",
  "Practical projects",
  "Design projects",
  "Engineering projects",
];

export type MajorCategory = { name: string; subjects: string[] };

export const majorCategories: MajorCategory[] = [
  {
    name: "Engineering",
    subjects: [
      "Civil Engineering",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Electronics Engineering",
      "Computer Engineering",
      "Chemical Engineering",
      "Environmental Engineering",
      "Biomedical Engineering",
      "Mechatronics",
      "Telecommunications",
      "Industrial Engineering",
    ],
  },
  {
    name: "Medicine & Health",
    subjects: [
      "Medicine",
      "Nursing",
      "Pharmacy",
      "Dentistry",
      "Public Health",
      "Biomedical Sciences",
      "Health Sciences",
      "Nutrition",
      "Healthcare Management",
    ],
  },
  {
    name: "Business & Management",
    subjects: [
      "Business Administration",
      "Management",
      "Finance",
      "Accounting",
      "Economics",
      "Marketing",
      "Entrepreneurship",
      "International Business",
      "Human Resources",
      "Supply Chain & Logistics",
      "Project Management",
      "Hospitality & Tourism",
    ],
  },
  {
    name: "Computer Science & Technology",
    subjects: [
      "Computer Science",
      "Information Technology",
      "Information Systems",
      "Software Engineering",
      "Data Science",
      "Artificial Intelligence",
      "Cybersecurity",
      "Databases",
      "Networking",
      "Programming",
      "Web Development",
      "Systems Analysis",
    ],
  },
  {
    name: "Architecture & Design",
    subjects: [
      "Architecture",
      "Interior Architecture",
      "Interior Design",
      "Urban Planning",
      "Landscape Architecture",
      "Product Design",
      "Industrial Design",
      "Graphic Design",
      "3D Design",
    ],
  },
  {
    name: "Arts & Humanities",
    subjects: [
      "Fine Arts",
      "Graphic Arts",
      "History",
      "Philosophy",
      "Languages",
      "Literature",
      "Cultural Studies",
      "Media",
      "Communications",
      "Journalism",
      "Film",
    ],
  },
  {
    name: "Social Sciences",
    subjects: [
      "Psychology",
      "Sociology",
      "Political Science",
      "International Relations",
      "Education",
      "Anthropology",
      "Social Work",
      "Criminology",
    ],
  },
  {
    name: "Law",
    subjects: ["Law", "Legal research", "Legal writing", "Case analysis"],
  },
  {
    name: "Science",
    subjects: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Statistics",
      "Environmental Science",
      "Research sciences",
    ],
  },
];

export const technicalAreas = [
  "GIS",
  "Revit",
  "AutoCAD",
  "3ds Max",
  "Arduino",
  "SPSS",
  "Photoshop",
  "3D modelling",
  "CAD",
  "Technical drawings",
  "Architectural drawings",
  "Engineering modelling",
  "Statistical analysis",
  "Data analysis",
  "Digital design",
  "Programming",
  "Project presentations",
];

export const softwareGrid = [
  {
    name: "GIS",
    copy: "Guidance on spatial data, mapping workflows, layers and analysis for geography, urban planning and environmental coursework.",
  },
  {
    name: "Revit",
    copy: "Tutoring on BIM modelling, families, sheets and documentation for architecture and construction studio projects.",
  },
  {
    name: "AutoCAD",
    copy: "Support with technical and architectural drawings, layouts, dimensioning and drafting standards.",
  },
  {
    name: "3ds Max",
    copy: "Guidance on 3D modelling, materials, lighting and rendering for design and visualisation submissions.",
  },
  {
    name: "Arduino",
    copy: "Coaching on circuits, sensors, wiring logic and code structure for prototypes and engineering projects.",
  },
  {
    name: "SPSS",
    copy: "Help choosing the right tests, running analyses and interpreting output for theses and research reports.",
  },
  {
    name: "Photoshop",
    copy: "Guidance on presentation boards, diagrams, post-production and portfolio layouts for design students.",
  },
];

export const practicalProjects = [
  "Building maquettes",
  "Architectural models",
  "Physical project models",
  "Engineering prototypes",
  "Arduino projects",
  "3D modelling",
  "Technical project boards",
  "Design presentations",
  "Architecture presentations",
  "Project portfolios",
];

export const academicLevels = [
  {
    name: "Undergraduate",
    copy: "Assignments, coursework, exams, projects and final-year work.",
  },
  {
    name: "Master's",
    copy: "Research, thesis and dissertation coaching, methodology and academic writing.",
  },
  {
    name: "PhD",
    copy: "Research planning, methodology, literature reviews, academic writing and research guidance.",
  },
  {
    name: "International students",
    copy: "Academic English, adapting to different academic systems, referencing, research expectations and one-to-one support.",
  },
];
