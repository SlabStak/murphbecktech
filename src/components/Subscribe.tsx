'use client'
import { useState } from 'react'

export default function Subscribe() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <div className="bg-gray-900 text-white px-6 py-12 rounded-xl mt-16 shadow-xl">
      <h2 className="text-3xl font-bold mb-4">Subscribe for Updates</h2>
      <p className="text-gray-400 mb-6">Get the latest AI drops, features, and upgrades direct to your inbox.</p>

      {submitted ? (
        <p className="text-green-400 font-semibold">Thank you! You&apos;re on the list.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            required
            placeholder="your@email.com"
            className="px-4 py-3 rounded-md w-full text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-white text-black font-bold px-6 py-3 rounded-md hover:bg-gray-200 transition"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  )
}
