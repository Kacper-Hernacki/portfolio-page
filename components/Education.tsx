import { HoverEffect } from "@/components/ui/CardHoverEffect";
import { education } from "@/data";
import React from "react";

export default function Education() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h1 className="mb-12 heading">
        My <span className="text-purple">education</span>
      </h1>
      <HoverEffect items={education} />
    </div>
  );
}

