import Link from "next/link";

export default function Projects() {
  return (
    <section className="border-t border-zinc-200 px-6 py-14 sm:py-16 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium text-zinc-500">04 — Projects</p>

        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Featured Projects</h2>

        <p className="mt-3 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
          Selected engineering work covering distributed streaming systems, RAG
          pipelines, vector search, and predictive machine learning.
        </p>

        <div className="mt-8 space-y-6">
          {/* Featured Project: CareerCompass AI */}
          <article className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/50 p-7 sm:p-9 dark:border-zinc-800 dark:bg-zinc-900/40">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                Featured Capstone Project · Ranked #1 (Grade 9.8 / 10)
              </span>
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-400">
                95% Retrieval Precision
              </span>
            </div>

            <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-baseline">
              <div>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  CareerCompass AI
                </h3>
                <p className="mt-1 text-base font-medium text-zinc-600 dark:text-zinc-400">
                  AI-Powered Recruitment &amp; Semantic Job-Seeking Platform
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/projects/careercompass"
                  className="rounded-lg bg-black px-4 py-2 text-xs font-medium text-white transition hover:opacity-85 dark:bg-white dark:text-black"
                >
                  View Case Study →
                </Link>

                <a
                  href="https://github.com/CareerCompass-ai"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-zinc-300 px-4 py-2 text-xs font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            <p className="mt-5 max-w-4xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Led a 6-member engineering team to build and ship an end-to-end AI recruitment
              platform. Engineered a real-time CDC pipeline using PostgreSQL, Debezium, and
              Kafka to stream data changes directly into Qdrant, Weaviate, and Elasticsearch.
              Built hybrid semantic search and LLM query expansion achieving 95% retrieval
              precision, alongside an automated recruiter matching engine.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
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
                  className="rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>

          {/* Secondary Projects Grid */}
          <div className="grid gap-8">
            {/* Retail Sales Forecasting */}
            <article className="flex flex-col justify-between rounded-2xl border border-zinc-200 p-7 transition hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-bold">Retail Sales Forecasting</h3>
                  <span className="text-xs text-zinc-500">M5 Dataset</span>
                </div>

                <p className="mt-1 text-sm font-medium text-zinc-500">
                  55M+ Row Time-Series Machine Learning Pipeline
                </p>

                <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Processed and analyzed the 55M+ row Walmart M5 forecasting
                  dataset. Engineered rolling statistical features, lag windows, and
                  calendar event signals. Trained and hyperparameter-tuned XGBoost,
                  LightGBM, and Random Forest models using Optuna and SHAP
                  interpretability.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Python",
                    "Pandas",
                    "XGBoost",
                    "LightGBM",
                    "Random Forest",
                    "Optuna",
                    "SHAP",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 pt-4 border-t border-zinc-100 dark:border-zinc-850">
                <a
                  href="https://github.com/htnphu/retail-sales-forecasting"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium underline underline-offset-4 hover:text-black dark:hover:text-white"
                >
                  View on GitHub →
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

