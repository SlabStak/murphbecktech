'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function CustomAI() {
  const [form, setForm] = useState({ name: '', email: '', description: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', description: '' })
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Build Your Custom AI Agent</h1>

        <p className="text-gray-400 text-lg mb-8 text-center">
          Tell us what your AI agent should do — and we’ll build it for you. From automation to branding, we design it to perform like a team member.
        </p>

        <div className="grid gap-12 md:grid-cols-2">
          <ul className="space-y-4 text-gray-300">
            <li>✅ Tailored to your business or product</li>
            <li>✅ Built to automate, sell, or support</li>
            <li>✅ Deployed with docs, prompts, and UI (optional)</li>
            <li>✅ Can be stacked or upgraded later</li>
          </ul>

          <div className="bg-gray-900 rounded-xl p-6">
            {!submitted ? (
              <>
                <h2 className="text-xl font-semibold mb-4">Custom Agent Request</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-black text-white border border-gray-700"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-black text-white border border-gray-700"
                  />
                  <textarea
                    name="description"
                    placeholder="Describe what your AI should do..."
                    required
                    value={form.description}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 rounded-md bg-black text-white border border-gray-700"
                  ></textarea>
                  <button type="submit" className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition">
                    Submit Request
                  </button>
                </form>
              </>
            ) : (
              <div className="text-green-400 font-semibold">
                Thank you! We’ll review your agent request and contact you.
              </div>
            )}
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
