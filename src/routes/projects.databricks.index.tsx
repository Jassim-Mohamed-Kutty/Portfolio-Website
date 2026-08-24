import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

const projects = Array.from({ length: 9 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    id: `dbx-${n}`,
    code: `DBX-${n}`,
    title: `Databricks Project ${n}`,
    description:
      "Hands-on Azure Databricks engineering case study spanning PySpark pipelines, Delta Lake modeling, and performance tuning. Detailed write-up coming soon.",
    tech: ["Azure Databricks", "PySpark", "Delta Lake"],
  };
});

export const Route = createFileRoute("/projects/databricks/")({
  head: () => ({
    meta: [
      { title: "Azure Databricks Projects — Jassim Mohamed Kutty" },
      {
        name: "description",
        content:
          "9 Azure Databricks case studies spanning PySpark pipelines, Delta Lake modeling, Unity Catalog governance, and performance tuning.",
      },
      { property: "og:title", content: "Azure Databricks Projects — Jassim Mohamed Kutty" },
    ],
  }),
  component: DatabricksProjects,
});

function DatabricksProjects() {
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
              9 Case Studies
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-3">
              Azure <span className="gradient-text">Databricks</span> Projects
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Hands-on Azure Databricks engineering case studies spanning PySpark
              pipelines, Delta Lake modeling, Unity Catalog governance, and performance
              tuning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <Link
                key={p.id}
                to="/projects/databricks/$id"
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
