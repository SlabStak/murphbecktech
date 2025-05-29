export default function Services() {
  return (
    <main className='min-h-screen bg-black text-white px-6 py-16'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-4xl font-bold mb-12 text-center'>What We Offer</h1>
        <div className='grid md:grid-cols-3 gap-6'>
          <div className='bg-gray-900 p-6 rounded-xl'>
            <h2 className='text-xl font-semibold mb-2'>Custom AI Agents</h2>
            <p className='text-sm text-gray-400'>
              We design and deploy fully autonomous agents that handle marketing, operations, sales, content, and more.
            </p>
          </div>
          <div className='bg-gray-900 p-6 rounded-xl'>
            <h2 className='text-xl font-semibold mb-2'>Brand Systems + Launch Kits</h2>
            <p className='text-sm text-gray-400'>
              Full-stack brand drops, kits, and growth tools built by VYBE.EXE to give you an unfair advantage.
            </p>
          </div>
          <div className='bg-gray-900 p-6 rounded-xl'>
            <h2 className='text-xl font-semibold mb-2'>Startup & Product Launch</h2>
            <p className='text-sm text-gray-400'>
              From zero to live — launch strategy, website, automations, backend systems, and execution support.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
