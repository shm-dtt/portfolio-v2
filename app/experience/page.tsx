import Card from "@/components/ui/experience-card";
import { experience } from "@/lib/siteConfig";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience - Soham Dutta",
  description: "My professional experience so far.",
};

const Experience: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <br />
      <div>
        {experience.map((exp, i) => (
          <Card key={`p_${i}`} i={i} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
