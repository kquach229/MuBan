import TemplateCard from '@/components/TemplateCard';
import { prisma } from '@/lib/prisma';
import React from 'react';

export interface ITemplate {
  name: string;
  description: string;
  price: Number;
  updatedAt: Date;
  createdAt: Date;
  features: string[];
  imagePath: string | null;
}

const TemplatesPage = async () => {
  const templates = await prisma.template.findMany();
  console.log(templates);
  return (
    <div className='base-page-styles w-full'>
      <div className='container'>
        <span className='header-text text-center md:text-left w-full'>
          All Templates
        </span>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5'>
          {templates.map((template: ITemplate) => (
            <TemplateCard template={template} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;
