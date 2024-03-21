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
    <div className=" h-screen flex items-center justify-center sticky top-0 text-white -z-10">
      <div
        className=" flex flex-col items-left justify-center relative w-screen h-3/5 rounded-lg p-12 pb-4 origin-top gap-8 "
        style={{ backgroundColor: color, top: `calc(-5vh + ${i * 60}px)` }}
      >
        <p className={` ${inter.className} lg:text-xl text-md lg:w-1/2`}>&quot;{statement}&quot;</p>
        <div className={`${playfairDisplay.className}`}>
          <h2 className="lg:text-3xl text-xl font-extrabold">{name}</h2>
          <h3 className="lg:text-lg text-md opacity-70">{role}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
