import Card from "@/app/experience/ExpCard";
import { experience } from "@/app/experience/info";

const Experience: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white mx-4 mb-32">
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
