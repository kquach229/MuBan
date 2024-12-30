import { footer } from 'motion/react-client';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='grid grid-cols-3 bg-foreground min-h-[10rem] text-background  items-center w-full p-[3rem] justify-center'>
      <Link className='text-left' href='/about'>
        About
      </Link>
      <Link className='text-left' href='/templates'>
        Templates
      </Link>
      <Link className='text-left' href='/about'>
        About
      </Link>
      <Link className='text-left' href='/templates'>
        Templates
      </Link>
      <Link className='text-left' href='/about'>
        About
      </Link>
      <Link className='text-left' href='/templates'>
        Templates
      </Link>
    </footer>
  );
};

export default Footer;
