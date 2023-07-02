import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck, faCode, faPalette, faDatabase, faCheck, faCircle, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faNode, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'

const frontEnd = ["ReactJS", "NextJS", "Tailwind"]
const backEnd = ["NodeJS", "TypeScript", "JavaScript", "MongoDB", "Prisma", "PosgreSQL", "MySQL", "GO", "Docker"]

const logo = [
    { title: 'html', src: 'html5-colored.svg', link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5" },
    { title: 'css', src: 'css3-colored.svg', link: "https://www.w3.org/TR/CSS/#css" },
    { title: 'react', src: 'react-colored.svg', link: "https://reactjs.org/" },
    { title: 'next', src: 'nextjs-colored.svg', link: "https://nextjs.org/docs", },
    { title: 'tailwindcss', src: 'tailwindcss-colored.svg', link: "https://tailwindcss.com/" },
    { title: 'js', src: 'javascript-colored.svg', link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { title: 'ts', src: 'typescript-colored.svg', link: "https://www.typescriptlang.org/" },
    { title: 'express', src: 'express-colored.svg', link: "https://expressjs.com/" },
    { title: 'mongodb', src: 'mongodb-colored.svg', link: "https://www.mongodb.com" },
    { title: 'mysql', src: 'mysql-colored.svg', link: "https://www.mysql.com/" },
    { title: 'postgresql', src: 'postgresql-colored.svg', link: "https://www.postgresql.org/" },
    { title: 'go', src: 'go-colored.svg', link: "https://go.dev" },

]
function Skills() {
    return (
        <div className='bg-gray-50 w-full flex justify-center' id='skills'>
            <div className='w-11/12 px-5 py-10 lg:w-225 flex flex-col gap-10 bg-gray-50 relative'>
                <div className='flex justify-center items-center gap-2'>
                    <h1 className='text-3xl font-semibold md:text-4xl'>
                        Skills <FontAwesomeIcon icon={faCode} className='text-red-500' />
                    </h1>
                </div>
                <div className='grid grid-cols-1 place-items-center sm:grid-cols-2 gap-5 '>
                    <div className='p-5 shadow-md bg-white rounded-lg h-full w-full  md:w-80 lg:w-96 relative'>
                        <h4 className='text-center font-semibold mb-2 text-lg lg:text-xl text-zinc-800'>Front-End</h4>
                        <div className='grid grid-cols-2 gap-2'>
                            {frontEnd.map((skill, i) => {
                                return (
                                    <div className='flex px-2 items-center gap-2 pl-3' key={i}>
                                        <FontAwesomeIcon icon={faCaretDown} className='text-teal-800 h-5' />
                                        <p className='text-md lg:text-lg font-medium text-gray-700'>{skill}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='p-5 shadow-md bg-white rounded-lg h-full w-full md:w-80 lg:w-96'>
                        <h4 className='text-center font-semibold mb-2 text-lg lg:text-xl text-zinc-800'>Back-End</h4>
                        <div className='grid grid-cols-2 gap-2'>
                            {backEnd.map((skill, i) => {
                                return (
                                    <div className='flex  items-center gap-2 pl-3' key={i}>
                                        <FontAwesomeIcon icon={faCaretDown} className='text-teal-800 h-5' />
                                        <p className='text-md lg:text-lg text-gray-700 font-medium'>{skill}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='flex justify-around flex-wrap gap-3'>
                    {logo.map((item, index) => {
                        return (
                            <a className='rounded-full shadow-md bg-white p-2 hover:scale-105 transition' key={index} href={item.link}>
                                <Image src={`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/${item.src}`} alt={item.title} width={30} height={30} className='' />
                            </a>)
                    })}

                </div>
            </div>
        </div>
    )
}

export default Skills