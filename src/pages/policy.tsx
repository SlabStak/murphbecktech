import Link from 'next/link'

export default function Policy() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-300 mb-4">
          We respect your privacy. Here’s what we collect, how we use it, and how we protect your information.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400">
          <li>We collect name, email, and custom request data from forms you submit.</li>
          <li>This data is only used to communicate with you or build your requested agent.</li>
          <li>We do not sell or share your data with third parties.</li>
          <li>Data is stored securely and can be removed upon request.</li>
        </ul>
        <div className="mt-8">
          <Link href="/" className="text-blue-400 underline">← Back to Home</Link>
        </div>
      </div>
    </main>
  )
}
