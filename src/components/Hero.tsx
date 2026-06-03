import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import profile from "@/assets/profile.png.asset.json";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "30+", label: "Analytics Solutions" },
  { value: "Global", label: "Stakeholder Reach" },
  { value: "Multi", label: "Industry Expertise" },
];

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >



            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Transforming <span className="gradient-text">Data</span> into<br />
              Business <span className="gradient-text">Impact</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground mb-3 font-medium">
              Data Analyst <span className="text-primary">•</span> Power BI Developer <span className="text-primary">•</span> Analytics Engineer
            </p>

            <p className="text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Building scalable analytics solutions through Power BI, SQL, Databricks, Azure, and modern data platforms to drive business decisions and operational excellence.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium gradient-primary text-background hover:opacity-90 transition glow">
                View Projects <ArrowRight size={16} />
              </a>
              <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium glass glass-hover text-foreground">
                <Download size={16} /> Download Resume
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium glass glass-hover text-foreground">
                <Mail size={16} /> Contact Me
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={14} className="text-primary" /> Bengaluru, India
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #38BDF8, #22D3EE, transparent 60%, #38BDF8)",
                  filter: "blur(20px)",
                  opacity: 0.5,
                }}
              />
              <div className="absolute inset-2 rounded-full gradient-primary opacity-40 blur-2xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/40 glow">
                <img src={profile.url} alt="Jassim Mohamed Kutty" width={768} height={768} className="w-full h-full object-cover" />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-2 -right-2 glass rounded-xl px-3 py-2 text-xs"
              >
                <div className="text-primary font-mono">SQL</div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-2 -left-4 glass rounded-xl px-3 py-2 text-xs"
              >
                <div className="text-secondary font-mono">Power BI</div>
              </motion.div>
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-1/2 -right-8 glass rounded-xl px-3 py-2 text-xs"
              >
                <div className="text-primary font-mono">Azure</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-16"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass glass-hover rounded-2xl p-5 text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{s.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
