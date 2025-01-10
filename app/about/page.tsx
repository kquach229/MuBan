import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className='base-page-styles'>
      <div className='flex flex-col gap-10 container paragraph-text'>
        <div>
          <span className='header-text'>About MoBan</span>
          <div className='flex flex-col mt-5 sub-heading-text'>
            <span className='font-bold text-lg'>模板 (mó bǎn)</span>
            <span className='font-bold'>noun</span>
            <span className='text-grey'>Template</span>
          </div>
        </div>

        <p>
          At MoBan, we believe building a professional and stunning website
          shouldn't be a daunting or expensive task. That's why we've created a
          hub of ready-made website templates designed to meet the needs of
          businesses, creatives, and developers alike.
        </p>
        <p>
          Our mission is to empower you with beautiful, customizable, and
          easy-to-use templates that save you time, effort, and money. Whether
          you're launching your first website, refreshing your online presence,
          or scaling your digital portfolio, MoBan has the perfect template to
          get you started.
        </p>

        <p className='gap-2 flex flex-col'>
          <span className='font-bold text-2xl mb-5'>Who We Are</span>
          <p>
            MoBan was founded with a simple idea: to empower creators with tools
            to bring their ideas to life online. Backed by a passionate team of
            designers, developers, and tech enthusiasts, we've built a platform
            that combines professional-grade templates with flexibility and ease
            of use.
          </p>

          <p>
            Whether you're a beginner taking your first step into web design or
            an experienced developer looking to save time, MoBan is designed to
            meet your needs.
          </p>
        </p>

        <p className='h-full flex flex-col'>
          <span className='font-bold text-2xl mb-5'>Why Choose Us?</span>
          <ul className='[&>*]:mt-3'>
            <li>
              <span className='font-bold'>Expertly Crafted Designs:</span> Each
              template is meticulously designed by experienced professionals to
              ensure quality and usability.
            </li>

            <li>
              <span className='font-bold'>Versatile Collection:</span> From
              portfolios and e-commerce stores to blogs and business sites,
              we've got something for everyone.
            </li>

            <li>
              <span className='font-bold'>Customizable & Flexible:</span> All
              our templates are built with flexibility in mind, giving you full
              control to tailor them to your brand.
            </li>

            <li>
              <span className='font-bold'>Affordable Pricing:</span> We make
              premium website templates accessible without breaking the bank.
            </li>
          </ul>
        </p>

        <p>
          <span className='font-bold text-2xl mb-5'>Our Vision</span>
          <p className='mt-3'>
            We envision a world where anyone can build a stunning online
            presence with ease. By combining modern design with seamless
            functionality, MoBan aims to make web development simpler, faster,
            and more accessible to everyone.
          </p>
        </p>
      </div>
    </div>
  );
};

export default About;
