import React,{useState} from 'react'
import { Link,  animateScroll as scroll } from 'react-scroll'
import logo from '../images/dcsLogo.png';


import{MenuIcon, XIcon} from '@heroicons/react/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = ()=> setNav(!nav)

    const handleClose = () =>setNav(!nav)
  return (
    <div className='w-screen h-[80px] z-10 bg-primary-50 fixed drop-shadow-lg font-sans-serif'>
        {/* w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg font-sans-serif */}
        <div className='px-2 flex justify-between items-center w-full h-full'>
        <div class="flex flex-shrink-0 items-center">
          <img class="block h-8 w-auto" src={logo} alt="DATA CARE SOLUTIONS"/>
          {/* <h1 className='text-1xl font-bold mr-4 sm:text-4xl'>Data Care Solutions</h1> */}
        </div>
            <div className='flex items-center cursor-pointer '>
                <ul className='hidden md:flex'>
                <li> <Link to="home" smooth={true}  duration={500}>Home</Link></li>
                <li > <Link to="about" smooth={true} offset={-200} duration={500}>About Us</Link></li>
                <li > <Link to="smartTools" smooth={true} offset={-50} duration={500}>Smart Tools</Link></li>
                <li > <Link to="smartTools" smooth={true} offset={-100} duration={500}>Services</Link></li>
                <li > <Link to="resources" smooth={true} offset={-50} duration={500}>Resoruces</Link></li>
                </ul>
            </div>
            <div className='hidden md:flex md:flex pr-4'>
                <button className='border-none bg-transparent  text-black mr-4'>Login</button>
                <button className='px-8 py-3 bg-primary-50 text-black'>Contact Us</button>

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