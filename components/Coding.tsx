"use client";

import { useEffect, useState } from "react";

type Contribution = {
  date: string;
  count: number;
  level?: number;
};

type MonthGroup = {
  monthKey: string;
  monthLabel: string;
  weeks: (Contribution | null)[][];
};

function groupContributionsByMonth(contributions: Contribution[]): MonthGroup[] {
  const monthsMap = new Map<string, { monthKey: string; monthLabel: string; items: Contribution[] }>();

  contributions.forEach((item) => {
    const monthKey = item.date.slice(0, 7);
    const d = new Date(item.date + "T00:00:00Z");
    const monthLabel = d.toLocaleString("en-US", { month: "short", timeZone: "UTC" });

    if (!monthsMap.has(monthKey)) {
      monthsMap.set(monthKey, { monthKey, monthLabel, items: [] });
    }
    monthsMap.get(monthKey)!.items.push(item);
  });

  return Array.from(monthsMap.values()).map((m) => {
    const weeks: (Contribution | null)[][] = [];
    let currentWeek: (Contribution | null)[] = [];
    const firstDate = new Date(m.items[0].date + "T00:00:00Z");
    const startDay = firstDate.getUTCDay(); // 0 = Sunday

    // Add empty placeholder slots for days before the 1st
    for (let i = 0; i < startDay; i++) {
      currentWeek.push(null);
    }

    m.items.forEach((item) => {
      currentWeek.push(item);
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null);
      }
      weeks.push(currentWeek);
    }

    return {
      monthKey: m.monthKey,
      monthLabel: m.monthLabel,
      weeks,
    };
  });
}

export default function Coding() {
  // LeetCode Stats
  const [lcStats, setLcStats] = useState({
    totalSolved: 264,
    totalQuestions: 4069,
    easySolved: 113,
    totalEasy: 968,
    mediumSolved: 138,
    totalMedium: 2122,
    hardSolved: 13,
    totalHard: 979,
    acceptanceRate: 73.9,
    totalActiveDays: 127,
    maxStreak: 61,
    currentStreak: 61,
    totalSubmissionsYear: 912,
  });

  const [lcMonths, setLcMonths] = useState<MonthGroup[]>([]);
  const [lcLoading, setLcLoading] = useState(true);

  // GitHub Stats
  const [ghStats, setGhStats] = useState({
    total2024: 1886,
    publicRepos: 23,
    peakMonth: "May (545)",
    activeDays: 142,
  });
  const [ghMonths, setGhMonths] = useState<MonthGroup[]>([]);
  const [ghLoading, setGhLoading] = useState(true);

  useEffect(() => {
    async function fetchLeetCodeData() {
      try {
        // 1. Fetch user overall problem stats
        const statsRes = await fetch("https://leetcode-stats.tashif.codes/phuhanld");
        const statsJson = await statsRes.json();
        if (statsJson.status === "success") {
          setLcStats((prev) => ({
            ...prev,
            totalSolved: statsJson.totalSolved ?? prev.totalSolved,
            totalQuestions: statsJson.totalQuestions ?? prev.totalQuestions,
            easySolved: statsJson.easySolved ?? prev.easySolved,
            totalEasy: statsJson.totalEasy ?? prev.totalEasy,
            mediumSolved: statsJson.mediumSolved ?? prev.mediumSolved,
            totalMedium: statsJson.totalMedium ?? prev.totalMedium,
            hardSolved: statsJson.hardSolved ?? prev.hardSolved,
            totalHard: statsJson.totalHard ?? prev.totalHard,
            acceptanceRate: statsJson.acceptanceRate ?? prev.acceptanceRate,
            totalActiveDays: statsJson.data?.totalActiveDays ?? prev.totalActiveDays,
          }));
        }

        // 2. Fetch daily contributions heatmap
        const heatmapRes = await fetch(
          "https://leetcode-stats.tashif.codes/phuhanld/heatmap?view=last_365",
        );
        const heatmapJson = await heatmapRes.json();
        if (heatmapJson.status === "success" && heatmapJson.data?.dailyContributions) {
          const grouped = groupContributionsByMonth(heatmapJson.data.dailyContributions);
          setLcMonths(grouped);
          setLcStats((prev) => ({
            ...prev,
            maxStreak: heatmapJson.data.longestStreak ?? prev.maxStreak,
            currentStreak: heatmapJson.data.currentStreak ?? prev.currentStreak,
            totalActiveDays: heatmapJson.data.activeDays ?? prev.totalActiveDays,
            totalSubmissionsYear: heatmapJson.data.totalSubmissions ?? prev.totalSubmissionsYear,
          }));
        }
      } catch (err) {
        console.error("Failed to load LeetCode data:", err);
      } finally {
        setLcLoading(false);
      }
    }

    async function fetchGitHubData() {
      try {
        // Fetch 2024 contributions (user's most active time: 1,886 contributions)
        const ghRes = await fetch(
          "https://github-contributions-api.jogruber.de/v4/htnphu?y=2024",
        );
        const ghJson = await ghRes.json();
        if (ghJson && ghJson.contributions) {
          const grouped = groupContributionsByMonth(ghJson.contributions);
          setGhMonths(grouped);
          if (ghJson.total?.["2024"]) {
            setGhStats((prev) => ({
              ...prev,
              total2024: ghJson.total["2024"],
            }));
          }
        }
      } catch (err) {
        console.error("Failed to load GitHub 2024 contributions:", err);
      } finally {
        setGhLoading(false);
      }
    }

    fetchLeetCodeData();
    fetchGitHubData();
  }, []);

  // Calculate circular gauge stroke for LeetCode
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const easyRatio = lcStats.totalSolved ? lcStats.easySolved / lcStats.totalSolved : 0.43;
  const medRatio = lcStats.totalSolved ? lcStats.mediumSolved / lcStats.totalSolved : 0.52;
  const hardRatio = lcStats.totalSolved ? lcStats.hardSolved / lcStats.totalSolved : 0.05;

  const easyStroke = easyRatio * circumference;
  const medStroke = medRatio * circumference;
  const hardStroke = hardRatio * circumference;

  return (
    <section className="border-t border-zinc-200 px-6 py-14 sm:py-16 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium text-zinc-500">03 — Coding</p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
          Coding Activity
        </h2>

        <p className="mt-3 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
          Consistent practice across algorithms, distributed architecture, and open-source contributions.
        </p>

        <div className="mt-8 space-y-8">
          {/* ==================== LEETCODE CARD ==================== */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 dark:border-zinc-800 dark:bg-zinc-950">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-5 dark:border-zinc-850">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">LeetCode</h3>
                <a
                  href="https://leetcode.com/u/phuhanld/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-semibold text-amber-600 transition hover:bg-amber-500/20 hover:text-amber-700 dark:text-amber-400 dark:hover:bg-amber-500/20 dark:hover:text-amber-300"
                >
                  @phuhanld ↗
                </a>
              </div>

              <a
                href="https://leetcode.com/u/phuhanld/"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium underline underline-offset-4 hover:text-black dark:hover:text-white"
              >
                View Profile ↗
              </a>
            </div>

            {/* Solved Levels & Badges Row */}
            <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              {/* Circular Gauge + Difficulty Levels */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                {/* Circular Progress Meter */}
                <div className="relative flex h-24 w-24 shrink-0 items-center justify-center">
                  <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      className="stroke-zinc-100 dark:stroke-zinc-850"
                      strokeWidth="6"
                      fill="transparent"
                    />
                    {/* Easy Segment */}
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray={`${easyStroke} ${circumference}`}
                      strokeDashoffset="0"
                      strokeLinecap="round"
                      className="text-cyan-500"
                    />
                    {/* Medium Segment */}
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray={`${medStroke} ${circumference}`}
                      strokeDashoffset={-easyStroke}
                      strokeLinecap="round"
                      className="text-amber-500"
                    />
                    {/* Hard Segment */}
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray={`${hardStroke} ${circumference}`}
                      strokeDashoffset={-(easyStroke + medStroke)}
                      strokeLinecap="round"
                      className="text-rose-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-xl font-bold leading-tight">{lcStats.totalSolved}</span>
                    <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                      ✓ Solved
                    </span>
                  </div>
                </div>

                {/* Level Breakdown Pills */}
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {/* Easy */}
                  <div className="flex flex-col justify-center rounded-xl border border-cyan-100 bg-cyan-50/60 px-3.5 py-2 min-w-[95px] dark:border-cyan-950 dark:bg-cyan-950/20">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                      Easy
                    </span>
                    <p className="mt-0.5 text-base font-bold text-zinc-900 dark:text-zinc-100">
                      {lcStats.easySolved}
                      <span className="text-xs font-normal text-zinc-400 dark:text-zinc-500">
                        /{lcStats.totalEasy}
                      </span>
                    </p>
                  </div>

                  {/* Medium */}
                  <div className="flex flex-col justify-center rounded-xl border border-amber-100 bg-amber-50/60 px-3.5 py-2 min-w-[95px] dark:border-amber-950 dark:bg-amber-950/20">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                      Med.
                    </span>
                    <p className="mt-0.5 text-base font-bold text-zinc-900 dark:text-zinc-100">
                      {lcStats.mediumSolved}
                      <span className="text-xs font-normal text-zinc-400 dark:text-zinc-500">
                        /{lcStats.totalMedium}
                      </span>
                    </p>
                  </div>

                  {/* Hard */}
                  <div className="flex flex-col justify-center rounded-xl border border-rose-100 bg-rose-50/60 px-3.5 py-2 min-w-[95px] dark:border-rose-950 dark:bg-rose-950/20">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-rose-700 dark:text-rose-400">
                      Hard
                    </span>
                    <p className="mt-0.5 text-base font-bold text-zinc-900 dark:text-zinc-100">
                      {lcStats.hardSolved}
                      <span className="text-xs font-normal text-zinc-400 dark:text-zinc-500">
                        /{lcStats.totalHard}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Badges & Streaks Meta */}
              <div className="flex items-center gap-6 border-t border-zinc-100 pt-4 sm:border-t-0 sm:pt-0 dark:border-zinc-850">
                <div className="text-left sm:text-right">
                  <p className="text-xs text-zinc-500">Badges Earned</p>
                  <p className="text-lg font-bold">2 Badges</p>
                  <p className="text-[11px] text-zinc-400">100 Days Badge 2026</p>
                </div>
                <div className="h-9 w-px bg-zinc-200 dark:bg-zinc-800" />
                <div className="text-left sm:text-right">
                  <p className="text-xs text-zinc-500">Max Streak</p>
                  <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                    {lcStats.maxStreak} Days
                  </p>
                  <p className="text-[11px] text-zinc-400">{lcStats.totalActiveDays} Active Days</p>
                </div>
              </div>
            </div>

            {/* Heatmap Area */}
            <div className="mt-8 border-t border-zinc-100 pt-5 dark:border-zinc-850">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                <p className="font-semibold text-zinc-800 dark:text-zinc-200">
                  {lcStats.totalSubmissionsYear} submissions in the past one year
                </p>
                <div className="flex items-center gap-4 text-xs text-zinc-500">
                  <span>Total active days: <strong className="text-zinc-800 dark:text-zinc-200">{lcStats.totalActiveDays}</strong></span>
                  <span>Max streak: <strong className="text-zinc-800 dark:text-zinc-200">{lcStats.maxStreak}</strong></span>
                </div>
              </div>

              {/* Month-Grouped Grid */}
              <div className="mt-4 overflow-x-auto pb-2">
                {lcLoading ? (
                  <p className="py-8 text-center text-xs text-zinc-500">Loading LeetCode heatmap...</p>
                ) : (
                  <div className="flex w-full min-w-[780px] items-start justify-between">
                    {lcMonths.map((m) => (
                      <div key={m.monthKey} className="flex flex-col items-center">
                        {/* 7-row columns for this month */}
                        <div className="flex gap-1 sm:gap-1.5">
                          {m.weeks.map((week, wIdx) => (
                            <div key={wIdx} className="flex flex-col gap-1 sm:gap-1.5">
                              {week.map((day, dIdx) => {
                                if (!day) {
                                  return (
                                    <div
                                      key={`empty-${dIdx}`}
                                      className="h-2.5 w-2.5 sm:h-3 sm:w-3 opacity-0"
                                    />
                                  );
                                }

                                const intensity =
                                  day.count === 0
                                    ? "bg-zinc-100 dark:bg-zinc-850"
                                    : day.count <= 2
                                      ? "bg-emerald-300 dark:bg-emerald-900"
                                      : day.count <= 5
                                        ? "bg-emerald-400 dark:bg-emerald-700"
                                        : day.count <= 10
                                          ? "bg-emerald-500 dark:bg-emerald-600"
                                          : "bg-emerald-700 dark:bg-emerald-400";

                                return (
                                  <div
                                    key={day.date}
                                    title={`${day.date}: ${day.count} submissions`}
                                    className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-xs transition-colors ${intensity}`}
                                  />
                                );
                              })}
                            </div>
                          ))}
                        </div>
                        {/* Month Label Underneath */}
                        <span className="mt-2 text-[10px] font-medium text-zinc-400">
                          {m.monthLabel}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Legend */}
              <div className="mt-3 flex items-center justify-end gap-1.5 text-[11px] text-zinc-400">
                <span>Less</span>
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-xs bg-zinc-100 dark:bg-zinc-850" />
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-xs bg-emerald-300 dark:bg-emerald-900" />
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-xs bg-emerald-400 dark:bg-emerald-700" />
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-xs bg-emerald-500 dark:bg-emerald-600" />
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-xs bg-emerald-700 dark:bg-emerald-400" />
                <span>More</span>
              </div>
            </div>
          </div>

          {/* ==================== GITHUB CARD (2024 PEAK ACTIVE) ==================== */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 dark:border-zinc-800 dark:bg-zinc-950">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-5 dark:border-zinc-850">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">GitHub</h3>
                <a
                  href="https://github.com/htnphu"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-semibold text-blue-600 transition hover:bg-blue-500/20 hover:text-blue-700 dark:text-blue-400 dark:hover:bg-blue-500/20 dark:hover:text-blue-300"
                >
                  @htnphu ↗
                </a>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-700 dark:text-emerald-400">
                  Most Active Period: 2024
                </span>
              </div>

              <a
                href="https://github.com/htnphu?tab=overview&from=2024-12-01&to=2024-12-31"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium underline underline-offset-4 hover:text-black dark:hover:text-white"
              >
                View 2024 Activity on GitHub ↗
              </a>
            </div>

            {/* GitHub Stats Row */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-xl border border-zinc-100 bg-zinc-50/60 p-3.5 dark:border-zinc-850 dark:bg-zinc-900/30">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                  2024 Contributions
                </p>
                <p className="mt-1 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {ghStats.total2024.toLocaleString()}
                </p>
                <p className="mt-0.5 text-[11px] text-zinc-400">Peak engineering activity</p>
              </div>

              <div className="rounded-xl border border-zinc-100 bg-zinc-50/60 p-3.5 dark:border-zinc-850 dark:bg-zinc-900/30">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                  Public Repositories
                </p>
                <p className="mt-1 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {ghStats.publicRepos}
                </p>
                <p className="mt-0.5 text-[11px] text-zinc-400">Open source &amp; systems</p>
              </div>

              <div className="rounded-xl border border-zinc-100 bg-zinc-50/60 p-3.5 dark:border-zinc-850 dark:bg-zinc-900/30">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                  Peak Month
                </p>
                <p className="mt-1 text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  {ghStats.peakMonth}
                </p>
                <p className="mt-0.5 text-[11px] text-zinc-400">1,409 in May–Jul</p>
              </div>

              <div className="rounded-xl border border-zinc-100 bg-zinc-50/60 p-3.5 dark:border-zinc-850 dark:bg-zinc-900/30">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                  Key Deliverable
                </p>
                <p className="mt-1 text-base font-bold text-zinc-900 dark:text-zinc-100">
                  CareerCompass AI
                </p>
                <p className="mt-0.5 text-[11px] text-zinc-400">Full-stack RAG &amp; Kafka</p>
              </div>
            </div>

            {/* Heatmap Area */}
            <div className="mt-8 border-t border-zinc-100 pt-5 dark:border-zinc-850">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                <p className="font-semibold text-zinc-800 dark:text-zinc-200">
                  {ghStats.total2024.toLocaleString()} contributions in 2024
                </p>
                <span className="text-xs text-zinc-500">
                  Jan 1, 2024 — Dec 31, 2024 (Most Active Year)
                </span>
              </div>

              {/* Month-Grouped Grid */}
              <div className="mt-4 overflow-x-auto pb-2">
                {ghLoading ? (
                  <p className="py-8 text-center text-xs text-zinc-500">Loading GitHub 2024 heatmap...</p>
                ) : (
                  <div className="flex w-full min-w-[780px] items-start justify-between">
                    {ghMonths.map((m) => (
                      <div key={m.monthKey} className="flex flex-col items-center">
                        {/* 7-row columns for this month */}
                        <div className="flex gap-1 sm:gap-1.5">
                          {m.weeks.map((week, wIdx) => (
                            <div key={wIdx} className="flex flex-col gap-1 sm:gap-1.5">
                              {week.map((day, dIdx) => {
                                if (!day) {
                                  return (
                                    <div
                                      key={`empty-${dIdx}`}
                                      className="h-2.5 w-2.5 sm:h-3 sm:w-3 opacity-0"
                                    />
                                  );
                                }

                                const intensity =
                                  day.level === 0 || day.count === 0
                                    ? "bg-zinc-100 dark:bg-zinc-850"
                                    : (day.level === 1 || day.count <= 3)
                                      ? "bg-emerald-300 dark:bg-emerald-900"
                                      : (day.level === 2 || day.count <= 8)
                                        ? "bg-emerald-400 dark:bg-emerald-700"
                                        : (day.level === 3 || day.count <= 18)
                                          ? "bg-emerald-500 dark:bg-emerald-600"
                                          : "bg-emerald-700 dark:bg-emerald-400";

                                return (
                                  <div
                                    key={day.date}
                                    title={`${day.date}: ${day.count} contributions`}
                                    className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-xs transition-colors ${intensity}`}
                                  />
                                );
                              })}
                            </div>
                          ))}
                        </div>
                        {/* Month Label Underneath */}
                        <span className="mt-2 text-[10px] font-medium text-zinc-400">
                          {m.monthLabel}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Legend */}
              <div className="mt-3 flex items-center justify-end gap-1.5 text-[11px] text-zinc-400">
                <span>Less</span>
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-xs bg-zinc-100 dark:bg-zinc-850" />
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-xs bg-emerald-300 dark:bg-emerald-900" />
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-xs bg-emerald-400 dark:bg-emerald-700" />
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-xs bg-emerald-500 dark:bg-emerald-600" />
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-xs bg-emerald-700 dark:bg-emerald-400" />
                <span>More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


