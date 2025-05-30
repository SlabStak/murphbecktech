import Link from 'next/link'

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Let&apos;s Talk</h1>
        <p className="text-gray-400 mb-12">Have questions or want to request something custom? Shoot us a note.</p>

        <form className="bg-gray-900 p-6 rounded-xl space-y-4 text-left">
          <input type="text" placeholder="Your Name" className="w-full p-3 bg-black border border-gray-700 text-white rounded-md" />
          <input type="email" placeholder="Your Email" className="w-full p-3 bg-black border border-gray-700 text-white rounded-md" />
          <textarea rows={5} placeholder="What&apos;s on your mind?" className="w-full p-3 bg-black border border-gray-700 text-white rounded-md" />
          <button type="submit" className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition">
            Send
          </button>
        </form>

        <div className="mt-12">
          <Link href="/">
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
