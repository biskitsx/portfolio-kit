import { faCode, faEnvelope, faPhone, faIdCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const contact = [
    {
        icon: faEnvelope,
        name: "Email",
        val: "kitsugarr@gmail.com"
    },
    {
        icon: faPhone,
        name: "Telephone",
        val: "098-254-6225"
    }
]


function Contact() {
    return (
        <div className=' w-full flex justify-center' id='contact'>
            <div className='w-11/12 px-5 py-10 lg:w-225 flex flex-col gap-10 '>
                <div className='flex justify-center items-center gap-2'>
                    <h1 className='text-3xl font-semibold md:text-4xl'>
                        Contact <FontAwesomeIcon icon={faIdCard} className='text-green-600' />
                    </h1>
                </div>
                <div className='w-full flex-col flex gap-5 items-center sm:flex-row sm:justify-around'>
                    {contact.map((item, i) => {
                        return (
                            <div className='flex  items-center gap-2 w-60' key={i}>
                                <div className='rounded-full shadow-md p-3 grid place-items-center '>
                                    <FontAwesomeIcon icon={item.icon} className='text-green-600 text-2xl' />
                                </div>
                                <div className='flex flex-col'>
                                    <h4 className='font-bold'>{item.name}</h4>
                                    <p className='font-medium text-gray-600'>{item.val}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Contact