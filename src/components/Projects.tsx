import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Database, Layers } from "lucide-react";
import { Section } from "./Section";

type Category = "fabric" | "databricks";

type CaseStudy = {
  slug: string;
  code: string;
  title: string;
  description: string;
  tech: string[];
  category: Category;
};

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

const fabricCases: CaseStudy[] = Array.from({ length: 11 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    slug: `fabric-${n}`,
    code: `FAB-${n}`,
    title: `Fabric Case Study ${n}`,
    description:
      "End-to-end Microsoft Fabric case study covering ingestion, lakehouse modeling, and executive reporting. Detailed write-up coming soon.",
    tech: ["Microsoft Fabric", "OneLake", "Power BI"],
    category: "fabric",
  };
});

const databricksCases: CaseStudy[] = Array.from({ length: 9 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    slug: `databricks-${n}`,
    code: `DBX-${n}`,
    title: `Databricks Case Study ${n}`,
    description:
      "Hands-on Azure Databricks engineering case study spanning PySpark pipelines, Delta Lake modeling, and performance tuning. Detailed write-up coming soon.",
    tech: ["Azure Databricks", "PySpark", "Delta Lake"],
    category: "databricks",
  };
});

const categories: {
  id: Category;
  label: string;
  count: number;
  alignment: string;
  icon: typeof Layers;
  focus: string[];
}[] = [
  {
    id: "fabric",
    label: "Microsoft Fabric",
    count: 11,
    alignment: "DP-600 / DP-700 aligned",
    icon: Layers,
    focus: fabricFocus,
  },
  {
    id: "databricks",
    label: "Azure Databricks",
    count: 9,
    alignment: "Databricks Data Engineer aligned",
    icon: Database,
    focus: databricksFocus,
  },
];

export function Projects() {
  const [active, setActive] = useState<Category>("fabric");
  const cases = active === "fabric" ? fabricCases : databricksCases;

  return (
    <Section
      id="projects"
      eyebrow="Case Studies Portfolio"
      title={
        <>
          Case Studies & <span className="gradient-text">Engineering Projects</span>
        </>
      }
      subtitle="20 real-world analytics and data engineering case studies spanning Microsoft Fabric and Azure Databricks — covering ingestion, transformation, modeling, governance, optimization, and executive reporting."
    >
      {/* Category cards */}
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {categories.map((c) => {
          const Icon = c.icon;
          const isActive = active === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`text-left glass glass-hover rounded-2xl p-6 border transition-all ${
                isActive
                  ? "border-primary/50 shadow-[0_0_40px_-15px_rgba(56,189,248,0.5)]"
                  : "border-glass-border"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`h-11 w-11 rounded-xl grid place-items-center ${
                      isActive ? "gradient-primary text-background" : "bg-surface/60 text-primary"
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{c.label}</h3>
                    <p className="text-xs font-mono text-muted-foreground mt-0.5">
                      {c.alignment}
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                  {c.count} Case Studies
                </span>
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
            </button>
          );
        })}
      </div>

      {/* Case study grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {cases.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Link
                to="/case-studies/$slug"
                params={{ slug: cs.slug }}
                className="glass glass-hover rounded-2xl p-6 flex flex-col group h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-md">
                    {cs.code}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cs.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {cs.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cs.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] rounded-md px-2 py-1 bg-surface/60 border border-glass-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-primary inline-flex items-center gap-1 mt-auto">
                  View Case Study <ArrowUpRight size={12} />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
