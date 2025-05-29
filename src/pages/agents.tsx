import Link from 'next/link'

export default function Agents() {
  const agents = [
    {
      name: "NOVAMIND.EXE",
      desc: "The Ultimate General Intelligence Agent. Trained across psychology, economics, tech, ethics, and more — NovaMind adapts to any task with creativity, empathy, and logic."
    },
    {
      name: "SOCIAL.EXE",
      desc: "Your 24/7 Viral Content Engine. Creates, formats, and schedules high-impact social content across IG, TikTok, Threads, and more — fully aligned to your tone and trends."
    },
    {
      name: "BILL.EXE",
      desc: "AI Agent for Trading Card Arbitrage & Vaults. Snipes eBay deals, analyzes slabs, flips collectibles, and runs vault/stream pricing logic automatically for sports & Pokémon markets."
    },
    {
      name: "VYBE.EXE",
      desc: "Merch & Drop Campaign Architect. Builds product kits, Shopify exports, visual mockups, captions, and automated email/SMS flows — your merch team’s dream assistant."
    },
    {
      name: "OMNI.EXE",
      desc: "Cross-Agent Router + Command Hub. Acts as a universal control center for all deployed agents. Stack, sync, and orchestrate entire workflows with one voice."
    },
    {
      name: "MEDIATOR.EXE",
      desc: "Church + Conflict Resolution AI. A faith-based communication agent built in Notion, guiding private parties through reflective conflict healing with Scripture-led AI tone."
    },
    {
      name: "GOLF.GURU",
      desc: "Personal Golf Coach + Drill Planner. Takes in your handicap and stats, then designs full training plans with drills, videos, goals, and custom score tracking."
    },
    {
      name: "CUSTOMBUILDER.EXE",
      desc: "Sell-Ready AI Agent Builder. Rapidly generates deployable, license-ready agents for client sale — includes prompt logic, install docs, and activation flows."
    },
    {
      name: "AVATAR.EXE",
      desc: "Headshot + Photo Identity Generator. Transforms uploaded photos into professional headshots with logo overlays, brand alignment, and export formats for any platform."
    },
    {
      name: "LEGACY.EXE",
      desc: "Storytelling Agent for Founders + Creators. Tells your journey with brand-grade storytelling prompts — perfect for founder bios, media kits, investor decks, or About pages."
    },
    {
      name: "LAUNCHFLOW.EXE",
      desc: "Startup Launch Copy & Funnel Architect. Generates full marketing funnels for product launches — including headlines, CTAs, hero blurbs, emails, and site copy."
    },
    {
      name: "BOARDROOM.EXE",
      desc: "Investor Deck & Pitch Builder Agent. Crafts stunning pitch decks, valuations, and AI-powered narratives that align with investor psychology and market data."
    },
    {
      name: "FUSION.EXE",
      desc: "All-in-One AI Product Stack Deployer. Bundles multiple agents into one deployable full-stack product — ideal for clients needing websites, bots, and backend logic all in one."
    },
    {
      name: "MUSE.EXE",
      desc: "Creative Director for Visual Brands. Turns brand input into moodboards, product concepts, captions, and visual brand kits across apparel, lifestyle, and ecommerce sectors."
    },
    {
      name: "REVIEWAI.EXE",
      desc: "Automated Review Collector + Formatter. Creates polished Yelp/Google-style reviews from bullet inputs or audio files, using tone-matched logic and star score formatting."
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Top 15 Murphbeck AI Agents</h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {agents.map((agent, idx) => (
            <div key={idx} className="bg-gray-900 text-white p-6 rounded-2xl">
              <h2 className="text-lg font-semibold mb-2">{agent.name}</h2>
              <p className="text-sm text-gray-400">{agent.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/">
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
