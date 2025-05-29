import Link from 'next/link'

export default function StartupLaunch() {
  const agents = [
    {
      name: "LAUNCHFLOW.EXE",
      desc: "Builds your entire launch stack — headlines, CTAs, email flows, landing page blurbs, and social post sets. Everything you need to launch fast."
    },
    {
      name: "BOARDROOM.EXE",
      desc: "Creates investor decks, market maps, TAM/SAM/SOM estimates, and story arcs that align with pitch psychology."
    },
    {
      name: "FUSION.EXE",
      desc: "Bundles multiple agents into a single deployable SaaS or product stack. Great for rapid MVP builds or client work."
    },
    {
      name: "CUSTOMBUILDER.EXE",
      desc: "Lets you generate client-ready AI agents for resale or internal use — includes prompt logic, packaging, and docs."
    },
    {
      name: "LEGACY.EXE",
      desc: "Creates your brand origin story, founder bio, About section, and early team profiles — all tone-aligned and investor-ready."
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Startup Launch Agents</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {agents.map((agent, idx) => (
            <div key={idx} className="bg-gray-900 text-white p-6 rounded-2xl">
              <h2 className="text-xl font-semibold mb-2">{agent.name}</h2>
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
