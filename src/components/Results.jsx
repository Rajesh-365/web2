import React, { useMemo, useState } from "react";

/**
 * ResultsShowcase
 * - Drop-in component for a beautiful results portal.
 * - Uses dummy data below; replace with your real array if you have it.
 * - Keeps id="results" so external buttons can scroll here.
 */

const APPEARED_TOTAL = 37;

/* ---- Dummy Results Data (replace with your real data if needed) ---- */
const DUMMY_RESULTS = [
  { studentId: "EC001", name: "Ruthu Nagavarapu", percentage: 94, status: "Distinction", rank: 1, course: "C.Th", year: "2024", location: "Guntur", firstSem25: 24, secondSem25: 23 },
  { studentId: "EC002", name: "Tirupathi Raidu", percentage: 94, status: "Distinction", rank: 2, course: "C.Th", year: "2024", location: "Vijayawada", firstSem25: 23, secondSem25: 24 },
  { studentId: "EC003", name: "Grace David", percentage: 92, status: "Distinction", rank: 3, course: "C.Th", year: "2024", location: "Ongole", firstSem25: 23, secondSem25: 23 },
  { studentId: "EC004", name: "Paul Matthew", percentage: 86, status: "Pass", rank: 4, course: "C.Th", year: "2024", location: "Tenali", firstSem25: 22, secondSem25: 21 },
  { studentId: "EC005", name: "Elias Joseph", percentage: 82, status: "Pass", rank: 5, course: "C.Th", year: "2024", location: "Nellore", firstSem25: 21, secondSem25: 20 },
  { studentId: "EC006", name: "Charan Prasad", percentage: 79, status: "Pass", rank: 6, course: "C.Th", year: "2024", location: "Eluru", firstSem25: 19, secondSem25: 20 },
  { studentId: "EC007", name: "Mary Anitha", percentage: 75, status: "Pass", rank: 7, course: "C.Th", year: "2024", location: "Mangalagiri", firstSem25: 18, secondSem25: 19 },
  { studentId: "EC008", name: "Samuel Peter", percentage: 72, status: "Pass", rank: 8, course: "C.Th", year: "2024", location: "Chirala", firstSem25: 18, secondSem25: 18 },
  { studentId: "EC009", name: "Daniel Raj", percentage: 68, status: "Pass", rank: 9, course: "C.Th", year: "2024", location: "Tadepalli", firstSem25: 17, secondSem25: 16 },
  { studentId: "EC010", name: "John Wesley", percentage: 62, status: "Pass", rank: 10, course: "C.Th", year: "2024", location: "Bapatla", firstSem25: 15, secondSem25: 16 },
  { studentId: "EC011", name: "Phoebe Esther", percentage: 59, status: "Pass", rank: 11, course: "C.Th", year: "2024", location: "Vinukonda", firstSem25: 14, secondSem25: 15 },
  { studentId: "EC012", name: "Andrew Noel", percentage: 48, status: "Fail", rank: 12, course: "C.Th", year: "2024", location: "Guntur", firstSem25: 12, secondSem25: 10 },
];

/* ---- Small UI helpers ---- */
const StatusBadge = ({ status }) => {
  const s = (status || "").toLowerCase();
  const cls =
    s === "distinction"
      ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
      : s === "fail"
      ? "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300"
      : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300";
  return (
    <span className={`px-2 py-0.5 rounded-md text-[11px] font-semibold ${cls}`}>
      {status || "—"}
    </span>
  );
};

const Field = ({ label, value }) => (
  <div className="rounded-lg border border-gray-200 dark:border-white/10 p-3">
    <div className="text-[11px] uppercase tracking-wide text-gray-500 dark:text-gray-400">
      {label}
    </div>
    <div className="mt-0.5 font-semibold text-gray-900 dark:text-gray-100">{value}</div>
  </div>
);

const CertificateCard = ({ r }) => {
  const pct = r.percentage == null ? "—" : r.percentage;
  const status = (r.status || "").toLowerCase();
  const statusClasses =
    status === "distinction"
      ? "bg-amber-500"
      : status === "fail"
      ? "bg-rose-600"
      : "bg-emerald-600";
  const statusText =
    status === "distinction" ? "Distinction" : status === "fail" ? "Fail" : r.status || "Result";

  return (
    <div className="relative max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-white/10 overflow-hidden">
      {/* Ribbon */}
      <div className="bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-700 px-6 py-5 text-white">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-extrabold">{r.name}</h3>
            <p className="text-sm text-white/90">
              {r.studentId} • {r.location}
            </p>
          </div>
          <div className={`px-3 py-1.5 rounded-full text-sm font-semibold ${statusClasses}`}>
            {statusText}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-[180px,1fr] gap-6 items-center">
          {/* Percentage medallion */}
          <div className="flex md:block justify-center">
            <div className="relative inline-flex items-center justify-center w-36 h-36 rounded-full bg-white dark:bg-gray-900 ring-4 ring-purple-200 dark:ring-purple-900 shadow">
              <div className="absolute inset-0 rounded-full border-4 border-purple-600/30" />
              <div className="text-center">
                <div className="text-4xl font-extrabold text-purple-700 dark:text-purple-300">
                  {pct === "—" ? "—" : `${pct}`}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Percentage
                </div>
              </div>
            </div>
          </div>

          {/* Info grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Course" value={r.course} />
            <Field label="Year" value={r.year} />
            <Field label="First Semester (/25)" value={r.firstSem25 ?? "—"} />
            <Field label="Second Semester (/25)" value={r.secondSem25 ?? "—"} />
            <Field label="Rank" value={r.rank ?? "—"} />
            <Field label="Status" value={r.status || "—"} />
          </div>
        </div>

        <div className="my-6 h-px bg-gray-200 dark:bg-white/10" />
        <div className="text-center text-sm text-gray-600 dark:text-gray-300">
          This is a computer-generated statement of results for academic reference.
        </div>
      </div>

      {/* Flourishes */}
      <div className="pointer-events-none">
        <span className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-purple-100 dark:bg-purple-900 opacity-50" />
        <span className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-indigo-100 dark:bg-indigo-900 opacity-40" />
      </div>
    </div>
  );
};

/* ---- Main Component ---- */
const ResultsShowcase = ({ data = DUMMY_RESULTS }) => {
  const [hall, setHall] = useState("");
  const [picked, setPicked] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);

  // Summary
  const passPercent = useMemo(() => {
    const total = data.length || 1;
    const pass = data.filter((r) => (r.status || "").toLowerCase() !== "fail").length;
    return Math.round((pass / total) * 100);
  }, [data]);

  // Top 3 (gold)
  const top3 = useMemo(
    () =>
      [...data]
        .sort((a, b) => (b.percentage || 0) - (a.percentage || 0))
        .slice(0, 3),
    [data]
  );

  // Search
  const [q, setQ] = useState("");
  const matches = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    return data.filter(
      (r) =>
        (r.name || "").toLowerCase().includes(s) ||
        (r.studentId || "").toLowerCase().includes(s)
    );
  }, [q, data]);

  // Sessions (dummy list like notice board)
  const SESSIONS = [
    { key: "cth-2024-regular", title: "C.Th Regular Examination – 2024", date: "2024-11-30", theme: "pink" },
    { key: "cth-2024-supply", title: "C.Th Supplementary – 2024", date: "2025-01-15", theme: "cyan" },
  ];

  const getThemeClasses = (theme) =>
    theme === "pink"
      ? "bg-pink-100 dark:bg-pink-900/30 hover:bg-pink-200/70 dark:hover:bg-pink-800/50"
      : "bg-cyan-100 dark:bg-cyan-900/30 hover:bg-cyan-200/70 dark:hover:bg-cyan-800/50";

  const doLookup = () => {
    const ht = hall.trim().toLowerCase();
    if (!ht) return setPicked({ notFound: true });
    const m = data.find((r) => (r.studentId || "").toLowerCase() === ht);
    setPicked(m || { notFound: true });
  };

  return (
    <section id="results" className="relative overflow-hidden py-14 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
      {/* confetti dots */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-10 left-10 w-24 h-24 rounded-full bg-amber-200 blur-2xl" />
        <div className="absolute top-20 right-10 w-24 h-24 rounded-full bg-blue-200 blur-2xl" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-purple-200 blur-2xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* HERO */}
        <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-gray-900/70 backdrop-blur p-8 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.2)]">
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
                Examination Results
              </h2>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                <b>{APPEARED_TOTAL}</b> students appeared • Pass Percentage: <b>{passPercent}%</b>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Top 3 students have scored the highest marks.
              </p>
            </div>

            {/* Quick Hall Ticket lookup */}
            <div className="w-full sm:w-auto">
              <div className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-2 shadow-sm">
                <input
                  value={hall}
                  onChange={(e) => setHall(e.target.value)}
                  placeholder="Enter Hall Ticket (e.g., EC001)"
                  className="flex-1 px-3 py-2 rounded-lg bg-transparent text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none"
                />
                <button
                  onClick={doLookup}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                >
                  Get Result
                </button>
              </div>
              {picked?.notFound && (
                <div className="mt-2 text-sm text-rose-600">No result found for this Hall Ticket.</div>
              )}
            </div>
          </div>

          {/* If a hall ticket is found, show compact certificate */}
          {picked && !picked.notFound && (
            <div className="mt-8">
              <CertificateCard r={picked} />
            </div>
          )}
        </div>

        {/* Top 3 (gold highlight) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {top3.map((s, i) => (
            <div
              key={s.studentId}
              className="group rounded-2xl p-5 text-center bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/40 shadow-sm ring-1 ring-amber-200/60 hover:shadow-md transition"
            >
              <div className="inline-flex items-center gap-2 text-amber-700 dark:text-amber-300 font-semibold">
                <span className="inline-block px-2 py-0.5 rounded-full bg-amber-200/70 dark:bg-amber-800/60 text-xs">
                  Rank {i + 1}
                </span>
                <span>Top Performer</span>
              </div>
              <h3 className="mt-2 font-bold text-gray-900 dark:text-white">{s.name}</h3>
              <div className="text-xs text-gray-600 dark:text-gray-300">{s.studentId} • {s.location}</div>
              <div className="mt-3 text-4xl font-extrabold text-amber-700 dark:text-amber-300">
                {s.percentage}<span className="text-base font-semibold">%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Sessions notice board */}
        <div className="mt-12">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Available Sessions</h4>
          <div className="overflow-hidden rounded-xl border border-purple-900/60">
            <div className="grid grid-cols-2 bg-purple-900 text-white font-semibold text-sm">
              <div className="px-4 py-2.5">Results Details</div>
              <div className="px-4 py-2.5">Results Release Date</div>
            </div>
            {SESSIONS.map((s, idx) => (
              <button
                key={s.key}
                onClick={() => setSelectedSession(s)}
                className={`grid grid-cols-2 w-full text-left px-4 py-3 transition ${getThemeClasses(s.theme)}`}
              >
                <div className="font-medium text-blue-900 dark:text-blue-100">{s.title}</div>
                <div className="text-gray-900 dark:text-gray-100">{s.date}</div>
              </button>
            ))}
          </div>

          {selectedSession && (
            <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
              Selected session: <b>{selectedSession.title}</b> — enter a Hall Ticket above to view result.
            </div>
          )}
        </div>

        {/* Search panel + results */}
        <div className="mt-12 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 p-6 shadow-sm">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            <div className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              Search by Name / Hall Ticket
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Type a name or ID (e.g., EC003)"
              className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-white/10 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Matches */}
          {q ? (
            matches.length ? (
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {matches.map((r) => (
                  <div
                    key={r.studentId}
                    className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 p-4 shadow hover:shadow-md transition"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">{r.name}</div>
                      <StatusBadge status={r.status} />
                    </div>
                    <div className="mt-1 text-xs text-gray-600 dark:text-gray-300">{r.studentId} • {r.location}</div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm text-gray-700 dark:text-gray-200">
                        %: <b>{r.percentage ?? "—"}</b>
                      </span>
                      {r.rank != null && (
                        <span className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                          Rank {r.rank}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-5 text-center text-gray-500 dark:text-gray-400">
                No results found. Try a different search.
              </div>
            )
          ) : (
            <div className="mt-4 text-center text-gray-500 dark:text-gray-400">
              Start typing above to search results…
            </div>
          )}
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
          Need official transcript? Contact the office with your Hall Ticket number.
        </p>
      </div>
    </section>
  );
};

export default ResultsShowcase;
