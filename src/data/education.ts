export type EducationEntryProps = {
  degree: string;
  detail?: string;
  institution: string;
  location: string;
  status: string;
};

export const educationEntries: EducationEntryProps[] = [
  {
    degree: "Master of Science (MSc) in Data Science",
    institution: "Chanakya University",
    location: "Bengaluru",
    status: "Current",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    detail: "Specialization in Data Analytics",
    institution: "Jain (Deemed-to-be University)",
    location: "Bengaluru",
    status: "Completed",
  },
];
