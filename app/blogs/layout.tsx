import Navbar from "@/components/layout/Navbar";
import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto my-12 max-w-2xl">
      <section className="relative mx-4 mb-32">
        <Navbar />
        {children}
      </section>
    </div>
  );
}
