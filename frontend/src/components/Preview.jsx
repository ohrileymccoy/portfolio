// frontend/src/components/Preview.jsx
// static preview data for FeaturedStrip + ProjectPage (fallback if no DB)

const previewProjects = [
  {
    slug: "board-game",
    title: "Board Game",
    description: "Simple real-time multiplayer board game built with React.",
    image: "/assets/boardgame.jpg",
    github_url: "https://github.com/you/board-game",
    demo_url: "https://board-game.pages.dev",   // 👈 iframe-ready
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description: "Live weather visualization with graphs and city switching.",
    image: "/assets/weather.jpg",
    github_url: "https://github.com/you/weather-dashboard",
    demo_url: "https://weather-dashboard.pages.dev", // 👈 iframe-ready
  },
  {
    slug: "sleazy-news",
    title: "S L N",
    description: "Local news app featuring user submitted content.",
    image: "/assets/sleazy.jpg",
    github_url: "https://github.com/you/sln",
    demo_url: "https://sleazy-news.pages.dev", // 👈 iframe-ready
  }
];

export default previewProjects;
