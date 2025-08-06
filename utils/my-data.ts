export const Data = {
  version: "v3.0",
  firstName: "Soham",
  lastName: "Dutta",
  year: new Date().getFullYear(),
  currentCompany: "Nokia",
  currentCompanyLink: "https://www.nokia.com/",
  position: "Applied R&D Software Engineer",
  email: "mailto:shmdsgn@gmail.com",
  twitter: "https://twitter.com/shm_dtt",
  linkedin: "https://www.linkedin.com/in/shm-dtt",
  github: "https://github.com/shm-dtt",
  dribbble: "https://dribbble.com/shm-dtt",
};

export const projects = [
  {
    name: "Marquer",
    year: 2025,
    tech: "Javascript",
    description:
      "Browser extension/add-on to share bookmark tab/folders/sub-folders with anyone.",
    techUsed: ["HTML", "CSS", "JavaScript", "Manifest V3"],
    link: "https://marquer.vercel.app",
  },
  {
    name: "Nest",
    year: 2025,
    tech: "NextJS, Tailwind",
    description: "Web App for finding the best spot for your Wi-Fi router.",
    techUsed: ["NextJS", "Tailwind CSS", "TypeScript"],
    link: "https://github.com/shm-dtt/nest",
  },
  {
    name: "Envoy",
    year: 2024,
    tech: "Spring Boot, Java, MySQL",
    description:
      "Email management tool enabling sending, scheduling, and tracking emails across timezones, ensuring seamless email management and real-time email notifications upon reading.",
    techUsed: ["Spring Boot", "Java", "MySQL", "Quartz Scheduler"],
    link: "https://github.com/shm-dtt/envoy",
  },
  {
    name: "Blog On",
    year: 2023,
    tech: "MERN Stack, TensorFlowJS",
    description:
      "Blog On is a full-stack web application that allows users to create, read, update, and delete blog posts. The application also uses TensorFlowJS to predict the sentiment of the blog post and to identify a human user during registration.",
    techUsed: [
      "React JS",
      "Express JS",
      "Node JS",
      "MongoDB",
      "TensorFlowJS",
      "AWS S3",
    ],
    link: "https://shm-blog-app.onrender.com/",
  },
  {
    name: "YT Playlist Duration",
    year: 2023,
    tech: "HTML, JavaScript",
    description:
      "A Chrome-based JavaScript application to display the total time of a YT playlist, average time, and playback speed variations for YouTube playlists. This extension is available on the Chrome Web Store. ",
    techUsed: ["HTML", "CSS", "JavaScript", "Manifest V3"],
    link: "https://chromewebstore.google.com/detail/youtube-playlist-duration/bpojpijaddmjkblcbkhnhhgjecmfmgil",
  },
  {
    name: "Brain Games",
    year: 2023,
    tech: "React JS, Firebase",
    description:
      "A collection of brain games that test your memory, attention, and problem-solving skills. The application is built using React JS and Firebase for authentication and data storage.",
    techUsed: ["React JS", "Firebase", "CSS"],
    link: "https://shm-brain-games.netlify.app/",
  },
];

export const experience = [
  {
    company: "NOKIA",
    link: "https://www.nokia.com/",
    position: "Applied R&D Software Engineer",
    duration: "July 2024 - Present",
    description:
      "Building automation tools for Bharti Airtel’s VNO infrastructure as part of Nokia's R&D team. Developed frameworks for DCGW and FSS, automated brownfield configuration extraction, and streamlined CRD lifecycle management in Kubernetes using shell scripts. Focused on simplifying network operations and accelerating production workflows.",
    techUsed: ["Python", "Bash", "SQL", "Docker"],
  },
  {
    company: "NOKIA",
    link: "https://www.nokia.com/",
    position: "SDE Intern",
    duration: "Aug 2023 - May 2024",
    description:
      "Build and maintain key components for network management tools in projects like TSPortal and SingTel. Collaborated with cross-functional teams to deliver efficient solutions, optimize performance, and promote best coding practices. Also performed code reviews among interns, participated in brainstorming sessions and learning opportunities.",
    techUsed: [
      "Spring Boot",
      "Java",
      "MySQL",
      "Thymeleaf",
      "Polymer.js",
      "jQuery",
      "Javascript",
      "Bootstrap",
    ],
  },
  {
    company: "MLSA KIIT",
    link: "https://github.com/MLSAKIIT/MSC-Codeportal",
    position: "Project Wing Member & Learner",
    duration: "Oct 2021 - Dec 2022",
    description:
      "Qode is an online code editor with 450 DSA tracker with multiple language support and progress tracking. Designed the UI and built a complete web app with online compiler and user registration. Learned about Javascript, ReactJS, Bootstrap, JSON and implemented it.",
    techUsed: ["JSON", "React JS", "Bootstrap", "JavaScript"],
  },
];
