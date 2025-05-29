import Link from 'next/link'

export default function BrandSystems() {
  const agents = [
    {
      name: "VYBE.EXE",
      desc: "Creates full merch drops, launch kits, Shopify exports, visuals, captions, and campaign plans — built for brands who want to scale fast."
    },
    {
      name: "MUSE.EXE",
      desc: "Turns your product ideas into moodboards, visual concepts, captions, and content packs. Acts as your brand’s Creative Director."
    },
    {
      name: "SCRIPT.EXE",
      desc: "Generates launch scripts, campaign copy, website CTAs, social posts, and email sequences — all tone-aligned to your brand voice."
    },
    {
      name: "INFLUENCERSTACK",
      desc: "Builds UGC briefs, promo code logic, DM templates, repost kits, and full influencer campaign flows ready to plug into Instagram, TikTok, or Threads."
    },
    {
      name: "BRAND_Identity_Architect",
      desc: "Creates logos, slogans, voice guides, naming ideas, and full brand identity documents tailored to your product and market."
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Brand Systems + Launch Kits</h1>

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
