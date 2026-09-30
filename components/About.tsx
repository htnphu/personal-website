const skills = {
  Languages: "Python · Go · C/C++ · Java · JavaScript · C# · TypeScript",
  Backend:
    "Microservices · REST APIs · FastAPI · gRPC · Kafka · RabbitMQ · Docker · Protocol Buffers",
  Databases:
    "PostgreSQL · MySQL · MongoDB · DynamoDB · Elasticsearch · Qdrant · Weaviate",
  Cloud: "AWS · Azure · S3 · EC2 · EKS · Lambda · RDS · Spark · MapReduce",
  Tools: "Jenkins · Argo CD · Debezium · Git · GitHub Actions · Linux",
  ML: "Scikit-Learn · PyTorch · TensorFlow · Optuna",
};

export default function About() {
  return (
    <section className="border-t border-zinc-200 px-6 py-14 sm:py-16 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium text-zinc-500">01 — About</p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
          About Me
        </h2>

        <div className="mt-4 max-w-3xl space-y-3 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 dark:text-zinc-300">
          <p>
            I&apos;m a Software Engineer and M.S. Computer Science student at
            Seattle University, specializing in Data Science.
          </p>

          <p>
            My interests span backend engineering, distributed systems, data
            engineering, machine learning, and AI.
          </p>

          <p>
            I enjoy building reliable systems that combine strong software
            engineering fundamentals with data-driven solutions.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Education</h3>

            <div className="mt-5 space-y-5">
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">Seattle University</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  M.S. Computer Science — Data Science
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  GPA: 3.925 / 4.0 · 2025 — 2027
                </p>
              </div>

              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">University of Science — VNUHCM</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  B.S. Computer Science — Software Engineering
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  GPA: 3.5 / 4.0 · 2020 — 2024
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Technical Skills</h3>

            <div className="mt-5 space-y-4">
              {Object.entries(skills).map(([name, value]) => (
                <div key={name}>
                  <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{name}</p>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
