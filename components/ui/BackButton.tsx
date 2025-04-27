import Link from "next/link";
import { ChevronLeft } from "lucide-react";

/**
 * BackButton component renders a button that navigates back to the blogs page.
 * The button has a custom style and changes color on hover.
 *
 * @returns {JSX.Element} The BackButton component.
 */

const BackButton: React.FC = () => {
  return (
    <button className="my-8 text-neutral-400 hover:text-white">
      <Link href="/blogs" className=" flex flex-row text-sm items-center gap-2"><ChevronLeft size={16}/> Back</Link>
    </button>
  );
};

export default BackButton;
