import React, { useEffect, useState } from 'react'
import { assets } from '../assets'

const Navbar = () => {
  const [showemobilemenu,setmobilemenu]=useState(false);
  useEffect(()=>{
    if(showemobilemenu){
      document.body.style.overflow='hidden'
    }else{
      document.body.style.overflow='auto'
    }
    return()=>{
      document.body.style.overflow='auto'
    }
  },[showemobilemenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt="" />
        <ul className='hidden sm:flex gap-7'>
          <a href="#Header" className='text-white cursor-pointer hover:text-gray-400'> Home </a>
          <a href="#About" className=' text-white cursor-pointer hover:text-gray-400'> About </a>
          <a href="#Projects" className=' text-white cursor-pointer hover:text-gray-400'> Projects </a>
          <a href="#Testimonial" className=' text-white cursor-pointer hover:text-gray-400'> Testimonial </a>
        </ul>
        <button className='hidden md:block bg-white py-2 px-8  rounded-full'>Sign -up</button>
        <img onClick={()=>setmobilemenu(true)} src={assets.menu_icon} alt="" className='md:hidden w-7 cursor-pointer'/>
      </div>
      <div className={`md:hidden ${ showemobilemenu ? 'w-full' : 'h-0 w-0 '} right-0 top-0 bottom-0 overflow-hidden bg-white h-[calc(100vh-71px)] transition-all`}>
        <div className='flex justify-end px-6 py-6'> 
          <img onClick={()=>setmobilemenu(false)} src={assets.cross_icon} alt="" className='w-6 cursor-pointer'/>
        </div>
        <ul className='flex flex-col items-center gap-2  mt-5 px-5 text-lg font-medium'>
          <div onClick={()=>setmobilemenu(false)} href="#Header" className='cursor-pointer px-4 py-2 rounded-full inline-blockblock'> home </div>
          <div onClick={()=>setmobilemenu(false)} href="#About" className='cursor-pointer px-4 py-2 rounded-full inline-block'> About </div>
          <div onClick={()=>setmobilemenu(false)} href="#Project" className='cursor-pointer px-4 py-2 rounded-full inline-block'> Projects </div>
          <div onClick={()=>setmobilemenu(false)} href="#Testimonial" className='cursor-pointer px-4 py-2 rounded-full inline-block'> Testimonial </div>
        </ul>
      </div>

    </div>
  ) 
}

export default Navbar
