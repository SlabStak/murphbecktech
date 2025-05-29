import Link from 'next/link'

export default function Terms() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="text-gray-300 mb-4">
          These terms outline how our platform operates, your rights, and responsibilities when using our services.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400">
          <li>All AI agents are provided as-is, with no guarantee of uptime or outcomes.</li>
          <li>Agents may not be used for illegal, abusive, or malicious purposes.</li>
          <li>Payment plans and licenses must be honored or risk termination.</li>
          <li>By submitting requests or using agents, you consent to our processing of AI-based data and outputs.</li>
        </ul>
        <div className="mt-8">
          <Link href="/" className="text-blue-400 underline">← Back to Home</Link>
        </div>
      </div>
    </main>
  )
}
