"use client";

import { useEffect, useRef } from "react";

type ScrollAwareProps = {
  className?: string;
  children: React.ReactNode;
};

export default function ScrollAware({ className = "", children }: ScrollAwareProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      el.classList.add("show-scrollbar");
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        el.classList.remove("show-scrollbar");
      }, 800);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}


