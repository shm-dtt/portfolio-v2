import Card from "@/app/experience/ExpCard";
import { experience } from "@/app/experience/info";
import Navbar from "@/components/Navbar/Navbar";

/**
 * The `Experience` component renders the experience section of the portfolio.
 * It includes a `Navbar` component and a list of experience cards.
 *
 * @component
 * @example
 * return (
 *   <Experience />
 * )
 *
 * @returns {JSX.Element} The rendered experience section.
 */
const Experience: React.FC = () => {
  return (
    <div className="mx-4 mb-32">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <br />
        <div>
          {experience.map((exp, i) => (
            <Card key={`p_${i}`} i={i} {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
