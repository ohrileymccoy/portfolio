function HeatSquares({ weeks = 16, days = 7, level = () => 0 }) {
  // simple activity visualization
  return (
    <div className="grid grid-rows-7 grid-flow-col gap-1">
      {Array.from({ length: weeks * days }).map((_, i) => {
        const v = level(i);
        const shades = ["bg-white/10","bg-cyan-300/20","bg-cyan-300/40","bg-cyan-300/60","bg-cyan-300/80"];
        return <div key={i} className={`w-3 h-3 rounded ${shades[v]}`} />;
      })}
    </div>
  );
}

export default function GitHubDashboard({ stats = { repos: 0, pulls: 0, branches: 0, files: 0 } }) {
  return (
    <section className="h-[28rem] rounded-xl p-6 border bg-white/5 backdrop-blur-md border-white/15">
      <h2 className="text-lg font-semibold mb-4">GitHub Dashboard</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {[
          { label: "Repos", value: stats.repos },
          { label: "Pull Requests", value: stats.pulls },
          { label: "Branches", value: stats.branches },
          { label: "Files", value: stats.files },
        ].map((m) => (
          <div key={m.label} className="rounded-lg p-4 border border-white/10 bg-black/20">
            <div className="text-xs uppercase tracking-wide text-white/60">{m.label}</div>
            <div className="text-2xl font-semibold">{m.value}</div>
          </div>
        ))}
      </div>

      <div>
        <div className="text-sm mb-2 text-white/80">Activity</div>
        <div className="rounded-lg p-3 border border-white/10 bg-black/20 overflow-x-auto">
          <HeatSquares level={(i)=> (i % 13 === 0 ? 4 : i % 7 === 0 ? 3 : i % 3 === 0 ? 2 : 1)} />
        </div>
      </div>
    </section>
  );
}
