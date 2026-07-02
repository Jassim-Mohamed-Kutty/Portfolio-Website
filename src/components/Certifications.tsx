import { motion } from "framer-motion";
import { Section } from "./Section";
import { ShieldCheck, ExternalLink } from "lucide-react";
import databricksBadge from "@/assets/databricks-data-analyst-associate.png.asset.json";
import microsoftBadge from "@/assets/images/microsoft-pl300.png";
import fabricBadge from "@/assets/images/microsoft-dp600.png";

const certs = [
  {
    title: "Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)",
    desc: "Validates expertise in designing, creating, and deploying enterprise-scale analytics solutions using Microsoft Fabric. Covers data ingestion, transformation, modeling, and delivery across Lakehouses, Warehouses, and semantic models, along with performance optimization and security within the Fabric platform.",
    url: "https://learn.microsoft.com/api/credentials/share/en-gb/Jassim-Mohamed-Kutty/15A3CFA080ABA1AC?sharingId=8BF7755085BB9E26",
    image: fabricBadge,
    alt: "Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)",
  },
  {
    title: "Databricks Certified Data Analyst Associate",
    desc: "Validates proficiency in Databricks SQL, data exploration, dashboard creation, visualization, and analytics workflows within the Databricks Lakehouse Platform.",
    url: "https://credentials.databricks.com/49daa044-ab9a-40dd-a8b2-88a302e56ab3#acc.wAb0qYTK",
    image: databricksBadge.url,
    alt: "Databricks Certified Data Analyst Associate",
  },
  {
    title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    desc: "Validates expertise in data preparation, modeling, visualization, and business analytics using Power BI. Demonstrates the ability to transform data into actionable business insights and enable self-service analytics. The certification focuses on Power Query, DAX, data modeling, reporting, and dashboard development.",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/Jassim-Mohamed-Kutty/662AFEF692F3C686?sharingId=8BF7755085BB9E26",
    image: microsoftBadge,
    alt: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
  },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title={<>Industry-recognized <span className="gradient-text">credentials</span></>}
      subtitle="Industry-recognized certifications demonstrating expertise in Business Intelligence, Analytics, and Modern Data Platforms."
    >
      <div className="grid md:grid-cols-2 gap-10 md:gap-12 max-w-4xl mx-auto">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={c.alt}
              className="group relative block"
            >
              <div
                className="absolute inset-0 -m-6 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 35%, transparent), transparent 70%)" }}
              />
              <motion.img
                src={c.image}
                alt={c.alt}
                whileHover={{ scale: 1.06 }}
                transition={{ type: "spring", stiffness: 220, damping: 16 }}
                className="relative h-56 md:h-64 w-auto object-contain drop-shadow-2xl"
              />
            </a>

            <div className="mt-6 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <ShieldCheck size={14} className="text-secondary" />
              Verified Credential
            </div>

            <h3 className="mt-3 text-lg font-semibold text-foreground leading-snug max-w-sm">
              {c.title}
            </h3>

            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-sm">
              {c.desc}
            </p>

            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-secondary transition-colors"
            >
              View Credential
              <ExternalLink size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
