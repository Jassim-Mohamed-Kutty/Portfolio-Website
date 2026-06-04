import { motion } from "framer-motion";
import { Section } from "./Section";
import { ShieldCheck, ExternalLink, Award } from "lucide-react";
import databricksBadge from "@/assets/databricks-data-analyst-associate.png.asset.json";

const certs = [
  {
    title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    issuer: "Microsoft",
    desc: "Validates expertise in data preparation, modeling, visualization, and business analytics using Power BI. Demonstrates the ability to transform data into actionable business insights and enable self-service analytics. The certification focuses on Power Query, DAX, data modeling, reporting, and dashboard development.",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/Jassim-Mohamed-Kutty/662AFEF692F3C686?sharingId=8BF7755085BB9E26",
    badge: "https://images.credly.com/size/340x340/images/9f8f5b2f-9c44-4ee0-86f4-1d35d2a3f4ac/azure-data-fundamentals-600x600.png",
    badgeAlt: "Microsoft PL-300 Power BI Data Analyst Associate badge",
    badgeUrl: "https://learn.microsoft.com/media/learn/certification/badges/power-bi-data-analyst-associate.svg",
    logo: "M",
    logoGradient: "from-[#F25022] via-[#7FBA00] to-[#00A4EF]",
  },
  {
    title: "Databricks Certified Data Analyst Associate",
    issuer: "Databricks",
    desc: "Validates proficiency in Databricks SQL, data exploration, dashboard creation, visualization, and analytics workflows within the Databricks Lakehouse Platform.",
    url: "https://credentials.databricks.com/49daa044-ab9a-40dd-a8b2-88a302e56ab3#acc.wAb0qYTK",
    badge: "https://images.credly.com/size/340x340/images/4a4d4b89-d181-4d2e-9c8e-3a3a3a3a3a3a/databricks-data-analyst-associate.png",
    badgeAlt: "Databricks Certified Data Analyst Associate badge",
    badgeUrl: "https://images.credly.com/size/340x340/images/3b3b6c4f-7b7e-4e6b-9c1a-7d3b3b3b3b3b/databricks-certified-data-analyst-associate.png",
    logo: "D",
    logoGradient: "from-[#FF3621] to-[#FF8C42]",
  },
];

const stats = [
  { label: "Certifications Earned", value: "2" },
  { label: "Platforms", value: "Microsoft, Databricks" },
  { label: "Focus Areas", value: "Power BI, Analytics, Lakehouse" },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title={<>Industry-recognized <span className="gradient-text">credentials</span></>}
      subtitle="Industry-recognized certifications demonstrating expertise in Business Intelligence, Analytics, and Modern Data Platforms."
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl p-5 mb-8 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-primary mb-1">{s.label}</div>
            <div className="text-sm font-semibold text-foreground">{s.value}</div>
          </div>
        ))}
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {certs.map((c, i) => (
          <motion.a
            key={c.title}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass glass-hover rounded-2xl p-7 group relative overflow-hidden block"
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                 style={{ background: "radial-gradient(600px circle at 50% 0%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 60%)" }} />
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full gradient-primary opacity-0 group-hover:opacity-20 blur-3xl transition-opacity" />

            <div className="relative flex items-start justify-between gap-4 mb-5">
              <div className="flex items-center gap-3">
                <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${c.logoGradient} grid place-items-center font-bold text-white text-lg shadow-lg`}>
                  {c.logo}
                </div>
                <div>
                  <div className="text-xs font-mono text-primary">{c.issuer}</div>
                  <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground mt-0.5">
                    <ShieldCheck size={12} className="text-secondary" />
                    Verified Credential
                  </div>
                </div>
              </div>
              <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>

            <div className="relative flex justify-center mb-5">
              <motion.div
                whileHover={{ scale: 1.06, rotate: -2 }}
                transition={{ type: "spring", stiffness: 220, damping: 14 }}
                className={`h-28 w-28 rounded-2xl grid place-items-center shadow-xl ring-1 ring-glass-border overflow-hidden ${c.image ? "bg-background/40" : "gradient-primary text-background"}`}
              >
                {c.image ? (
                  <img src={c.image} alt={c.badgeAlt} className="h-full w-full object-contain p-1" />
                ) : (
                  <Award size={48} strokeWidth={1.5} />
                )}
              </motion.div>
            </div>

            <h3 className="relative text-base font-semibold text-foreground mb-2 leading-snug">{c.title}</h3>
            <p className="relative text-sm text-muted-foreground leading-relaxed mb-5">{c.desc}</p>

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium gradient-primary text-background group-hover:opacity-90 transition">
                View Credential
                <ExternalLink size={14} />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
