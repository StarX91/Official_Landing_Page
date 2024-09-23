import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const imageUrls = [
  "/carousle-1.webp",
  "/carousel-2.webp",
  "/carousel-3.webp",
  "/carousle-4.webp",
];

const CarouselDemo = () => {
  return (
    <Carousel className="w-full max-w-lg">
      <CarouselContent>
        {imageUrls.map((url, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-1">
                  <img src={url} alt={`Slide ${index + 1}`} className="w-full h-full object-cover " />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselDemo;
