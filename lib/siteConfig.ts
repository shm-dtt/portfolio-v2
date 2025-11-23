export const Data = {
  version: "v3.2",
  firstName: "Soham",
  lastName: "Dutta",
  fullName: "Soham Dutta",
  year: new Date().getFullYear(),
  currentCompany: "Nokia",
  currentCompanyLink: "https://www.nokia.com/",
  position: "Applied R&D Software Engineer",
  email: "mailto:sohamdutta2001@gmail.com",
  links: {
    portfolio: "https://sohamdutta.in",
    twitter: "https://twitter.com/shm_dtt",
    linkedin: "https://www.linkedin.com/in/shm-dtt",
    github: "https://github.com/shm-dtt",
    resume:
      "https://drive.google.com/file/d/1qAFE4F0gICqyKKE63k_3b8sDt-m6ySGH/view?usp=drive_link",
  },
};

export const projects = [
  {
    name: "Wallendar",
    year: 2025,
    tech: "Next.js, Zustand",
    description:
      "A Web-app to transform your images into calendar desktop wallpapers.",
    techUsed: ["NextJS", "Zustand", "shadcn/ui"],
    link: "https://wallendar.shop",
    image: "/image.png",
  },
  {
    name: "KeyTones",
    year: 2025,
    tech: "Next.js",
    description:
      "Fast and free tool to extract color palettes from images",
    techUsed: ["NextJS", "Tailwind CSS", "shadcn/ui"],
    link: "https://keytones.vercel.app",
  },
  {
    name: "Chroma-Vue",
    year: 2025,
    tech: "Python, FFmpeg, Docker",
    description:
      "A fast video color timeline generator that extracts the average color from each frame.",
    techUsed: ["Python", "FFmpeg", "Docker"],
    link: "https://github.com/shm-dtt/chroma-vue",
  },
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
    tech: "Next.js, Tailwind",
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

export const BUILDING = projects[0];

export const experience = [
  {
    company: "NOKIA",
    link: "https://www.nokia.com/",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQGvo3aurmZZjQ/company-logo_200_200/B4EZqbzf6YKsAI-/0/1763550560619/nokia_logo?e=1765411200&v=beta&t=A4R5HQkEcetxqC_XNjmHcpjpQ6cEYPP-E7at3IJgAGU",
    position: "Applied R&D Software Engineer",
    duration: "July 2024 - Present",
    description: [
      "Built large-scale automation systems (Python, SQL) for Airtel, T-Mobile and VodafoneThree, cutting manual effort by up to 94% and improving network performance by 35% across production environments.",
      "Delivered end-to-end tools including a React-based Excel validator used by 50+ engineers, enterprise-grade VPN automation with encrypted credential handling, and workflow automation that accelerated customer operations by 10%.",
      "Automated multi-site deployment upgrades and configuration migrations across 32+ data centers, reducing execution time from hours to minutes and significantly lowering operational overhead."
    ],
    techUsed: ["Python", "SQL", "React", "Javascript", "K8s", "Linux"],
  },
  {
    company: "NOKIA",
    link: "https://www.nokia.com/",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQGvo3aurmZZjQ/company-logo_200_200/B4EZqbzf6YKsAI-/0/1763550560619/nokia_logo?e=1765411200&v=beta&t=A4R5HQkEcetxqC_XNjmHcpjpQ6cEYPP-E7at3IJgAGU",
    position: "SDE Intern",
    duration: "Aug 2023 - May 2024",
    description: [
      "Improved network management tools using Spring Boot, JavaScript, and MySQL for 15+ enterprise clients, including Vodafone and Singtel.",
      "Optimized SQL and refactored backend logic to cut page load times by 15% and enhance overall system performance.",
      "Built backend services for Node User Profile and Optics Reporting modules, handling data for over 1,000 network devices."
    ],
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
    logo: "https://github.com/MLSAKIIT.png",
    position: "Project Wing Member & Learner",
    duration: "Oct 2021 - Dec 2022",
    description: [
      "Qode is an online code editor with 450 DSA tracker with multiple language support and progress tracking.",
      "Designed the UI and built a complete web app with online compiler and user registration.",
      "Learned about Javascript, ReactJS, Bootstrap, JSON and implemented it.",
    ],
    techUsed: ["React", "JavaScript", "Bootstrap"],
  },
];
