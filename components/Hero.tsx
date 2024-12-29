import Image from 'next/image';

const Hero = () => {
  return (
    <div className='flex p-[1rem] justify-around items-center min-h-screen w-full bg-gradient-to-r from-white to-specialBeige'>
      <div className='flex flex-col gap-5'>
        <span className='text-3xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] '>
          Professional, Simple Templates.
        </span>
      </div>

      <div>
        <Image
          className='flex-1 h-auto'
          alt='wireframe'
          src='/wireframe.svg'
          height={500}
          width={500}
        />
      </div>
    </div>
  );
};

export default Hero;
