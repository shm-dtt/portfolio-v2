import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative mb-32">
      {children}
    </section>
  );
}
