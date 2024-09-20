import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { img1, img2 } from "@/app/images/imdex";

import Image from "next/image";
type Props = {};

const CarouselComponent = ({}: Props) => {
  return (
    <>
      {/* lorg view(mroe than 930px) */}
      <div className="w-full h-auto justify-center items-center lg:flex hidden">
        <Carousel className="rounded-xl w-[90%] h-auto">
          <CarouselContent className="w-full h-full">
            <CarouselItem className="w-full h-full flex justify-center items-center rounded-lg relative left-0 p-0 m-0">
              {/* for lorg screens */}
              <Image
                src={img1}
                alt="carosel"
                className="w-a h-full rounded-lg border-gray-600 border-[3px]"
              />
            </CarouselItem>
            <CarouselItem className="w-full h-full flex justify-center items-center bg-red-300 rounded-lg border-gray-600 border-[3px]">
              ...
            </CarouselItem>
            <CarouselItem className="w-full h-full flex justify-center items-center bg-red-300 rounded-lg border-gray-600 border-[3px]">
              ...
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* mediom view(930px) */}
      <div className="w-full sm:px-0 px-10 h-auto justify-center items-center lg:hidden flex">
        <Carousel className="rounded-xl w-[90%] h-auto">
          <CarouselContent className="w-full h-full">
            <CarouselItem className="w-full h-full flex justify-center items-center rounded-lg relative left-0 p-0 m-0">
              {/* for lorg screens */}
              <Image
                src={img2}
                alt="carosel"
                className="w-a h-full rounded-lg border-gray-600 border-[3px]"
              />
            </CarouselItem>
            <CarouselItem className="w-full h-full flex justify-center items-center bg-red-300 rounded-lg border-gray-600 border-[3px]">
              ...
            </CarouselItem>
            <CarouselItem className="w-full h-full flex justify-center items-center bg-red-300 rounded-lg border-gray-600 border-[3px]">
              ...
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default CarouselComponent;
