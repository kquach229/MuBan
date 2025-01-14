'use client';
import { motion } from 'motion/react';
import gradientObjectImage from '@/public/gradient_object_one.png';
import gradientObjectTwoImage from '@/public/gradient_object_two.png';
import { useRef } from 'react';

const Hero = () => {
  const containerRestraintRef = useRef(null);
  return (
    <div ref={containerRestraintRef} className='base-page-styles'>
      <div className='container flex'>
        <div className='flex justify-between w-full mx-auto'>
          <span className='text-center w-full  md:text-left md:w-1/2  text-white font-light'>
            <span className='header-text'>
              Ready-Made Templates, Ready to Elevate Your Web Presence.
            </span>
            <motion.span
              initial={{ opacity: 0, scale: 0.5, x: -30 }}
              animate={{ opacity: 1, scale: 3.5, x: 0 }}
              transition={{ duration: 3 }}
              className='sub-heading-text'>
              Every step of the way
            </motion.span>
          </span>
          <div className='overflow-hidden right-5'>
            <motion.img
              animate={{
                translateY: [-20, 20],
                translateX: [-5, 5],
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 3,
                ease: 'easeInOut',
              }}
              className='h-[355px] w-[355px] absolute top-[550px] right-[55px] md:right-5 md:top-1/4'
              src={gradientObjectImage.src}
              alt='gradient object'
            />
            <div>
              <motion.img
                drag
                dragConstraints={containerRestraintRef}
                dragTransition={{ power: 0.2 }}
                className='h-[255px] w-[255px] absolute right-[5rem] top-3/4'
                src={gradientObjectTwoImage.src}
                alt='gradient object'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
