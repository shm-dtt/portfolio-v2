//basic info to change

export const Data = {
  firstName: "Soham",
  lastName: "Dutta",
  location: "Bengaluru",
  country: "India",
  timeZone: "Asia/Kolkata",
  gmtOffset: "+5:30",
  year: 2024,
  currentCompany: "Nokia",
  position_firstLine: "Full Stack",
  position_secondLine: "☼ Developer ☀",
  email: "sohamdutta2001@gmail.com",
  twitter: "https://twitter.com/shmdsgn",
  linkedin: "https://www.linkedin.com/in/shm-dtt",
  github: "https://github.com/shm-dsgn",
  portfolioV1: "https://shm-dsgn-v1.netlify.app/",
};

export const testimonials = [
  {
    name: "Shawn D'souza",
    role: "DevOps Engineer at Neighborly India, ex-SWE ZapCom Group lnc",
    statement:
      "A really good front end developer with great communication and team management skills. He is also a fast learner and adapts to various environments quickly.",
    color: "#191919",
  },
  {
    name: "Aniket Pathak",
    role: "Ex-SDE Intern at Nokia",
    statement:
      "Soham and I worked together in the same team during our internship at Nokia. Being a great friend and a team player, he is one of the most knowledgeable people I have met in field of Full Stack Development with an eye for UI/UX and Frontend Design. A down to earth and humble guy, I have learned a lot working with him.",
    color: "#232323",
  },
  {
    name: "Sibananda Sahu",
    role: "Software Engineer 1 at Synopsys Inc, Ex-Intern at Reliance Jio PLatforms Ltd",
    statement:
      "Working with Soham has been an absolute pleasure! I can attest to his versatility and proficiency in web technologies. From UI/UX design to Spring Boot and React JS expertise, he consistently delivers top-notch solutions with precision and creativity. His attention to detail and innovative approach always ensure outstanding results.",
    color: "#2E2E2E",
  },
  // {
  //   name: "Demo Name",
  //   role: "Team Lead Engineer at Google",
  //   statement:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra dignissim mauris. Sed tempus, augue eget maximus vehicula, risus odio fermentum neque, in fringilla mauris felis dignissim leo.",
  //   color: "#3E3E3E",
  // },
  // {
  //   name: "Demo Name",
  //   role: "Team Lead Engineer at Google",
  //   statement:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra dignissim mauris. Sed tempus, augue eget maximus vehicula, risus odio fermentum neque, in fringilla mauris felis dignissim leo.",
  //   color: "#515151",
  // },
];

export const projects = [
  {
    name: "Envoy",
    year: 2024,
    tech: "Spring Boot, Java, MySQL",
    description:
      "Email management tool enabling sending, scheduling, and tracking emails across timezones, ensuring seamless email management and real-time email notifications upon reading.",
    techUsed: ["Spring Boot", "Java", "MySQL", "Quartz Scheduler"],
    link: "https://github.com/shm-dsgn/envoy",
  },
  {
    name: "Twiter Clone",
    year: 2024,
    tech: "NEXT JS, GraphQL",
    description:
      "A Twitter clone built using the Next Js and GraphQL. The application allows users to create, read, update, and delete tweets. The application also uses AWS S3 for storing images and Redis for caching.",
    techUsed: [
      "Next JS",
      "GraphQL",
      "PostgreSQL",
      "AWS S3",
      "Redis",
      "Tailwind CSS",
    ],
    link: "https://github.com/shm-dsgn/twitter-clone",
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
    techUsed: ["HTML", "CSS", "JavaScript"],
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
    company: "Nokia Solutions and Networks",
    position: "Software Development Engineer Intern",
    duration: "Aug 2023 - May 2024",
    location: "Bengaluru, India",
    link: "https://www.nokia.com/",
    details: [
      {
        position: "Junior Network Engineer",
        duration: "July 2024 - Present",
        description:
          "Working as a Junior Network Engineer in the IP and Optical Networks division. Responsible for the design, configuration, and deployment of IP/MPLS networks for clients across the globe. ",
        techUsed: ["JavaScript", "TOSCA", "NSD", "Git"],
      },
      {
        position: "SDE Intern",
        duration: "Aug 2023 - May 2024",
        description:
          "Part of multiple client projects like TSPortal, SingTel in Network Infrastructure team, contributing to design and develop effective Network Management Tools. Collaborated with multiple developers across teams, performed code reviews among interns, participated in brainstorming sessions and learning opportunities.",
        techUsed: [
          "Spring Boot",
          "Java",
          "MySQL",
          "Thymeleaf",
          "Polymer.js",
          "jQuery",
          "Bootstrap",
        ],
      },
    ],
  },
  {
    company: "Microsoft Learn Student Ambassador KIIT",
    location: "Bhubaneshwar, India",
    link: "https://github.com/MLSAKIIT",
    details: [
      {
        position: "Project Wing Member & Learner",
        duration: "Oct 2021 - Dec 2022",
        description:
          "Qode is an online code editor with 450 DSA tracker with multiple language support and progress tracking. Designed the UI and built a complete web app with online compiler and user registration, Learned about Javascript, ReactJS, Bootstrap, JSON and implemented it.",
        techUsed: ["JSON", "React JS", "Bootstrap", "JavaScript"],
      },
    ],
  },
];
