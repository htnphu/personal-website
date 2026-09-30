"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Experience", "experience"],
  ["Coding", "coding"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (id: string) => {
    setOpen(false);
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-200/70 bg-white/90 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-zinc-900 transition hover:opacity-80 dark:text-white"
        >
          Otis Han
        </Link>

        <div className="hidden gap-7 md:flex">
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className="text-sm font-medium text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>

        <button
          className="rounded-md p-1.5 text-zinc-600 hover:text-black md:hidden dark:text-zinc-400 dark:hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Navigation Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-200 bg-white px-6 py-4 md:hidden dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex flex-col gap-4">
            {links.map(([label, id]) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className="text-left text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
