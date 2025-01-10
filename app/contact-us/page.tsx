'use client';
import { Card } from '@/components/ui/card';
import React from 'react';
import { FaBusinessTime } from 'react-icons/fa';
import { motion } from 'motion/react';
import gradientObjectFive from '@/public/gradient_object_five.png';
import gradientObjectSix from '@/public/gradient_object_six.png';

const ContactUs = () => {
  return (
    <div className='base-page-styles overflow-hidden'>
      <div className='container'>
        <div className='flex flex-col md:flex-row items-center justify-around'>
          <div>
            <h5 className='header-text'>Let&apos;s talk business.</h5>

            <div className='mt-16'>
              <div className='text-2xl text-background'>Phone</div>
              <div className='mt-2 text-background/50'>917-257-0115</div>
            </div>
            <div className='mt-16'>
              <div className='text-2xl text-background'>Email</div>
              <div className='mt-2 text-background/50'>kquach229@gmail.com</div>
            </div>
          </div>
          <div className='mt-5 md:mt-0'>
            <motion.img
              animate={{
                translateY: [-20, 20],
                translateX: [-5, 5],
                rotate: 150,
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 30,
                ease: 'easeInOut',
              }}
              className='h-[355px] w-[355px] top-[550px] right-[55px] md:right-24 md:top-2/4'
              src={gradientObjectFive.src}
              alt='gradient object'
            />
            <motion.img
              animate={{
                rotate: -150,
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 30,
                ease: 'backInOut',
              }}
              className='h-[355px] w-[355px] top-[550px] right-[55px] md:right-24 md:top-2/4 absolute'
              src={gradientObjectSix.src}
              alt='gradient object'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
