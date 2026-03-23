import Link from "next/link";

import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container>
      <section className="py-20">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-white">
          Page not found
        </h1>
        <p className="mt-3 max-w-prose text-sm leading-7 text-black/70 dark:text-white/70">
          The page you’re looking for doesn’t exist. Check the URL or head back
          to the home page.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white transition hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
        >
          Go home
        </Link>
      </section>
    </Container>
  );
}

