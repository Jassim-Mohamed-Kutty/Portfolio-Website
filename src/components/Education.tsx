import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title={<>Academic <span className="gradient-text">foundation</span></>}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto glass glass-hover rounded-2xl p-8"
      >
        <div className="flex gap-5 items-start">
          <div className="h-14 w-14 rounded-2xl gradient-primary grid place-items-center text-background flex-shrink-0">
            <GraduationCap size={26} />
          </div>
          <div className="flex-1">
            <div className="text-xs font-mono text-primary mb-1">2019 — 2022</div>
            <h3 className="text-xl font-semibold text-foreground mb-1">Bachelor of Science (Triple Major)</h3>
            <p className="text-muted-foreground mb-4">St. Joseph's College, Bengaluru</p>
            <div className="flex flex-wrap gap-2">
              {["Mathematics", "Economics", "Statistics"].map((m) => (
                <span key={m} className="text-xs font-medium rounded-lg px-3 py-1.5 bg-surface/60 border border-glass-border text-foreground">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
