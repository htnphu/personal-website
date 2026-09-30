export default function Experience() {
  return (
    <section className="border-t border-zinc-200 px-6 py-14 sm:py-16 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium text-zinc-500">02 — Experience</p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
          Experience
        </h2>

        <div className="mt-8 max-w-4xl">
          <div className="border-l-2 border-zinc-200 pl-6 dark:border-zinc-800">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Nov 2023 — Jul 2025</p>

            <h3 className="mt-1 text-xl font-semibold text-zinc-900 sm:text-2xl dark:text-zinc-100">
              Software Engineer
            </h3>

            <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">Hasaki Technology</p>

            <ul className="mt-4 space-y-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
              <li>
                • Engineered a distributed Order Management System in Go,
                processing 200K+ weekly orders using Kafka and background
                workers.
              </li>

              <li>
                • Built real-time CDC pipelines connecting MySQL, Kafka, and
                Elasticsearch, eliminating manual Kafka publishing across 90% of
                synchronization workflows.
              </li>

              <li>
                • Redesigned a legacy synchronous export engine into an
                event-driven Go/Kafka/MinIO pipeline processing 1M+ rows per
                export and reducing API response time to under 100ms.
              </li>

              <li>
                • Built Go/Redis/Asynq workers for courier failover, address/COD
                synchronization, and refund processing, saving 10 hours/week of
                manual exception handling.
              </li>

              <li>
                • Eliminated race conditions and duplicate transactions using
                Redis distributed locking and optimistic concurrency control.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
