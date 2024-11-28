import React from 'react';
import Slider from 'react-slick';
import bg from '../assets/bg.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "John Doe",
      message: "This service has been a game changer for my business. The results were immediate and amazing!",
      avatar: "https://via.placeholder.com/150"
    },
    {
      name: "Jane Smith",
      message: "I couldn't be happier with the outcome. The team was professional, and the service exceeded expectations.",
      avatar: "https://via.placeholder.com/150"
    },
    {
      name: "Robert Johnson",
      message: "Absolutely fantastic! I've seen a significant improvement in my website's traffic and rankings.",
      avatar: "https://via.placeholder.com/150"
    },
    {
      name: "Emily Davis",
      message: "The best marketing decision I've made. The team was incredibly supportive throughout the process.",
      avatar: "https://via.placeholder.com/150"
    },
    {
      name: "Michael Brown",
      message: "A great experience from start to finish. Their approach is comprehensive and results-driven.",
      avatar: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div
      style={{
        height: '600px',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="relative py-20 overflow-x-hidden overflow-y-hidden px-7 md:px-0 bg-white"
    >
      <div className="absolute inset-0 bg-black opacity-85"></div>
      <div className="relative max-w-7xl mx-auto items-center text-center">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-[#33cccc] text-center pb-5"
          >
            What Our Clients Say
          </motion.h2>

          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col gap-4 shadow-lg py-8 px-6 rounded-xl bg-gray-950 relative">
                <div className="mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name} 
                    className="w-20 h-20 border-2 rounded-full mx-auto mb-4"
                  />
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500 text-start">"{testimonial.message}"</p>
                      <h3 className="text-xl font-semibold text-[#33cccc]">{testimonial.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
