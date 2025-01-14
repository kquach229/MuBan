import { footer } from 'motion/react-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-foreground min-h-[10rem] text-background w-full p-[3rem] flex flex-col gap-10 md:flex-row md:justify-around'>
      <div className='flex flex-col gap-3 justify-start w-[18rem]'>
        <Image
          src={'/moban_logo.svg'}
          height={70}
          width={70}
          alt='moban logo'
        />
        <span className='font-extralight text-sm'>
          Accelerate your projects with millions of ready-to-use products.
        </span>
      </div>

      <div className=''>
        <span className='font-bold text-lg'>Company</span>
        <div className='grid grid-row\s-5 items-center mt-3'>
          <Link className='text-left' href='/about'>
            About
          </Link>

          <Link className='text-left' href='/contact-us'>
            Contact Us
          </Link>
        </div>
      </div>
      <div className=''>
        <span className='font-bold text-lg'>Products</span>
        <div className='grid grid-rows-5 items-center mt-3'>
          <Link className='text-left' href='/templates'>
            Templates
          </Link>

          <Link className='text-left' href='/services'>
            Services
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
