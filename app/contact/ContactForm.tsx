"use client";

import { useActionState } from "react";

import { submitContact, type ContactFormState } from "./actions";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  const errors = state.status === "error" ? state.fieldErrors : undefined;

  return (
    <form action={formAction} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-semibold text-black/80 dark:text-white/80"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="h-11 w-full rounded-xl border border-black/15 bg-white px-4 text-sm text-black shadow-sm outline-none transition focus:border-black/30 focus:ring-4 focus:ring-blue-500/15 dark:border-white/15 dark:bg-black dark:text-white dark:focus:border-white/30"
            aria-invalid={Boolean(errors?.name) || undefined}
          />
          {errors?.name ? (
            <p className="text-xs text-red-600 dark:text-red-400">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-black/80 dark:text-white/80"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="h-11 w-full rounded-xl border border-black/15 bg-white px-4 text-sm text-black shadow-sm outline-none transition focus:border-black/30 focus:ring-4 focus:ring-blue-500/15 dark:border-white/15 dark:bg-black dark:text-white dark:focus:border-white/30"
            aria-invalid={Boolean(errors?.email) || undefined}
          />
          {errors?.email ? (
            <p className="text-xs text-red-600 dark:text-red-400">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-semibold text-black/80 dark:text-white/80"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full resize-y rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-black shadow-sm outline-none transition focus:border-black/30 focus:ring-4 focus:ring-blue-500/15 dark:border-white/15 dark:bg-black dark:text-white dark:focus:border-white/30"
          aria-invalid={Boolean(errors?.message) || undefined}
        />
        {errors?.message ? (
          <p className="text-xs text-red-600 dark:text-red-400">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-11 w-full items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white transition hover:bg-black/90 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-black dark:hover:bg-white/90"
      >
        {pending ? "Sending…" : "Send message"}
      </button>

      <div aria-live="polite" className="min-h-5 text-sm">
        {state.status === "success" ? (
          <p className="text-emerald-700 dark:text-emerald-300">
            {state.message}
          </p>
        ) : state.status === "error" ? (
          <p className="text-red-700 dark:text-red-300">{state.message}</p>
        ) : null}
      </div>
    </form>
  );
}

