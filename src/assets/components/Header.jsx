import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
    <div className='h-screen mb-4 bg-cover bg-center flex align-center w-full overflow-hidden' style={{backgroundImage:"url('/header_img.png')"}} id='Header'>
      <Navbar/>
      <div className='flex flex-col gap-9 justify-center w-full items-center text-white'>
        <h2 className='text-5xl sm:text-6xl md:text[82px] max-w-2xl inline-block font-semibold text-center'> Explore homes that fit your dreams </h2>
         <div className='space-x-6'>
          <a href="project" className='border border-white py-3 px-8'>Projects</a>
          <a href="contact" className='bg-blue-500 py-3 px-8'>Contact Us </a>
      </div>
      </div>
     
    </div>
    </>
    
  )
}

export default Header
