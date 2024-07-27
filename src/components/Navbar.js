import React, {useState, useEffect} from 'react';
import { Bars3Icon, XMarkIcon, CameraIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import {Link} from 'react-scroll'
import LinkedIn from '../assets/skills/linkedIn.png';
import Github from '../assets/skills/git-hub.png';
import CB from '../assets/cblogo.png';

const Navbar = () => {
  const [nav, setNav]=useState(false);
  const [shadow, setShadow]=useState(false);
  const handleNav=()=>{
      setNav(!nav)
  }
  useEffect(()=>{
      const handleShadow=()=>{
          if(window.scrollY>=90){
              setShadow(true);
          }else{
              setShadow(false);
          }
      };
      window.addEventListener('scroll', handleShadow)
  },[])
  return (
    <div className={shadow? 'fixed w-full h-20 shadow-xl z-[100]': 'fixed w-full h-20 z-[100]'}>
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
            <img src={CB} alt='logo' width='124' height='50' />
            <div>
                <ul className='hidden md:flex'>
                        <Link spy={true} to="Main" smooth={true} active="activeClass">
                        <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                        </Link>
                        <Link spy={true} to="About" smooth={true}>
                        <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                        </Link>
                        <Link spy={true} to="Skills" smooth={true}>
                        <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                        </Link>
                        <Link spy={true} to="Projects" smooth={true}>
                        <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                        </Link>
                        <Link spy={true} to="Contact" smooth={true}>
                        <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                        </Link>
                </ul>
                <div onClick={handleNav} className="md:hidden">
                    <Bars3Icon className="h-6 w-6" />
                </div>
            </div>
        </div>
        <div className={nav?'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70':''}>
            <div 
            className={
                nav
                ?'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-3 ease-in duration-500'
                :'fixed left-[-100%] top-0 p-3 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <img src={CB} alt='logo' width='35' height='87' />
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <XMarkIcon className='h-5 w-5' />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p>Let's build something legendary together</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link  spy={true} to="Main" smooth={true}>
                            <li onClick={()=>setNav(false)} className='py-4 text-sm'>Home</li>
                        </Link>
                        <Link spy={true} to="About" smooth={true}>
                            <li onClick={()=>setNav(false)} className='py-4 text-sm'>About</li>
                        </Link>
                        <Link spy={true} to="Skills" smooth={true}>
                            <li onClick={()=>setNav(false)} className='py-4 text-sm'>Skills</li>
                        </Link>
                        <Link spy={true} to="Projects" smooth={true}>
                            <li onClick={()=>setNav(false)} className='py-4 text-sm'>Projects</li>
                        </Link>
                        <Link spy={true} to="Contact" smooth={true}>
                            <li onClick={()=>setNav(false)} className='py-4 text-sm'>Contact</li>
                        </Link>
                    </ul>
                    <div className='pt-20'>
                        <p className='uppercase tracking-widest text-[#5651e5]'>
                            Let's Connect
                        </p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                        <a href="https://www.linkedin.com/in/ahamed-raza-9a5968222/" target="_blank" rel="noopener noreferrer">
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <img src={LinkedIn} alt='in' height='20' width='20' />
                            </div>
                        </a>
                        <a href="https://github.com/mdahmedraza" target="_blank" rel="noopener noreferrer">
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <img src={Github} alt='in' height='20' width='20' />
                            </div>
                        </a>
                        <a href="mailto:ahamedraza2233@gmail.com" target="_blank" rel="noopener noreferrer">
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <EnvelopeIcon className='h-5 w-5' />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/ahmedraza6020/" target="_blank" rel="noopener noreferrer">
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <CameraIcon className='h-5 w-5' />
                            </div>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar