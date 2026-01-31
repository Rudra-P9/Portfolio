import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  // html,  // unused - not in Tech.jsx
  // css,   // unused - not in any array
  reactjs,
  ubuntu,
  tailwind,
  postgresql,
  // git,   // unused - not in any array
  uofsc,
  rhhs,
  wonderland,
  mackenziehealth,
  privcurity,
  staples,
  google,
  whmis,
  aws,
  python,
  cplusplus,
  typescript,
  axelotlanding,
  netdashlanding,
  securebankdashboard,
  sunnifyimage,
  knifethrowimage,
  // pythonanalysis,
  // password_generator,
  // wordsearch,
  powershell,
  cisco,
  connectwise,
  virtualbox,
  kalilinux,
  wireshark,
  nmap,
  // metasploit,  // unused - not in Tech.jsx
  johntheripper,
  // hydra,       // unused - not in Tech.jsx
  // aircrackng,  // unused - not in Tech.jsx
  photoshop,
  premiere,
  cinema4d,
  // blender,  // unused - not in Tech.jsx
  connectwisecert,
  awsdbcert,
  financialflowimage,
  // enterpriseapitester,
  github,
  mongodb,
  microsoft,
  ibm,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Certifications",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: fullstack,
  },
  {
    title: "Systems Infrastructure",
    icon: backend,
  },
  {
    title: "Cloud Automation",
    icon: mobile,
  },
  {
    title: "Workflows",
    icon: web,
  },
];

const education = [
  {
    title: "Bachelor of Science in Computer Science",
    company_name: "University of South Carolina, Columbia, SC",
    icon: uofsc, // TODO: Replace with USC logo
    iconBg: "#fff",
    date: "Expected 2028",
    points: [
      "Pursuing BS in Computer Science",
      "Focus on software development and web technologies",
      "GPA: 3.723" // Add your GPA, honors, or relevant coursework here
    ],
  },
  // TODO: Add high school or other educational background if desired
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "PowerShell",
    icon: powershell,
  },
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const itTools = [
  {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Cisco",
    icon: cisco,
  },
  {
    name: "ConnectWise",
    icon: connectwise,
  },
  {
    name: "VirtualBox",
    icon: virtualbox,
  },
];

const cybersecurityTools = [
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "Wireshark",
    icon: wireshark,
  },
  {
    name: "Nmap",
    icon: nmap,
  },
  // {
  //   name: "Metasploit",
  //   icon: metasploit,
  // },
  {
    name: "John the Ripper",
    icon: johntheripper,
  },
  // {
  //   name: "Hydra",
  //   icon: hydra,
  // },
  // {
  //   name: "Aircrack-ng",
  //   icon: aircrackng,
  // },
];

const designTools = [
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Premiere",
    icon: premiere,
  },
  {
    name: "Cinema 4D",
    icon: cinema4d,
  },
  // {
  //   name: "Blender",
  //   icon: blender,
  // },
];

const experiences = [
  // TODO: Replace these placeholder entries with your actual work experience
  // Use your resume to fill in accurate job titles, companies, dates, and responsibilities
  {
    title: "Software Engineering Intern",
    company_name: "Company Name Here",
    icon: ibm, // TODO: Replace with actual company logo
    iconBg: "#fff",
    date: "Month Year - Present",
    points: [
      "TODO: Add your key responsibilities and achievements",
      "Example: Developed full-stack features using React and Node.js",
      "Example: Collaborated with cross-functional teams on agile projects",
    ],
  },
  {
    title: "Previous Position",
    company_name: "Previous Company",
    icon: microsoft, // TODO: Replace with actual company logo
    iconBg: "#fff",
    date: "Month Year - Month Year",
    points: [
      "TODO: Add your responsibilities here",
      "Example: Built responsive web applications",
      "Example: Implemented CI/CD pipelines",
    ],
  },
  // Add more experience entries as needed
];



const extracurricular = [
  // TODO: Add your actual certifications, courses, and achievements here
  // Examples below - replace with your own
  {
    title: "Certification Name",
    type: "Issuing Organization",
    icon: github, // TODO: Replace with actual certification logo
    iconBg: "#000000",
    date: "Issued: Month Year",
    points: ["Key skills or topics covered"],
    credential: "https://credential-url-here.com", // Optional: Add credential URL
  },
  // Add more certifications as needed
];

const projects = [
  // TODO: Replace these placeholder projects with your actual GitHub projects
  // Visit https://github.com/Rudra-P9 to find your repositories
  {
    name: "Project 1: Replace Me 🚀",
    description:
      "TODO: Add a detailed description of your project here. Explain what it does, what technologies you used, and what problems it solves. Make it compelling and showcase your skills!",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: axelotlanding, // TODO: Replace with your project screenshot
    source_code_link: "https://github.com/Rudra-P9/your-repo-name",
    live_project_link: "https://your-project-demo.com", // Or use GitHub repo link if no live demo
  },
  {
    name: "Project 2: Replace Me 💻",
    description:
      "TODO: Add your second project description. Highlight the key features, technologies used, and your role in the project. This is your chance to showcase your best work!",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: netdashlanding, // TODO: Replace with your project screenshot
    source_code_link: "https://github.com/Rudra-P9/your-repo-name-2",
    live_project_link: "https://github.com/Rudra-P9/your-repo-name-2",
  },
  {
    name: "Project 3: Replace Me 🎨",
    description:
      "TODO: Add your third project description. Focus on what makes this project unique and what you learned from building it. Include any challenges you overcame.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "WebGL",
        color: "pink-text-gradient",
      },
    ],
    image: securebankdashboard, // TODO: Replace with your project screenshot
    source_code_link: "https://github.com/Rudra-P9/your-repo-name-3",
    live_project_link: "https://github.com/Rudra-P9/your-repo-name-3",
  },
  // Add more projects as needed - remove the remaining Sunny Patel projects below
  // {
  //   name: "COVID-19 GTA Cases Data Analysis 🧪",
  //   description:
  //     "A deep dive into ongoing COVID-19 outbreaks in the Greater Toronto Area (GTA), Ontario. Using data from a government-licensed dataset called Outbreaks by Public Health Unit (PHU) to explore trends and patterns in these outbreaks. This data analysis integrates the essential aspects of the data science workflow (Filesize: 3.5 MiB, 62699 lines of raw dataset)",
  //   tags: [
  //     {
  //       name: "python",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tensorflow",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scikit-learn",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "pandas",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "matplotlib",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "numpy",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: pythonanalysis,
  //   source_code_link: "https://drive.google.com/drive/folders/1cTbp-6-flypV-kj3-q606UwwWEralu11",
  //   live_project_link: "https://drive.google.com/drive/folders/1cTbp-6-flypV-kj3-q606UwwWEralu11",
  // },
  // {
  //   name: "Secure Password Generator 🔐",
  //   description:
  //     "Secure Password Generator is a Java-based tool designed to generate and manage secure passwords, prioritizing simplicity, security, and user-friendliness. It employs industry-standard encryption algorithms to create strong, unique passwords resistant to common hacking attempts.",
  //   tags: [
  //     {
  //       name: "java",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "sha-256",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "encryption/decryption",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "data-algorithms",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: password_generator,
  //   source_code_link: "https://github.com/sunnypatell/SecurePasswordGenerator",
  //   live_project_link: "https://github.com/sunnypatell/SecurePasswordGenerator",
  // },
];

const testimonials = [
  {
    testimonial:
      "ETC.",
    name: "ETC.",
    designation: "ETC.",
    company: "ETC.",
    image: "ETC.",
  }
];

export {
  services,
  technologies,
  itTools,
  cybersecurityTools,
  designTools,
  experiences,
  extracurricular,
  projects,
  education,
  testimonials
};
