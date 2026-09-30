import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex items-center px-6 pt-24 pb-12 sm:pt-28 sm:pb-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col-reverse items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="max-w-2xl">
            {/* Opportunity Status Pill */}
            <div className="flex justify-center md:justify-start">
              <a
                href="#coding"
                className="group/pill relative z-10 mb-5 inline-flex w-fit items-center overflow-hidden rounded-xl border border-emerald-500/25 bg-white/90 px-3.5 py-2 text-xs shadow-xs backdrop-blur-xs transition-all duration-300 hover:border-emerald-500/45 hover:bg-white sm:rounded-full sm:px-4 sm:py-1.5 sm:text-sm dark:border-emerald-500/40 dark:bg-emerald-950/40 dark:hover:border-emerald-500/60 dark:hover:bg-emerald-950/60"
              >
                {/* Occasional sweep/shine animation */}
                <span
                  aria-hidden="true"
                  className="animate-badge-shine pointer-events-none absolute inset-y-0 -left-full w-2/3 bg-linear-to-r from-transparent via-white/80 to-transparent dark:via-emerald-300/15"
                />

                {/* Content */}
                <span className="flex flex-col items-center gap-1 sm:flex-row sm:items-center sm:gap-1.5">
                  <span className="flex items-center gap-1.5 font-medium text-zinc-700 dark:text-zinc-200">
                    {/* Pulsing Status Dot */}
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span>Looking for my next opportunity</span>
                  </span>

                  <span className="hidden text-zinc-300 sm:inline dark:text-emerald-500/50 select-none">
                    ·
                  </span>

                  <span className="inline-flex items-center gap-0.5 font-semibold text-emerald-600 transition-colors group-hover/pill:text-emerald-700 dark:text-emerald-400 dark:group-hover/pill:text-emerald-300">
                    <span>Putting in the work every day.</span>
                    <span
                      aria-hidden="true"
                      className="text-xs transition-transform duration-200 group-hover/pill:translate-x-0.5 group-hover/pill:-translate-y-0.5"
                    >
                      ↗
                    </span>
                  </span>
                </span>
              </a>
            </div>

            <p className="mb-2 text-sm font-medium tracking-wide text-zinc-500 dark:text-zinc-400">
              Hello, my name is
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-white">
              Otis Han
            </h1>

            <div className="mt-3">
              <h2 className="text-xl font-semibold text-zinc-800 sm:text-2xl dark:text-zinc-100">
                Software Engineer
              </h2>
              <p className="mt-1 text-base font-medium text-zinc-500 sm:text-lg dark:text-zinc-400">
                Backend · Distributed Systems · Data &amp; AI
              </p>
            </div>

            <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 dark:text-zinc-300">
              M.S. Computer Science student at Seattle University, specializing
              in Data Science. Experienced in engineering event-driven
              microservices, CDC pipelines, and scalable AI applications.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-85 dark:bg-white dark:text-black"
              >
                Download Resume
              </a>

              <a
                href="https://github.com/htnphu"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-800 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/hanthonhatphu"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-800 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                LinkedIn
              </a>

              <a
                href="https://leetcode.com/u/phuhanld/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-800 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                LeetCode
              </a>
            </div>
          </div>

          <div className="relative shrink-0 self-center md:self-auto">
            <div className="relative h-60 w-52 overflow-hidden rounded-2xl border border-zinc-200 shadow-md sm:h-72 sm:w-64 md:h-80 md:w-72 lg:h-92 lg:w-80 dark:border-zinc-800">
              <Image
                src="/profile.JPG"
                alt="Otis Han"
                fill
                priority
                sizes="(max-width: 640px) 208px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
