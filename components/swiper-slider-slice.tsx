"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

interface Props {
  slides: any[] | any;
  slidesPerView: number;
  pagination: boolean;
  infinitescroll: boolean;
  forceSliderView?: number;
}

const SwiperSliderSlice: React.FC<Props> = ({ slides, slidesPerView, pagination, infinitescroll, forceSliderView }) => {
  return (
    <Swiper
      spaceBetween={50}
      modules={[Pagination, Autoplay]}
      pagination={pagination ? { clickable: true } : false}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      loop={infinitescroll}
      breakpoints={{
        500: {
          slidesPerView: forceSliderView ? forceSliderView : 1,
          spaceBetween: 5
        },
        768: {
          slidesPerView: forceSliderView ? forceSliderView : 2,
          spaceBetween: 10
        },
        1024: {
          slidesPerView: forceSliderView ? forceSliderView : slidesPerView,
          spaceBetween: 10
        },
      }}
      className='h-full w-full'
    >
      {slides.map((slide: any, index: any) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperSliderSlice;
