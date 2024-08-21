"use client";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { carouselImages } from "@/constants";
import Image from "next/image";
import "../../app/globals.css";

export default function Hero() {
  return (
    <div className="flex justify-center mt-12">
      <div className="w-1/2">
        <h1 className="text-white text-6xl leading-[78px] font-bold tracking-wider">
          Sugar cane <br />
          juice <span className="text-[#55236d]">Vendor</span>
        </h1>
        <p className="mt-6 text-base text-white leading-7 font-medium pb-12 block">
          Experience the pure delight of our freshly pressed sugarcane juice. 🌿
          Packed with natural goodness, it’s a healthy and refreshing choice for
          any time of the day. Quench your thirst with the ultimate blend of
          taste and wellness!
        </p>
        <button className="text-lg uppercase bg-[#758824] text-white py-3.5 w-full max-w-[190px] text-center inline-block transition ease-in duration-500 z-[9999] relative font-light">
          Read more
        </button>
      </div>

      <div className="w-1/2">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {carouselImages.map((carousel) => (
            <SwiperSlide key={carousel.id}>
              <Image
                src={carousel.img}
                alt="carousel"
                className="h-full w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
