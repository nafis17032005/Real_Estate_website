import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets'

const Projects = () => {
    const [currentindex, setcurrentindex] = useState(0);
    const [cardtoshow, setcardtoshow] = useState(1);

    function nextProject() {
        setcurrentindex((prevIndex)=>{
            console.log("............",prevIndex);
           return (prevIndex+1) % projectsData.length
        })
    }

    const prevProject = () => {
        setcurrentindex((previousIndex) => previousIndex === 0 ? projectsData.length - 1 : previousIndex - 1);
    }
    console.log(currentindex, projectsData.length - 1)

    useEffect(()=>{
        const updateCardToShow= ()=>{
            if(window.innerWidth >= 1024){
                setcardtoshow(projectsData.length)
            }else{
                setcardtoshow(1)
            }
        }
            updateCardToShow();

            window.addEventListener('resize',updateCardToShow);
            return ()=> window.removeEventListener('resize',updateCardToShow);
    },[])
    return (
        <div className='container mx-auto px-6 py-4 pt-20 md:px-20 lg:px-32 w-full overflow-x-hidden' id='Projects'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'> Projects <span className='underline underline-offset-4 decoration-1 font-light '> Completed</span></h1>
            <p className='text-gray-500 mx-auto text-center mb-8 max-w-75'>Crafting Spaces , Building legacy - Explore our Portfolio</p>

            {/* slider buttons  */}
            <div className='flex justify-end mb-8'>
                <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous project'>
                    <img src={assets.left_arrow} alt="" className='cursor-pointer' />
                </button>
                <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Next project '>
                    <img src={assets.right_arrow} alt="" className='cursor-pointer' />
                </button>
            </div>

            {/* project slider  */}

            <div className='overflow-hidden'>
                <div className='flex gap-8 transition-transform duration-500 ease-in-out'
                    style={{ transform: `translateX(-${(currentindex * 100) / cardtoshow}%)` }}>
                    {projectsData.map((project, index) => (
                        <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                            <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
                            <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                    <h2 className='text-xl font-semibold text-gray-800'>
                                        {project.title}
                                    </h2>
                                    <p className='text-gray-500 text-sm'>
                                        {project.price} <span className='px-1'> |</span> {project.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
