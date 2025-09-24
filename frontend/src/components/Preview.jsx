// frontend/src/components/Preview.jsx
// static preview data for FeaturedStrip + ProjectPage (fallback if no DB)

const previewProjects = [
  {
    slug: "board-game",
    title: "Scoggle",
    description: "Simple real-time multiplayer board game built with React.",
    image: "/assets/boardgame.jpg",
    github_url: "https://github.com/ohrileymccoy/wordgame",
    demo_url: "https://wordgame-e6x.pages.dev/",   // 👈 iframe-ready
  },
  {
    slug: "weather-dashboard",
    title: "Local Weather Dashboard",
    description: "Live weather visualization with graphs and city switching.",
    image: "/assets/weather.jpg",
    github_url: "https://github.com/ohrileymccoy/weather-dashboard",
    demo_url: "https://weather-dashboard-80a.pages.dev/", // 👈 iframe-ready
  },
  {
    slug: "sleazy-news",
    title: "S L N",
    description: "Local news app featuring user submitted content.",
    image: "/assets/sleazy.jpg",
    github_url: "https://github.com/ohrileymccoy/SLZNWS",
    demo_url: "https://sleazynews.net", // 👈 iframe-ready
  }
];

export default previewProjects;
