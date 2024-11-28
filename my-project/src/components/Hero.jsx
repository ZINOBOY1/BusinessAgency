import React from 'react'
import bg from '../assets/bg.jpg'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div style={{
        height:'600px',
        backgroundImage:`url(${bg})`,
        overlay:'#090909',
        backgroundSize:'cover',
        backgroundPosition:'center',
        zIndex:-1

    }} className='relative '>
        <div className='absolute inset-0 bg-black opacity-85'></div>
        <div className='relative max-w-7x1 mx-auto'>
            <div className='flex lg:h-[650px] justify-center items-center lg:pt-0 pt-20'>
                <div className='flex flex-col space-y-8 justify-center items-center text-center px-5 md:px-0 '>
                    <motion.h3 
                    initial={{ opacity: 0, x:-100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.6}}

                    className='text-white text-lg lg:text-xl'>Business Agency</motion.h3>

                    <motion.h1
                    initial={{ opacity: 0, x:-100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.9}}

                    className='text-4xl  text-white lg:text-6xl font-bold  '>Grow your Business with Digital<br /> <span className='text-[#33CCCC]'>
                    marketing solutions</span> </motion.h1>
                    <motion.p
                    initial={{ opacity: 0, x:-100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1}}    

                    className='text-sm text-gray-200' > Unlock the power of digital marketing to grow your business. our expert strategies drive results and maximze your online reach</motion.p>

                    <div className='flex gap-3 items-center'>
                        <motion.button
                        initial={{ opacity: 0, x:-100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1.5}}      
                        
                        className='bg-[#33cccc] text-white px-4 py-2 rounded-md font-semibold flex items-center'>Get Started <ChevronRight/></motion.button>

                        <motion.button 
                         initial={{ opacity: 0, x:-100 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 1, delay: 1.2}}

                        className='rounded-md px-4 py-2 transparent text-white border-2 border-green-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33cccc,0_0_15px_#33cccc,0_0_30px_#33CCCC]'>Learn More</motion.button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero