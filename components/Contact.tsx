export default function Contact() {
  return (
    <section className="border-t border-zinc-200 px-6 py-14 sm:py-16 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium text-zinc-500">05 — Contact</p>

        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          Let&apos;s connect.
        </h2>

        <p className="mt-3 max-w-xl text-base text-zinc-600 dark:text-zinc-400">
          I&apos;m always interested in connecting with engineers, recruiters,
          and people building interesting systems.
        </p>

        <div className="mt-6 flex flex-wrap gap-5">
          <a
            href="mailto:otishan.work@gmail.com"
            className="text-sm font-medium underline underline-offset-4 hover:text-black dark:hover:text-white"
          >
            Email
          </a>

          <a
            href="https://linkedin.com/in/hanthonhatphu"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium underline underline-offset-4 hover:text-black dark:hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/htnphu"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium underline underline-offset-4 hover:text-black dark:hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://leetcode.com/u/phuhanld/"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium underline underline-offset-4 hover:text-black dark:hover:text-white"
          >
            LeetCode
          </a>
        </div>

        <p className="mt-12 text-xs text-zinc-500">
          © {new Date().getFullYear()} Otis Han
        </p>
      </div>
    </section>
  );
}
