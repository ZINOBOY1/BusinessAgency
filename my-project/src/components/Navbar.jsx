import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleNav = () => {
        setOpen((prevState) => {
            const newState = !prevState;
            if (newState) {
                document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
            } else {
                document.body.style.overflow = 'unset'; // Allow scrolling when menu is closed
            }
            return newState;
        });
    };

    const handleLinkClick = () => {
        setOpen(false); // Close the menu when a link is clicked
        document.body.style.overflow = 'unset'; // Ensure scrolling is re-enabled
    };

    return (
        <div className='bg-gray-950 py-3'>
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center px-5'>
                    {/* Logo */}
                    <div className='font-bold text-[#33CCCC] text-4xl'>Logo</div>

                    {/* Desktop Navbar */}
                    <ul className='lg:flex gap-6 items-center font-semibold text-xl text-white hidden'>
                        
                        <li className='hover:text-[#33CCCC] cursor-pointer transition-all'>
                            About
                        </li>
                        <li className='hover:text-[#33CCCC] cursor-pointer transition-all'>
                            Services
                        </li>
                        <li className='hover:text-[#33CCCC] cursor-pointer transition-all'>
                            Testimonials
                        </li>
                        <li className='hover:text-[#33CCCC] cursor-pointer transition-all'>
                            Contact Us
                        </li>
                        <button className='bg-[#33CCCC] cursor-pointer text-white px-4 py-2 rounded-md'>
                            Get Started
                        </button>
                    </ul>

                    {/* Mobile Menu Icon */}
                    <Menu onClick={toggleNav} className='lg:hidden text-white' />
                </div>

                {/* Mobile Menu with Animation */}
                <AnimatePresence>
                    {open && (
                        <motion.nav
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className='lg:hidden'>
                            <ul className='flex flex-col border-1 border-[#33cccc] space-y-10 bg-gray-950 text-white w-[300px] min-h-screen items-center pt-36 absolute top-0 right-0 z-30'>
                                <li
                                    onClick={handleLinkClick}
                                    className='hover:text-[#33CCCC] cursor-pointer transition-all'>
                                    Services
                                </li>
                                <li
                                    onClick={handleLinkClick}
                                    className='hover:text-[#33CCCC] cursor-pointer transition-all'>
                                    About
                                </li>
                                <li
                                    onClick={handleLinkClick}
                                    className='hover:text-[#33CCCC] cursor-pointer transition-all'>
                                    Testimonials
                                </li>
                                <li
                                    onClick={handleLinkClick}
                                    className='hover:text-[#33CCCC] cursor-pointer transition-all'>
                                    Contact Us
                                </li>
                                <button
                                    onClick={handleLinkClick}
                                    className='bg-[#33CCCC] cursor-pointer text-white px-4 py-2 rounded-md'>
                                    Get Started
                                </button>

                                {/* Close Icon */}
                                <X
                                    onClick={toggleNav}
                                    className="z-50 absolute top-0 right-10 border border-[#33cccc] p-1 rounded-md"
                                />
                            </ul>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Navbar;
