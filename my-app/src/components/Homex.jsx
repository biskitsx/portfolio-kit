
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faKeyboard, faPersonFalling } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Navbar from './Navbar'

function Homex() {
    return (
        <div className='md:h-screen w-full flex justify-center ' id='home'>
            <div className='w-11/12  flex flex-col font-semibold items-center  gap-8 py-10 md:flex-row-reverse lg:w-225 md:justify-between' >
                <Image src='/new.png' alt='my-pic' width={300} height={300} className='object-cover rounded-full shadow-xl border-gray-700 border-2' />
                <div className=' flex flex-col gap-4 text-center md:text-left md:w-140'>
                    <h1 className='text-4xl  font-bold md:text-5xl lg:text-7xl '>
                        <span className='text-red-500'>Junior </span>
                        Back-End Developer
                    </h1>

                    <p className='text-lg text-gray-600 font-normal'>Hello, I&apos;m Kit Suphakit. I&apos;m interested in <span className='text-blue-600 font-semibold'>Back-End Developer</span>  base in Thailand <FontAwesomeIcon icon={faPersonFalling} className='text-green-600' /></p>

                    <div className='flex gap-5 text-4xl justify-center transition-transform'>
                        <a href="https://www.facebook.com/kittspk/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} className='hover:text-blue-600 hover:scale-110 ' />
                        </a>
                        <a href="https://www.instagram.com/ksuphakyy/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className='hover:text-pink-600 hover:scale-110 ' />
                        </a>
                        <a href="https://github.com/biskitsx" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className='hover:text-purple-800 hover:scale-110 ' />
                        </a>
                        <a href="https://www.linkedin.com/in/suphakit-songsuwong-99116b27a/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className='hover:text-blue-600 hover:scale-110 ' />
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Homex