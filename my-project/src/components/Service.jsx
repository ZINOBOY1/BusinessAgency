import React from 'react';
import gif from '../assets/star.png';
import { motion } from 'framer-motion';

const Service = () => {
    // Correctly formatted array of service objects
    const services = [
        {
            name: "SEO Optimization",
            description: "Best SEO practices to boost your site visibility and search engine ranking.",
            icon: gif
        },
        {
            name: "Content Creation",
            description: "High-quality content tailored to your brand, helping you engage with your audience.",
            icon: gif
        },
        {
            name: "PPC Management",
            description: "Pay-Per-Click ad campaigns to drive instant traffic and maximize ROI.",
            icon: gif
        },
        {
            name: "Social Media Marketing",
            description: "Grow your presence on social platforms like Facebook, Instagram, and LinkedIn.",
            icon: gif
        }
    ];

    return (
        <div
            className="bg-gray-900 pt-10 pb-20 px-5 md:px-0"
        >
            <div className='max-w-7xl mx-auto'>
                <h1 className="text-4xl font-bold text-center mb-8 text-[#33cccc]">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative">
                            <div className="absolute -inset-1 blur bg-[#33cccc]"></div>
                            <div className="border rounded-md relative flex flex-col space-y-3 bg-[#8eecec] hover:bg-[#33cccc] hover:transition-all p-7 h-full min-h-[300px]">
                                <img src={service.icon} alt={service.name} className="w-20 rounded-full mb-3" />
                                <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
                                <p className="font-semibold text-xl">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default Service;
