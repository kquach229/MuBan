'use client';
import { motion } from 'motion/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import React from 'react';

const services = [
  { title: 'Secure Data', description: 'We will take care of your data' },
  {
    title: '24/7 Support',
    description: 'We offer continued support for a month',
  },
  {
    title: 'Customized Solutions',
    description: 'Request customized solutions',
  },
];

const ServicesPage = () => {
  return (
    <div className='base-page-styles overflow-hidden'>
      <div className='container flex flex-col'>
        <h3 className='header-text'>Services We Provide</h3>
        <p className='paragraph-text mt-5'>
          Share your services or product offerings here. Present them as simple
          headers that can lead out to their pages where you can expound on them
          further. You can also use this space for other purposes where the
          information is best presented as mere teasers to other individualized
          pages.
        </p>
        <div className='flex flex-col sm:flex-row gap-5 mx-auto mt-28 mb-28'>
          {services.map((service) => (
            <Card key={service.title} className='h-72 w-[100%] md:w-1/3'>
              <CardContent className='flex justify-center flex-col items-center text-center h-full'>
                <CardHeader className='text-3xl font-bold tracking-wider bg-gradient-to-b from-[rgb(29,51,95)] to-[rgb(73,29,94)] text-transparent bg-clip-text'>
                  {service.title}
                </CardHeader>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='relative flex flex-col md:flex-row justify-around items-center gap-20 md:gap-10'>
          <div className='flex-1'>
            <span className='text-5xl font-bold bg-gradient-to-b from-white to-[rgb(29,51,95)] text-transparent bg-clip-text'>
              You Can Count On Us.
            </span>
            <motion.img
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                type: 'spring',
                bounce: 0.25,
                repeat: Infinity,
                duration: 5,
                repeatType: 'mirror',
              }}
              className='h-56 w-auto mt-24'
              src='/gradient_object_three.png'
              alt='gradient object three'
            />
            <motion.img
              animate={{
                translateX: [-50, 50],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: 'mirror',
              }}
              className='h-56 w-auto mt-24 absolute top-full -right-48  md:top-1/2 md:right-5'
              src='/gradient_object_four.png'
              alt='gradient object three'
            />
          </div>
          <span className='paragraph-text max-w-md'>
            This text block gives a brief overview of your company. Share your
            philosophy, vision, or mantra here.
          </span>
        </div>
        <div className='border border-white/30 mt-32' />
      </div>
    </div>
  );
};

export default ServicesPage;
