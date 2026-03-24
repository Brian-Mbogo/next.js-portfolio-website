import Link from "next/link";

import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 py-10 text-sm dark:border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-black/70 dark:text-white/70">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={site.links.github}
            className="text-black/70 underline-offset-4 hover:underline dark:text-white/70"
          >
            GitHub
          </a>
          <a
            href={site.links.linkedin}
            className="text-black/70 underline-offset-4 hover:underline dark:text-white/70"
          >
            LinkedIn
          </a>
          <Link
            href="/contact"
            className="text-black/70 underline-offset-4 hover:underline dark:text-white/70"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
