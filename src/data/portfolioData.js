export const personalData = {
  name: "Priyanshi Saini",
  role: "Software Engineer",
  status: "Open to Internships & Roles",
  tagline: "B.Tech Computer Science Student & Software Engineer",
  shortIntro: "I build responsive and scalable web applications using modern technologies.",
  email: "23cse085@gweca.ac.in",
  phone: "7014252203",
  location: "Ajmer, Rajasthan, India",
  github: "https://github.com/Priyanshi773",
  linkedin: "https://www.linkedin.com/in/priyanshi-saini-892b85290/",
  resumeUrl: "/resume.pdf",
};

export const aboutData = {
  summary:
    "Software Engineer with hands-on experience in building full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Skilled in developing REST APIs, implementing secure authentication, and creating responsive user interfaces. Strong foundation in Data Structures & Algorithms, Object-Oriented Programming, and core computer science concepts, with a focus on building scalable and reliable software.",
  coreHighlights: [
    {
      title: "Full-Stack Development",
      description: "End-to-end application development using React.js, Node.js, Express.js, and MongoDB.",
    },
    {
      title: "Backend & API Development",
      description: "Building RESTful APIs, JWT authentication, OTP verification flows, and role-based access control.",
    },
    {
      title: "Responsive & Modern UI",
      description: "Creating responsive user interfaces using React.js, Tailwind CSS, and modern JavaScript.",
    },
    {
      title: "Computer Science Fundamentals",
      description: "Strong foundation in Data Structures & Algorithms, OOP, and core software development concepts.",
    },
  ],
};

export const skillsData = [
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: ["React.js", "JavaScript (ES6)", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend Development",
    icon: "Server",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Database",
    icon: "Database",
    skills: ["MongoDB"],
  },
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: ["C++", "Java"],
  },
  {
    category: "Deployment",
    icon: "CloudUpload",
    skills: ["Vercel", "Render"],
  },
  {
    category: "Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "Postman"],
  },
  {
    category: "Core CS",
    icon: "Cpu",
    skills: ["Data Structures & Algorithms", "OOP"],
  },
];

export const projectsData = [
  {
    id: "mall-app",
    title: "Full Stack Mall Web Application",
    subtitle: "Shopping, Entertainment & Food Ordering Ecosystem",
    badge: "Full Stack MERN",
    techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    description:
      "Developed a full-stack mall web application integrating Shopping, Entertainment, and Food Ordering modules.",
    detailedDescription:
      "A comprehensive multi-module web platform providing an integrated digital mall experience. Features full customer workflows for brand-wise shopping, food ordering, and entertainment activity bookings alongside role-based access control and an administrative dashboard.",
    features: [
      "JWT-based authentication",
      "User registration and login",
      "OTP verification",
      "Forgot & reset password",
      "Shopping module",
      "Food ordering module",
      "Brand-wise product listings",
      "Add to cart",
      "Order summary",
      "Entertainment module",
      "Category-wise activity listings",
      "Session booking",
      "Role-based access control",
      "Admin panel",
      "RESTful APIs",
      "Modular architecture",
    ],
    featureGroups: [
      {
        title: "Authentication & Security",
        items: [
          "JWT-based authentication",
          "User registration and login",
          "OTP verification",
          "Forgot & reset password",
          "Role-based access control",
        ],
      },
      {
        title: "Commerce & Services",
        items: [
          "Shopping module with brand-wise product listings",
          "Food ordering module",
          "Add to cart & dynamic order summary",
          "Entertainment module with session booking",
        ],
      },
      {
        title: "Architecture & Management",
        items: [
          "Secure RESTful APIs with Express.js",
          "Centralized Admin panel for operational control",
          "Modular architecture & clean MongoDB schemas",
        ],
      },
    ],
    links: {
      live: "https://github.com/Priyanshi773", // Placeholder link
      github: "https://github.com/Priyanshi773", // Placeholder link
    },
    metrics: {
      type: "Multi-Module Web App",
      architecture: "RESTful MERN",
    },
  },
  {
    id: "weather-app",
    title: "Weather Forecasting Application",
    subtitle: "Real-Time Weather Metrics & Forecasts",
    badge: "API Integration",
    techStack: ["React.js", "Node.js", "Express.js", "OpenWeather API"],
    description:
      "Developed a weather application that fetches and displays real-time weather data using the OpenWeather API.",
    detailedDescription:
      "A responsive weather application that connects to the OpenWeather API through a custom Node.js/Express.js backend proxy. Displays live temperature, humidity, wind metrics, and atmospheric conditions with robust error handling and intuitive UI feedback.",
    features: [
      "Real-time weather data",
      "Temperature",
      "Humidity",
      "Wind speed",
      "Weather conditions",
      "Backend API integration",
      "Error handling",
      "Responsive interface",
      "Modular architecture",
    ],
    featureGroups: [
      {
        title: "Real-Time Meteorology",
        items: [
          "Real-time weather data display",
          "Temperature, humidity & wind speed metrics",
          "Dynamic weather condition indicators",
        ],
      },
      {
        title: "Backend & Resilience",
        items: [
          "Secure Node.js & Express.js backend API integration",
          "Robust error handling & rate limiting support",
          "Responsive interface & modular architecture",
        ],
      },
    ],
    links: {
      live: "https://github.com/Priyanshi773", // Placeholder link
      github: "https://github.com/Priyanshi773", // Placeholder link
    },
    metrics: {
      type: "Real-Time Client & API",
      architecture: "Node.js + React.js",
    },
  },
];

export const experienceData = [
  {
    id: "ibm-skillsbuild",
    title: "Summer Internship — Front-End Web Development",
    organization: "IBM SkillsBuild Project-Based Learning Program",
    period: "July 2025 – August 2025 · Virtual",
    type: "Virtual",
    badge: "Project-Based Learning",
    summary:
      "Completed the IBM SkillsBuild Project-Based Learning Program focused on Front-End Web Development.",
    details: [
      "Completed the IBM SkillsBuild Project-Based Learning Program focused on Front-End Web Development.",
      "Developed practical projects using HTML, CSS, and JavaScript.",
      "Strengthened core web development fundamentals through hands-on project experience.",
    ],
    skillsLearned: ["HTML5", "CSS3", "JavaScript", "Frontend Development", "Project Architecture"],
  },
];

export const educationData = [
  {
    id: "gweca-btech",
    degree: "Bachelor of Technology — Computer Science",
    institution: "Government Women's Engineering College, Ajmer",
    period: "September 2023 – Present",
    score: "CGPA: 8.74",
    status: "Currently Pursuing",
    highlights: [
      "Currently pursuing B.Tech in Computer Science.",
      "Building expertise in software development and full-stack technologies.",
      "Studying Data Structures & Algorithms, Object-Oriented Programming, and Database Management Systems.",
      "Maintaining an academic record of 8.74 CGPA.",
    ],
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
