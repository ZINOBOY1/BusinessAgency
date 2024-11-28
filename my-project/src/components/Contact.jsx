import React from 'react'
import { mail, mapPin, phone } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className='bg-gray-950'>
      <div className='max-w-7xl mx-auto items-center flex flex-col py-8 px-4 md:px-8 min-h-screen'>
        <h2 className='text-3xl md:text-4xl font-bold text-[#33cccc] mb-4 text-center'>
          Get in Touch
        </h2>
        {/* Contact details */}
        <motion.div
          className='w-full text-white text-center space-y-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className='flex justify-center items-center space-x-4'>
            <motion.div whileHover={{ scale: 1.1 }} className='flex items-center space-x-2'>
              <mail className='text-[#33cccc]' size={24} />
              <span>Email: example@email.com</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className='flex items-center space-x-2'>
              <phone className='text-[#33cccc]' size={24} />
              <span>Phone: +123 456 7890</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className='flex items-center space-x-2'>
              <mapPin className='text-[#33cccc]' size={24} />
              <span>Address: 123 Street, City</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
