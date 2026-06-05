import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, MapPin, Calendar, Quote } from "lucide-react";
import educationHero from "@/assets/education-hero.png.asset.json";


export function Education() {
  const subjects = ["Mathematics", "Statistics", "Economics"];

  return (
    <Section
      id="education"
      eyebrow="Education"
      title={<>Academic <span className="gradient-text">foundation</span></>}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative glass glass-hover rounded-3xl p-8 md:p-12 overflow-hidden"
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-10 md:gap-14 items-center">
          {/* Left: visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative aspect-square max-w-md mx-auto w-full"
          >
            <div className="absolute inset-0 rounded-3xl bg-surface/60" />
            <motion.img
              src={educationHero.url}
              alt="Graduation cap on stack of books with diploma"
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative w-full h-full object-contain rounded-3xl opacity-80 brightness-75 contrast-90"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-background/80 via-transparent to-background/40 pointer-events-none" />
          </motion.div>


          {/* Right: details */}
          <div className="relative">
            {/* Vertical accent line */}
            <div className="hidden md:block absolute -left-7 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

            <div className="flex items-start gap-4 mb-5">
              <div className="h-12 w-12 rounded-2xl border border-primary/40 bg-primary/10 grid place-items-center flex-shrink-0">
                <GraduationCap className="text-primary" size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Bachelor of Science
                  </h3>
                  <span className="text-xs font-medium rounded-full px-3 py-1 border border-primary/40 text-primary bg-primary/5 whitespace-nowrap">
                    Triple Major
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-base md:text-lg font-semibold">
                  {subjects.map((s, i) => (
                    <span key={s} className="flex items-center gap-3">
                      <span className="text-foreground">{s}</span>
                      {i < subjects.length - 1 && (
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-glass-border via-primary/30 to-transparent my-5" />

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="h-9 w-9 rounded-full border border-glass-border bg-surface/60 grid place-items-center flex-shrink-0">
                  <MapPin size={16} className="text-primary" />
                </div>
                <span>St. Joseph's College, Bengaluru</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="h-9 w-9 rounded-full border border-glass-border bg-surface/60 grid place-items-center flex-shrink-0">
                  <Calendar size={16} className="text-primary" />
                </div>
                <span className="font-mono text-sm">2019 — 2022</span>
              </div>
            </div>

            <div className="relative rounded-2xl border border-glass-border bg-surface/40 p-5 pl-12">
              <Quote className="absolute left-4 top-4 text-primary" size={22} />
              <p className="text-muted-foreground leading-relaxed">
                A strong academic foundation in{" "}
                <span className="text-primary font-semibold">quantitative reasoning</span>,{" "}
                <span className="text-primary font-semibold">statistical analysis</span>, and{" "}
                <span className="text-primary font-semibold">business economics</span>.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
