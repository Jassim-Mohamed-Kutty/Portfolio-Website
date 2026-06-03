import { motion } from "framer-motion";
import { Section } from "./Section";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Error Management Dashboard",
    desc: "Reconciliation framework comparing SAP and ServiceMax data to identify discrepancies and improve data quality.",
    tech: ["Power BI", "SQL", "SAP", "ServiceMax"],
    tag: "Data Quality",
  },
  {
    title: "Work Order Analytics Dashboard",
    desc: "Operational dashboards tracking SLA compliance, backlog aging, service performance, and work order lifecycle metrics.",
    tech: ["Power BI", "SQL"],
    tag: "Operations",
  },
  {
    title: "Supply Chain Reporting Automation",
    desc: "Automated APAC & Middle East reporting workflows, reducing manual effort and accelerating decision-making.",
    tech: ["Power BI", "SQL", "Excel"],
    tag: "Automation",
  },
  {
    title: "Databricks Semantic Layer",
    desc: "Designed analytics-ready semantic models and curated datasets using Databricks and Azure Data Lake.",
    tech: ["Databricks", "Spark SQL", "Azure"],
    tag: "Analytics Engineering",
  },
  {
    title: "Service Operations Performance Analytics",
    desc: "KPI-driven reporting solutions for global service teams and operational leadership.",
    tech: ["Power BI", "SQL", "SAP"],
    tag: "Executive Reporting",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title={<>Selected <span className="gradient-text">work</span></>}
      subtitle="A snapshot of analytics solutions delivered across global enterprise environments."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass glass-hover rounded-2xl p-6 flex flex-col group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-md">
                {p.tag}
              </span>
              <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {p.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span key={t} className="text-[11px] rounded-md px-2 py-1 bg-surface/60 border border-glass-border text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
