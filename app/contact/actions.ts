"use server";

export type ContactFormState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | {
      status: "error";
      message: string;
      fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
    };

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: NonNullable<
    Extract<ContactFormState, { status: "error" }>["fieldErrors"]
  > = {};

  if (name.length < 2) fieldErrors.name = "Please enter your name.";
  if (!isValidEmail(email)) fieldErrors.email = "Please enter a valid email.";
  if (message.length < 10)
    fieldErrors.message = "Message should be at least 10 characters.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors,
    };
  }

  // Replace this with an email provider, database write, or webhook.
  console.log("New contact form submission:", { name, email, message });

  return {
    status: "success",
    message: "Thanks! Your message was sent successfully.",
  };
}

