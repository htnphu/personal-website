import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CareerCompass AI Case Study — Otis Han",
  description:
    "Engineering a high-performance AI recruitment platform with CDC pipelines, Kafka, Qdrant vector search, and RAG.",
};

export default function CareerCompassCaseStudy() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased selection:bg-zinc-900 selection:text-white dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-zinc-100 dark:selection:text-zinc-900">
      {/* Top Bar Navigation */}
      <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/90 backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-950/90">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">
              ←
            </span>
            Back to Portfolio
          </Link>

          <a
            href="https://github.com/CareerCompass-ai"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-zinc-300 px-3.5 py-1.5 text-xs font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            GitHub Organization ↗
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-14 md:py-20">
        {/* Header Section */}
        <div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-500">
            <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-emerald-600 dark:text-emerald-400">
              Capstone Award · Ranked #1 (Grade 9.8 / 10)
            </span>
            <span>·</span>
            <span>Jan 2024 — Jul 2024</span>
            <span>·</span>
            <span>Team Lead (6 Engineers)</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            CareerCompass AI
          </h1>

          <p className="mt-4 text-xl font-medium text-zinc-600 dark:text-zinc-300">
            Architecting an End-to-End AI Recruitment Platform with Change Data
            Capture (CDC), Kafka, Vector Search, and RAG
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            {[
              "FastAPI",
              "PostgreSQL",
              "Apache Kafka",
              "Debezium (CDC)",
              "Qdrant",
              "Weaviate",
              "Elasticsearch",
              "OpenAI API",
              "MinIO",
              "Docker",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 font-mono text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Summary Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 border-y border-zinc-200 py-6 sm:grid-cols-4 dark:border-zinc-800">
          <div>
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Role
            </p>
            <p className="mt-1 text-sm font-semibold">Tech Lead / Architect</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Evaluation
            </p>
            <p className="mt-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              9.8 / 10 (Rank #1)
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Precision
            </p>
            <p className="mt-1 text-sm font-semibold">95% Retrieval Accuracy</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Latency
            </p>
            <p className="mt-1 text-sm font-semibold">&lt; 150ms Search</p>
          </div>
        </div>

        {/* Section: The Problem */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight">
            1. Problem Statement
          </h2>
          <div className="mt-4 space-y-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            <p>
              Traditional recruitment engines rely heavily on static SQL queries
              and keyword-based filters. When a job description asks for a{" "}
              <em>
                &quot;Distributed Systems Engineer familiar with Kafka,&quot;
              </em>{" "}
              a qualified candidate who describes their experience as{" "}
              <em>
                &quot;architecting event-driven pipelines using
                publish-subscribe queues&quot;
              </em>{" "}
              is often completely omitted from initial search passes.
            </p>
            <p>
              Furthermore, recruiters spend countless hours manually
              cross-referencing resumes against dense requirements. From a
              systems standpoint, performing real-time vector embedding
              generation and similarity calculations inside synchronous HTTP
              request-response cycles causes severe latency spikes and risks
              cascading timeouts.
            </p>
          </div>
        </section>

        {/* Section: Architecture & Data Flow */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight">
            2. System Architecture &amp; Data Pipeline
          </h2>
          <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            To decouple transactional writes from heavy indexing workloads, I
            designed an event-driven Change Data Capture (CDC) architecture:
          </p>

          {/* Architecture Box */}
          <div className="mt-6 overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50 p-6 font-mono text-xs leading-relaxed text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200">
            <pre className="whitespace-pre">
              {`[ Client Web App ] ─── HTTP REST / JSON ───► [ FastAPI Core API Services ]
                                                        │
                                                        ▼ (ACID Transactional Writes)
                                              [ PostgreSQL Database ]
                                                        │
                                                        ▼ (Write-Ahead Log / WAL)
                                              [ Debezium CDC Connector ]
                                                        │
                                                        ▼ (Event Stream: inserts / updates)
                                              [ Apache Kafka Clusters ]
                                                        │
                                                        ▼ (Asynchronous Consumer Groups)
                                              [ Background Workers ]
                                               ├── OpenAI Embedding Pipeline
                                               └── Batch Vector Normalization
                                                        │
                                    ┌───────────────────┼───────────────────┐
                                    ▼                   ▼                   ▼
                           [ Qdrant Vector DB ]   [ Weaviate Engine ]   [ Elasticsearch ]
                           (Dense Embeddings)     (Hybrid Schemas)     (Keyword / BM25)
                                    │                   │                   │
                                    └───────────────────┴───────────────────┘
                                                        │
                                                        ▼
                                       [ Recruiter Matching & RAG Engine ]
                                                        │
                                                        ▼
                                            [ OpenAI Assistants API ]
                                                        │
                                                        ▼ (Charts & Metrics Artifacts)
                                              [ MinIO Object Storage ]`}
            </pre>
          </div>

          {/* Visual System Design Architecture Diagram */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-xs sm:p-5 dark:border-zinc-800 dark:bg-zinc-900/40">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 pb-3 dark:border-zinc-800">
              <div>
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  CareerCompass AI — System Architecture Diagram
                </h3>
                <p className="text-xs text-zinc-500">
                  Microservices, CDC Streaming, Kafka Event Bus, and Vector RAG Pipeline
                </p>
              </div>
              <a
                href="/careercompass-system-design.png"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
              >
                <span>View Full Resolution ↗</span>
              </a>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
              <a
                href="/careercompass-system-design.png"
                target="_blank"
                rel="noreferrer"
                className="group block cursor-zoom-in"
                title="Click to view full-resolution system design"
              >
                <Image
                  src="/careercompass-system-design.png"
                  alt="CareerCompass AI End-to-End System Design and Architecture Diagram"
                  width={1600}
                  height={900}
                  className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  priority
                />
              </a>
            </div>
          </div>

          <div className="mt-8 space-y-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            <p>
              <strong>Write Path Decoupling:</strong> When an applicant updates
              their profile or a recruiter posts a new role, the write commits
              instantaneously to PostgreSQL without stalling for vector
              embeddings.
            </p>
            <p>
              <strong>Debezium CDC:</strong> Debezium tails PostgreSQL&apos;s
              Write-Ahead Log (WAL), streaming atomic event envelopes into topic
              partitions in Kafka. This guarantees that no indexing events are
              lost, even in the event of worker crashes.
            </p>
            <p>
              <strong>Asynchronous Indexing:</strong> Dedicated worker pools
              consume Kafka events, invoke the OpenAI Embedding model with
              exponential backoff and rate-limiting, and upsert vectors into{" "}
              <strong>Qdrant</strong> and <strong>Weaviate</strong>.
            </p>
          </div>
        </section>

        {/* Section: Key Engineering Innovations */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight">
            3. Key Engineering Highlights
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                1. RAG &amp; LLM Query Expansion
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Queries are expanded via lightweight LLM prompts to extract
                domain synonyms, required competencies, and seniority levels.
                The resulting dense query vectors achieved{" "}
                <strong>95% retrieval precision</strong> over raw lexical
                search.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                2. Real-Time CDC Streaming
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Eliminated manual dual-write patterns and two-phase commits. By
                reading directly from PostgreSQL WAL logs, the system guarantees
                zero dual-write inconsistencies between the relational store and
                vector databases.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                3. Recruiter Semantic Matcher
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Built a multi-criteria vector scoring engine that computes
                cosine similarity between candidate skill vectors and job
                requirements, returning rank-ordered applicant shortlists in
                sub-150ms.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                4. AI Analytics &amp; MinIO Storage
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Integrated the OpenAI Assistants API with custom
                code-interpreter capabilities to generate dynamic visualizations
                and conversion metrics, persisting generated chart artifacts
                safely to a private MinIO S3 cluster.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Engineering Challenges */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight">
            4. Engineering Challenges &amp; Solutions
          </h2>

          <div className="mt-6 space-y-6">
            <div className="border-l-2 border-zinc-300 pl-4 dark:border-zinc-700">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                Challenge 1: Event Ordering &amp; Race Conditions During Profile
                Updates
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Rapid successive edits to candidate profiles caused race
                conditions where older updates could overwrite newer vectors if
                processed out of order across worker threads.
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <strong>Solution:</strong> Partitioned Kafka topics by{" "}
                <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs dark:bg-zinc-800">
                  user_id
                </code>
                , ensuring that all state mutations for a specific user were
                routed to the same partition and consumed strictly in FIFO
                order.
              </p>
            </div>

            <div className="border-l-2 border-zinc-300 pl-4 dark:border-zinc-700">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                Challenge 2: OpenAI API Rate Limits &amp; Cost Control
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                High-volume resume ingestion quickly triggered HTTP 429 rate
                limits and threatened to incur excessive API costs.
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <strong>Solution:</strong> Built an in-memory Redis embedding
                cache keyed by SHA-256 text hashes, deduplicating identical job
                descriptions and skill summaries. Implemented a token-bucket
                rate limiter within the background worker service.
              </p>
            </div>

            <div className="border-l-2 border-zinc-300 pl-4 dark:border-zinc-700">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                Challenge 3: Hybrid Search Balance (Keywords vs Semantics)
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Pure vector search occasionally omitted strict requirements
                (e.g., exact visa status or mandatory security clearance).
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <strong>Solution:</strong> Adopted a two-stage hybrid retrieval
                strategy: first filtering candidates using Elasticsearch BM25 /
                Boolean facets, then re-ranking the top candidate pool with
                Qdrant vector similarity scores.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Results & What I Learned */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight">
            5. Results &amp; Key Learnings
          </h2>
          <div className="mt-4 space-y-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            <p>
              The capstone project was presented to faculty and industry
              reviewers, receiving a score of <strong>9.8 / 10</strong> and
              ranking <strong>#1 across all graduate capstones</strong>.
            </p>
            <p>
              <strong>Leadership Takeaways:</strong> Serving as the technical
              lead for 6 engineers reinforced the value of strict interface
              contracts and early schema governance. Setting up Kafka topic
              definitions and Protobuf / Pydantic schemas upfront allowed the
              frontend, backend, and data pipelines to be developed concurrently
              without blocking dependencies.
            </p>
          </div>
        </section>

        {/* Repositories Breakdown */}
        <section className="mt-14 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
          <h3 className="text-lg font-semibold">Project Repositories</h3>
          <p className="mt-1 text-sm text-zinc-500">
            Explore the multi-repository architecture on GitHub:
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              {
                name: "ccp-ai",
                desc: "FastAPI AI Server, RAG embeddings & vector search pipeline",
                url: "https://github.com/CareerCompass-ai/ccp-ai",
              },
              {
                name: "ccp-background",
                desc: "Kafka consumers & asynchronous CDC synchronization workers",
                url: "https://github.com/CareerCompass-ai/ccp-background",
              },
              {
                name: "ccp-api",
                desc: "Primary REST API, authentication & relational data layer",
                url: "https://github.com/CareerCompass-ai/ccp-api",
              },
              {
                name: "ccp-fe",
                desc: "Frontend user interface & recruiter dashboards",
                url: "https://github.com/CareerCompass-ai/ccp-fe",
              },
            ].map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col justify-between rounded-xl border border-zinc-200 p-4 transition hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-sm font-semibold group-hover:underline">
                      {repo.name}
                    </p>
                    <span className="text-xs text-zinc-400">↗</span>
                  </div>
                  <p className="mt-1.5 text-xs text-zinc-500">{repo.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Back Button Footer */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <Link
            href="/"
            className="text-sm font-medium underline underline-offset-4 hover:text-black dark:hover:text-white"
          >
            ← Back to Home
          </Link>
          <a
            href="https://github.com/CareerCompass-ai"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium underline underline-offset-4 hover:text-black dark:hover:text-white"
          >
            View CareerCompass-ai Organization →
          </a>
        </div>
      </main>
    </div>
  );
}
