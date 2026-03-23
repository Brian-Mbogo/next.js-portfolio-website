import Link from "next/link";
import { connection } from "next/server";

import Image from "next/image";

import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import styles from "@/styles/hero.module.css";

export default async function Home() {
  await connection();
  const serverTime = new Date().toLocaleString();
  const featured = projects.slice(0, 3);

  return (
    <div className={`relative overflow-hidden ${styles.glow}`}>
      <Container>
        <section className="grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-20">
          <div className="space-y-6">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold text-black/70 backdrop-blur dark:border-white/10 dark:bg-black/40 dark:text-white/70">
              Available for freelance • {site.location}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">
              {site.name}
              <span className="block text-black/70 dark:text-white/70">
                Full‑stack developer building fast web experiences.
              </span>
            </h1>
            <p className="max-w-xl text-base leading-7 text-black/70 dark:text-white/70">
              I build responsive, accessible web apps with Next.js, React, and
              TypeScript. Here are some projects and a quick way to get in touch.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white transition hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-full border border-black/15 bg-white/60 px-6 text-sm font-semibold text-black/80 transition hover:bg-white dark:border-white/15 dark:bg-black/40 dark:text-white/80 dark:hover:bg-black/70"
              >
                Contact Me
              </Link>
            </div>
            <p className="text-xs text-black/50 dark:text-white/50">
              Server-rendered on: {serverTime}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-indigo-500/20 via-emerald-500/10 to-pink-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-black/40">
              <div className="flex items-center gap-4">
                <Image
                  src="/profile.svg"
                  alt="Profile illustration"
                  width={72}
                  height={72}
                  className="rounded-2xl border border-black/10 bg-white dark:border-white/10 dark:bg-black"
                  priority
                />
                <div className="space-y-1">
                  <p className="text-sm font-semibold tracking-tight text-black dark:text-white">
                    Building with Next.js 16
                  </p>
                  <p className="text-xs text-black/60 dark:text-white/60">
                    App Router • React 19 • Tailwind CSS v4
                  </p>
                </div>
              </div>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-black/10 bg-white/60 p-4 dark:border-white/10 dark:bg-black/30">
                  <dt className="text-xs font-semibold text-black/60 dark:text-white/60">
                    Focus
                  </dt>
                  <dd className="mt-1 font-semibold text-black dark:text-white">
                    UI + Performance
                  </dd>
                </div>
                <div className="rounded-xl border border-black/10 bg-white/60 p-4 dark:border-white/10 dark:bg-black/30">
                  <dt className="text-xs font-semibold text-black/60 dark:text-white/60">
                    Tooling
                  </dt>
                  <dd className="mt-1 font-semibold text-black dark:text-white">
                    TypeScript
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="space-y-6 pb-14">
          <div className="flex items-end justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white">
                Featured Projects
              </h2>
              <p className="text-sm text-black/70 dark:text-white/70">
                A few things I’ve built recently.
              </p>
            </div>
            <Link
              href="/projects"
              className="text-sm font-semibold text-black/70 underline-offset-4 hover:underline dark:text-white/70"
            >
              See all →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
