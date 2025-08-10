import { Metadata } from "next";
import ProjectsClient from "@/app/projects/ProjectsClient";

export const metadata: Metadata = {
  title: "Projects - Soham Dutta",
  description: "Interesting projects that I have worked on.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
