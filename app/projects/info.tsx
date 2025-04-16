/**
 * An array of project objects, each representing a project with various details.
 *
 * @property {string} name - The name of the project.
 * @property {number} year - The year the project was created.
 * @property {string} tech - The main technologies used in the project.
 * @property {string} description - A brief description of the project.
 * @property {string[]} techUsed - An array of technologies used in the project.
 * @property {string} link - A URL link to the project's repository or live demo.
 */
export const projects = [
  {
    name: "Video Duration",
    year: 2024,
    tech: "Python",
    description:
      "A simple python app to calculate total length of a bunch of local videos, at your specified playback speed.",
    techUsed: ["Python", "moviepy", "PyQt6"],
    link: "https://github.com/shm-dtt/video_duration",
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
  // {
  //   name: "Twiter Clone",
  //   year: 2024,
  //   tech: "NEXT JS, GraphQL",
  //   description:
  //     "A Twitter clone built using the Next Js and GraphQL. The application allows users to create, read, update, and delete tweets. The application also uses AWS S3 for storing images and Redis for caching.",
  //   techUsed: [
  //     "Next JS",
  //     "GraphQL",
  //     "PostgreSQL",
  //     "AWS S3",
  //     "Redis",
  //     "Tailwind CSS",
  //   ],
  //   link: "https://github.com/shm-dtt/twitter-clone",
  // },
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
