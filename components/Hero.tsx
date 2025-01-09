'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import ReusableCarousel from './ReusableCarousel';
import gradientObjectImage from '@/public/gradient_object_one.png';
import gradientObjectTwoImage from '@/public/gradient_object_two.png';
import { useRef } from 'react';

const benefits = [
  {
    id: 1,
    title: 'Time-Saving Solutions',
    benefit:
      'Instantly access professionally designed templates, eliminating the need to build from scratch.',
  },
  {
    id: 2,
    title: 'Cost-Effective',
    benefit:
      ' Affordable alternatives to hiring designers or developers, making high-quality websites accessible.',
  },
  {
    id: 3,
    title: 'Customizable Designs',
    benefit:
      'Easily tweak templates to match your unique brand identity and style.',
  },
  {
    id: 4,
    title: 'Diverse Collection',
    benefit:
      'Wide range of templates catering to various industries, platforms, and aesthetics.',
  },
  {
    id: 5,
    title: 'Beginner-Friendly',
    benefit:
      'User-friendly templates designed to simplify the website-building process, even for non-technical users.',
  },
];

const Hero = () => {
  const containerRestraintRef = useRef(null);
  return (
    <div
      ref={containerRestraintRef}
      className='pt-[12rem]  bg-gradient-to-r from-[rgb(73,29,94)] to-[rgb(29,51,95)] min-h-screen'>
      <div className='container flex'>
        <div className='flex justify-between w-full mx-auto'>
          <span className='text-center w-full text-4xl md:w-1/2 md:text-5xl leading-relaxed md:leading-loose text-white font-light'>
            Ready-Made Templates, Ready to Elevate Your Web Presence.
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
