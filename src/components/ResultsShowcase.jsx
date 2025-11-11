import React, { useMemo, useState } from "react";

/**
 * ResultsShowcase
 * - Drop-in component for a beautiful results portal.
 * - Uses real data from C.Th 2024 examination results.
 * - Keeps id="results" so external buttons can scroll here.
 */

const APPEARED_TOTAL = 37;

/* ---- Real Results Data from Excel ---- */
const RESULTS_DATA = [
  {
    "studentId": "EC/001",
    "name": "U. Trilokesh",
    "percentage": 72,
    "status": "1st class",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Srikakulam",
    "firstSem25": 44,
    "secondSem25": 28
  },
  {
    "studentId": "EC/002",
    "name": "Nagavarapu Chandar Rao",
    "percentage": 66,
    "status": "1st class",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Srikakulam",
    "firstSem25": 36,
    "secondSem25": 30
  },
  {
    "studentId": "EC/003",
    "name": "UNGARALA MADHAVI",
    "percentage": 76,
    "status": "Distinction",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Srikakulam",
    "firstSem25": 44,
    "secondSem25": 32
  },
  {
    "studentId": "EC/004",
    "name": "Vanka Adilakshmi",
    "percentage": 70,
    "status": "1st class",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Srikakulam",
    "firstSem25": 42,
    "secondSem25": 28
  },
  {
    "studentId": "EC/005",
    "name": "Behara Prasad",
    "percentage": 56,
    "status": "2nd Class",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Visakhapatnam",
    "firstSem25": 30,
    "secondSem25": 26
  },
  {
    "studentId": "EC/006",
    "name": "Thota Yellayya",
    "percentage": 80,
    "status": "Distinction",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Visakhapatnam",
    "firstSem25": 40,
    "secondSem25": 48
  },
  {
    "studentId": "EC/007",
    "name": "Nimmagadda  Vijaya",
    "percentage": 80,
    "status": "2nd Class",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Krishna",
    "firstSem25": 46,
    "secondSem25": 34
  },
  {
    "studentId": "EC/008",
    "name": "Nagavarapu Ruthu",
    "percentage": 94,
    "status": "Distinction",
    "rank": 1,
    "course": "C.Th",
    "year": "2024",
    "location": "Chilakaluripet",
    "firstSem25": 46,
    "secondSem25": 48
  },
  {
    "studentId": "EC/009",
    "name": "Thanneru Durga Prasad",
    "percentage": 62,
    "status": "1st class",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Chilakaluripet",
    "firstSem25": 38,
    "secondSem25": 24
  },
  {
    "studentId": "EC/011",
    "name": "M Sirisha",
    "percentage": 66,
    "status": "1st class",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Katrapadu",
    "firstSem25": 36,
    "secondSem25": 30
  },
  {
    "studentId": "EC/012",
    "name": "Prathipati Usha Rani",
    "percentage": 80,
    "status": "2nd Class",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Katrapadu",
    "firstSem25": 42,
    "secondSem25": 38
  },
  {
    "studentId": "EC/013",
    "name": "Vallabhapurapu Susmitha",
    "percentage": 74,
    "status": "1st class",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Katrapadu",
    "firstSem25": 32,
    "secondSem25": 42
  },
  {
    "studentId": "EC/014",
    "name": "Vallabhapurapu Selena Priyadarshi",
    "percentage": 72,
    "status": "1st class",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Katrapadu",
    "firstSem25": 28,
    "secondSem25": 44
  },
  {
    "studentId": "EC/015",
    "name": "Vallabhapurapu Shyam Prasad",
    "percentage": 80,
    "status": "2nd Class",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Katrapadu",
    "firstSem25": 38,
    "secondSem25": 42
  },
  {
    "studentId": "EC/017",
    "name": "Vallabhapurapu Venkatesh",
    "percentage": 74,
    "status": "1st class",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Katrapadu",
    "firstSem25": 38,
    "secondSem25": 36
  },
  {
    "studentId": "EC/018",
    "name": "Vallabhapurapu Krupavaram",
    "percentage": 84,
    "status": "1st class",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Katrapadu",
    "firstSem25": 42,
    "secondSem25": 42
  },
  {
    "studentId": "EC/019",
    "name": "Vallabhapurapu Ribka",
    "percentage": 60,
    "status": "1st class",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Katrapadu",
    "firstSem25": 18,
    "secondSem25": 42
  },
  {
    "studentId": "EC/020",
    "name": "Lourdukumari",
    "percentage": 76,
    "status": "Distinction",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Chilakaluripet",
    "firstSem25": 38,
    "secondSem25": 38
  },
  {
    "studentId": "EC/021",
    "name": "V Roja Rani",
    "percentage": 88,
    "status": "Distinction",
    "rank": 3,
    "course": "C.Th",
    "year": "2024",
    "location": "Chilakaluripet",
    "firstSem25": 44,
    "secondSem25": 44
  },
  {
    "studentId": "EC/022",
    "name": "V Siva Narayanamma",
    "percentage": 86,
    "status": "1st class",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Chilakaluripet",
    "firstSem25": 44,
    "secondSem25": 42
  },
  {
    "studentId": "EC/023",
    "name": "Thatimalla Vimala",
    "percentage": 86,
    "status": "1st class",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Chilakaluripet",
    "firstSem25": 44,
    "secondSem25": 42
  },
  {
    "studentId": "EC/024",
    "name": "Venukuri Mallika",
    "percentage": 86,
    "status": "1st class",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Chilakaluripet",
    "firstSem25": 44,
    "secondSem25": 42
  },
  {
    "studentId": "EC/025",
    "name": "T Ramadevi",
    "percentage": 88,
    "status": "Distinction",
    "rank": 3,
    "course": "C.Th",
    "year": "2024",
    "location": "Chilakaluripet",
    "firstSem25": 44,
    "secondSem25": 44
  },
  {
    "studentId": "EC/026",
    "name": "Janga Vimala",
    "percentage": 74,
    "status": "1st class",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Chilakaluripet",
    "firstSem25": 36,
    "secondSem25": 38
  },
  {
    "studentId": "EC/027",
    "name": "Turaka Tirupathi Rayudu",
    "percentage": 94,
    "status": "Distinction",
    "rank": 1,
    "course": "C.Th",
    "year": "2024",
    "location": "Chilakaluripet",
    "firstSem25": 50,
    "secondSem25": 44
  },
  {
    "studentId": "EC/028",
    "name": "Thatimalla Ramesh",
    "percentage": 82,
    "status": "Distinction",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Chilakaluripet",
    "firstSem25": 40,
    "secondSem25": 42
  },
  {
    "studentId": "EC/029",
    "name": "Turaka Santhi",
    "percentage": 90,
    "status": "Distinction",
    "rank": 2,
    "course": "C.Th",
    "year": "2024",
    "location": "Chilakaluripet",
    "firstSem25": 46,
    "secondSem25": 44
  },
  {
    "studentId": "EC/030",
    "name": "Verapu Kamalakararao",
    "percentage": 86,
    "status": "1st class",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Chilakaluripet",
    "firstSem25": 46,
    "secondSem25": 40
  },
  {
    "studentId": "EC/031",
    "name": "Nalukurthi Priyanka",
    "percentage": 70,
    "status": "1st class",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Lingamguntapalem",
    "firstSem25": 34,
    "secondSem25": 36
  },
  {
    "studentId": "EC/032",
    "name": "Kavila Bhanu Prasad",
    "percentage": 56,
    "status": "2nd Class",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Lingamguntapalem",
    "firstSem25": 26,
    "secondSem25": 40
  },
  {
    "studentId": "EC/033",
    "name": "Penumuli Vamsi Krishna ",
    "percentage": 72,
    "status": "1st class",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Lingamguntapalem",
    "firstSem25": 32,
    "secondSem25": 40
  },
  {
    "studentId": "EC/034",
    "name": "Chiruguri Poorna Prasanth",
    "percentage": 88,
    "status": "Distinction",
    "rank": 3,
    "course": "C.Th",
    "year": "2024",
    "location": "Katrapadu",
    "firstSem25": 46,
    "secondSem25": 42
  },
  {
    "studentId": "EC/035",
    "name": "Chiruguri Esther Rani",
    "percentage": 90,
    "status": "Distinction",
    "rank": 2,
    "course": "C.Th",
    "year": "2024",
    "location": "Katrapadu",
    "firstSem25": 46,
    "secondSem25": 44
  },
  {
    "studentId": "EC/036",
    "name": "Rebba Helen Traisy",
    "percentage": 72,
    "status": "1st class",
    "rank": null,
    "course": "C.Th",
    "year": "2024",
    "location": "Bhattiprolu",
    "firstSem25": 46,
    "secondSem25": 26
  },
  {
    "studentId": "EC/037",
    "name": "Zampani Purushottam",
    "percentage": 88,
    "status": "Distinction",
    "rank": 3,
    "course": "C.Th",
    "year": "2024",
    "location": "Zampani",
    "firstSem25": 46,
    "secondSem25": 42
  }
];

/* ---- Small UI helpers ---- */
const StatusBadge = ({ status }) => {
  const s = (status || "").toLowerCase();
  const cls =
    s === "distinction"
      ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
      : s === "fail" || s === "pending"
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

/* ---- Main Component ---- */
const ResultsShowcase = ({ data = RESULTS_DATA }) => {
  const [hall, setHall] = useState("");
  const [picked, setPicked] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);

  // Summary
  const passPercent = useMemo(() => {
    const total = data.length || 1;
    const pass = data.filter((r) => {
      const s = (r.status || "").toLowerCase();
      return s !== "fail" && s !== "pending";
    }).length;
    return Math.round((pass / total) * 100);
  }, [data]);

  // Top 3 (gold)
  const top3 = useMemo(
    () =>
      [...data]
        .filter(r => r.percentage != null)
        .sort((a, b) => (b.percentage || 0) - (a.percentage || 0))
        .slice(0, 3),
    [data]
  );

  // Sessions (dummy list like notice board)
  const SESSIONS = [
    { key: "cth-2024-regular", title: "C.Th Regular Examination – 2024", date: "2024-11-30", theme: "pink" },
    { key: "cth-2024-supply", title: "C.Th Supplementary – 2024", date: "2025-01-15", theme: "cyan" },
  ];

  const getThemeClasses = (theme) => {
    switch (theme) {
      case "pink":
        return "bg-pink-50 hover:bg-pink-100 dark:bg-pink-900/20 dark:hover:bg-pink-900/30";
      case "cyan":
        return "bg-cyan-50 hover:bg-cyan-100 dark:bg-cyan-900/20 dark:hover:bg-cyan-900/30";
      default:
        return "bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700";
    }
  };

  const doLookup = () => {
    const normalized = hall.trim().toLowerCase();
    // Search by Hall Ticket (exact match, case insensitive) or by Name (partial match)
    const matches = data.filter((r) => 
      r.studentId.toLowerCase() === normalized || 
      r.name.toLowerCase().includes(normalized)
    );
    
    if (matches.length > 0) {
      setPicked(matches); // Set array of all matches
    } else {
      setPicked({ notFound: true });
    }
  };

  return (
    <section id="results" className="relative py-16 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
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
                  onChange={(e) => {
                    setHall(e.target.value);
                    // Clear previous search result when typing
                    if (picked) {
                      setPicked(null);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      doLookup();
                    }
                  }}
                  placeholder="Search by Name / Hall Ticket"
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
                <div className="mt-2 text-sm text-rose-600 dark:text-rose-400">No result found. Try searching by full name or exact Hall Ticket (e.g., EC/001)</div>
              )}
            </div>
          </div>
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
                  Rank {s.rank || (i + 1)}
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

        {/* Search Results Display */}
        {hall.trim() && picked && !picked.notFound && Array.isArray(picked) && (
          <div className="mt-8">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Search Results ({picked.length} {picked.length === 1 ? 'match' : 'matches'} found)
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {picked.map((r) => (
                <div key={r.studentId} className="rounded-xl border-2 border-gray-200 dark:border-white/10 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-5 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Header with name and status */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100">{r.name}</h4>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {r.studentId} • {r.location}
                      </div>
                    </div>
                    <StatusBadge status={r.status} />
                  </div>

                  {/* Percentage Display */}
                  <div className="mb-4 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700/30">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Total Percentage</span>
                      <span className="text-2xl font-extrabold text-purple-700 dark:text-purple-300">
                        {r.percentage ?? "—"}%
                      </span>
                    </div>
                    {r.rank != null && (
                      <div className="mt-2 text-xs text-purple-600 dark:text-purple-400 font-semibold">
                        🏆 Rank {r.rank}
                      </div>
                    )}
                  </div>

                  {/* Semester Marks */}
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700/30">
                      <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">1st Semester</div>
                      <div className="text-xl font-bold text-blue-700 dark:text-blue-300">
                        {r.firstSem25 ?? "—"}<span className="text-sm font-normal text-gray-600 dark:text-gray-400">/50</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/30">
                      <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">2nd Semester</div>
                      <div className="text-xl font-bold text-green-700 dark:text-green-300">
                        {r.secondSem25 ?? "—"}<span className="text-sm font-normal text-gray-600 dark:text-gray-400">/50</span>
                      </div>
                    </div>
                  </div>

                  {/* Total Marks */}
                  {r.firstSem25 != null && r.secondSem25 != null && (
                    <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/30">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Total Marks</span>
                        <span className="text-lg font-bold text-amber-700 dark:text-amber-300">
                          {r.firstSem25 + r.secondSem25}<span className="text-sm font-normal text-gray-600 dark:text-gray-400">/100</span>
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Course Info */}
                  <div className="mt-3 pt-3 border-t border-gray-200 dark:border-white/10">
                    <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                      <span>Course: <b className="text-gray-900 dark:text-gray-100">{r.course}</b></span>
                      <span>Year: <b className="text-gray-900 dark:text-gray-100">{r.year}</b></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer note */}
        <p className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
          Need official transcript? Contact the office with your Hall Ticket number.
        </p>
      </div>
    </section>
  );
};

export default ResultsShowcase;