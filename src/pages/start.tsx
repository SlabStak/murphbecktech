import { useState } from 'react'
import { useRouter } from 'next/router'

export default function StartProject() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push('/thanks')
  }

  return (
    <main className='min-h-screen bg-black text-white px-6 py-16'>
      <div className='max-w-xl mx-auto'>
        <h1 className='text-4xl font-bold mb-6 text-center'>Start a Project</h1>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <input type='text' name='name' placeholder='Your Name' value={form.name} onChange={handleChange} required className='w-full p-3 bg-black border border-gray-700 rounded-md text-white' />
          <input type='email' name='email' placeholder='Your Email' value={form.email} onChange={handleChange} required className='w-full p-3 bg-black border border-gray-700 rounded-md text-white' />
          <textarea name='message' placeholder='What are you looking for?' value={form.message} onChange={handleChange} required rows={5} className='w-full p-3 bg-black border border-gray-700 rounded-md text-white'></textarea>
          <button type='submit' className='bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition'>Submit</button>
        </form>
      </div>
    </main>
  )
}

