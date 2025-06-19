'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const images = [
  {
    src: '/images/NCCB4.jpeg',
    alt: 'Norwich Christian Centre Building',
    className: 'w-full h-full object-cover object-[center_20%]'
  },
  {
    src: '/images/CCC1.jpg',
    alt: 'Norwich Christian Centre',
    className: 'w-full h-full object-cover object-center'
  },
  {
    src: '/images/CCC2.jpeg',
    alt: 'Norwich Christian Centre',
    className: 'w-full h-full object-cover object-center'
  },
  {
    src: '/images/Churchworship1.jpeg',
    alt: 'Church Worship',
    className: 'w-full h-full object-cover object-center'
  },
  {
    src: '/images/NCCB2.jpeg',
    alt: 'Norwich Christian Centre Building',
    className: 'w-full h-full object-cover object-center'
  },
  {
    src: '/images/P1.jpeg',
    alt: 'Norwich Christian Church Image 1',
    className: 'w-full h-full object-cover object-[center_15%]'
  },
  {
    src: '/images/P2.jpeg',
    alt: 'Norwich Christian Church Image 2',
    className: 'w-full h-full object-cover object-[center_20%]'
  },
  {
    src: '/images/P3.jpeg',
    alt: 'Norwich Christian Church Image 3',
    className: 'w-full h-full object-cover object-[center_25%]'
  },
  {
    src: '/images/P4.jpeg',
    alt: 'Norwich Christian Church Image 4',
    className: 'w-full h-full object-cover object-[center_30%]'
  },
  {
    src: '/images/P5.jpeg',
    alt: 'Norwich Christian Church Image 5',
    className: 'w-full h-full object-cover object-[center_20%]'
  },
  {
    src: '/images/P6.jpeg',
    alt: 'Norwich Christian Church Image 6',
    className: 'w-full h-full object-cover object-[center_30%]'
  },
  {
    src: '/images/P7.jpeg',
    alt: 'Norwich Christian Church Image 7',
    className: 'w-full h-full object-cover object-[center_15%]'
  },
  {
    src: '/images/P8.jpeg',
    alt: 'Norwich Christian Church Image 8',
    className: 'w-full h-full object-cover object-[center_30%]'
  }
]

export default function ImageSlider() {
  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-[300px] md:h-[400px] rounded-lg shadow-xl"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={image.src}
                alt={image.alt}
                className={image.className}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
} 