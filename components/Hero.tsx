import Image from 'next/image';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <div className='flex p-[1rem] justify-around items-center min-h-screen w-full bg-gradient-to-r from-white to-specialBeige'>
      <div className='flex flex-col gap-5'>
        <span className='text-3xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] '>
          Professional, Simple Templates.
        </span>
      </div>

      <motion.div
        className='box'
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}>
        <Image
          className='flex-1 h-auto'
          alt='wireframe'
          src='/wireframe.svg'
          height={500}
          width={500}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
