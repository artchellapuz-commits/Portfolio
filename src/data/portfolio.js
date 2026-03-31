export const skills = [
  { name: "Java", level: 85, levelLabel: "Advanced", category: "Backend" },
  { name: "Python (Django)", level: 90, levelLabel: "Expert", category: "Backend" },
  { name: "PHP (Laravel)", level: 80, levelLabel: "Intermediate", category: "Backend" },
  { name: "PostgreSQL", level: 85, levelLabel: "Advanced", category: "Backend" },
  { name: "MySQL", level: 90, levelLabel: "Expert", category: "Backend" },
  { name: "SQLite", level: 85, levelLabel: "Advanced", category: "Backend" },
  { name: "Vue.js", level: 85, levelLabel: "Advanced", category: "Frontend" },
  { name: "PrimeVue", level: 80, levelLabel: "Intermediate", category: "Frontend" },
  { name: "React.js", level: 85, levelLabel: "Advanced", category: "Frontend" },
  { name: "HTML", level: 95, levelLabel: "Expert", category: "Frontend" },
  { name: "CSS", level: 90, levelLabel: "Expert", category: "Frontend" },
  { name: "JavaScript", level: 90, levelLabel: "Expert", category: "Frontend" }
];

export const softSkills = [
  "Decision Making",
  "Multi-tasking",
  "Creativity",
  "Resourcefulness",
  "Attention to Detail",
  "Communication Skills",
  "Time Management",
  "Analytical Thinking",
  "Problem Solving",
  "Collaboration",
  "Adaptability",
  "Vibe Coding"
];

export const services = [
  {
    id: 1,
    title: "Database Design & Optimization",
    description: "Expertise in schema design, normalization, and performance tuning for MySQL, PostgreSQL, and SQLite.",
    icon: "Database"
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    description: "Building scalable and responsive web applications using Python/Django, PHP/Laravel, and Vue.js/React.",
    icon: "Globe"
  },
  {
    id: 3,
    title: "System Analysis & Design",
    description: "Translating business requirements into technical specifications and architectural designs.",
    icon: "Layout"
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Information Technology",
    specialization: "Major in Database Systems",
    school: "Mindanao State University at Naawan",
    year: "2022 - Present",
    description: "Relevant Coursework: Database Systems, Web Development, Data Structures and Algorithms, System Analysis and Design Basic Networking."
  }
];

export const certifications = [
  {
    id: 1,
    title: "11th TOPCIT Philippines [GLOBAL]",
    issuer: "Mindanao State University at Naawan",
    description: "Successfully participated in the Test of Practical Competency in IT (TOPCIT), evaluating practical IT competencies in software development and database management."
  },
  {
    id: 2,
    title: "12th TOPCIT Philippines [GLOBAL]",
    issuer: "Mindanao State University at Naawan",
    description: "Demonstrated advanced IT practical skills in the 12th TOPCIT examination, focusing on real-world problem solving and technical proficiency."
  }
];

export const projects = [
  {
    id: 1,
    title: "Pupil Portal: Pupil Information System",
    description: "A comprehensive landing page and pupil management system for streamlined enrollment, student records, and academic tracking.",
    technologies: ["Python", "Django", "Vue.js", "PrimeVue", "Inertia", "Tailwind CSS"],
    images: [
      { src: "/1.0.png" },
      { src: "/1.1.png" },
      { src: "/1.2.png" },
      { src: "/1.3.png" },
      { src: "/1.4.png" }
    ],
    imageSections: [
      { label: "Landing Page", images: [0, 1, 2, 3] },
      { label: "Login Page", images: [4] }
    ],
    category: "Full Stack",
    label: "Landing Page",
    github: "#",
    demo: "#",
    caseStudy: "Developed a comprehensive student information portal featuring an interactive landing page with enrollment pathway selection, real-time school events & announcements, complete student management system with automated grade calculation, attendance tracking, and role-based access control for students, teachers, and administrators."
  },
  {
    id: 2,
    title: "InternLog: OJT Hours Tracker",
    description: "A tracking application for monitoring On-the-Job Training hours for students.",
    technologies: ["HTML", "CSS", "JavaScript"],
    images: ["/2nd.png", "/1st.png", "/3rd.png", "/4th.png"],
    category: "Frontend",
    github: "#",
    demo: "#",
    caseStudy: "Built a responsive dashboard to track internship progress, calculate remaining hours, and generate weekly reports."
  },
  {
    id: 3,
    title: "GenTrack: Generation & Performance Division Reporting",
    description: "A robust reporting system for tracking performance metrics and generation data.",
    technologies: ["Python", "Django", "Vue.js"],
    images: [
      { src: "/2.1.png" },
      { src: "/2.2.png" },
      { src: "/2.3.png" },
      { src: "/2.4.png" },
      { src: "/2.5.png" },
      { src: "/2.6.png" },
      { src: "/2.7.png" },
      { src: "/2.8.png" },
      { src: "/2.9.png" },
      { src: "/3.0.png" },
      { src: "/3.1.png" },
      { src: "/3.2.png" },
      { src: "/3.3.png" },
      { src: "/3.4.png" },
      { src: "/3.5.png" },
      { src: "/3.6.png" },
      { src: "/3.7.png" },
      { src: "/3.8.png" },
      { src: "/3.9.png" },
      { src: "/4.0.png" },
      { src: "/4.1.png" },
      { src: "/4.2.png" },
      { src: "/4.3.png" },
      { src: "/4.4.png" },
      { src: "/4.5.png" },
      { src: "/4.6.png" },
      { src: "/4.7.png" },
    ],
    imageSections: [
      { label: "Landing Page", images: [0, 1, 2, 3, 4, 5] },
      { label: "Login Page", images: [6] },
      { label: "Dashboard", images: [7, 8, 9] },
      { label: "Upload Excel Report", images: [10, 11] },
      { label: "Generate Report", images: [12] },
      { label: "View Reports", images: [13] },
      { label: "Reports Storage", images: [14] },
      { label: "Request Signature Access", images: [15, 16] },
      { label: "Archive", images: [17] },
      { label: "Advance Analytics", images: [18, 19, 20, 21, 22] },
      { label: "Automated Reports", images: [23] },
      { label: "User Management", images: [24, 25] },
      { label: "Audit Logs", images: [26] }
    ],
    category: "Full Stack",
    github: "#",
    demo: "#",
    caseStudy: "Designed a centralized reporting tool for tracking power generation metrics and performance KPIs with interactive data visualizations."
  },
  {
    id: 4,
    title: "Airbnb Clone",
    description: "A feature-rich clone of Airbnb with property listing and booking capabilities.",
    technologies: ["Python", "Django", "React.js", "Docker"],
    images: ["https://placehold.co/600x400/ef4444/white?text=Airbnb+Home", "https://placehold.co/600x400/ef4444/white?text=Airbnb+Booking"],
    category: "Full Stack",
    github: "#",
    demo: "#",
    caseStudy: "Developed a property rental platform featuring secure user authentication, booking management, and responsive UI."
  },
  {
    id: 5,
    title: "Water Management Mapping System",
    description: "An interactive mapping system for visualizing water management data.",
    technologies: ["HTML", "CSS", "JavaScript"],
    images: ["https://placehold.co/600x400/3b82f6/white?text=Water+Mapping+System"],
    category: "Frontend",
    github: "#",
    demo: "#",
    caseStudy: "Created an interactive GIS-inspired visualization for mapping water distribution points and consumption metrics."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Engr. Ricardo M. Dela Cruz",
    role: "Senior Software Engineer, NPC-GenTrack Project",
    text: "Artchel's contribution to the GenTrack reporting system was invaluable. His ability to translate complex performance metrics into intuitive Vue.js dashboards significantly improved our monitoring efficiency."
  },
  {
    id: 2,
    name: "Prof. Maria Leonora V. Garcia",
    role: "IT Department Head / Academic Advisor",
    text: "During his development of the Pupil Portal, Artchel demonstrated exceptional skills in database normalization and Django backend architecture. He is a proactive problem-solver with a strong technical foundation."
  }
];
