import TemplateCard from '@/components/TemplateCard';
import React from 'react';

const TemplatesPage = () => {
  return (
    <div className='base-page-styles'>
      <div className='container'>
        <span className='header-text'>All Templates</span>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5'>
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;
