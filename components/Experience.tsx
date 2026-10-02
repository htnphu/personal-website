export default function Experience() {
  return (
    <section className="border-t border-zinc-200 px-6 py-14 sm:py-16 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium text-zinc-500">02 — Experience</p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
          Experience
        </h2>

        <div className="mt-8 max-w-4xl space-y-12 border-l-2 border-zinc-200 pl-6 dark:border-zinc-800">
          {/* Hasaki Technology - Software Engineer */}
          <div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              November 2023 — July 2025
            </p>

            <h3 className="mt-1 text-xl font-semibold text-zinc-900 sm:text-2xl dark:text-zinc-100">
              Software Engineer
            </h3>

            <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Hasaki Technology
            </p>

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

          {/* Seattle University - Graduate Teaching Assistant */}
          <div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Spring 2026 — Present
            </p>

            <h3 className="mt-1 text-xl font-semibold text-zinc-900 sm:text-2xl dark:text-zinc-100">
              Graduate Teaching Assistant
            </h3>

            <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Seattle University · Department of Computer Science
            </p>

            <div className="mt-5 space-y-4">
              {/* CPSC 5700: Computer Graphics */}
              <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-4 sm:p-5 dark:border-zinc-800/80 dark:bg-zinc-900/30">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="rounded-md bg-zinc-200/80 px-2 py-0.5 font-mono text-xs font-semibold text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                      CPSC 5700
                    </span>
                    <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                      Computer Graphics
                    </h4>
                  </div>
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    Fall 2026
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  <li>
                    • Assisted in curriculum delivery covering the{" "}
                    <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                      3D rendering pipeline
                    </strong>
                    , affine geometric transformations (model, view, projection
                    matrices), and{" "}
                    <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                      shader programming (GLSL / OpenGL)
                    </strong>
                    .
                  </li>
                  <li>
                    • Guided students through{" "}
                    <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                      lighting and shading models
                    </strong>{" "}
                    (Phong, Blinn-Phong, ambient/specular reflection), texture
                    mapping, and fundamentals of{" "}
                    <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                      ray tracing
                    </strong>{" "}
                    and rasterization.
                  </li>
                </ul>
              </div>

              {/* CPSC 5310: Machine Learning */}
              <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-4 sm:p-5 dark:border-zinc-800/80 dark:bg-zinc-900/30">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="rounded-md bg-zinc-200/80 px-2 py-0.5 font-mono text-xs font-semibold text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                      CPSC 5310
                    </span>
                    <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                      Machine Learning
                    </h4>
                  </div>
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    Spring 2026
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  <li>
                    • Supported core topics in{" "}
                    <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                      supervised and unsupervised learning
                    </strong>
                    , including linear/logistic regression, SVMs, decision
                    trees, ensemble methods (Random Forests, Gradient Boosting),
                    and clustering (K-Means, GMM).
                  </li>
                  <li>
                    • Facilitated understanding of{" "}
                    <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                      neural network architectures
                    </strong>
                    , backpropagation,{" "}
                    <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                      gradient descent optimization (SGD, Adam)
                    </strong>
                    , loss functions, dimensionality reduction (PCA), and model
                    evaluation metrics.
                  </li>
                </ul>
              </div>

              {/* CPSC 5610: Artificial Intelligence */}
              <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-4 sm:p-5 dark:border-zinc-800/80 dark:bg-zinc-900/30">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="rounded-md bg-zinc-200/80 px-2 py-0.5 font-mono text-xs font-semibold text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                      CPSC 5610
                    </span>
                    <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                      Artificial Intelligence
                    </h4>
                  </div>
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    Spring 2026
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  <li>
                    • Instructed on classical AI search strategies including{" "}
                    <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                      informed/heuristic search (A*, Greedy Best-First)
                    </strong>
                    , adversarial search (
                    <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                      Minimax with Alpha-Beta Pruning
                    </strong>
                    ), and game-playing algorithms.
                  </li>
                  <li>
                    • Covered{" "}
                    <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                      Constraint Satisfaction Problems (CSP)
                    </strong>{" "}
                    with backtracking and forward checking, probabilistic
                    reasoning with{" "}
                    <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                      Bayesian networks
                    </strong>
                    , and Markov Decision Processes (MDPs) / reinforcement
                    learning fundamentals.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
