import Link from 'next/link'

export default function Stacking() {
  const stacks = [
    {
      title: "Creator Stack",
      agents: ["SOCIAL.EXE", "VYBE.EXE", "MUSE.EXE"],
      desc: "Automates content, merch drops, and brand visuals. Ideal for influencers, creators, and personal brands."
    },
    {
      title: "Startup Stack",
      agents: ["LAUNCHFLOW.EXE", "BOARDROOM.EXE", "FUSION.EXE"],
      desc: "Launch faster with pitch decks, marketing funnels, and deployable MVPs — built for startup founders."
    },
    {
      title: "Brand Builder Stack",
      agents: ["MUSE.EXE", "BRAND_Identity_Architect", "SCRIPT.EXE"],
      desc: "Create logos, moodboards, brand copy, and full voice guides. Great for new companies or product lines."
    },
    {
      title: "Ecom Vault Stack",
      agents: ["VYBE.EXE", "INFLUENCERSTACK", "CUSTOMBUILDER.EXE"],
      desc: "Generate product visuals, build influencer drops, and ship ready-to-deploy AI agents for your store or stream."
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Stacking AI Agents</h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Stacking lets you combine multiple agents into one powerful system.
          The right stack can launch your product, automate your business, and build your brand — all at once.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stacks.map((stack, idx) => (
            <div key={idx} className="bg-gray-900 text-white p-6 rounded-2xl">
              <h2 className="text-xl font-semibold mb-2">{stack.title}</h2>
              <p className="text-sm text-gray-300 mb-2">{stack.desc}</p>
              <p className="text-xs text-gray-400">Includes: {stack.agents.join(", ")}</p>
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
