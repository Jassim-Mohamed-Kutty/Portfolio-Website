import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

type Category = "fabric" | "databricks";

function parseSlug(slug: string): { category: Category; number: number; code: string } | null {
  const m = slug.match(/^(fabric|databricks)-(\d{2})$/);
  if (!m) return null;
  const category = m[1] as Category;
  const n = parseInt(m[2], 10);
  const max = category === "fabric" ? 11 : 9;
  if (n < 1 || n > max) return null;
  return {
    category,
    number: n,
    code: `${category === "fabric" ? "FAB" : "DBX"}-${m[2]}`,
  };
}

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const parsed = parseSlug(params.slug);
    if (!parsed) throw notFound();
    return parsed;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Case Study — Not Found" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const label = loaderData.category === "fabric" ? "Fabric" : "Databricks";
    const title = `${label} Case Study ${String(loaderData.number).padStart(2, "0")} — Jassim Mohamed Kutty`;
    return {
      meta: [
        { title },
        {
          name: "description",
          content: `${label} case study by Jassim Mohamed Kutty. Detailed write-up coming soon.`,
        },
        { property: "og:title", content: title },
      ],
    };
  },
  component: CaseStudyDetail,
  notFoundComponent: CaseStudyNotFound,
});

const sections = [
  "Business Problem",
  "Architecture Diagram",
  "Data Model",
  "Technologies Used",
  "Implementation Steps",
  "Challenges",
  "Performance Optimizations",
  "Screenshots",
  "Dashboard Images",
  "Lessons Learned",
  "GitHub Link",
  "Certification Alignment",
];

function CaseStudyDetail() {
  const { category, number, code } = Route.useLoaderData();
  const label = category === "fabric" ? "Microsoft Fabric" : "Azure Databricks";
  const alignment =
    category === "fabric"
      ? "DP-600 / DP-700 aligned"
      : "Databricks Data Engineer aligned";
  const nn = String(number).padStart(2, "0");

  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-4">
          <Link
            to="/"
            hash="projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Case Studies
          </Link>

          <div className="glass rounded-2xl p-8 md:p-10 mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-md">
                {code}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground bg-surface/60 border border-glass-border px-2 py-1 rounded-md">
                {label}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground bg-surface/60 border border-glass-border px-2 py-1 rounded-md">
                {alignment}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              {label.split(" ")[0]} Case Study{" "}
              <span className="gradient-text">{nn}</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              A detailed end-to-end case study write-up is coming soon. This page will
              document the business problem, architecture, implementation, and outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {sections.map((s) => (
              <div
                key={s}
                className="glass rounded-xl p-5 border border-glass-border"
              >
                <h3 className="text-sm font-semibold text-foreground mb-1">{s}</h3>
                <p className="text-xs text-muted-foreground">Coming soon.</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground glass rounded-lg px-3 py-2">
              <Github size={14} /> Repository — TBD
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground glass rounded-lg px-3 py-2">
              <ExternalLink size={14} /> Live Report — TBD
            </span>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function CaseStudyNotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground grid place-items-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-3">Case study not found</h1>
        <p className="text-muted-foreground mb-6">
          The case study you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          hash="projects"
          className="inline-flex items-center gap-2 rounded-lg px-4 py-2 gradient-primary text-background text-sm font-medium"
        >
          <ArrowLeft size={14} /> Back to Case Studies
        </Link>
      </div>
    </main>
  );
}
