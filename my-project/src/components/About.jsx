import React, { useState } from 'react'
import about from '../assets/About.jpg'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const About = () => {
    const [CounterOn, setCounterOn] = useState(false)

    return (
        <div className='bg-gray-950 py-20 px-5 md:px-0 overflow-x-hidden overflow-y-hidden '>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col md:flex-row gap-7 items-center'>
                    <div className='md:w-1/2 space-y-5'>
                        <h1 className='font-bold text-4xl text-[#33cccc] '>About us </h1>
                        <p className='text-gray-300'>
                            As technology continues to evolve at an unprecedented rate, businesses must adapt to stay competitive. Embracing digital transformation is no longer optional but essential for growth and sustainability. By leveraging data analytics, automation, and cloud computing, companies can improve efficiency, reduce costs, and unlock new opportunities. The future of business lies in innovation and agility, enabling organizations to meet the changing demands of their customers and navigate global challenges.
                        </p>
                        <p className='text-gray-300'>
                            The role of artificial intelligence (AI) in business is rapidly expanding. From enhancing customer service through chatbots to optimizing supply chain management with predictive analytics, AI is helping businesses make smarter decisions and streamline operations. However, implementing AI requires a strategic approach and careful consideration of the ethical implications, ensuring transparency, fairness, and accountability in its applications.
                        </p>

                        <button className='rounded-md px-4 py-2 transparent text-white border-2 border-green-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33cccc,0_0_15px_#33cccc,0_0_30px_#33CCCC]'> Learn More</button>
                    </div>
                    <div className='md:w-1/2'>
                        <img src={about} alt="About Image" className='rounded-lg' />
                    </div>
                </div>
                <div className='mt-4'>
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                        <div className='flex gap-10'>
                            <div className='flex flex-col items-center text-center'>
                                <h1 className='font-bold text-3xl md:text-4xl text-[#33cccc]'>
                                    {
                                        CounterOn && <CountUp start={0} end={200} duration={2} delay={0} />
                                    }
                                    +
                                </h1>
                                <h3 className='text-sm text-gray-300'>Happy Customer</h3>
                            </div>
                            <div className='flex flex-col items-center text-center'>
                                <h1 className='font-bold text-3xl md:text-4xl text-[#33cccc]'>
                                    {
                                        CounterOn && <CountUp start={0} end={160} duration={2} delay={0} />
                                    }
                                    +
                                </h1>
                                <h3 className='text-sm text-gray-300'>Success Projects</h3>
                            </div>
                            <div className='flex flex-col items-center text-center'>
                                <h1 className='font-bold text-3xl md:text-4xl text-[#33cccc]'>
                                    {
                                        CounterOn && <CountUp start={0} end={120} duration={2} delay={0} />
                                    }
                                    %
                                </h1>
                                <h3 className='text-sm text-gray-300'>Conversion Rate Increased</h3>
                            </div>
                        </div>
                    </ScrollTrigger>

                </div>
            </div>
        </div>
    )
}

export default About