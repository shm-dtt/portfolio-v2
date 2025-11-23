import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  company: string;
  link: string;
  logo: string;
  position: string;
  duration: string;
  description: string[];
  techUsed: string[];
  i: number;
}

const Card: React.FC<CardProps> = ({
  company,
  link,
  logo,
  position,
  duration,
  description,
  techUsed,
  i
}) => {
  return (
    <div className="flex flex-col gap-3 my-8">
      <div className="flex items-center gap-2">
        <Image
          src={logo}
          alt={company}
          width={40}
          height={40}
          className="rounded-md"
        />
        <div className="flex flex-col">
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center group"
          >
            {position} • {company}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <p className="text-sm text-neutral-400 group-hover:text-white transition-colors duration-300">
            {duration}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {description.length > 0 && (
          <ul className="text-sm text-neutral-400 list-disc space-y-1 pl-4">
            {description.map((item, index) => (
              <li key={`${i}-desc-${index}`} className="pl-0.5">{item}</li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap gap-2 mt-4 mb-8">
          {techUsed.map((tech, index) => (
            <p
              key={`${i}-${index}`}
              className="bg-neutral-700 opacity-80 text-xs px-3 py-1 rounded-full"
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
