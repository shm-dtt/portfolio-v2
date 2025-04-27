"use client";

import { Share } from "lucide-react";
interface ShareProps {
  title: string;
  link: string;
}
const ShareButton: React.FC<ShareProps> = ({ title, link }) => {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: title,
        text: `${title} by Soham Dutta`,
        url: link,
      });
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  return (
    <button
      onClick={handleShare}
      className=" cursor-pointer flex flex-row text-sm items-center gap-2 text-neutral-400 hover:text-white"
    >
      <Share size={16} /> Share
    </button>
  );
};

export default ShareButton;