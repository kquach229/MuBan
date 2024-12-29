import React from 'react';
import { Card, CardContent } from './ui/card';

const CategoriesGrid = ({ title, items }) => {
  return (
    <div>
      <div className='mb-5 text-xl'>{title}</div>
      <div className='grid grid-cols-3 gap-3'>
        {items.map((item) => {
          return (
            <Card className='h-52 place-content-center hover:cursor-pointer'>
              <CardContent>{item.category}</CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesGrid;
