import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faComment } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

function About() {
    return (

        <div className=' w-full flex justify-center' id='about'>
            <div className='w-11/12 px-5 py-10 lg:w-225 flex flex-col gap-10 '>
                <h1 className='text-3xl font-semibold md:text-4xl text-center'>About Me <FontAwesomeIcon icon={faComment} className='text-blue-500' /></h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 '>
                    <Image src="/guitar.jpg" alt='connected' width={500} height={0} className='overflow-hidden shadow-md rounded-lg' />

                    <div className='flex flex-col gap-4'>
                        <h4 className='text-2xl font-semibold text-blue-500'>Get to know me</h4>
                        <p className='text-lg font-medium text-gray-700'>I'm 20 years old and studying <span className='text-red-500'>Computer Engineer</span>  at KasetSart University. I like to spending time with coding and learning new technology</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About