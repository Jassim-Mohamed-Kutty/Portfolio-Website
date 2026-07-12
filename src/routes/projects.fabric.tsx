import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

const projects = Array.from({ length: 11 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    id: `fab-${n}`,
    code: `FAB-${n}`,
    title: `Fabric Project ${n}`,
    description:
      "End-to-end Microsoft Fabric case study covering ingestion, lakehouse modeling, and executive reporting. Detailed write-up coming soon.",
    tech: ["Microsoft Fabric", "OneLake", "Power BI"],
  };
});

export const Route = createFileRoute("/projects/fabric")({
  head: () => ({
    meta: [
      { title: "Microsoft Fabric Projects — Jassim Mohamed Kutty" },
      {
        name: "description",
        content:
          "11 Microsoft Fabric case studies covering ingestion, lakehouse architecture, modeling, governance, and executive reporting.",
      },
      { property: "og:title", content: "Microsoft Fabric Projects — Jassim Mohamed Kutty" },
    ],
  }),
  component: FabricProjects,
});

function FabricProjects() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <Link
            to="/"
            hash="projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>

          <div className="mb-10">
            <span className="text-[11px] font-mono uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-md">
              11 Case Studies
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-3">
              Microsoft <span className="gradient-text">Fabric</span> Projects
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              End-to-end Microsoft Fabric case studies covering ingestion, lakehouse
              architecture, modeling, governance, and executive reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <Link
                key={p.id}
                to="/projects/fabric/$id"
                params={{ id: p.id }}
                className="glass glass-hover rounded-2xl p-6 flex flex-col group h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-md">
                    {p.code}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] rounded-md px-2 py-1 bg-surface/60 border border-glass-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
