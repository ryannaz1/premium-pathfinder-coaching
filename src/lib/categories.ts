import {
  Boxes,
  Code2,
  Cog,
  FileText,
  LineChart,
  Library,
  type LucideIcon,
} from "lucide-react";

export type ServiceCategory = {
  title: string;
  copy: string;
  to: string;
  icon: LucideIcon;
};

/** The six primary conversion entry points on the homepage. */
export const serviceCategories: ServiceCategory[] = [
  {
    title: "Assignments & Coursework",
    copy: "Essays, reports, case studies, presentations and coursework guidance.",
    to: "/assignment-coursework-guidance",
    icon: FileText,
  },
  {
    title: "Dissertations & Theses",
    copy: "Dissertation, thesis, research proposal and literature review coaching.",
    to: "/thesis-dissertation-coaching",
    icon: Library,
  },
  {
    title: "Coding & Programming",
    copy: "Python, Java, C++, MATLAB, R and Arduino project guidance.",
    to: "/engineering-software-support",
    icon: Code2,
  },
  {
    title: "Engineering Projects",
    copy: "Mechanical, civil, electrical, mechatronics and final-year projects.",
    to: "/engineering-project-help",
    icon: Cog,
  },
  {
    title: "Architecture & Design",
    copy: "AutoCAD, Revit, 3D Max, SketchUp, maquettes and design studio work.",
    to: "/architecture-project-help",
    icon: Boxes,
  },
  {
    title: "Data Analysis & Statistics",
    copy: "SPSS, STATA, Excel, R and Python analysis and interpretation.",
    to: "/data-analysis-statistics",
    icon: LineChart,
  },
];
