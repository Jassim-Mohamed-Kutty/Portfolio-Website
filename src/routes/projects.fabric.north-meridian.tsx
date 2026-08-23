import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import {
  LightboxProvider,
  Shot,
  ShotGrid,
  Callout,
  Flow,
  CSSection,
} from "@/components/case-study/Media";

export const Route = createFileRoute("/projects/fabric/north-meridian")({
  head: () => ({
    meta: [
      { title: "Unified Commerce Analytics — Microsoft Fabric Case Study" },
      {
        name: "description",
        content:
          "North Meridian Retail Group: re-engineering a normalized Azure SQL commerce platform into a governed Bronze–Silver–Gold Microsoft Fabric Lakehouse with metadata-driven ingestion and watermark-based incremental loading.",
      },
      { property: "og:title", content: "Unified Commerce Analytics — Microsoft Fabric Case Study" },
      {
        property: "og:description",
        content:
          "From five-way transactional joins to a governed Bronze–Silver–Gold analytical platform in Microsoft Fabric.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NorthMeridian,
});

const techTags = [
  "Microsoft Fabric",
  "Lakehouse",
  "Azure SQL",
  "Data Factory",
  "PySpark",
  "Delta Lake",
  "Medallion Architecture",
  "Incremental Loading",
  "Watermarking",
  "Dimensional Modelling",
];

const stats = [
  { v: "5+", l: "joins for basic revenue analysis" },
  { v: "24–48 hrs", l: "reporting blind spot" },
  { v: "30–40%", l: "analyst capacity spent on preparation" },
  { v: "$1.2M–$1.8M", l: "estimated annualised margin exposure" },
];

const challenges = [
  ["01", "Transactional schema optimised for writes", "A Third Normal Form design intended for transactional consistency meant analytical questions required repeated multi-table joins."],
  ["02", "Reporting latency", "Business reporting could lag actual transactions by 24–48 hours."],
  ["03", "Manual data preparation", "A large portion of analyst capacity was consumed by SQL joins, transformations and preparation."],
  ["04", "Shadow business logic", "Region mapping lived in a manually maintained CSV rather than a governed data platform."],
  ["05", "Coupled workloads", "Reporting depended too heavily on a database designed primarily for transaction processing."],
];

const decisions = [
  ["Why Medallion?", "Because ingestion, transformation and analytical modelling have different responsibilities. Bronze preserves recoverability, Silver centralises business logic and Gold establishes the analytical contract."],
  ["Why metadata-driven ingestion?", "Because pipeline behaviour can be controlled through configuration instead of duplicating orchestration logic across multiple pipelines."],
  ["Why batch first, incremental later?", "Because historical ingestion and daily change capture solve different problems. The initial load establishes the baseline; watermarking then captures what arrives after that boundary."],
  ["Why not incrementally load Customers and Products?", "Because they are small enough that a controlled full refresh is simpler and does not introduce unnecessary state-management complexity."],
  ["Why define fact grain before writing the table?", "Because the grain determines what one row represents. Establishing it first prevents ambiguous aggregation and accidental double counting."],
];

const takeaways = [
  ["Data Engineering", "Designed ingestion patterns for both historical and incremental workloads."],
  ["Fabric", "Implemented a Lakehouse-based Medallion architecture using pipelines and PySpark notebooks."],
  ["Data Modelling", "Transformed normalised transactional data into a dimensional Gold structure with explicit fact grain."],
  ["Reliability", "Applied configuration-driven ingestion, watermarking, replayability and reconciliation principles."],
];

const stack = [
  "Microsoft Fabric",
  "Lakehouse",
  "Azure SQL",
  "Data Factory Pipelines",
  "PySpark",
  "Delta Lake",
  "Bronze / Silver / Gold",
  "Metadata-driven ingestion",
  "Watermark-based incremental loading",
  "Dimensional modelling",
];

const toc = [
  ["problem", "01 · The Problem"],
  ["architecture", "02 · Architecture"],
  ["ingestion", "03 · Ingestion"],
  ["incremental", "04 · Incremental Loading"],
  ["silver", "05 · Bronze → Silver"],
  ["gold", "06 · Silver → Gold"],
  ["validation", "07 · Validation"],
  ["decisions", "08 · Engineering Decisions"],
  ["outcome", "09 · Outcome"],
];

function LayerCard({ name, title, body }: { name: string; title: string; body: string }) {
  return (
    <div className="glass rounded-xl p-5">
      <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary mb-2">{name}</div>
      <h3 className="text-sm font-semibold text-foreground mb-1.5">{title}</h3>
      <p className="text-xs text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}

function Pipeline() {
  const layers = [
    ["Azure SQL + RegionMapping.csv", "Source"],
    ["BRONZE", "Faithful source ingestion"],
    ["SILVER", "Curated and enriched business data"],
    ["GOLD", "Dimensional analytical model"],
  ];
  return (
    <div className="my-8 grid gap-3">
      {layers.map(([t, s], i) => (
        <div key={t} className="flex flex-col items-center">
          <div className="w-full glass rounded-xl px-5 py-4 text-center">
            <div className="text-sm font-mono uppercase tracking-[0.18em] text-foreground">{t}</div>
            <div className="text-xs text-muted-foreground mt-1">{s}</div>
          </div>
          {i < layers.length - 1 && <span className="text-primary/60 text-lg leading-none py-1">↓</span>}
        </div>
      ))}
    </div>
  );
}

function NorthMeridian() {
  return (
    <LightboxProvider>
      <main className="min-h-screen bg-background text-foreground">
        <ScrollProgress />
        <Navbar />

        {/* HERO */}
        <section className="pt-32 pb-12 relative grid-bg">
          <div className="mx-auto max-w-6xl px-4">
            <Link
              to="/projects/fabric"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={14} /> Back to Fabric Projects
            </Link>
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary mb-4">
              Case Study · Data Engineering · Microsoft Fabric
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Unified <span className="gradient-text">Commerce Analytics</span>
            </h1>
            <p className="text-lg text-foreground/80 max-w-3xl mb-5">
              From five-way transactional joins to a governed Bronze–Silver–Gold analytical platform.
            </p>
            <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
              <p>
                North Meridian Retail Group had a transactional data platform that was designed to keep
                commerce running, not to make commerce easy to analyse.
              </p>
              <p>
                I built a Microsoft Fabric Lakehouse architecture that separates analytical workloads from
                the operational database and transforms fragmented Azure SQL data into a governed,
                replayable analytical platform — from source ingestion through the Gold layer.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-7">
              {techTags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] rounded-md px-2 py-1 bg-surface/60 border border-glass-border text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 pb-20 lg:grid lg:grid-cols-[200px_1fr] lg:gap-12">
          {/* TOC */}
          <nav className="hidden lg:block">
            <div className="sticky top-28">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Contents
              </div>
              <ul className="space-y-2">
                {toc.map(([id, label]) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <article className="min-w-0">
            {/* THE CHALLENGE */}
            <CSSection
              id="problem"
              label="The Challenge"
              headline="The problem wasn't the data. It was the architecture."
            >
              <p>
                North Meridian's legacy Azure SQL environment was built around a highly normalised
                transactional model. That design worked well for point-of-sale integrity and transactional
                consistency, but it created friction everywhere analytics began.
              </p>
              <p>
                A basic revenue question could require joins across Sales, Orders, Products and Customers.
                Analysts were spending a disproportionate amount of their time constructing SQL and
                preparing data instead of analysing the business.
              </p>
              <p>
                The problem extended beyond SQL. Regional business logic lived in a manually maintained
                <span className="font-mono text-foreground"> RegionMapping.csv </span>
                outside the governed data environment. Different versions could lead to different
                interpretations of the same customer geography.
              </p>
              <p>
                At the same time, reporting operated with a 24–48 hour blind spot — a serious limitation in
                a retail environment where pricing, inventory turns and localised demand can change quickly.
              </p>
              <p className="text-foreground">
                The answer was not another reporting query. The answer was to separate the analytical
                workload from the transactional system.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                {stats.map((s) => (
                  <div key={s.v} className="glass rounded-xl p-4">
                    <div className="text-xl font-bold gradient-text">{s.v}</div>
                    <div className="text-[11px] text-muted-foreground mt-1 leading-snug">{s.l}</div>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-muted-foreground/70 pt-1">
                Business-context figures from the project brief, not measured personal results.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {challenges.map(([n, t, b]) => (
                  <div key={n} className="glass rounded-xl p-5">
                    <div className="text-[10px] font-mono text-primary mb-2">{n}</div>
                    <h3 className="text-sm font-semibold text-foreground mb-1.5">{t}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </CSSection>

            {/* ARCHITECTURE */}
            <CSSection
              id="architecture"
              label="The Architecture"
              headline="Decouple analytics without touching the till."
            >
              <p>
                The modernisation objective was deliberately simple: move analytical processing away from
                the operational transaction engine without disrupting the system that runs the business.
              </p>
              <p>
                The solution is a Microsoft Fabric Lakehouse built around a Medallion architecture. Instead
                of allowing analysts to repeatedly reconstruct business logic from the source schema, the
                platform establishes progressively more useful layers of data.
              </p>
              <Pipeline />
              <div className="grid md:grid-cols-3 gap-4">
                <LayerCard
                  name="Bronze"
                  title="Capture faithfully."
                  body="Bronze preserves source data with minimal transformation. Its purpose is not to make the data beautiful, but to create a reliable, replayable landing point so downstream transformations can be rebuilt without reaching back into the operational source."
                />
                <LayerCard
                  name="Silver"
                  title="Make the data understandable."
                  body="Silver is where source relationships become business logic. Sales, Orders and Products are brought together, customers are enriched with regional context, and derived fields such as FullName and TotalSalesAmount are created."
                />
                <LayerCard
                  name="Gold"
                  title="Create the analytical contract."
                  body="Gold transforms curated Silver data into a dimensional model of customer, product and date dimensions plus a pre-aggregated sales fact — structured around analytical questions rather than source-system implementation details."
                />
              </div>
              <Callout label="In one line">
                Bronze captures. Silver understands. Gold serves.
              </Callout>

              <h3 className="text-lg font-semibold text-foreground pt-4">
                Medallion isn't three folders. It's three levels of trust.
              </h3>
              <p>
                Each layer has a different responsibility. Bronze protects replayability, Silver protects
                business logic and Gold protects analytical usability. If a downstream transformation fails,
                Bronze provides a recovery point. If a business rule changes, Silver can be rebuilt without
                re-ingesting the operational system. If analytical requirements evolve, Gold can be
                remodelled from curated Silver data. This separation keeps ingestion, transformation and
                consumption from becoming one tightly coupled process.
              </p>
            </CSSection>

            {/* INGESTION */}
            <CSSection
              id="ingestion"
              label="01 · Ingestion Foundation"
              headline="Before moving the data, define how the pipeline should behave."
            >
              <p>
                Rather than hardcoding every ingestion rule directly into the pipeline, I created a
                configuration/control table for the Orders batch process. It stores the information required
                to drive ingestion, including the relevant filtering logic and whether a configuration row
                should participate in execution. The pipeline reads this metadata at runtime.
              </p>
              <p className="text-foreground">
                Configuration defines <em>what</em> should be loaded. The pipeline defines <em>how</em> it
                should be loaded.
              </p>
              <Flow steps={["Configuration Table", "Lookup", "ForEach", "Copy Activity", "Bronze"]} />
              <Shot n="01" caption="Creating the configuration/control table that drives the Orders ingestion pattern." />
              <ShotGrid>
                <Shot n="02" size="sm" caption="Populating the control metadata used to define the Orders batch slices." />
                <Shot n="03" size="sm" caption="Validating the configuration before the pipeline consumes it." />
              </ShotGrid>
              <Callout label="Why metadata?">
                Because changing the data-loading behaviour should not require rebuilding the orchestration
                logic.
              </Callout>

              <h3 className="text-lg font-semibold text-foreground pt-6">
                02 · The first load has a different problem.
              </h3>
              <p>
                The initial ingestion establishes the historical Bronze foundation. For Orders, the source
                data is divided into controlled OrderID ranges rather than being treated as one large,
                unbounded query. The pipeline reads the control metadata, iterates through the configured
                ranges and executes a Copy Activity for each slice — making the initial load easier to
                control and giving the pipeline a more granular execution boundary.
              </p>
              <Flow steps={["Read configuration", "Iterate ranges", "Copy each range", "Write to Bronze"]} />
              <Shot n="04" caption="Metadata-driven Orders batch pipeline using Lookup, ForEach and Copy activities." />
              <ShotGrid>
                <Shot n="05" size="sm" caption="Lookup activity retrieving the enabled Orders ingestion configurations." />
                <Shot n="06" size="sm" caption="ForEach activity iterating through the configured OrderID ranges." />
                <Shot n="07" size="sm" caption="Copy Activity using the configured filter query to extract a specific Orders range." />
                <Shot n="08" size="sm" caption="Writing the extracted Orders data into the Bronze Lakehouse layer." />
              </ShotGrid>
              <Callout label="Technical note">
                A controlled batch is easier to reason about, retry and validate than a single opaque
                operation over the entire source.
              </Callout>
            </CSSection>

            {/* INCREMENTAL */}
            <CSSection
              id="incremental"
              label="03 · Incremental Ingestion"
              headline="Once history is loaded, stop reading history."
            >
              <p>
                After the initial batch load, the ingestion problem changes. The pipeline no longer needs to
                ask "how do I load everything?" — it needs to ask "what is new since the last successful
                run?"
              </p>
              <p>
                To answer that, I introduced a watermark-based incremental loading pattern. The watermark
                stores the latest successfully processed identifier. For Orders, the pipeline uses OrderID
                as the incremental boundary and retrieves only records where
                <span className="font-mono text-foreground"> OrderID &gt; last processed OrderID</span>.
                After successful ingestion, the watermark is updated. The result is a pipeline that
                remembers where it stopped.
              </p>
              <Flow steps={["Read watermark", "Query IDs > watermark", "Append to Bronze", "Update watermark"]} />
              <Shot n="09" caption="Creating the watermark table used to persist the latest processed Orders boundary." />
              <ShotGrid>
                <Shot n="10" size="sm" caption="SQL logic used to initialise and update the watermark state." />
                <Shot n="11" size="sm" caption="Verifying the persisted watermark after the initial load." />
              </ShotGrid>
              <Callout label="Key engineering principle">
                The watermark represents processed progress, not simply an attempted pipeline run.
              </Callout>

              <h3 className="text-lg font-semibold text-foreground pt-6">
                04 · The second run should be smaller than the first.
              </h3>
              <p>
                With the watermark established, the Orders pipeline switches from historical batch loading
                to incremental ingestion: read the current watermark, use it to filter the source, append
                only new Orders records to Bronze, then advance the watermark after successful processing.
                This prevents every daily run from repeatedly scanning and copying the full Orders table.
              </p>
              <Shot n="12" caption="Incremental Orders pipeline built around the persisted watermark." />
              <ShotGrid>
                <Shot n="13" size="sm" caption="Lookup activity retrieving the latest Orders watermark." />
                <Shot n="14" size="sm" caption="Incremental source query using the watermark boundary." />
                <Shot n="15" size="sm" caption="Appending newly arrived Orders records into Bronze." />
                <Shot n="16" size="sm" caption="Updating the watermark after the incremental load completes." />
              </ShotGrid>
              <Callout label="Initial vs incremental">
                Initial load: historical completeness. Incremental load: efficient change capture.
              </Callout>

              <h3 className="text-lg font-semibold text-foreground pt-6">
                05 · A good ingestion pattern should travel.
              </h3>
              <p>
                The same incremental approach was applied to Sales, using SalesID as its boundary —
                <span className="font-mono text-foreground"> MAX(SalesID)</span>, then
                <span className="font-mono text-foreground"> WHERE SalesID &gt; last_max_id</span>. This
                creates a consistent ingestion pattern across the two large transactional entities rather
                than a different orchestration strategy for each source.
              </p>
              <Shot n="17" caption="Applying the incremental ingestion pattern to the Sales table." />

              <h3 className="text-lg font-semibold text-foreground pt-6">
                06 · Not every table needs incremental loading.
              </h3>
              <p>
                Customers and Products are relatively small reference datasets, so the additional complexity
                of watermark-based ingestion is not necessary. The implementation uses a full-refresh copy
                approach — a deliberate trade-off: incremental loading reduces unnecessary reads and writes
                for large transactional tables, while a controlled full refresh is simpler to operate for
                small dimensions.
              </p>
              <Shot n="18" caption="Copying the smaller Customers and Products dimension tables into Bronze using a full-refresh approach." />
              <Callout label="Trade-off">
                Use incremental processing where it creates value — not simply because incremental
                processing exists.
              </Callout>
            </CSSection>

            {/* SILVER */}
            <CSSection
              id="silver"
              label="07 · Curation"
              headline="Bronze tells us what the source gave us. Silver tells us what it means."
            >
              <p>
                Once the raw data is inside the Lakehouse, the next problem is interpretation. Bronze
                intentionally stays close to the source; Silver is where the data begins to reflect the
                business domain. I used a PySpark notebook to read the Bronze datasets, apply
                transformations and write curated Delta tables — Silver_Customers, Silver_Products and
                Silver_Sales.
              </p>
              <Shot n="19" caption="Loading Bronze datasets into the Bronze-to-Silver PySpark transformation." />

              <h3 className="text-lg font-semibold text-foreground pt-4">
                Turn customer attributes into usable business context.
              </h3>
              <p>
                The source Customers table stores FirstName and LastName separately; the Silver
                transformation derives FullName. Customer geography is enriched using RegionMapping.csv by
                matching StateCode to the corresponding RegionName — moving regional business logic out of
                an analyst's desktop and into the governed pipeline.
              </p>
              <Flow steps={["Customers", "+ RegionMapping.csv", "Silver_Customers"]} />
              <Shot n="20" caption="Enriching customers with FullName and RegionName during the Silver transformation." />
              <Callout label="Governance">
                The region mapping becomes part of the governed analytical pipeline instead of remaining a
                last-mile manual join.
              </Callout>

              <h3 className="text-lg font-semibold text-foreground pt-4">
                Standardise the product data once.
              </h3>
              <p>
                Product UnitPrice is normalised to two decimal places in Silver, so the price used
                downstream follows a consistent data contract rather than relying on each consumer to
                perform its own formatting or rounding.
              </p>
              <Shot n="21" caption="Standardising Product UnitPrice before writing Silver_Products." />

              <h3 className="text-lg font-semibold text-foreground pt-4">
                Bring the transaction story together.
              </h3>
              <p>
                Sales by itself does not contain the full analytical context required downstream. The Silver
                transformation joins Sales with Orders and Products and derives
                <span className="font-mono text-foreground"> TotalSalesAmount = Quantity × UnitPrice</span>,
                creating a reusable Silver sales dataset with the transactional context and revenue measure
                the Gold layer needs.
              </p>
              <Flow steps={["Sales", "+ Orders", "+ Products", "Silver_Sales"]} />
              <Shot n="22" caption="Joining Sales with Orders and Products and deriving TotalSalesAmount in PySpark." />
              <Callout label="Key point">
                The complexity that analysts previously had to reconstruct through repeated SQL joins is now
                encoded once in the transformation layer.
              </Callout>

              <h3 className="text-lg font-semibold text-foreground pt-4">
                Silver is where repeated analyst work becomes platform logic.
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <LayerCard name="Customers" title="Enriched context" body="Names assembled, regions resolved from governed mapping." />
                <LayerCard name="Products" title="Standardised attributes" body="Consistent pricing contract across all consumers." />
                <LayerCard name="Sales" title="Joined context + revenue" body="Order and product context attached, revenue calculated consistently." />
              </div>
            </CSSection>

            {/* GOLD */}
            <CSSection
              id="gold"
              label="08 · Analytical Model"
              headline="Now make the data easy to analyse."
            >
              <p>
                Silver has established clean, business-ready datasets. Gold has a different responsibility:
                turning those datasets into an analytical structure with clear dimensions, relationships and
                grain — Dim_Customers, Dim_Products, Dim_Date and Fact_Sales.
              </p>
              <Flow steps={["Silver_Customers → Dim_Customers", "Silver_Products → Dim_Products", "SalesDate → Dim_Date", "Silver_Sales → Fact_Sales"]} />
              <Shot n="23" caption="Loading the curated Silver datasets into the Silver-to-Gold transformation." />

              <h3 className="text-lg font-semibold text-foreground pt-4">
                Separate source identity from analytical identity.
              </h3>
              <p>
                The Gold dimensions retain the source-system natural keys for lineage and reconciliation and
                introduce surrogate keys used by the analytical model: CustomerKey and ProductKey, generated
                with PySpark's <span className="font-mono text-foreground">monotonically_increasing_id()</span>.
              </p>
              <p>
                That is appropriate for demonstrating distributed surrogate-key generation, but the
                limitation matters: it does not guarantee deterministic identifiers across independent
                distributed executions. A production incremental dimension pipeline would therefore require
                an additional design constraint — deterministic key generation from the natural key, or a
                controlled dimension-loading process.
              </p>
              <ShotGrid>
                <Shot n="24" size="sm" caption="Generating the CustomerKey used by the Gold customer dimension." />
                <Shot n="25" size="sm" caption="Generating ProductKey and preparing the Gold date dimension." />
              </ShotGrid>
              <Callout label="Keys">
                Natural key (CustomerID / ProductID) preserves lineage. Surrogate key (CustomerKey /
                ProductKey) defines the analytical relationship.
              </Callout>

              <h3 className="text-lg font-semibold text-foreground pt-4">Build the calendar from the data.</h3>
              <p>
                The Gold date dimension is generated dynamically from the minimum and maximum SalesDate
                available in the curated data. A date sequence is generated and expanded into individual
                dates, each receiving DateKey, Year and Quarter, with DateKey following the standard
                <span className="font-mono text-foreground"> yyyyMMdd </span>
                integer convention — a reusable calendar without a manually maintained date range.
              </p>
              <Shot n="26" caption="Generating the Gold date dimension from the available SalesDate range." />

              <h3 className="text-lg font-semibold text-foreground pt-4">
                09 · Before building a fact table, define its grain.
              </h3>
              <p>
                Fact_Sales does not retain one row per source transaction. It is pre-aggregated at a
                deliberate analytical grain: DateKey + CustomerKey + ProductKey + Status. Each row
                represents the total sales activity for one unique combination of those four dimensions.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <LayerCard name="Measure" title="TotalSalesAmount" body="SUM(Quantity × UnitPrice)" />
                <LayerCard name="Measure" title="TotalQuantity" body="SUM(Quantity)" />
                <LayerCard name="Measure" title="OrderCount" body="COUNT of contributing transaction records" />
              </div>
              <Shot n="27" caption="Grouping Silver sales data at the defined Date–Customer–Product–Status grain and calculating the Gold measures." />
              <Shot n="28" caption="Resulting Gold Fact_Sales dataset with the pre-aggregated analytical measures." />
              <p>
                Without an explicit grain, a fact table can become ambiguous. A clearly defined grain
                prevents accidental double counting and establishes exactly what one row means — here, the
                total sales activity for one date, one customer, one product and one order status.
              </p>
              <Callout label="Fact contract">One row = Date + Customer + Product + Status.</Callout>
            </CSSection>

            {/* VALIDATION */}
            <CSSection
              id="validation"
              label="10 · Trust & Validation"
              headline="A pipeline isn't finished when it runs. It's finished when the data can be trusted."
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <LayerCard name="Completeness" title="Bronze reconciliation" body="Bronze row counts should reconcile against the corresponding source tables, targeting zero variance." />
                <LayerCard name="Lineage" title="Traceable identifiers" body="Source identifiers such as SalesID and OrderID remain available through the transformation flow." />
                <LayerCard name="Correctness" title="Incremental behaviour" body="Incremental pipelines should process only records beyond the persisted watermark; a rerun without new source records should not duplicate data." />
                <LayerCard name="Finance" title="Revenue reconciliation" body="SUM(TotalSalesAmount) must equal SUM(Quantity × UnitPrice). Any variance greater than $0.00 is a failure." />
              </div>
              <p className="text-[11px] text-muted-foreground/70">
                These describe the validation contract the implementation is designed around, not published
                production results.
              </p>

              <h3 className="text-lg font-semibold text-foreground pt-4">
                What happens when Gold needs to be rebuilt?
              </h3>
              <p>
                Because Bronze preserves the ingested source data, downstream transformations can be rerun
                without repeatedly extracting history from Azure SQL. If Gold is deleted, the transformation
                path can reconstruct it from curated Silver. If Silver needs rebuilding, it can be
                regenerated from Bronze. The architecture separates source capture from business
                transformation from analytical serving.
              </p>
              <Callout label="Reliability">
                Replayability is not a side effect. It is an architectural capability.
              </Callout>
            </CSSection>

            {/* DECISIONS */}
            <CSSection
              id="decisions"
              label="Design Review"
              headline="The decisions I would defend in a design review."
            >
              <div className="grid sm:grid-cols-2 gap-4">
                {decisions.map(([t, b]) => (
                  <div key={t} className="glass rounded-xl p-5">
                    <h3 className="text-sm font-semibold text-foreground mb-1.5">{t}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
              <blockquote className="mt-8 glass rounded-2xl p-6 md:p-8 border-l-2 border-primary">
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  "I wasn't trying to make the transactional database answer analytical questions faster. I
                  was removing the need for the analytical workload to depend on the transactional design in
                  the first place."
                </p>
              </blockquote>
            </CSSection>

            {/* OUTCOME */}
            <CSSection
              id="outcome"
              label="The Result"
              headline="From transactional complexity to analytical clarity."
            >
              <p>
                The completed implementation establishes a governed analytical path from North Meridian's
                Azure SQL environment into Microsoft Fabric, separating responsibilities that were
                previously tangled together.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <LayerCard name="Bronze" title="Capture" body="Captures source data and provides a replayable foundation." />
                <LayerCard name="Silver" title="Curate" body="Centralises business transformations, joins and enrichment logic." />
                <LayerCard name="Gold" title="Model" body="Provides a dimensional structure with surrogate keys, a reusable date dimension and a clearly defined pre-aggregated sales fact." />
              </div>
              <p>
                The ingestion design also distinguishes between historical batch processing, incremental
                transaction loading and full-refresh small dimensions. Most importantly, the analytical
                logic no longer needs to be repeatedly reconstructed by individual analysts.
              </p>
              <Pipeline />
              <p className="text-foreground">
                The real outcome wasn't simply moving data into Microsoft Fabric. It was separating
                ingestion, transformation and analytical responsibility so that the platform could evolve
                without pushing more complexity back onto the transactional system.
              </p>

              <h3 className="text-lg font-semibold text-foreground pt-6">Technology stack</h3>
              <div className="flex flex-wrap gap-1.5">
                {stack.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] rounded-md px-2 py-1 bg-surface/60 border border-glass-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-foreground pt-6">What this project demonstrates</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {takeaways.map(([t, b]) => (
                  <div key={t} className="glass rounded-xl p-5">
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary mb-2">{t}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center glass rounded-2xl p-8">
                <p className="text-lg md:text-xl font-semibold gradient-text mb-6">
                  From five-way SQL joins to a governed analytical contract.
                </p>
                <Link
                  to="/projects/fabric"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 gradient-primary text-background text-sm font-medium"
                >
                  Back to Portfolio <ArrowRight size={14} />
                </Link>
              </div>
            </CSSection>
          </article>
        </div>

        <Footer />
      </main>
    </LightboxProvider>
  );
}
