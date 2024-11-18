import React from 'react'

const Contact = () => {
  return (
    <div className='mx-auto w-1/4'>
        <h1 className='text-4xl font-bold my-10'>Contact Us</h1>
        <input className='w-full border border-black p-2 mb-2' type='text' placeholder='name'/>
        <input className='w-full border border-black p-2 mb-2' type='text' placeholder='message'/>
        <button className='border border-black px-8 py-2 font-bold'>Submit</button>
    </div>
  )
}

export default Contact