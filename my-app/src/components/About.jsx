import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faComment } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

function About() {
    return (

        <div className=' w-full flex justify-center' id='about'>
            <div className='w-11/12 px-5 py-10 lg:w-225 flex flex-col gap-10 '>
                <h1 className='text-3xl font-semibold md:text-4xl text-center'>About Me <FontAwesomeIcon icon={faComment} className='text-blue-500' /></h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <Image src="/yeye.jpeg" alt='connected' width={1000} height={1000} className='overflow-hidden shadow-md rounded-2xl w-80 mx-auto' />

                    <div className='flex flex-col gap-4'>
                        <h4 className='text-2xl font-semibold text-blue-500 '>Get to know me</h4>
                        <p className='text-md font-light text-gray-600 text-justify '>At the age of 20, I am studying in Faculty of Engineering, Computer Engineering major at Kasetsart University. I love spending my time with coding and getting my hands on all the latest technologies .In the future, I see myself having a greater depth of knowledge in this field of work.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About