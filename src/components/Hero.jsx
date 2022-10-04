import React from 'react'
import {
    CloudUploadIcon,
    FolderAddIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
}from '@heroicons/react/solid';
import bgimg from '../images/cyber-bg.png';

const Hero = () => {
  return (
    <div name ='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                {/* <p className='text-2xl'>Unique sequencing & production</p> */}
                <h1 className='py-3 text-5xl md:text-5xl font-bold'>Clean Data Safe Ptient </h1>
                <h1 className='text-2xl'> DATA CARE SOLUTIONS </h1>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Learn More</button>
            </div>
            <div className=''>
                <img className='w-full' src={bgimg} alt='/'/>
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 
            rounded-xl text-center shadow-xl'>
                <h2 className='py-3 text-5xl md:text-3xl font-bold'>Data Care Solution Tools</h2>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><FolderAddIcon className='h-10 text-indigo-500'/>File Away</p>
                    <p className='flex px-4 py-2 text-slate-500' ><DatabaseIcon  className='h-10 text-indigo-500'/>SMART SEARCH </p>
                    <p className='flex px-4 py-2 text-slate-500' ><ServerIcon  className='h-10 text-indigo-500'/>DEMAND & CAPACIY MODELLING</p>
                    <p className='flex px-4 py-2 text-slate-500' ><PaperAirplaneIcon className='h-10 text-indigo-500'/> API</p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Hero