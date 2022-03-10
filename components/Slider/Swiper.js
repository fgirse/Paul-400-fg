/* eslint-disable prettier/prettier */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";




// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/Impress01.jpg" height="200" width="300" layout="responsive" alt="Impressionenen Rettungsanker_01"></img>  </SwiperSlide>
        <SwiperSlide><img src="/Impress02.jpg" height="200" width="300" layout="responsive" alt="Impressionenen Rettungsanker_02"></img>  </SwiperSlide>
        <SwiperSlide><img src="/Impress03.jpg" height="200" width="300" layout="responsive" alt="Impressionenen Rettungsanker_03"></img>  </SwiperSlide>
        <SwiperSlide><img src="/Impress04.jpg" height="639" width="958" layout="responsive" alt="Impressionenen Rettungsanker_04"></img>  </SwiperSlide>
        <SwiperSlide><img src="/Impress05.jpg" height="639" width="958" layout="responsive" alt="Impressionenen Rettungsanker_05"></img>  </SwiperSlide>
        <SwiperSlide><img src="/Impress06.jpg" height="183" width="275" layout="responsive" alt="Impressionenen Rettungsanker_06"></img>  </SwiperSlide>
   </Swiper>
    </>
  )
  }