'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function CustomAIAgents() {
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
          A custom AI agent is a deployable tool trained specifically for your business. It can run automations, handle outreach, manage content, analyze data, or even talk like you. You tell us what you want it to do — we build it, test it, and deliver it to run anywhere.
        </p>

        <div className="grid gap-12 md:grid-cols-2">
          <ul className="space-y-4 text-gray-300">
            <li>✅ Built for your workflow, product, or brand</li>
            <li>✅ Runs on GPT, OpenRouter, Claude, or your stack</li>
            <li>✅ Deployed with install docs + prompt packs</li>
            <li>✅ Includes tone alignment, logic flows, and handoff</li>
            <li>✅ Optional frontends, integrations, or stacking</li>
          </ul>

          <div className="bg-gray-900 rounded-xl p-6">
            {!submitted ? (
              <>
                <h2 className="text-xl font-semibold mb-4">Start Your Build</h2>
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
                    placeholder="What do you want your AI to do?"
                    required
                    value={form.description}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 rounded-md bg-black text-white border border-gray-700"
                  ></textarea>
                  <button type="submit" className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition">
                    Send Request
                  </button>
                </form>
              </>
            ) : (
              <div className="text-green-400 font-semibold">
                Thanks! Your custom AI build request was submitted.
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
