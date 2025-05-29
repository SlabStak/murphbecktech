import Link from 'next/link'

export default function Blog() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Murphbeck Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-2">How to Use Custom AI Agents in Your Business</h2>
            <p className="text-gray-400 mb-4">Explore the best ways to integrate Murphbeck agents into your ops stack.</p>
            <Link href="#">
              <span className="text-blue-400 hover:underline">Read more →</span>
            </Link>
          </div>

          <div className="bg-gray-900 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-2">The Future of AI-Driven Workflows</h2>
            <p className="text-gray-400 mb-4">How automation is reshaping small businesses, agencies, and startups.</p>
            <Link href="#">
              <span className="text-blue-400 hover:underline">Read more →</span>
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
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
