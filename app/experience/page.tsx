import Card from "@/app/experience/ExpCard";
import { experience } from "@/app/experience/info";
import Navbar from "@/components/Navbar/Navbar";

const Experience: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center  mx-4 mb-32">
        <br />
        <div>
          {experience.map((exp, i) => (
            <Card key={`p_${i}`} i={i} {...exp} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
