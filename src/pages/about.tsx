import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Murphbeck Technologies</h1>
        <p className="text-gray-300 mb-4">
          We&apos;re not your typical AI shop. Murphbeck builds deployable, practical, and battle-tested agents
          that you can actually use to grow your business, automate work, and sell product.
        </p>
        <p className="text-gray-300 mb-4">
          From visual content to vault bots, merch automation to brand voice engines — we&apos;ve built it.
          And we&apos;re just getting started.
        </p>

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
