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
      "Delivered and enhanced 40+ Power BI reports across Service Delivery, Global Service, Service Operations, and Supply Chain functions, enabling data-driven decision-making and improved operational visibility.",
      "Automated and consolidated legacy reporting processes, eliminating 150+ manual reporting hours per month across multiple business functions.",
      "Built enterprise-grade Power BI analytics solutions integrating SAP, Salesforce (ServiceMax), SQL Server, and SharePoint data, delivering standardized reporting and operational insights to 350+ monthly users.",
      "Reduced Dev-to-Production deployment turnaround time by over 85%, from approximately 2 weeks to 1–2 days, by owning production releases and streamlining deployment processes.",
      "Resolved 110+ service requests within SLA, spanning report enhancements, dashboard development, data-quality investigations, workspace administration, and reporting support.",
      "Led migration readiness assessments for 75+ Power BI workspaces and 400+ reports, documenting data sources, dependencies, servers, databases, and notebook integrations to support enterprise reporting modernization.",
      "Improved reporting accuracy and governance by identifying and helping resolve SAP–SVMX data discrepancies, contributing to an increase in system reconciliation from 85% to 98%.",
      "Developed 15+ reusable Power BI templates, reporting standards, documentation packages, and design assets, improving delivery consistency, scalability, and quality across a growing Data Analytics team.",
      "Trained and mentored 5 new team members through a structured onboarding framework, accelerating ramp-up time and enabling faster adoption of analytics tools, delivery standards, and governance processes.",
      "Built a scalable knowledge repository comprising 100+ training videos and 40+ hours of content covering Power BI, Databricks, data modeling, visualization best practices, governance, and support processes, ensuring consistent knowledge transfer for current and future team members.",
    ],
  },
  {
    company: "Mix Consultants & Clearing Co. W.L.L.",
    location: "Bahrain",
    role: "Data Analyst",
    period: "Aug 2022 — Sep 2024",
    bullets: [
      "Built interactive Power BI dashboards that tracked key business metrics, increasing reporting accessibility and reducing ad-hoc data requests by 50%.",
      "Architected optimized star and snowflake schemas to support scalable analytics and improve reporting performance.",
      "Automated recurring reporting processes using Power Query, eliminating 10+ hours of manual effort per week and improving reporting efficiency.",
      "Implemented data validation and quality checks across reporting datasets, reducing reporting discrepancies by 30% and improving data accuracy.",
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
        {/* Single continuous timeline spine */}
        <div className="absolute left-4 md:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent" />

        <div className="space-y-10">
          {roles.map((r) => (
            <motion.div
              key={r.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-[32px_1fr] md:grid-cols-[80px_1fr] gap-x-4 md:gap-x-8"
            >
              {/* Timeline dot */}
              <div className="flex justify-center relative pt-6">
                <div className="h-3 w-3 md:h-4 md:w-4 rounded-full gradient-primary ring-2 md:ring-4 ring-background" />
              </div>

              {/* Experience card */}
              <div className="glass glass-hover rounded-2xl p-6">
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
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
