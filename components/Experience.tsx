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

            <ul className="mt-4 space-y-3.5 text-base leading-7 text-zinc-600 dark:text-zinc-300">
              <li>
                • Engineered a distributed{" "}
                <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Order Management System
                </strong>{" "}
                in{" "}
                <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Go
                </strong>
                , consuming{" "}
                <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Kafka
                </strong>{" "}
                event streams and coordinating background workers to process{" "}
                <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                  200K+ weekly orders
                </strong>{" "}
                with low-latency, reliable handling under high-concurrency
                workloads.
              </li>

              <li>
                • Built real-time CDC pipelines connecting (
                <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                  MySQL
                </strong>{" "}
                →{" "}
                <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Kafka &amp; Elasticsearch
                </strong>
                ), eliminating manual Kafka publishing across{" "}
                <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                  90% of data synchronization workflows
                </strong>
                .
              </li>

              <li>
                • Redesigned a legacy synchronous export engine into an
                event-driven pipeline using{" "}
                <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Go
                </strong>
                ,{" "}
                <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Kafka
                </strong>
                , and{" "}
                <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                  MinIO
                </strong>
                , streaming{" "}
                <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                  1M+ rows
                </strong>{" "}
                per export via{" "}
                <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                  PIT/search_after
                </strong>{" "}
                pagination; reduced API response time to{" "}
                <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                  &lt;100ms
                </strong>{" "}
                and eliminated HTTP timeout/OOM failures.
              </li>

              <li>
                • Built{" "}
                <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Go/Redis/Asynq
                </strong>{" "}
                background workers automating post-order operations, including{" "}
                <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Third-Party Logistics courier failover
                </strong>
                , live address/COD sync, and return refund processing, saving{" "}
                <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                  10 hours/week
                </strong>{" "}
                of manual exception handling.
              </li>

              <li>
                • Eliminated race conditions and duplicate transactions in
                multi-threaded order workflows using{" "}
                <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Redis distributed locking
                </strong>{" "}
                and optimistic concurrency control, removing a recurring source
                of production incidents.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
