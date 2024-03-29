import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/united_logo.png';


import{MenuIcon, XIcon} from '@heroicons/react/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = ()=> setNav(!nav)

    const handleClose = () =>setNav(!nav)
  return (
    <div className='sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
        <div class="flex flex-shrink-0 items-center">
          <img class="block h-10 w-auto" src={logo} alt="DATA CARE SOLUTIONS"/>
          
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>አልባሽ</h1>
          
          {/* <h1 className='text-1xl font-bold mr-4 sm:text-4xl'>Data Care Solutions</h1> */}
        </div>
            <div className='flex items-center cursor-pointer '>
                <ul className='hidden md:flex'>
                <li> <Link to="/">Home</Link>
                
                </li>
                {/* smooth={true}  duration={500} */}
                <li > <Link to="about">About Us</Link></li>
                {/*  smooth={true} offset={-200} duration={500}*/}
                <li > <Link to="Smart_Tools_detail" >Supports</Link></li>
                {/*  smooth={true} offset={-50} duration={500}*/}
                <li > <Link to="Service_detail" >Aim</Link></li>
                {/* smooth={true} offset={-100} duration={500}*/}
               {/*} <li > <Link to="Training">Training</Link></li>
               {/*} <li > <Link to="Case_Study">Case Study</Link></li>
                {/*<li > <Link to="resources" >Resoruces</Link></li>
                {/* smooth={true} offset={-50} duration={500}*/}
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <button className='border-none bg-transparent  text-black mr-4'><Link to="Login">Join us whatsup</Link></button>
                <button className='px-8 py-3 bg-primary-50 text-black'><Link to="Contact1">Contact Us</Link></button>

            </div>
            <div className='md:hidden' onClick={handleClick}>
                {!nav?<MenuIcon className='w-5'/>:<XIcon className='w-5'/>}

        
            </div>
        </div>
        
        <ul className={!nav? 'hidden':'absolute bg-zinc-200 w-full px-8'}>


                <li> <Link onClick={handleClose} to="home" smooth={true}  duration={500}>Home</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'> <Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About Us</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'> <Link onClick={handleClose} to="smartTools" smooth={true} offset={-50} duration={500}>Smart Tools</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'> <Link onClick={handleClose} to="smartTools" smooth={true} offset={-100} duration={500}>Services</Link></li>
                 
                <li className='border-b-2 border-zinc-300 w-full'> <Link onClick={handleClose} to="Training" smooth={true} offset={-100} duration={500}>Training</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'> <Link onClick={handleClose} to="Case_Study" smooth={true} offset={-100} duration={500}>Case Study</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'> <Link onClick={handleClose} to="resources" smooth={true} offset={-50} duration={500}>Resources</Link></li>

          
                    <div className='flex flex-col my-4'>
                        <button className='bg-transparent text-primary-lightgreen px-8 py-3 mb-4'>Login</button>
                        <button className='px-8 py-3'>Contact Us</button>
                    </div>

        </ul>
    </div>
  )
}

export default Navbar




















