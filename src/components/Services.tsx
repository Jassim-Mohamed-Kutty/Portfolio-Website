import { motion } from "framer-motion";
import { Section } from "./Section";
import { LineChart, Layers, Workflow, Lightbulb } from "lucide-react";

const services = [
  { icon: LineChart, title: "Business Intelligence Solutions", desc: "Design and development of scalable Power BI dashboards and executive reporting solutions." },
  { icon: Layers, title: "Analytics Engineering", desc: "Building reusable semantic models, curated datasets, and analytics-ready data products." },
  { icon: Workflow, title: "Data Transformation & ETL", desc: "Developing efficient data pipelines using SQL, Databricks, and Azure technologies." },
  { icon: Lightbulb, title: "Business Analytics Consulting", desc: "Translating business requirements into actionable insights and analytical solutions." },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title={<>What I can <span className="gradient-text">build for you</span></>}
      subtitle="End-to-end analytics — from raw source systems to executive decisions."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass glass-hover rounded-2xl p-7 group relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full gradient-primary opacity-0 group-hover:opacity-20 blur-3xl transition-opacity" />
            <div className="relative">
              <div className="h-12 w-12 rounded-xl glass grid place-items-center mb-5 text-primary group-hover:text-secondary transition-colors">
                <s.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
