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
    <div className='m-[2rem]'>
      <Carousel
        className='w-full max-w-md mx-auto'
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
                  <CardContent className='flex'>{item.benefit}</CardContent>
                </Card>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ReusableCarousel;
