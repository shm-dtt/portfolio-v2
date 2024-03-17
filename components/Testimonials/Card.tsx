import { inter, playfairDisplay } from "@/app/fonts/Fonts";

interface CardProps {
  name: string;
  role: string;
  statement: string;
  color: string;
  i: number;
}

const Card: React.FC<CardProps> = ({ name, role, statement, color, i }) => {
  return (
    <div className=" h-[90vh] flex items-center justify-center sticky top-0 text-white">
      <div
        className=" flex flex-col relative w-screen rounded-lg p-12 origin-top gap-8"
        style={{ backgroundColor: color, top: `calc(-5vh + ${i * 60}px)` }}
      >
        <p className={` ${inter.className} lg:text-2xl text-lg lg:w-1/2`}>"{statement}"</p>
        <div className={`${playfairDisplay.className}`}>
          <h2 className="lg:text-3xl text-xl font-extrabold">{name}</h2>
          <h3 className="lg:text-lg text-md opacity-70">{role}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
