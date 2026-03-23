import { Container } from "@/components/Container";
import { site } from "@/lib/site";

import { ContactForm } from "./ContactForm";

export default function ContactPage() {
  return (
    <Container>
      <section className="py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-white">
              Contact
            </h1>
            <p className="max-w-xl text-sm leading-7 text-black/70 dark:text-white/70">
              Have a question, want to collaborate, or need a website built?
              Send a message and I’ll get back to you.
            </p>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black">
              <h2 className="text-base font-semibold tracking-tight text-black dark:text-white">
                Quick links
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-black/70 underline-offset-4 hover:underline dark:text-white/70"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={site.links.github}
                    className="text-black/70 underline-offset-4 hover:underline dark:text-white/70"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={site.links.linkedin}
                    className="text-black/70 underline-offset-4 hover:underline dark:text-white/70"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
              <p className="mt-4 text-xs text-black/50 dark:text-white/50">
                This form uses a Server Action (runs on the server).
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black">
            <ContactForm />
          </div>
        </div>
      </section>
    </Container>
  );
}

