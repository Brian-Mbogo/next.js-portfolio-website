import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/Container";
import { site } from "@/lib/site";

const skills = [
  "Next.js (App Router)",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "REST APIs",
  "PostgreSQL",
  "Testing & CI",
] as const;

export default function AboutPage() {
  return (
    <Container>
      <section className="py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-black">
              <Image
                src="/profile.svg"
                alt="Profile illustration"
                width={56}
                height={56}
                className="rounded-xl border border-black/10 bg-white dark:border-white/10 dark:bg-black"
              />
              <div>
                <h1 className="text-xl font-semibold tracking-tight text-black dark:text-white">
                  About {site.name}
                </h1>
                <p className="text-sm text-black/60 dark:text-white/60">
                  Based in {site.location}
                </p>
              </div>
            </div>
            <p className="text-sm leading-7 text-black/70 dark:text-white/70">
              I’m a developer who loves building products that feel polished and
              fast. My focus is on clean UI, solid performance, and maintainable
              code—from design systems to server-rendered pages.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white transition hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
              >
                Explore Projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-full border border-black/15 px-6 text-sm font-semibold text-black/80 transition hover:bg-black/5 dark:border-white/15 dark:text-white/80 dark:hover:bg-white/10"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black">
              <h2 className="text-base font-semibold tracking-tight text-black dark:text-white">
                Skills & Tools
              </h2>
              <p className="mt-2 text-sm text-black/60 dark:text-white/60">
                The stack I use most often:
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-black/70 dark:bg-white/10 dark:text-white/70"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black">
              <h2 className="text-base font-semibold tracking-tight text-black dark:text-white">
                What I’m looking for
              </h2>
              <p className="mt-2 text-sm leading-7 text-black/70 dark:text-white/70">
                Roles where I can own features end‑to‑end, collaborate closely
                with design, and ship improvements continuously.
              </p>
              <p className="mt-4 text-sm leading-7 text-black/70 dark:text-white/70">
                If you’re working on a product that values quality and speed,
                I’d love to help.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

