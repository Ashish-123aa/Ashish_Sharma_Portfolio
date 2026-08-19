import type { ResumeData } from "@/types";

// All content below is sourced directly from Ashish Sharma's resume
// (SDE_Ashish_Sharma.pdf). Nothing here is invented — if it's not in
// the resume, it isn't on the site.
export const resume: ResumeData = {
  name: "Ashish Sharma",
  title: "Software Development Engineer",
  tagline: "Full-Stack Web Developer",
  location: "Gurugram, Haryana, India",
  email: "ashish.vasishtha8937@gmail.com",
  phone: "+91 9729117115",
  linkedin: "https://www.linkedin.com/in/ashish-sharma-45b524358",
  github: "https://github.com/Ashish-123aa",
  resumeFile: "/Ashish_Sharma_Resume.pdf",

  summaryIntro:
    "I build full-stack web applications end to end — from REST APIs and database schemas to the interfaces on top of them.",
  summaryPoints: [
    "Hands-on across the MERN stack alongside Java, PostgreSQL and Prisma ORM, with three software development internships behind that experience.",
    "Comfortable owning a feature from data model to deployment: RESTful APIs, JWT-based authentication and role-based access control show up in nearly everything I build.",
    "Grounded in Data Structures & Algorithms, OOP, DBMS, Operating Systems and Computer Networks — currently completing a B.Tech in Computer Science Engineering at VIT Vellore.",
  ],

  stats: [
    { label: "Internships", value: "3" },
    { label: "Full-Stack Projects", value: "2" },
    { label: "Certifications", value: "3" },
    { label: "Technologies", value: "20+" },
  ],

  experience: [
    {
      role: "Software Development Engineer Intern",
      company: "Bosch Limited",
      location: "Bengaluru, Karnataka",
      dates: "June 2025 – July 2025",
      bullets: [
        "Built a Power BI dashboard with automated pipelines from Microsoft Forms and Excel, reducing manual data entry by 60%.",
        "Created ETL workflows to clean and standardize data, improving accuracy by 35%.",
        "Added DAX-based dynamic reports, cutting report generation time by 50%.",
      ],
      tech: ["Power BI", "ETL", "DAX", "Excel", "Microsoft Forms"],
    },
    {
      role: "Software Development Engineer Intern",
      company: "Grey Swift Private Limited",
      location: "Gurugram, Haryana",
      dates: "May 2025 – June 2025",
      bullets: [
        "Developed a full-stack project management dashboard enabling real-time project tracking, task management and team collaboration.",
        "Implemented REST APIs and optimized React state management using React Hooks to deliver a responsive, scalable user experience.",
        "Designed a modular React component architecture to improve code reusability, scalability and long-term maintainability.",
      ],
      tech: ["React.js", "Node.js", "MongoDB", "REST APIs", "React Hooks"],
    },
    {
      role: "Software Development Engineer Intern",
      company: "Cyber Phoenix",
      location: "Gujarat, India",
      dates: "August 2024 – February 2025",
      bullets: [
        "Engineered a full-stack business insights web application using modern JavaScript technologies and RESTful APIs to support data-driven decision-making.",
        "Implemented secure authentication and interactive data visualization modules to improve application security and business analytics.",
        "Integrated RESTful APIs to enable seamless frontend-backend communication and improve application scalability and performance.",
      ],
      tech: ["JavaScript", "RESTful APIs", "Authentication", "Data Visualization"],
    },
  ],

  projects: [
    {
      name: "Online Job Portal",
      description:
        "A full-stack job portal where job seekers can search and apply for roles while recruiters manage postings — built on secure, role-aware access from the ground up.",
      features: [
        "JWT-based authentication with role-based access control for seekers and recruiters",
        "RESTful APIs powering job search, applications and posting management",
        "Responsive React interfaces styled with Tailwind CSS",
        "MongoDB data layer for users, job postings and applications",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
      liveUrl:
        "https://careerconnect---prod-lzrphdjpoajqcylwhpsg7.ashish-careerconnect.workers.dev",
    },
    {
      name: "Digital Banking Application",
      description:
        "A full-stack digital banking platform covering the core modules a real banking product needs — accounts, transfers, loans and cards — with security built in at every layer.",
      features: [
        "Account management, fund transfers and transaction history",
        "Loan management and card services via RESTful APIs",
        "Prisma ORM data layer over PostgreSQL",
        "JWT authentication, CORS and input validation for a secure, scalable architecture",
      ],
      tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "JWT"],
      githubUrl: "https://github.com/Ashish-123aa/Banking-Application",
    },
  ],

  education: [
    {
      degree: "B.Tech, Computer Science Engineering",
      institution: "Vellore Institute of Technology",
      location: "Vellore, Tamil Nadu",
      date: "2026",
      detail: "CGPA 8.41",
      isPrimary: true,
    },
    {
      degree: "XII (CBSE)",
      institution: "Dronacharya Heritage School",
      location: "Jhajjar, Haryana",
      date: "2021",
      detail: "87.2%",
    },
    {
      degree: "X (CBSE)",
      institution: "RC MEM SR SEC School",
      location: "Jhajjar, Haryana",
      date: "2019",
      detail: "92%",
    },
  ],

  certifications: [
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "2026",
    },
    {
      name: "MERN Full Stack Certification Program",
      issuer: "Ethnus",
      date: "2025",
    },
    {
      name: "Master DSA using JAVA",
      issuer: "Coding Blocks",
      date: "2025",
    },
  ],

  skills: [
    {
      label: "Languages",
      items: ["Java", "C/C++", "JavaScript", "TypeScript", "SQL"],
    },
    {
      label: "Frontend",
      items: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      label: "Backend",
      items: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"],
    },
    {
      label: "Databases",
      items: ["MongoDB", "PostgreSQL", "Prisma ORM", "MySQL"],
    },
    {
      label: "Cloud & DevOps",
      items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Cloud Computing Fundamentals"],
    },
    {
      label: "Tools & Platforms",
      items: ["Git", "GitHub", "Postman", "VS Code", "Power BI"],
    },
    {
      label: "Core Concepts",
      items: [
        "Data Structures & Algorithms",
        "OOP",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
        "Agile Methodology",
      ],
    },
    {
      label: "Cybersecurity",
      items: [
        "Cybersecurity Fundamentals",
        "Network Security",
        "Information Privacy",
        "Threat Detection",
        "Secure Authentication",
      ],
    },
    {
      label: "Soft Skills",
      items: [
        "Problem Solving",
        "Analytical Thinking",
        "Team Collaboration",
        "Communication",
        "Adaptability",
        "Time Management",
      ],
    },
  ],
};
