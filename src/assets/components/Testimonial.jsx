import React from 'react'
import { assets, testimonialsData } from '../assets'

const Testimonial = () => {
    return (
        <div className='container mx-auto px-6 py-4 pt-20 md:px-20 lg:px-32 w-full overflow-x-hidden' id='Testimonial'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'> Customer <span className='underline underline-offset-4 decoration-1 font-light '> Testimonial </span></h1>
            <p className='text-gray-500 mx-auto text-center mb-8 max-w-75'>Real Stories  From Those Who Found  Home with us </p>
            <div className='flex flex-wrap justify-center gap-8'>
                {testimonialsData.map((testimonial, index) => {
                    return (
                        <div key={index} className='max-w-[340px] border shadow-lg rounded text-center px-8 py-12 '>
                            <img className='w-20 h-20 mx-auto rounded-full mb-4 ' src={testimonial.image} alt={testimonial.alt} />
                            <h2 className='text-gray-500 font-medium text-xl'>{testimonial.name}</h2>
                            <p className='text-sm text-gray-500 mb-4 '>{testimonial.title}</p>
                            <div className='flex justify-center mb-4 gap-1 text-red-500'>
                                {Array.from({length: testimonial.rating},(item,index)=>(
                                    <img key={index} src={assets.star_icon} alt="" />  
                                ))}
                            </div>
                            <p className='text-gray-600'>{testimonial.text}</p> 
                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default Testimonial
