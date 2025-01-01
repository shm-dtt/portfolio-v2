/**
 * An array of experience objects representing professional and project experiences.
 * Each object contains details about the company, position, duration, description, and technologies used.
 *
 * @property {string} company - The name of the company.
 * @property {string} link - The URL link to the company's website.
 * @property {string} position - The job title or position held.
 * @property {string} duration - The time period during which the position was held.
 * @property {string} description - A brief description of the responsibilities and achievements in the position.
 * @property {string[]} techUsed - An array of technologies and tools used in the position.
 */
export const experience = [
  {
    company: "Nokia",
    link: "https://www.nokia.com/",
    position: "Applied R&D Software Engineer",
    duration: "July 2024 - Present",
    description:
      "Working as an Applied R&D Software Engineer in the IP and Optical Networks division. Responsible for the design, configuration, and deployment of IP/MPLS networks for clients across the globe. ",
    techUsed: ["Python", "Gherkin", "TOSCA", "YANG"],
  },
  {
    company: "Nokia",
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
    link: "https://mlsakiit.com/",
    position: "Project Wing Member & Learner",
    duration: "Oct 2021 - Dec 2022",
    description:
      "Qode is an online code editor with 450 DSA tracker with multiple language support and progress tracking. Designed the UI and built a complete web app with online compiler and user registration. Learned about Javascript, ReactJS, Bootstrap, JSON and implemented it.",
    techUsed: ["JSON", "React JS", "Bootstrap", "JavaScript"],
  },
];
