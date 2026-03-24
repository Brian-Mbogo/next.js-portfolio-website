import Link from "next/link";

import { site } from "@/lib/site";
import styles from "@/styles/header.module.css";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/75 backdrop-blur dark:border-white/10 dark:bg-black/50">
      <a href="#content" className={styles.skipLink}>
        Skip to content
      </a>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="font-semibold tracking-tight text-black dark:text-white"
        >
          {site.name}
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-4 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-black/80 transition hover:bg-black/5 hover:text-black dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="relative sm:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-black/15 bg-white/60 px-4 py-2 text-sm font-semibold text-black/80 backdrop-blur transition hover:bg-white dark:border-white/15 dark:bg-black/40 dark:text-white/80 dark:hover:bg-black/70 [&::-webkit-details-marker]:hidden">
            Menu
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="opacity-80"
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </summary>
          <div className="absolute right-0 mt-3 w-52 overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-2 shadow-lg backdrop-blur dark:border-white/10 dark:bg-black/90">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl px-4 py-2 text-sm font-medium text-black/80 transition hover:bg-black/5 hover:text-black dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
