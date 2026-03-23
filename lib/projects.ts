export type Project = {
  slug: string;
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  image: {
    src: string;
    alt: string;
  };
  links: {
    demo?: string;
    repo?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "next-portfolio",
    title: "Next.js Portfolio",
    description:
      "A fast, modern portfolio built with the App Router, Tailwind CSS v4, and React 19.",
    highlights: ["Multi-page routing", "Server Actions contact form", "SEO ready"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: {
      src: "/projects/portfolio.svg",
      alt: "Abstract thumbnail for a portfolio project",
    },
    links: {
      repo: "https://github.com/Brian-Mbogo/next.js-portfolio-website",
    },
  },
  {
    slug: "task-tracker",
    title: "Task Tracker",
    description:
      "A productivity app with filtering, keyboard shortcuts, and offline-friendly UI patterns.",
    highlights: ["Accessible UI", "Optimistic updates", "Responsive layout"],
    stack: ["React", "TypeScript", "CSS Modules"],
    image: {
      src: "/projects/tasks.svg",
      alt: "Abstract thumbnail for a task tracker project",
    },
    links: {},
  },
  {
    slug: "api-dashboard",
    title: "API Dashboard",
    description:
      "A dashboard that visualizes API metrics with charts, tables, and real-time summaries.",
    highlights: ["Server-rendered pages", "Reusable components", "Clean data layer"],
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    image: {
      src: "/projects/dashboard.svg",
      alt: "Abstract thumbnail for an analytics dashboard project",
    },
    links: {},
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

