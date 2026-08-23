import { useEffect, useState, createContext, useContext } from "react";
import { motion } from "framer-motion";
import { X, Maximize2 } from "lucide-react";
import type { ReactNode } from "react";

const BASE = "/images/case-studies/north-meridian";

type LightboxCtx = { open: (src: string, caption: string) => void };
const Ctx = createContext<LightboxCtx>({ open: () => {} });

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<{ src: string; caption: string } | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Ctx.Provider value={{ open: (src, caption) => setActive({ src, caption }) }}>
      {children}
      {active && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-8"
          onClick={() => setActive(null)}
        >
          <button
            aria-label="Close image"
            className="absolute top-5 right-5 rounded-lg glass p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setActive(null)}
          >
            <X size={18} />
          </button>
          <div className="max-h-[85vh] w-full max-w-6xl overflow-auto rounded-xl border border-glass-border">
            <img src={active.src} alt={active.caption} className="w-full h-auto" />
          </div>
          <p className="mt-4 text-xs text-muted-foreground text-center max-w-2xl">
            {active.caption}
          </p>
        </div>
      )}
    </Ctx.Provider>
  );
}

export function Shot({
  n,
  caption,
  size = "lg",
}: {
  n: string;
  caption: string;
  size?: "lg" | "sm";
}) {
  const { open } = useContext(Ctx);
  const src = `${BASE}/${n}.png`;
  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`group ${size === "lg" ? "my-8" : ""}`}
    >
      <button
        type="button"
        onClick={() => open(src, caption)}
        className="relative block w-full overflow-hidden rounded-xl border border-glass-border bg-surface/40 hover:border-primary/40 transition-colors"
      >
        <div className={size === "lg" ? "overflow-x-auto" : "overflow-hidden"}>
          <img
            src={src}
            alt={caption}
            loading="lazy"
            className={`w-full h-auto ${size === "lg" ? "min-w-[560px]" : ""}`}
          />
        </div>
        <span className="absolute top-2.5 right-2.5 rounded-md bg-background/70 backdrop-blur p-1.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
          <Maximize2 size={13} />
        </span>
      </button>
      <figcaption className="mt-2.5 text-xs text-muted-foreground leading-relaxed">
        <span className="font-mono text-primary/80 mr-2">{n}</span>
        {caption}
      </figcaption>
    </motion.figure>
  );
}

export function ShotGrid({ children }: { children: ReactNode }) {
  return <div className="grid sm:grid-cols-2 gap-5 my-8">{children}</div>;
}

export function Callout({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="my-8 rounded-xl border-l-2 border-primary bg-primary/[0.06] px-5 py-4">
      <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-primary mb-1.5">
        {label}
      </div>
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}

export function Flow({ steps }: { steps: string[] }) {
  return (
    <div className="my-8 flex flex-wrap items-center gap-2">
      {steps.map((s, i) => (
        <span key={s} className="flex items-center gap-2">
          <span className="rounded-lg border border-glass-border bg-surface/50 px-3 py-2 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
            {s}
          </span>
          {i < steps.length - 1 && <span className="text-primary/50 text-xs">→</span>}
        </span>
      ))}
    </div>
  );
}

export function CSSection({
  id,
  label,
  headline,
  children,
}: {
  id?: string;
  label?: string;
  headline?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 py-12 border-t border-glass-border/60 first:border-0">
      {label && (
        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary mb-3">
          {label}
        </div>
      )}
      {headline && (
        <h2 className="text-2xl md:text-3xl font-bold mb-5 leading-snug">{headline}</h2>
      )}
      <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}
