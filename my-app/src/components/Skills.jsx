import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck, faCode, faPalette, faDatabase } from '@fortawesome/free-solid-svg-icons'

const frontEnd = ["ReactJS", "NextJs", "Tailwind"]
const backEnd = ["NodeJS", "TypeScript", "JavaScript", "MongoDB", "Prisma", "PosgreSQL", "MySQL"]

function Skills() {
    return (
        <div className='bg-gray-50 w-full flex justify-center' id='skills'>
            <div className='w-11/12 px-5 py-10 lg:w-225 flex flex-col gap-10 bg-gray-50'>
                <div className='flex justify-center items-center gap-2'>
                    <h1 className='text-3xl font-semibold md:text-4xl'>
                        Skills <FontAwesomeIcon icon={faCode} className='text-red-500' />
                    </h1>
                </div>
                <div className='grid grid-cols-1 place-items-center sm:grid-cols-2 gap-5 sm:gap-2 '>
                    <div className='p-5 shadow-md bg-white rounded-lg h-full w-full sm:w-72 md:w-80 lg:w-96 relative'>
                        <h4 className='text-center font-semibold mb-2 text-2xl lg:text-3xl'>Front-End</h4>
                        <div className='grid grid-cols-2 gap-2'>
                            {frontEnd.map((skill, i) => {
                                return (
                                    <div className='flex px-2 items-center gap-2 pl-3' key={i}>
                                        <FontAwesomeIcon icon={faSquareCheck} className='text-green-600 h-5' />
                                        <p className='text-lg lg:text-xl font-medium text-gray-700'>{skill}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='p-5 shadow-md bg-white rounded-lg h-full w-full sm:w-72 md:w-80 lg:w-96'>
                        <h4 className='text-center font-semibold mb-2 text-2xl lg:text-3xl'>Back-End</h4>
                        <div className='grid grid-cols-2 gap-2'>
                            {backEnd.map((skill, i) => {
                                return (
                                    <div className='flex  items-center gap-2 pl-3' key={i}>
                                        <FontAwesomeIcon icon={faSquareCheck} className='text-green-600 h-5' />
                                        <p className='text-lg lg:text-xl text-gray-700'>{skill}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills