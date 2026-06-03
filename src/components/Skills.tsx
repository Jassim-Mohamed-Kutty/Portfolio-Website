import { motion } from "framer-motion";
import { Section } from "./Section";
import { BarChart3, Database, Cloud, Cpu, Users } from "lucide-react";

const groups = [
  {
    icon: BarChart3,
    title: "Business Intelligence",
    items: ["Power BI", "DAX", "Power Query", "Dashboard Development", "KPI Design", "Executive Reporting"],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    items: ["SQL", "Data Modeling", "Business Analysis", "Analytics Engineering", "Data Warehousing", "Requirements Gathering"],
  },
  {
    icon: Cpu,
    title: "Data Engineering",
    items: ["Databricks", "Spark SQL", "PySpark", "ETL Development", "Delta Lake", "Parquet", "Performance Optimization"],
  },
  {
    icon: Cloud,
    title: "Cloud & Enterprise",
    items: ["Azure Data Factory", "Azure Data Lake", "SAP", "Salesforce", "ServiceMax"],
  },
  {
    icon: Users,
    title: "Professional Skills",
    items: ["Stakeholder Management", "Problem Solving", "Communication", "Project Delivery", "Cross-functional Collaboration"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>The <span className="gradient-text">tech stack</span> behind the impact</>}
      subtitle="From BI dashboards to data lake pipelines — the tools I use every day."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass glass-hover rounded-2xl p-6 group"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-11 w-11 rounded-xl gradient-primary grid place-items-center text-background group-hover:scale-110 transition-transform">
                <g.icon size={20} />
              </div>
              <h3 className="font-semibold text-foreground">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="text-xs font-medium rounded-lg px-3 py-1.5 bg-surface/60 border border-glass-border text-muted-foreground hover:text-primary hover:border-primary/40 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
