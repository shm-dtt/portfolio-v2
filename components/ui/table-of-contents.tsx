// components/ui/table-of-contents.tsx
"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
}

export default function TableOfContents({ className }: TableOfContentsProps) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

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

  if (toc.length === 0) {
    return null;
  }

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className={cn("space-y-1", className)}>
      <h3 className="font-semibold text-sm mb-3 text-neutral-300">
        Table of Contents
      </h3>
      <ul className="space-y-2">
        {toc.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleClick(item.id)}
              className={cn(
                "block text-sm text-left w-full hover:text-white transition-colors duration-200",
                item.level === 1 && "font-medium",
                item.level === 2 && "ml-0",
                item.level === 3 && "ml-4",
                item.level === 4 && "ml-6",
                item.level === 5 && "ml-8",
                item.level === 6 && "ml-10",
                activeId === item.id
                  ? "text-white font-medium"
                  : "text-neutral-400"
              )}
            >
              {item.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}