import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase } from "lucide-react";

const roles = [
  {
    company: "Smiths Detection",
    location: "Bengaluru, India",
    role: "Analytics Engineer",
    period: "Oct 2024 — Present",
    bullets: [
      "Delivered 20+ Power BI solutions integrating SAP, Salesforce, SharePoint, Azure Data Lake & SQL Server",
      "Reduced report turnaround time by 60% through reusable semantic models",
      "Collaborated with 30+ global stakeholders across regions",
      "Improved data quality by 30% with governed BI datasets",
      "Standardized reporting frameworks across the org",
    ],
  },
  {
    company: "Mix Consultants & Clearing Co. W.L.L.",
    location: "Bahrain",
    role: "Data Analyst",
    period: "Aug 2022 — Sep 2024",
    bullets: [
      "Automated reporting processes, improving efficiency by 40%",
      "Reduced manual data preparation by 90%",
      "Designed optimized star & snowflake schemas",
      "Enhanced reporting performance by 35%",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>A track record of <span className="gradient-text">measurable impact</span></>}
      subtitle="Four years across global enterprises, building analytics products that move the needle."
    >
      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent -translate-x-1/2" />
        <div className="space-y-10">
          {roles.map((r, i) => (
            <motion.div
              key={r.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`md:grid md:grid-cols-2 md:gap-10 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="glass glass-hover rounded-2xl p-6 relative">
                <div className="absolute hidden md:block top-6 -right-[34px] h-4 w-4 rounded-full gradient-primary ring-4 ring-background" style={i % 2 ? { right: "auto", left: "-34px" } : {}} />
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl glass grid place-items-center">
                    <Briefcase size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{r.role}</div>
                    <div className="text-sm text-primary">{r.company}</div>
                    <div className="text-xs text-muted-foreground">{r.location}</div>
                  </div>
                </div>
                <div className="text-xs font-mono text-muted-foreground mb-4">{r.period}</div>
                <ul className="space-y-2">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
