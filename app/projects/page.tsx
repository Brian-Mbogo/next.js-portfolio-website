import Link from "next/link";

import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <Container>
      <section className="py-14 lg:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-white">
              Projects
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-black/70 dark:text-white/70">
              A curated list of work—apps, dashboards, and experiments. Each
              project has a short write‑up plus links when available.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-full border border-black/15 px-6 text-sm font-semibold text-black/80 transition hover:bg-black/5 dark:border-white/15 dark:text-white/80 dark:hover:bg-white/10"
          >
            Hire me
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </Container>
  );
}

