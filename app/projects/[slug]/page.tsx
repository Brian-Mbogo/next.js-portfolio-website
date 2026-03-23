import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { getProjectBySlug, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Container>
      <section className="py-14 lg:py-20">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-black/70 underline-offset-4 hover:underline dark:text-white/70"
        >
          ← Back to projects
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-black">
              <div className="relative aspect-[16/9] w-full bg-zinc-50 dark:bg-zinc-950">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="space-y-4 p-6">
                <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-white">
                  {project.title}
                </h1>
                <p className="text-sm leading-7 text-black/70 dark:text-white/70">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black">
              <h2 className="text-base font-semibold tracking-tight text-black dark:text-white">
                Highlights
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/70 dark:text-white/70">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black">
              <h2 className="text-base font-semibold tracking-tight text-black dark:text-white">
                Stack
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-black/70 dark:bg-white/10 dark:text-white/70"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black">
              <h2 className="text-base font-semibold tracking-tight text-black dark:text-white">
                Links
              </h2>
              <div className="mt-4 flex flex-col gap-3">
                {project.links.demo ? (
                  <a
                    href={project.links.demo}
                    className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white transition hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                  >
                    Live demo
                  </a>
                ) : null}
                {project.links.repo ? (
                  <a
                    href={project.links.repo}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-black/15 px-6 text-sm font-semibold text-black/80 transition hover:bg-black/5 dark:border-white/15 dark:text-white/80 dark:hover:bg-white/10"
                  >
                    Source code
                  </a>
                ) : (
                  <p className="text-sm text-black/60 dark:text-white/60">
                    Links will be added as they become available.
                  </p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </Container>
  );
}

