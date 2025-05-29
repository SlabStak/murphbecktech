import Link from 'next/link'

export default function Thanks() {
  return (
    <main className='min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6 py-16'>
      <h1 className='text-4xl font-bold mb-4'>Thank you!</h1>
      <p className='text-lg mb-6'>We’ve received your project request. Someone from our team will follow up shortly.</p>
      <Link href='/'>
        <button className='bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition'>
          Back to Home
        </button>
      </Link>
    </main>
  )
}
