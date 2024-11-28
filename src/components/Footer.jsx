import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className='bg-gray-950 py-8'>
      <div className='max-w-7xl mx-auto text-center'>
        {/* Footer Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className='text-lg text-gray-300 mb-4'>
            © 2024 Your Company. All Rights Reserved.
          </p>
        </motion.div>

        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className='flex justify-center space-x-6'>
            <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
              <motion.i 
                className='text-[#33cccc] text-2xl hover:text-[#28b8b8] transition duration-300'
                whileHover={{ scale: 1.1 }}>
                
                F
              </motion.i>
            </a>
            <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
              <motion.i 
                className='text-[#33cccc] text-2xl hover:text-[#28b8b8] transition duration-300'
                whileHover={{ scale: 1.1 }}>
               
                T
              </motion.i>
            </a>
            <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
              <motion.i 
                className='text-[#33cccc] text-2xl hover:text-[#28b8b8] transition duration-300'
                whileHover={{ scale: 1.1 }}>
               
                L
              </motion.i>
            </a>
            <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
              <motion.i 
                className='text-[#33cccc] text-2xl hover:text-[#28b8b8] transition duration-300'
                whileHover={{ scale: 1.1 }}>
                
                I
              </motion.i>
            </a>
          </div>
        </motion.div>

        {/* Footer Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p className='text-sm text-gray-500 mt-6'>
            Designed and developed by Efemezino Oyibo.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
