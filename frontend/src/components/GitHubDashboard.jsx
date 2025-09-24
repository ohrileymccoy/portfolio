import { useEffect, useState } from "react";

function HeatSquares({ weeks = [] }) {
  const shades = [
    "bg-white/10",
    "bg-cyan-300/20",
    "bg-cyan-300/40",
    "bg-cyan-300/60",
    "bg-cyan-300/80",
  ];

  const days = weeks.flatMap((w) => w.contributionDays);

  return (
    <div className="grid grid-rows-7 grid-flow-col gap-1">
      {days.map((d) => {
        const v = Math.min(4, d.contributionCount);
        return (
          <div
            key={d.date}
            className={`w-3 h-3 rounded ${shades[v]}`}
            title={`${d.date}: ${d.contributionCount}`}
          />
        );
      })}
    </div>
  );
}

export default function GitHubDashboard() {
  const [stats, setStats] = useState(null);
  const [weeks, setWeeks] = useState([]);

  useEffect(() => {
    fetch("/api/v1/github")
      .then((r) => r.json())
      .then((data) => {
        if (!data?.data?.viewer) return;
        const v = data.data.viewer;

        const latest = v.latestRepo.nodes[0];

        setStats({
          repos: v.repoCount.totalCount,
          pulls: v.pullRequests.totalCount,
          branches: latest.refs.totalCount,
          commits: latest.defaultBranchRef?.target.history.totalCount ?? 0,
          lastUpdated: latest.updatedAt,
        });

        setWeeks(v.contributionsCollection.contributionCalendar.weeks);
      })
      .catch((err) => console.error("GitHub API fetch error:", err));
  }, []);

  if (!stats) {
    return (
      <section className="h-[28rem] rounded-xl p-6 border bg-white/5 backdrop-blur-md border-white/15 flex items-center justify-center">
        <div className="text-white/60">Loading GitHub data…</div>
      </section>
    );
  }

  return (
    <section className="h-[28rem] rounded-xl p-6 border bg-white/5 backdrop-blur-md border-white/15">
      <h2 className="text-lg font-semibold mb-4">GitHub Dashboard</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {[
          { label: "Repos", value: stats.repos },
          { label: "Pull Requests", value: stats.pulls },
          { label: "Branches", value: stats.branches },
          { label: "Commits", value: stats.commits },
        ].map((m) => (
          <div
            key={m.label}
            className="rounded-lg p-4 border border-white/10 bg-black/20"
          >
            <div className="text-xs uppercase tracking-wide text-white/60">
              {m.label}
            </div>
            <div className="text-2xl font-semibold">{m.value}</div>
          </div>
        ))}
      </div>

      <div className="text-xs text-white/50 mb-4">
        Last updated repo: {new Date(stats.lastUpdated).toLocaleDateString()}
      </div>

  <div>
 <div className="rounded-lg p-3 border border-white/10 bg-black/20 overflow-hidden">
  <div className="w-full overflow-hidden">
    <div className="scale-[0.8] md:scale-[0.8] origin-left">
      <HeatSquares weeks={weeks.slice(-30)} />
    </div>
  </div>
</div>
</div>
    </section>
  );
}
