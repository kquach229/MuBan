'use client';
import CategoriesGrid from '@/components/CategoriesGrid';
import Hero from '@/components/Hero';

export default function Home() {
  const categories = [
    { id: 1, category: 'Portfolio & Agency' },
    { id: 2, category: 'Technology' },
    { id: 3, category: 'Blog & Tutorial' },
    { id: 4, category: 'Professional Services' },
    { id: 5, category: 'Real Estate' },
    { id: 7, category: 'Retail' },
  ];
  return (
    <div className='min-h-screen'>
      <Hero />
      <div className='w-full p-[2rem]'>
        <CategoriesGrid title='Popular' items={categories} />
      </div>
    </div>
  );
}
