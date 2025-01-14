import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { ITemplate } from '@/app/templates/page';
const TemplateCard = ({ template }: { template: ITemplate }) => {
  const updatedAtDate = new Date(template.updatedAt).toLocaleDateString(
    'en-US'
  );

  return (
    <Card className='max-w-sm mx-auto'>
      <CardHeader>
        <div className='flex flex-row justify-between'>
          <div>
            <CardTitle className='text-lg tracking-wider'>
              {template.name}
            </CardTitle>
            <CardDescription className='mt-5'>
              {template.description}
            </CardDescription>
          </div>
          <span className='font-bold text-foreground/50'>
            ${template.price.toFixed(2)}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <img
          className='rounded-sm'
          src={template.imagePath || ''}
          width={400}
          height={400}
          alt='template'
        />
        <div className='m-5'>
          Features:
          {template.features.map((feature: string) => (
            <li className='list-none'> - {feature}</li>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className='text-foreground/50 text-xs'>
          Updated At {updatedAtDate}
        </div>
      </CardFooter>
    </Card>
  );
};

export default TemplateCard;
