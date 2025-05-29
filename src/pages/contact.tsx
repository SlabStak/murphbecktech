import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-gray-900 text-white border border-gray-700"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-gray-900 text-white border border-gray-700"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="w-full p-3 rounded-md bg-gray-900 text-white border border-gray-700"
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center text-lg text-green-400">
            Message sent! We'll be in touch shortly.
          </div>
        )}

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
