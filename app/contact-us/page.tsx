import { Card } from '@/components/ui/card';
import React from 'react';
import { FaBusinessTime } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className='base-page-styles'>
      <div className='container'>
        <div>
          <h5 className='header-text'>Let&apos;s talk business.</h5>

          <div className='mt-16'>
            <div className='text-2xl text-background'>Phone</div>
            <div className='mt-2 text-background/50'>917-257-0115</div>
          </div>
          <div className='mt-16'>
            <div className='text-2xl text-background'>Email</div>
            <div className='mt-2 text-background/50'>kquach229@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
