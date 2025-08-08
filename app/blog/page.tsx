import React from "react";

export default async function Blog() {
  return (
    <div className="mb-32 mt-16">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-bold mb-4">Under Maintenance</h1>
        <p className="text-neutral-400 mb-8 max-w-md">
          We&apos;re currently updating our blog system to improve the reading experience. 
          Please check back soon for fresh content and better features.
        </p>
        <div className="flex items-center gap-2 text-sm text-neutral-500">
          <div className="w-2 h-2 bg-neutral-500 rounded-full animate-pulse"></div>
          <span>Coming back soon</span>
        </div>
      </div>
    </div>
  );
}
