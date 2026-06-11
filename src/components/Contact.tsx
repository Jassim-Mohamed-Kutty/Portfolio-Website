import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { Mail, MapPin, Linkedin, Phone, Download, Send } from "lucide-react";
import { toast } from "sonner";

const items = [
  { icon: MapPin, label: "Location", value: "Bengaluru, India", href: null },
  { icon: Mail, label: "Email", value: "jassimkutty19@gmail.com", href: "mailto:jassimkutty19@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: "https://www.linkedin.com/in/jassim-mohamed-kutty/" },
  { icon: Phone, label: "Phone", value: "Available on request", href: null },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      subject: String(data.get("subject") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    setStatus("sending");
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("sent");
      toast.success("Message sent! I'll get back to you soon.");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("idle");
      toast.error("Couldn't send. Please try again or email me directly.");
    }
  };


  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build something <span className="gradient-text">data-driven</span></>}
      subtitle="Open to Data Analyst, Power BI Developer, Analytics Engineer & Data Engineering opportunities."
    >
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {items.map((it) => {
            const inner = (
              <>
                <div className="h-11 w-11 rounded-xl glass grid place-items-center text-primary flex-shrink-0">
                  <it.icon size={18} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{it.label}</div>
                  <div className="text-sm font-medium text-foreground">{it.value}</div>
                </div>
              </>
            );
            return it.href ? (
              <a key={it.label} href={it.href} className="glass glass-hover rounded-2xl p-4 flex items-center gap-4">
                {inner}
              </a>
            ) : (
              <div key={it.label} className="glass rounded-2xl p-4 flex items-center gap-4">
                {inner}
              </div>
            );
          })}

          <a
            href="/resume.pdf"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-medium gradient-primary text-background hover:opacity-90 transition glow"
          >
            <Download size={16} /> Download Resume
          </a>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 md:p-8 space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Name</label>
              <input
                name="name"
                required
                className="w-full rounded-xl bg-surface/60 border border-glass-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-xl bg-surface/60 border border-glass-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block">Subject</label>
            <input
              name="subject"
              required
              className="w-full rounded-xl bg-surface/60 border border-glass-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition"
              placeholder="What's this about?"
            />
          </div>
          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full rounded-xl bg-surface/60 border border-glass-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition resize-none"
              placeholder="Tell me about your project or role..."
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium gradient-primary text-background hover:opacity-90 transition disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : status === "sent" ? "Sent ✓" : <>Send Message <Send size={14} /></>}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
