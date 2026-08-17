export const personalData = {
  name: "Priyanshi Saini",
  role: "Full Stack Developer",
  status: "Open to Internships & Roles",
  tagline: "B.Tech Computer Science Student & Full Stack Developer",
  shortIntro: "I build responsive and scalable web applications using modern web technologies.",
  email: "23cse085@gweca.ac.in",
  phone: "7014252203",
  location: "Ajmer, Rajasthan, India",
  github: "https://github.com/Priyanshi773",
  linkedin: "https://www.linkedin.com/in/priyanshi-saini-892b85290/",
  resumeUrl: "/resume.pdf",
};

export const aboutData = {
  summary:
    "Full Stack Developer with hands-on experience in building web applications using React.js, Node.js, Express.js, and MongoDB. Skilled in developing REST APIs, implementing secure authentication, and creating responsive user interfaces. Passionate about building scalable applications and continuously improving software development skills.",
  coreHighlights: [
    {
      title: "MERN Stack Architecture",
      description: "End-to-end development with React.js, Node.js, Express.js, and MongoDB.",
    },
    {
      title: "REST APIs & Security",
      description: "Crafting robust endpoints, JWT authentication, OTP flows, and RBAC.",
    },
    {
      title: "Clean & Responsive UI",
      description: "Building responsive, modern user interfaces with Tailwind CSS and ES6.",
    },
    {
      title: "Continuous Learning",
      description: "Strong foundation in CS fundamentals, Data Structures & Algorithms, and OOP.",
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
      "Forgot password",
      "Reset password",
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
    ],
    featureGroups: [
      {
        title: "Authentication & Security",
        items: [
          "JWT-based authentication",
          "User registration and login",
          "OTP verification",
          "Forgot password & Reset password",
          "Role-based access control (RBAC)",
        ],
      },
      {
        title: "Commerce & Services",
        items: [
          "Shopping module with brand-wise listings",
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
          "MongoDB schemas for products, orders & bookings",
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
      "Developed a weather application to fetch and display real-time weather data using the OpenWeather API.",
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
    ],
    featureGroups: [
      {
        title: "Real-Time Meteorology",
        items: [
          "Live temperature display in Celsius/Fahrenheit",
          "Humidity percentage & atmospheric pressure",
          "Wind speed & direction metrics",
          "Dynamic weather condition indicators",
        ],
      },
      {
        title: "Backend & Resilience",
        items: [
          "Secure Node/Express backend API integration",
          "Rate-limit handling and graceful error states",
          "Clean responsive UI adapted for mobile and desktop",
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
    period: "July 2025 – August 2025",
    type: "Virtual",
    badge: "Project-Based Learning",
    summary:
      "Successfully completed the IBM SkillsBuild Project-Based Learning Program focused on Front-End Web Development.",
    details: [
      "Successfully completed the IBM SkillsBuild Project-Based Learning Program focused on Front-End Web Development.",
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
      "Specializing in Computer Science and Full Stack Web Technologies.",
      "Maintaining an exceptional academic record with 8.74 CGPA.",
      "Studying core subjects: Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems.",
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
