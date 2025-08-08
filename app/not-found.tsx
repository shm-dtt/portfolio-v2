import { Home, ScrollText } from "lucide-react";
import Link from "next/link";

export default function NotFound({ homeLink = "/" }: { homeLink?: string }) {
  const Icon = homeLink === "/blog" ? ScrollText : Home;
  const text = homeLink === "/blog" ? "Blogs" : "Home";

  return (
    <div>
      <div className="text-center max-w-2xl flex flex-col items-center ">
        {/* Large 404 */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-5xl font-bold mb-4">404</h1>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        {/* Quirky message */}
        <div className="mb-8">
          <p className="text-xl md:text-2xl mb-4">
            Nothing to see here. Move along, citizen.
          </p>
          <p className="text-gray-400">
            I got hungry and I ate the page, so the page you&apos;re looking for doesn&apos;t exist!
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={homeLink} className="flex items-center gap-2">
            <Icon className="w-4 h-4" />
            Go to {text}
          </Link>
        </div>
      </div>
    </div>
  );
}
