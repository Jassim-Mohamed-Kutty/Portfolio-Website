import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  subject: z.string().trim().min(1).max(300),
  message: z.string().trim().min(1).max(5000),
});

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return json({ error: "Invalid JSON" }, 400);
        }

        const parsed = ContactSchema.safeParse(payload);
        if (!parsed.success) {
          return json({ error: "Invalid input", details: parsed.error.flatten() }, 400);
        }

        const { name, email, subject, message } = parsed.data;

        const { error } = await supabaseAdmin
          .from("contact_submissions")
          .insert({ name, email, subject, message });

        if (error) {
          console.error("[contact] insert failed", error);
          return json({ error: "Could not save submission" }, 500);
        }

        // TODO: send email to jassim.kutty@outlook.com once email domain is verified.

        return json({ ok: true });
      },
    },
  },
});
