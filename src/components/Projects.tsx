import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Database, Layers } from "lucide-react";
import { Section } from "./Section";

const fabricFocus = [
  "Data Ingestion",
  "Lakehouse Architecture",
  "Data Modeling",
  "Real-Time Analytics",
  "Governance",
  "Executive Reporting",
];

const databricksFocus = [
  "PySpark",
  "Delta Lake",
  "Data Pipelines",
  "Performance Optimization",
  "Unity Catalog",
  "Data Engineering",
];

const categories = [
  {
    to: "/projects/fabric" as const,
    label: "Microsoft Fabric",
    count: 11,
    icon: Layers,
    focus: fabricFocus,
  },
  {
    to: "/projects/databricks" as const,
    label: "Azure Databricks",
    count: 9,
    icon: Database,
    focus: databricksFocus,
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects Portfolio"
      title={
        <>
          Data <span className="gradient-text">Engineering Projects</span>
        </>
      }
      subtitle="20 real-world analytics and data engineering case studies spanning Microsoft Fabric and Azure Databricks — covering ingestion, transformation, modeling, governance, optimization, and executive reporting."
    >
      <div className="grid md:grid-cols-2 gap-4">
        {categories.map((c) => {
          const Icon = c.icon;
          return (
            <Link
              key={c.to}
              to={c.to}
              className="text-left glass glass-hover rounded-2xl p-6 border border-glass-border hover:border-primary/50 hover:shadow-[0_0_40px_-15px_rgba(56,189,248,0.5)] transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl grid place-items-center bg-surface/60 text-primary group-hover:gradient-primary group-hover:text-background transition-all">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{c.label}</h3>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                    {c.count} Case Studies
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {c.focus.map((f) => (
                  <span
                    key={f}
                    className="text-[11px] rounded-md px-2 py-1 bg-surface/60 border border-glass-border text-muted-foreground"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
