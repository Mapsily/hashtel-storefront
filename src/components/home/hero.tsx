"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Banner from "./banner";

type BANNER = {
  type: string;
  url: string;
};

const Hero = ({ banners }: { banners: BANNER[] }) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {banners.map((b, idx) => (
          <CarouselItem key={idx}>
            <Banner {...b} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Hero;
