"use client";

import { useEffect, useState } from "react";
import { List, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { posts } from "#site/content";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

// Recursively flatten toc data into TocItem[]
function flattenToc(toc: any[], level = 1): TocItem[] {
  let items: TocItem[] = [];
  toc.forEach((entry) => {
    const id = entry.url.replace(/^#/, "");
    items.push({
      id,
      text: entry.title,
      level,
    });
    if (entry.items && entry.items.length > 0) {
      items = items.concat(flattenToc(entry.items, level + 1));
    }
  });
  return items;
}

export default function FloatingTocButton({ slug }: { slug: string }) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const post = posts.find((p) => p.slug === slug);
    if (!post?.toc) return;

    const tocItems = flattenToc(post.toc);
    setToc(tocItems);

    // Intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%", threshold: 0 }
    );

    tocItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [slug]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  // Helper function to get indentation style based on level
  const getIndentationStyle = (level: number) => ({
    marginLeft: `${(level - 1) * 16}px`,
  });

  if (toc.length === 0) return null;

  return (
    <>
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
                    style={getIndentationStyle(item.level)}
                    className={cn(
                      "block text-sm text-left w-full hover:text-white transition-colors duration-200 py-1 px-2 rounded hover:bg-neutral-800",
                      item.level === 1 && "font-medium",
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

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
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
