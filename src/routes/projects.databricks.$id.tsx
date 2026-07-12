import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

export const Route = createFileRoute("/projects/databricks/$id")({
  loader: ({ params }) => {
    const m = params.id.match(/^dbx-(\d{2})$/);
    if (!m) throw notFound();
    const n = parseInt(m[1], 10);
    if (n < 1 || n > 9) throw notFound();
    return { number: n, code: `DBX-${m[1]}` };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Databricks Project — Not Found" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `Databricks Project ${String(loaderData.number).padStart(2, "0")} — Jassim Mohamed Kutty`;
    return {
      meta: [
        { title },
        { name: "description", content: "Azure Databricks case study. Detailed write-up coming soon." },
      ],
    };
  },
  component: DatabricksProjectDetail,
  notFoundComponent: ProjectNotFound,
});

function DatabricksProjectDetail() {
  const { number, code } = Route.useLoaderData();
  const nn = String(number).padStart(2, "0");

  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-4">
          <Link
            to="/projects/databricks"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Databricks Projects
          </Link>

          <div className="glass rounded-2xl p-8 md:p-10">
            <span className="text-[10px] font-mono uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-md">
              {code}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-3">
              Databricks Project <span className="gradient-text">{nn}</span>
            </h1>
            <p className="text-muted-foreground">Detailed case study coming soon.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function ProjectNotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground grid place-items-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-3">Project not found</h1>
        <Link
          to="/projects/databricks"
          className="inline-flex items-center gap-2 rounded-lg px-4 py-2 gradient-primary text-background text-sm font-medium"
        >
          <ArrowLeft size={14} /> Back to Databricks Projects
        </Link>
      </div>
    </main>
  );
}
