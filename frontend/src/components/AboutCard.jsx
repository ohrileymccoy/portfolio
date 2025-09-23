export default function AboutCard({ children }) {
  return (
    <section
      id="about"
      className={[
        "relative h-[28rem] overflow-auto p-6 rounded-xl border",
        // dark: translucent glowing
        "dark:bg-white/5 dark:backdrop-blur-md dark:border-white/15 dark:shadow-[0_10px_30px_rgba(34,211,238,0.25)]",
        // light: carbon gray card
        "bg-gray-200 border-gray-300 shadow-md",
      ].join(" ")}
    >
      <h2 className="text-lg font-semibold mb-3">About Me</h2>
      <div className="space-y-4 text-sm leading-6 text-gray-800 dark:text-white/80">
        {children}
      </div>
    </section>
  );
}
