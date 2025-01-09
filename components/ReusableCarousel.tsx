'use client';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { Card, CardContent } from './ui/card';

const ReusableCarousel = ({ carouselItems }) => {
  return (
    <Carousel
      className='w-full max-w-md'
      plugins={[
        Autoplay({
          delay: 8000,
        }),
      ]}>
      <CarouselContent>
        {carouselItems &&
          carouselItems.map((item) => (
            <CarouselItem key={item.id}>
              <Card className={`h-[300px]  flex items-center text-left p-5`}>
                <CardContent>
                  <div className='flex flex-col justify-around h-full gap-5'>
                    <span className='underline underline-offset-[3px] font-semibold'>
                      {item.title}
                    </span>

                    <span>{item.benefit}</span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ReusableCarousel;
