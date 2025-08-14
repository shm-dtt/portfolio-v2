"use client";

import { useEffect, useState } from "react";
import { List, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function FloatingTocButton() {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Extract headings from the page
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const tocItems: TocItem[] = [];

    headings.forEach((heading) => {
      if (heading.id) {
        tocItems.push({
          id: heading.id,
          text: heading.textContent || "",
          level: parseInt(heading.tagName.charAt(1)),
        });
      }
    });

    setToc(tocItems);

    // Set up intersection observer for active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0% -35% 0%",
        threshold: 0,
      }
    );

    headings.forEach((heading) => {
      if (heading.id) {
        observer.observe(heading);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsOpen(false); // Close TOC after clicking
    }
  };

  const toggleToc = () => {
    setIsOpen(!isOpen);
  };

  // Don't render if no headings
  if (toc.length === 0) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* TOC Panel */}
      <div
        className={cn(
          "fixed right-6 bottom-6 z-50 bg-neutral-900 border border-neutral-700 rounded-lg shadow-xl transition-all duration-300 ease-in-out max-h-96 overflow-y-auto",
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none",
          "w-80 max-w-[calc(100vw-4rem)]"
        )}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-sm text-neutral-300">
              Table of Contents
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Close table of contents"
            >
              <X size={16} />
            </button>
          </div>
          <nav>
            <ul className="space-y-2">
              {toc.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className={cn(
                      "block text-sm text-left w-full hover:text-white transition-colors duration-200 py-1 px-2 rounded hover:bg-neutral-800",
                      item.level === 1 && "font-medium",
                      item.level === 2 && "ml-0",
                      item.level === 3 && "ml-3",
                      item.level === 4 && "ml-6",
                      item.level === 5 && "ml-9",
                      item.level === 6 && "ml-12",
                      activeId === item.id
                        ? "text-white font-medium bg-neutral-800"
                        : "text-neutral-400"
                    )}
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* TOC Button - Always visible when there are headings */}
      <button
        onClick={toggleToc}
        className={cn(
          "fixed right-6 bottom-6 z-50 p-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-900",
          isOpen && "bg-neutral-700"
        )}
        aria-label="Toggle table of contents"
      >
        {isOpen ? <X size={20} /> : <List size={20} />}
      </button>
    </>
  );
}