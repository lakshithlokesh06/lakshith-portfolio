import { educationEntries } from "@/data/education";

export const resumeProfile =
  "BCA graduate specializing in Data Analytics, currently pursuing an MSc in Data Science at Chanakya University. Builds practical data-driven applications across machine learning, analytics, and full-stack development, turning data and models into usable products.";

// Dates are confirmed by the existing PDF. PUC details are supplied in the resume brief.
export const resumeEducation = [
  { ...educationEntries[0], period: "2026–2028" },
  { ...educationEntries[1], period: "2023–2026" },
  {
    degree: "Pre-University Course (PUC)",
    detail: "CSBA",
    institution: "St. Joseph's Pre-University College",
    period: "2021–2023",
    status: "Completed",
  },
];
