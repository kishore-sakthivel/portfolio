import rentalImg from "@/assets/project-rental.jpg";
import stockImg from "@/assets/project-stock.jpg";
import bankImg from "@/assets/project-bank.jpg";

export const profile = {
  name: "Kishore S",
  displayName: "Kishore S",
  roles: [
    "Python Developer",
    "AI Enthusiast",
    "Data Analyst",
    "Full Stack Learner",
  ],
  tagline:
    "B.Tech Information Technology graduate turning raw data into decisions — with Python, SQL and Power BI.",
  location: "Pondicherry, India",
  email: "kishoresam969@gmail.com",
  phone: "+91 8778223821",
  github: "https://github.com/kishore-sakthivel",
  linkedin: "https://linkedin.com/in/kishores16",
};

export interface TimelineItem {
  title: string;
  org: string;
  period: string;
  points: string[];
}

export const about: { title: string; body: string }[] = [
  {
    title: "Python, first and always",
    body: "Six months of daily hands-on Python — scripting, data processing, automation and clean, maintainable code that other people can read.",
  },
  {
    title: "AI & Machine Learning",
    body: "Regression models, feature engineering and NLP sentiment analysis built with scikit-learn, pandas and NumPy on real-world datasets.",
  },
  {
    title: "Data Analytics",
    body: "Exploratory analysis, data-quality validation and Power BI dashboards that turn messy tables into something a stakeholder can act on.",
  },
  {
    title: "Problem Solving",
    body: "Structured debugging, module testing and reconciliation checks — I would rather find the root cause than patch the symptom.",
  },
  {
    title: "Continuous Learning",
    body: "Currently expanding into Tableau and Excel VBA automation while completing Data Analyst training at QSpiders, Chennai.",
  },
];

export const skillGroups: {
  category: string;
  skills: { name: string; level: number }[];
}[] = [
  {
    category: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "C", level: 70 },
      { name: "C++", level: 68 },
    ],
  },
  {
    category: "AI & Data",
    skills: [
      { name: "Pandas", level: 88 },
      { name: "NumPy", level: 85 },
      { name: "Scikit-Learn", level: 78 },
      { name: "Machine Learning", level: 75 },
    ],
  },
  {
    category: "Business Intelligence",
    skills: [
      { name: "Power BI", level: 85 },
      { name: "Microsoft Excel", level: 82 },
      { name: "Statistics & Probability", level: 76 },
      { name: "Tableau", level: 55 },
    ],
  },
  {
    category: "Web Basics",
    skills: [
      { name: "HTML", level: 80 },
      { name: "CSS", level: 72 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "SQLite", level: 74 },
      { name: "Schema Design", level: 72 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git & GitHub", level: 78 },
      { name: "VS Code", level: 88 },
      { name: "SAP GUI", level: 60 },
      { name: "PowerPoint / Word", level: 85 },
    ],
  },
];

export interface Project {
  title: string;
  image: string;
  tech: string[];
  description: string;
  problem: string;
  features: string[];
  challenges: string;
  learnings: string;
  github: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "AI-Driven Rental Price Prediction & Visualization",
    image: rentalImg,
    tech: ["Python", "Machine Learning", "SQL", "Power BI", "Pandas"],
    description:
      "A regression model that estimates rental prices from property and location features, paired with an interactive Power BI dashboard.",
    problem:
      "Renters and owners had no reliable reference price for a property, so listings were priced on intuition rather than on market data.",
    features: [
      "Data cleaning and preprocessing on real-world listing data",
      "Feature engineering plus iterative model tuning for accuracy",
      "Normalised SQL schema with optimised retrieval queries",
      "Interactive Power BI dashboards for non-technical stakeholders",
    ],
    challenges:
      "Inconsistent and missing location data skewed early predictions; reconciling sources and validating outliers took more effort than the modelling itself.",
    learnings:
      "Model quality is mostly data quality. Feature engineering and honest validation beat swapping algorithms.",
    github: "https://github.com/kishores16",
  },
  {
    title: "Live Stock Market Prediction & News Analysis",
    image: stockImg,
    tech: ["Python", "NLP", "Scikit-Learn", "Pandas", "NumPy"],
    description:
      "A predictive model combining historical market data with news sentiment analysis to forecast short-term stock trends.",
    problem:
      "Price-only models miss the market reaction to news, so forecasts break exactly when they matter most.",
    features: [
      "Real-time ingestion of structured price data",
      "NLP sentiment scoring over unstructured news articles",
      "Combined feature set feeding the prediction model",
      "Component-level debugging and testing for reliability",
    ],
    challenges:
      "Aligning noisy, irregularly timed news items with regular price intervals without leaking future information into training.",
    learnings:
      "Unstructured data adds real signal — but only with strict time discipline in the pipeline.",
    github: "https://github.com/kishores16",
  },
  {
    title: "Integrated Multi-Bank User Management System",
    image: bankImg,
    tech: ["Python", "SQL", "HTML", "CSS", "Authentication"],
    description:
      "A secure full-stack application managing multiple linked bank accounts with authentication and role-based access control.",
    problem:
      "Users holding accounts across several banks had no single, secure place to track linked accounts and transactions.",
    features: [
      "User authentication with role-based access control",
      "Real-time transaction tracking and account linking",
      "SQL-backed storage with rigorous data validation",
      "Error handling to protect integrity across modules",
    ],
    challenges:
      "Guaranteeing data integrity across modules while several account operations touched shared records.",
    learnings:
      "Validation and error handling belong at every boundary, not just the form.",
    github: "https://github.com/kishores16",
  },
];

export const experience: TimelineItem[] = [
  {
    title: "Data Science Intern",
    org: "QSpiders, Chennai",
    period: "Jan 2026 – Present",
    points: [
      "Exploratory data analysis on structured datasets with Python and SQL to surface trends and anomalies.",
      "Interactive Power BI dashboards visualising KPIs for cross-functional stakeholders.",
      "SQL extraction, joins and reporting with data-quality checks to validate sources.",
      "Applied statistical and ML fundamentals to predictive and scenario analysis.",
    ],
  },
  {
    title: "Python Developer (Training)",
    org: "QSpiders, Chennai",
    period: "2025 – 2026 · 6 months",
    points: [
      "Wrote clean, maintainable Python scripts for data processing, automation and analysis.",
      "Built ML models with pandas, NumPy and scikit-learn on real-time datasets.",
      "Collaborated on requirements, solution design and module debugging.",
      "Practised Git version control and contributed to team documentation.",
    ],
  },
  {
    title: "Technical Paper Presentation",
    org: "NCEIA 2025",
    period: "2025",
    points: [
      "Presented “Mobile-Based Debit Card Blocking System” to a national conference audience.",
    ],
  },
  {
    title: "Clubs & Volunteering",
    org: "Rajiv Gandhi College of Engineering and Technology",
    period: "2022 – 2026",
    points: [
      "Executive Member, Science Club.",
      "Event Coordinator, Mathematics Club.",
      "Volunteer, NSS and Election Booth duty.",
    ],
  },
];

export const education = {
  degree: "B.Tech, Information Technology",
  school: "Rajiv Gandhi College of Engineering and Technology",
  period: "2022 – 2026",
  cgpa: "8.0",
  extra: [
    { label: "Higher Secondary Certificate", value: "69%" },
    { label: "Secondary School Leaving Certificate", value: "72.6%" },
  ],
};

export const certifications = [
  {
    title: "Data Analyst Training (Ongoing)",
    issuer: "QSpiders, Chennai",
    detail: "Python, SQL, Power BI and Excel on real-time datasets.",
  },
  {
    title: "Python Programming",
    issuer: "MSME Technology Centre",
    detail: "Core Python, scripting and problem solving.",
  },
  {
    title: "HTML Certification",
    issuer: "IIT Bombay · Spoken Tutorial",
    detail: "Scored 90%.",
  },
  {
    title: "C and C++ Programming",
    issuer: "Certified Course",
    detail: "Foundations of procedural and object-oriented programming.",
  },
  {
    title: "AI & Emerging Technologies",
    issuer: "Workshops",
    detail: "Applied sessions on AI and emerging technology trends.",
  },
];

export const achievements = [
  { label: "Projects Completed", value: 3, suffix: "" },
  { label: "Technologies Learned", value: 18, suffix: "+" },
  { label: "Certifications", value: 5, suffix: "" },
  { label: "Months of Python", value: 6, suffix: "" },
  { label: "Learning Hours", value: 900, suffix: "+" },
];

export const languages = ["English — Fluent", "Tamil — Fluent", "Hindi — Intermediate"];
