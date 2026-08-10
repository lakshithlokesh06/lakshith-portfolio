import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "ai-smart-travel-planner",
    title: "AI Smart Travel Planner",
    description:
      "Full-stack intelligent travel planning platform that generates personalized itineraries through a multi-agent workflow, with authentication, saved trips, live-data provider integrations, PDF export, and shareable itineraries.",
    shortDescription:
      "A full-stack travel planning application designed to generate personalized trip itineraries through a multi-agent workflow.",
    category: "Full-Stack AI Application",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "LangGraph",
      "LangChain",
      "OpenAI",
      "Tailwind CSS",
    ],
    featured: true,
    flagship: true,
    overview:
      "A full-stack travel planning application designed to generate personalized trip itineraries through a multi-agent workflow.",
    problem:
      "Trip planning usually requires users to search across multiple sources for destinations, accommodations, activities, weather, restaurants, transport, budgets, and packing requirements.",
    solution:
      "A unified application that collects trip preferences and coordinates specialized planning agents to create a structured itinerary.",
    features: [
      "Multi-step trip planning flow",
      "LangGraph-based multi-agent workflow",
      "Flight, hotel, activity, weather, restaurant, transport, budget, packing, and itinerary agents",
      "FastAPI backend",
      "Next.js frontend",
      "PostgreSQL persistence",
      "JWT authentication",
      "Saved trips",
      "Shareable itineraries",
      "PDF export",
      "Optional live-data provider integrations",
      "Fallback itinerary generation when AI/live integrations are disabled",
    ],
    architecture: [
      "Next.js frontend",
      "FastAPI API",
      "Trip service / agent workflow",
      "LangGraph agents",
      "PostgreSQL + optional external APIs",
    ],
    challenges: [
      "Keeping a multi-step planning flow understandable while coordinating several specialized agents.",
      "Designing fallback behavior so itinerary generation remains usable when optional AI or live-data integrations are disabled.",
    ],
    learnings: [
      "Clear orchestration boundaries make agent workflows easier to test, debug, and extend.",
      "Travel planning benefits from structured outputs that users can save, share, and export.",
    ],
    githubUrl: "https://github.com/lakshithlokesh06/AI-Smart-Travel-Planner",
    image: "/projects/ai-smart-travel-planner-results.png",
    imageAlt: "AI Smart Travel Planner generated itinerary results dashboard",
    screenshots: [
      "/projects/ai-smart-travel-planner-results.png",
      "/projects/ai-smart-travel-planner-planner.png",
    ],
    screenshotAlts: [
      "AI Smart Travel Planner generated itinerary dashboard showing trip summary, flights, hotels, budget and weather",
      "AI Smart Travel Planner trip planning form for entering travel details and preferences",
    ],
    screenshotCaptions: [
      "Generated itinerary dashboard",
      "Trip planning workflow",
    ],
    status: "Featured / Flagship",
  },
  {
    slug: "autoinsight-intelligent-dataset-analyzer",
    title: "AutoInsight - Intelligent Dataset Analyzer",
    description:
      "Data analysis application that automates dataset profiling, exploratory analysis, visualization, data-quality assessment, machine-learning recommendations, and professional report generation for uploaded CSV datasets.",
    shortDescription:
      "A Streamlit-based intelligent exploratory data analysis application for uploaded CSV datasets.",
    category: "Data Analysis Application",
    techStack: [
      "Python",
      "Streamlit",
      "Pandas",
      "Plotly",
      "Scikit-learn",
      "ReportLab",
    ],
    featured: true,
    overview:
      "A Streamlit-based intelligent exploratory data analysis application for uploaded CSV datasets.",
    problem:
      "Initial dataset exploration often requires repetitive manual work such as profiling columns, checking missing values, understanding distributions, detecting outliers, reviewing correlations, and deciding whether a dataset is ready for machine learning.",
    solution:
      "A guided analytics application that performs these steps automatically and organizes them into a structured analysis workflow.",
    features: [
      "CSV upload",
      "Dataset preview",
      "Automatic data-type detection",
      "Missing-value analysis",
      "Duplicate detection",
      "Descriptive statistics",
      "Interactive Plotly visualizations",
      "Correlation analysis",
      "Outlier detection",
      "Data-quality scoring",
      "ML-readiness assessment",
      "Target suggestions",
      "ML algorithm recommendations",
      "Business/data insights",
      "PDF report generation",
    ],
    architecture: [
      "CSV upload",
      "Profiling workflow",
      "EDA and visualization modules",
      "ML-readiness checks",
      "PDF report generation",
    ],
    challenges: [
      "Organizing many exploratory checks into a workflow that remains readable for different CSV datasets.",
      "Presenting automated recommendations without overstating what the data can support.",
    ],
    learnings: [
      "Automated EDA is most useful when results are structured, inspectable, and paired with clear caveats.",
      "Report generation benefits from concise summaries instead of raw chart dumps.",
    ],
    githubUrl:
      "https://github.com/lakshithlokesh06/AutoInsight-Intelligent-Dataset-Analyzer",
    liveUrl: "https://autoinsight-analytics.streamlit.app/",
    image: "/projects/autoinsight-dashboard.png",
    imageAlt: "AutoInsight intelligent dataset analyzer dashboard",
    screenshots: ["/projects/autoinsight-dashboard.png"],
    screenshotAlts: ["AutoInsight intelligent dataset analyzer dashboard"],
    screenshotCaptions: ["Dataset analyzer dashboard"],
    status: "Featured",
  },
  {
    slug: "job-market-analytics-portal",
    title: "Job Market Analytics Portal",
    description:
      "Full-stack analytics platform for exploring job-market data, searching and filtering job listings, analyzing in-demand skills, and identifying skill gaps through interactive analytics.",
    shortDescription:
      "A Flask and PostgreSQL application for exploring job listings and understanding job-market skill demand.",
    category: "Analytics Platform",
    techStack: [
      "Python",
      "Flask",
      "PostgreSQL",
      "SQLAlchemy",
      "Bootstrap",
      "Data Analytics",
    ],
    overview:
      "A Flask and PostgreSQL application for exploring job listings and understanding job-market skill demand.",
    problem:
      "Job seekers often view individual job listings without a clear picture of which skills appear most frequently or how their own skills compare with market requirements.",
    solution:
      "A searchable analytics portal that combines job exploration with skill-demand analysis.",
    features: [
      "Job explorer",
      "Search and filtering",
      "PostgreSQL-backed job database",
      "Analytics dashboard",
      "Skill frequency analysis",
      "Skill analyzer",
      "Candidate skill matching",
      "Missing-skill identification",
      "Data visualizations",
    ],
    architecture: [
      "Flask web application",
      "SQLAlchemy data layer",
      "PostgreSQL job database",
      "Analytics and skill analysis views",
      "Interactive filtering interface",
    ],
    challenges: [
      "Making job listing exploration and aggregate skill analysis feel connected in one workflow.",
      "Keeping filters and analytics readable when users move between search and dashboard views.",
    ],
    learnings: [
      "Skill demand analysis is stronger when paired with searchable source listings.",
      "A relational schema helps keep job metadata and skill signals organized for analytics.",
    ],
    githubUrl:
      "https://github.com/lakshithlokesh06/job-market-analytics-portal",
    image: "/projects/job-market-analytics-overview.png",
    imageAlt: "Job Market Analytics Portal analytics overview dashboard",
    screenshots: [
      "/projects/job-market-analytics-overview.png",
      "/projects/job-market-analytics-insights.png",
    ],
    screenshotAlts: [
      "Job Market Analytics Portal dashboard showing job market KPIs, demanded skills and salary analytics",
      "Job Market Analytics Portal showing job listings, location analytics and skill trends",
    ],
    screenshotCaptions: [
      "Analytics overview",
      "Job listings and skill insights",
    ],
    status: "Completed",
  },
  {
    slug: "career-recommendation-system",
    title: "Career Recommendation System",
    description:
      "Machine-learning application that recommends suitable career paths based on user skills and interests, with explainable recommendations and generated career guidance.",
    shortDescription:
      "A machine-learning web application that recommends potential career paths based on a user's skills and interests.",
    category: "Machine Learning Application",
    techStack: ["Python", "Scikit-learn", "Streamlit", "SHAP", "Groq"],
    overview:
      "A machine-learning web application that recommends potential career paths based on a user's skills and interests.",
    features: [
      "Skill input",
      "Career prediction",
      "Scikit-learn model",
      "Explainable recommendation layer",
      "SHAP-based explanation",
      "Generated career guidance",
      "Streamlit interface",
    ],
    challenges: [
      "Designing recommendations that remain explainable instead of feeling like a black-box prediction.",
      "Balancing generated guidance with model-driven career suggestions.",
    ],
    learnings: [
      "Recommendation tools need clear explanations so users understand why a suggestion appears.",
      "Simple interfaces can make machine-learning outputs easier to explore.",
    ],
    githubUrl:
      "https://github.com/lakshithlokesh06/career-recommendation-system",
    liveUrl: "https://ai-career-recommendation-system.streamlit.app/",
    image: "/projects/career-recommendation-system.png",
    imageAlt: "Career Recommendation System web application interface",
    screenshots: ["/projects/career-recommendation-system.png"],
    screenshotAlts: ["Career Recommendation System web application interface"],
    screenshotCaptions: ["Career recommendation interface"],
    status: "Completed",
  },
  {
    slug: "commerce-data-insights-dashboard",
    title: "Commerce Data Insights Dashboard",
    description:
      "Interactive e-commerce analytics dashboard for exploring business KPIs, sales trends, product performance, and demand forecasting from commerce datasets.",
    shortDescription:
      "An interactive analytics application for exploring e-commerce performance and generating forecasting insights.",
    category: "Analytics Dashboard",
    techStack: [
      "Python",
      "Streamlit",
      "SQLite",
      "Pandas",
      "Plotly",
      "Scikit-learn",
    ],
    overview:
      "An interactive analytics application for exploring e-commerce performance and generating forecasting insights.",
    features: [
      "CSV data processing",
      "SQLite storage",
      "KPI dashboard",
      "Product performance analysis",
      "Sales trends",
      "Interactive Plotly charts",
      "Demand forecasting",
      "Multiple machine-learning models",
    ],
    challenges: [
      "Presenting commerce KPIs, trends, and forecasts without crowding the dashboard.",
      "Structuring imported CSV data so analytics views can stay responsive and understandable.",
    ],
    learnings: [
      "Dashboard value improves when exploratory views and forecast outputs are separated clearly.",
      "Local storage can keep analysis workflows simple for compact data applications.",
    ],
    githubUrl:
      "https://github.com/lakshithlokesh06/ecommerce-analytics-dashboard",
    liveUrl: "https://commerce-data-insights.streamlit.app/",
    image: "/projects/Commerce Data Insights Dashboard.png",
    imageAlt: "Commerce Data Insights Dashboard analytics interface",
    screenshots: ["/projects/Commerce Data Insights Dashboard.png"],
    screenshotAlts: ["Commerce Data Insights Dashboard analytics interface"],
    screenshotCaptions: ["Commerce analytics interface"],
    status: "Completed",
  },
  {
    slug: "student-score-predictor",
    title: "Student Score Predictor",
    description:
      "Machine-learning application that predicts academic performance using multiple regression models and provides explainable insights and recommendations.",
    shortDescription:
      "A machine-learning application for predicting academic performance and explaining model predictions.",
    category: "Predictive ML Application",
    techStack: ["Python", "Pandas", "Scikit-learn", "Streamlit", "SHAP"],
    overview:
      "A machine-learning application for predicting academic performance and explaining model predictions.",
    features: [
      "Student input form",
      "Regression-based prediction",
      "Multiple ML models",
      "Grade/performance interpretation",
      "SHAP explanations",
      "Recommendations",
      "Streamlit interface",
    ],
    challenges: [
      "Making model predictions understandable through interpretation rather than only showing a score.",
      "Keeping the input flow concise while still collecting enough information for prediction.",
    ],
    learnings: [
      "Explainability helps educational prediction tools feel more useful and responsible.",
      "Regression outputs need clear framing so users understand them as estimates.",
    ],
    githubUrl: "https://github.com/lakshithlokesh06/student-score-predictor",
    liveUrl: "https://academic-score-ai.streamlit.app/",
    screenshots: [],
    status: "Completed",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
