import React from 'react'

const Contact = () => {
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden
    ' id='Contact'>
         <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'> Contact <span className='underline underline-offset-4 decoration-1 font-light '> With Us </span></h1>
            <p className='text-gray-500 mx-auto text-center mb-8 max-w-75'>Ready to make a move let's make your future  </p>
    <form action="" className='max-w-2xl text-gray-600 pt-8 mx-auto '>
        <div className='flex md:flex-nowrap flex-wrap gap-4 '>
            <div className='w-full md:w-1/2 text-left'>
            Your Name
            <input type="text" placeholder='Your name ' className='w-full border border-gray-300 rounded py-3 px-4 mt-2' required name='Name' />
            </div>
             <div className='w-full md:w-1/2 text-left'>
            Your Email
            <input type="email" placeholder='Your Email ' className='w-full border border-gray-300 rounded py-3 px-4 mt-2 md:pl-4' required name='Email' />
            </div>  
        </div>
        <div className='my-6 text-left'>
            Message 
            <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 md:pl-4 h-48 resize-none'
            name="message " placeholder="Message" required > </textarea>
        </div>
        <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded '>
            Send Message 
        </button>
    </form> 
      
    </div>
  )
}

export default Contact
