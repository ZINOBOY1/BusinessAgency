import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'

const Contact = () => {
    return (
        <div className='bg-gray-950'>
            <div className='max-w-7xl mx-auto items-center flex flex-col py-8 px-4 md:px-8 min-h-screen'>
                <motion.h2
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className='text-3xl md:text-4xl font-bold text-[#33cccc] mb-4 text-center'>
                    Get in Touch
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className='text-gray-300 text-center max-w-xl mb-12'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, debitis quis laboriosam nesciunt magni voluptatum labore, quibusdam fuga libero aliquam deleniti veritatis omnis sunt sit doloribus tempore vitae fugiat? Aliquid.
                </motion.p>

                <div className='grid md:grid-flow-col gap-10'>
                    <div className='bg-[#c7e9ec] rounded-lg p-8 md:p-12 max-w-xl md:w-[400px]'>
                        <form className='flex flex-col space-y-6'>
                            <div>
                                <label htmlFor="fullName" className='block text-sm font-medium text-gray-900'>Full Name</label>
                                <input
                                    type="text"
                                    id='fullName'
                                    className='mt-1 p-3 block w-full text-white border-2 border-[#33cccc] bg-gray-900 rounded-md shadow-sm sm:text-sm '
                                    placeholder='John Doe' />
                            </div>
                            <div>
                                <label htmlFor="email" className='block text-sm font-medium text-gray-900'>Email Address</label>
                                <input
                                    type="email"
                                    id='email'
                                    className='mt-1 p-3 block w-full text-white border-2 border-[#33cccc] bg-gray-900 rounded-md shadow-sm sm:text-sm '
                                    placeholder='example@email.com' />
                            </div>
                            <div>
                                <label htmlFor="phone" className='block text-sm font-medium text-gray-900'>Your Message</label>
                                <textarea
                                    rows='4'
                                    id='phone'
                                    className='mt-1 p-3 block w-full text-white border-2 border-[#33cccc] bg-gray-900 rounded-md shadow-sm sm:text-sm '
                                    placeholder='Your message here'

                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className='mt-4 py-3 px-6 bg-[#33cccc] text-white rounded-md shadow-md hover:bg-[#28b8b8] transition'>
                                    Send message
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='bg-[#c7e9ec] rounded-lg p-8 md:p-12 max-w-3xl w-full flex flex-col items-center md:flex-row gap-7 space-y-6 md:space-y-0 md:space-x-8'>

                        <div className='flex-1'>
                            <h3 className='text-2xl font-semibold mb-4 '>Our Location</h3>
                            <div className='text-gray-950 flex gap-2 items-center'>
                                <MapPin fill='#33cccc' className='text-gray-900' />
                                <p>
                                    95 business Street <br />
                                    Overview street,Lagos
                                </p>
                            </div>
                            <div className='text-gray-950 flex gap-2 items-center '>
                                <Phone fill='#33cccc' className='text-gray-900' />
                                <p className='text-gray-900  mt-4' >
                                    Phone:+123456789
                                </p>
                            </div>
                            <div className='text-gray-950 flex gap-2 items-center '>
                                <Mail fill='#33cccc' className='text-gray-900' />
                                <p className='text-gray-900  mt-4' >
                                    Phone:JohnDoe@email.com
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className='w-full h-64 bg-gray-300 rounded-lg '></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
