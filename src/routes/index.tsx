import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jassim Mohamed Kutty — Data Analyst & Power BI Developer" },
      { name: "description", content: "Portfolio of Jassim Mohamed Kutty — Data Analyst, Power BI Developer & aspiring Analytics Engineer based in Bengaluru. 4+ years building scalable analytics with Power BI, SQL, Databricks & Azure." },
      { property: "og:title", content: "Jassim Mohamed Kutty — Data Analyst & Power BI Developer" },
      { property: "og:description", content: "Transforming data into business impact with Power BI, SQL, Databricks & Azure." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "preconnect", href: "https://fonts.googleapis.com" }, { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" }],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Certifications />
      <Experience />
      <Education />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
