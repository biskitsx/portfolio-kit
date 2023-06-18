import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faIcons, faLink } from '@fortawesome/free-solid-svg-icons'
import dynamic from 'next/dynamic';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'

// import ReactPlayer from 'react-player'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
function Project() {
    return (
        <div className=' w-full flex justify-center bg-gray-50' id='project'>
            <div className='w-11/12 px-5 py-10 lg:w-225 flex flex-col gap-10 '>
                <h1 className='text-3xl font-semibold md:text-4xl text-center'>Project <FontAwesomeIcon icon={faIcons} className='text-red-500 ' /></h1>
                <div className='grid grid-cols-1  gap-8 md:grid-cols-2'>
                    {/* <Image src="/yeye.jpeg" alt='connected' width={1000} height={1000} className='overflow-hidden shadow-md rounded-2xl w-80 mx-auto' /> */}
                    <div className=''>
                        <video width="100%" height="100%" loop={true} muted={true} autoPlay={true} alt='project' className='rounded-md shadow-md'>
                            <source src="/social-media.mov" />
                        </video>
                        {/* <ReactPlayer url="/social-media.mov" muted={true} loop={true} playing={true} className='' width='100%' controls={false} /> */}
                    </div>
                    <div className='flex flex-col gap-4 '>
                        <h4 className='text-2xl font-semibold text-red-500 '>Social media app
                        </h4>
                        <p className='text-md font-light text-gray-600 text-justify '>
                            This web application is a basic social media application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
                        </p>
                        <div className='flex flex-row items-center text-zinc-700 '>
                            <p className=''>
                                see more :
                            </p>
                            <a href="https://github.com/biskitsx/social-appx" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className='hover:text-purple-800 hover:scale-110 ml-2 bg-white rounded-md shadow-md p-1 text-zinc-700 text-xl' />
                            </a>
                        </div>
                        <div className='flex'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project