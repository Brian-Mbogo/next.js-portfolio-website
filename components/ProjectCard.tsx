import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-black">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-50 dark:bg-zinc-950">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="space-y-3 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-semibold tracking-tight text-black dark:text-white">
            {project.title}
          </h3>
          <Link
            href={`/projects/${project.slug}`}
            className="shrink-0 rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-black/70 transition hover:border-black/20 hover:text-black dark:border-white/15 dark:text-white/70 dark:hover:border-white/30 dark:hover:text-white"
          >
            Details
          </Link>
        </div>
        <p className="text-sm leading-6 text-black/70 dark:text-white/70">
          {project.description}
        </p>
        <ul className="flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-black/70 dark:bg-white/10 dark:text-white/70"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

