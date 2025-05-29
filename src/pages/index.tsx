import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <header className="flex justify-between items-center max-w-7xl mx-auto mb-16">
        <h1 className="text-2xl font-bold">Murphbeck Technologies</h1>
        <nav className="space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/agents" className="hover:underline">Agents</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </header>

      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-6">Custom AI That Works For You</h2>
        <p className="text-lg text-gray-400 mb-10">
          We build and deploy autonomous AI agents to automate your workflows, launch your products, and scale your empire.
        </p>
        <div className="flex justify-center gap-4 mb-20 flex-wrap">
          <Link href="/custom-ai">
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">Deploy Your Agent</button>
          </Link>
          <Link href="/brand-systems">
            <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">Explore Services</button>
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Link href="/custom-ai">
          <div className="bg-gray-900 p-6 rounded-2xl cursor-pointer hover:bg-gray-800 transition">
            <h3 className="text-xl font-semibold mb-2">Agent Creation</h3>
            <p className="text-sm text-gray-400">From idea to deployment — we build AI agents that automate, sell, and scale.</p>
          </div>
        </Link>
        <Link href="/startup-launch">
          <div className="bg-gray-900 p-6 rounded-2xl cursor-pointer hover:bg-gray-800 transition">
            <h3 className="text-xl font-semibold mb-2">Startup Acceleration</h3>
            <p className="text-sm text-gray-400">Pitch decks, MVPs, full-stack launches — everything you need to go from zero to launch.</p>
          </div>
        </Link>
        <Link href="/brand-systems">
          <div className="bg-gray-900 p-6 rounded-2xl cursor-pointer hover:bg-gray-800 transition">
            <h3 className="text-xl font-semibold mb-2">AI Branding Tools</h3>
            <p className="text-sm text-gray-400">Logos, drop kits, visuals, and campaigns — built by VYBE.EXE for maximum impact.</p>
          </div>
        </Link>
      </div>
    </main>
  )
}
