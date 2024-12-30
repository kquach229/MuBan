'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

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
      } z-50 p-5 fixed top-0 w-full flex justify-between items-center duration-500`}>
      <Link className='flex items-center' href='/'>
        <Image
          src={'/muban_logo.svg'}
          height={70}
          width={70}
          alt='muban logo'
        />
        <span className='text-xl ml-5'>MuBan</span>
      </Link>
      <div className='gap-5 flex items-center'>
        <Link href='/templates'>Templates</Link>
        <SignedOut>
          <SignInButton>
            <Button>Get Started</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default NavBar;
