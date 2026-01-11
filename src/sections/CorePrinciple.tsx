import React from "react";

const corePrinciples = [
  {
    title: "Accessibility and usability built in, not added later",
    description:
      "Inclusive by design, with semantic markup, keyboard navigation, and thoughtful UX decisions from the start.",
  },
  {
    title: "Responsive design that works across devices and contexts",
    description:
      "Interfaces adapt seamlessly to different screens, input methods, and real-world usage scenarios.",
  },
  {
    title: "Performance-focused, lightweight, and efficient",
    description:
      "Optimized rendering, minimal bundle sizes, and fast load times to ensure smooth, reliable experiences.",
  },
  {
    title: "Consistent design systems and clean architecture",
    description:
      "Reusable components, predictable patterns, and a structured codebase that’s easy to extend and maintain.",
  },
  {
    title: "Scalable foundations designed for long-term growth",
    description:
      "Built to evolve with product needs, team size, and increasing complexity.",
  },
  {
    title: "Maintainable code over clever shortcuts",
    description:
      "Clear, readable, and well-structured code that supports collaboration and long-term ownership.",
  },
  {
    title: "Quality and reliability by default",
    description:
      "Thoughtful error handling, testing practices, and defensive coding to reduce bugs in production.",
  },
];

export default function CorePrinciple() {
  return (
    <div className="px-10 pb-2 z-30 pt-4">
      <h3 className="text-sm/4 mt-4 font-semibold text-indigo-400">
        Core Principles
      </h3>
      <p className="mt-1 text-sm font-medium tracking-tight text-white">
        From the first pixel to the final frame
      </p>
      <ul className="custom-list space-y-1.5 pl-4 text-gray-200 text-sm">
        {corePrinciples.map(({ title }) => (
          <li key={title} className="">
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
}
