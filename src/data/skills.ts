type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
  concepts?: string[];
  methods?: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    description:
      "Core languages used across analysis, systems, and application work.",
    skills: ["Python", "SQL", "Java", "C++"],
    concepts: [
      "Object-Oriented Programming",
      "Data Structures",
      "Algorithms",
    ],
  },
  {
    title: "Data Science & Machine Learning",
    description:
      "Practical tooling for exploration, modeling, interpretation, and preprocessing.",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "SHAP"],
    methods: [
      "Predictive Modeling",
      "Exploratory Data Analysis",
      "Data Preprocessing",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    title: "Data Engineering & Analytics",
    description: "Databases, distributed processing, and analytical workflows.",
    skills: ["Apache Spark", "PySpark", "PostgreSQL", "SQLite"],
    methods: ["Data Visualization", "Statistical Analysis"],
  },
  {
    title: "Web & Application Development",
    description:
      "Frameworks for building modern interfaces, APIs, and data apps.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Flask",
      "Streamlit",
      "Tailwind CSS",
    ],
  },
  {
    title: "AI & LLM Tools",
    description:
      "Tools for building and experimenting with intelligent application workflows.",
    skills: ["LangChain", "LangGraph", "OpenAI API", "Groq", "Ollama"],
  },
  {
    title: "Tools & Platforms",
    description: "Development, notebook, hosting, and deployment environments.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Supabase",
      "Render",
      "Vercel",
      "Streamlit Community Cloud",
    ],
  },
];
