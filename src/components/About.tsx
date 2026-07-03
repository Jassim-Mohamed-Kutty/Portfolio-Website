import { motion } from "framer-motion";
import { Section } from "./Section";
import { Sparkles, Target, TrendingUp, Users } from "lucide-react";

const journey = [
  { year: "Now", title: "Analytics Engineer", desc: "Scaling BI with Databricks, Azure & semantic modeling at Smiths Detection" },
  { year: "2022 — 2024", title: "Data Analyst", desc: "Built automated reporting frameworks and optimized schemas at Mix Consultants & Clearing Co. W.L.L." },
  { year: "2022", title: "Started Analytics Journey", desc: "Graduated with a Triple Major in Math, Economics & Statistics" },
];

const pillars = [
  { icon: Target, title: "Business-First", text: "Translating ambiguous business problems into measurable analytics outcomes." },
  { icon: TrendingUp, title: "Engineering Mindset", text: "Building reusable, governed datasets — not just dashboards." },
  { icon: Users, title: "Stakeholder Fluency", text: "Working across Finance, HR, Supply Chain & Service ops globally." },
  { icon: Sparkles, title: "Continuous Growth", text: "Upskilling toward Data Engineering & Analytics Engineering roles." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title={<>Bridging <span className="gradient-text">business</span> & <span className="gradient-text">data analytics</span></>}
      subtitle="Four years turning raw data into decisions — and now leveling up toward modern analytics engineering."
    >
      <div className="grid lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 space-y-4 text-muted-foreground leading-relaxed"
        >
          <p>
            I'm a results-driven <span className="text-foreground font-medium">Analytics Engineer</span> with experience delivering scalable analytics across Service Operations, Service Delivery, and Global Services.
          </p>
          <p>
            I specialize in transforming raw data into decision-grade insights using <span className="text-primary">Power BI, SQL, Databricks, and Azure</span>, with deep familiarity in enterprise platforms like SAP, Salesforce, and ServiceMax.
          </p>
          <p>
            My journey spans Business Intelligence and <span className="text-secondary">Analytics Engineering</span> — building semantic layers, curated data products, and reliable pipelines that power the next generation of reporting.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-4">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-xl p-4 bg-surface/40 border border-glass-border">
                <p.icon size={18} className="text-primary mb-2" />
                <div className="text-sm font-semibold text-foreground mb-1">{p.title}</div>
                <div className="text-xs text-muted-foreground leading-snug">{p.text}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
          <ul className="space-y-6">
            {journey.map((j, i) => (
              <motion.li
                key={j.year}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12"
              >
                <span className="absolute left-2 top-1.5 h-4 w-4 rounded-full gradient-primary ring-4 ring-background" />
                <div className="glass rounded-2xl p-5">
                  <div className="text-xs font-mono text-primary mb-1">{j.year}</div>
                  <div className="font-semibold text-foreground mb-1">{j.title}</div>
                  <div className="text-sm text-muted-foreground">{j.desc}</div>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
