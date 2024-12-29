'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const [bgBlack, setBgBlack] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setBgBlack(true);
    } else {
      setBgBlack(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.addEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav
      className={`${bgBlack ? 'bg-black' : 'bg-none'} ${
        bgBlack ? 'text-white' : 'text-black'
      } z-50 p-5 fixed top-0 w-full flex justify-between`}>
      <Link className='flex items-center' href='/'>
        <Image
          src={'/muban_logo.svg'}
          height={70}
          width={70}
          alt='muban logo'
        />
        <span className='text-xl ml-5'>MuBan</span>
      </Link>
      <div>
        <Link href='/templates'>Templates</Link>
      </div>
    </nav>
  );
};

export default NavBar;
