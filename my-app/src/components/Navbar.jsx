import React from 'react'
import Link from 'next/link'
import scroll from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBolt, faCube, faHippo } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

    return (
        <div className='w-full flex justify-between font-semibold px-10 py-6 text-gray-900 items-center shadow-md bg-white  top-0 transition-transform sticky lg:fixed z-50' >
            <Link href="#" className=' cursor-pointer'>
                <h2 className='font-bold text-lg'>
                    SUPHAKIT
                    <FontAwesomeIcon icon={faHippo} className=' text-red-500' />
                </h2>
            </Link>

            <nav className='flex gap-4 font-medium'>
                <scroll.Link to="home" spy={true} smooth={true} offset={-73} duration={500} className='cursor-pointer hover:scale-105 hidden sm:block'>Home</scroll.Link>
                <scroll.Link to="skills" spy={true} smooth={true} offset={-73} duration={500} className='cursor-pointer hover:scale-105 hidden sm:block'>Skills</scroll.Link>
                <scroll.Link to="about" spy={true} smooth={true} offset={-73} duration={500} className='cursor-pointer hover:scale-105 hidden sm:block'>About</scroll.Link>
                <scroll.Link to="project" spy={true} smooth={true} offset={-73} duration={500} className='cursor-pointer hover:scale-105 hidden sm:block'>Project</scroll.Link>
                <scroll.Link to="contact" spy={true} smooth={true} offset={-73} duration={500} className='cursor-pointer hover:scale-105 hidden sm:block'>Contact</scroll.Link>
                <scroll.Link to="home" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer hover:scale-105  sm:hidden'><FontAwesomeIcon icon={faHouse} /></scroll.Link>

            </nav>
        </div>
    )
}

export default Navbar