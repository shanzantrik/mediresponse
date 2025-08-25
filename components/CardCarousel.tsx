'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const carouselData = [
  {
    id: '01',
    title: 'Emergency Medical Care',
    subtitle: 'Life Matters, People Come First',
    description: 'MediResponse delivers integrated medical care and safety solutions that prioritise the well-being of your workforce and the resilience of your operations.',
    image: '/Emergency-Medical-Service.jpg',
    link: '/contact',
    buttonText: 'Call for Help'
  },
  {
    id: '02',
    title: 'Aeromedical Evacuation',
    subtitle: 'Expert Clinical Teams',
    description: 'We offer aeromedical evacuation from remote regions, with ICU-level in-flight care and expert clinical teams.',
    image: '/Aeromedical.jpg',
    link: '/aeromedical-evacuation',
    buttonText: 'Learn More'
  },
  {
    id: '03',
    title: 'Global Assistance',
    subtitle: '24/7 Emergency Support',
    description: 'Our 24/7 global assistance services provide emergency medical coordination, telemedicine, and travel support worldwide.',
    image: '/Remote-Site-Scrolling-1.jpg',
    link: '/global-assistance',
    buttonText: 'Get Support'
  },
  {
    id: '04',
    title: 'Remote Medical Solutions',
    subtitle: 'Advanced Telemedicine',
    description: 'Cutting-edge telemedicine and remote medical support services for locations with limited access to healthcare facilities.',
    image: '/085-FireOps-June-2024.jpg',
    link: '/remote-medical',
    buttonText: 'Explore Services'
  },
  {
    id: '05',
    title: 'Training & Development',
    subtitle: 'Professional Excellence',
    description: 'Comprehensive training programs and professional development for medical teams and emergency responders.',
    image: '/Training-Scrolling-scaled.jpg',
    link: '/careers',
    buttonText: 'Join Us'
  }
]

export default function CardCarousel() {
  const swiperRef = useRef<any>(null)

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start()
    }
  }, [])

    return (
    <section className="relative bg-white dark:bg-gray-900">
      {/* Carousel Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900 pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24">

        {/* Gradient Glow Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Primary Red Glow */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>

          {/* Secondary Blue Glow */}
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

          {/* Medical Green Glow */}
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-green-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

          {/* Emergency Orange Glow */}
          <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>

          {/* Purple Accent Glow */}
          <div className="absolute top-1/3 right-1/3 w-56 h-56 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

          {/* Cyan Medical Glow */}
          <div className="absolute bottom-1/2 left-1/3 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        </div>

        {/* Comet Light Flare Animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Comet 1 - Red to Orange */}
          <div className="comet comet-1">
            <div className="comet-head"></div>
            <div className="comet-tail"></div>
          </div>

          {/* Comet 2 - Blue to Cyan */}
          <div className="comet comet-2">
            <div className="comet-head"></div>
            <div className="comet-tail"></div>
          </div>

          {/* Comet 3 - Green to Yellow */}
          <div className="comet comet-3">
            <div className="comet-head"></div>
            <div className="comet-tail"></div>
          </div>

          {/* Comet 4 - Purple to Pink */}
          <div className="comet comet-4">
            <div className="comet-head"></div>
            <div className="comet-tail"></div>
          </div>
        </div>

        <div className="w-full px-2 lg:px-4 h-full flex items-center">

        {/* Animated Emergency Icons Overlay */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {/* Pulsing Cross Icon */}
          <div className="absolute top-8 left-8 w-8 h-8 text-red-500 animate-pulse">
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
            </svg>
          </div>

          {/* Floating Heartbeat Icon */}
          <div className="absolute top-16 right-12 w-6 h-6 text-red-400 animate-bounce" style={{ animationDelay: '0.5s' }}>
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>

          {/* Rotating Shield Icon */}
          <div className="absolute bottom-20 left-16 w-7 h-7 text-blue-500 animate-spin" style={{ animationDuration: '8s' }}>
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
            </svg>
          </div>

          {/* Floating Phone Icon */}
          <div className="absolute bottom-16 right-20 w-6 h-6 text-green-500 animate-pulse" style={{ animationDelay: '1s' }}>
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </div>

          {/* Glowing Star Icon */}
          <div className="absolute top-1/3 left-1/4 w-5 h-5 text-yellow-400 animate-ping" style={{ animationDelay: '2s' }}>
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>

          {/* Floating Plus Icon */}
          <div className="absolute top-2/3 right-1/4 w-6 h-6 text-red-400 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2s' }}>
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
          </div>

          {/* Rotating Alert Triangle */}
          <div className="absolute bottom-1/3 left-1/3 w-5 h-5 text-orange-500 animate-spin" style={{ animationDuration: '12s' }}>
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
          </div>

          {/* Pulsing Lightning Icon */}
          <div className="absolute top-1/2 right-1/3 w-6 h-6 text-yellow-500 animate-pulse" style={{ animationDelay: '0.8s' }}>
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
            </svg>
          </div>

          {/* Floating Clock Icon */}
          <div className="absolute bottom-1/4 left-1/2 w-5 h-5 text-blue-400 animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '1.5s' }}>
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>

          {/* Glowing Circle with Cross */}
          <div className="absolute top-1/4 right-1/6 w-4 h-4 text-red-500 animate-ping" style={{ animationDelay: '1.2s' }}>
            <div className="w-full h-full rounded-full bg-red-500/20 animate-pulse"></div>
            <svg className="absolute inset-0 w-full h-full text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </div>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          direction="horizontal"
          grabCursor={true}
          slidesPerView={1}
          slidesPerGroup={1}
          centeredSlides={false}
          loop={true}
          spaceBetween={0}
          speed={700}
          slideActiveClass="is-active"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1699: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          className="swiper-container"
        >
          {carouselData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="people__card">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="people__card__image"
                  quality={85}
                />
                <div className="people__card__content">
                  <div className="slide__number">{slide.id}</div>
                  <div className="slide__title">{slide.title}</div>
                  <div className="slide__subtitle">{slide.description}</div>
                </div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                      <div className="text-center">
                        <div className="text-xs sm:text-sm font-bold italic">CALL FOR HELP</div>
                        <div className="text-xs opacity-90">Emergency Response</div>
                      </div>
                    </Link>
                    <Link href="/aeromedical-evacuation" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                      <div className="text-center">
                        <div className="text-xs sm:text-sm font-bold italic">CONTACT US</div>
                        <div className="text-xs opacity-90">Medical Services</div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="slide__gradient"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <div className="swiper-button-prev !text-gray-800 dark:!text-gray-200 !w-10 sm:!w-12 !h-10 sm:!h-12 !bg-white/80 dark:!bg-gray-800/80 !backdrop-blur-md !rounded-full !flex !items-center !justify-center hover:!bg-white dark:hover:!bg-gray-700 shadow-lg transition-all duration-300 !left-2">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="swiper-button-next !text-gray-800 dark:!text-gray-200 !w-10 sm:!w-12 !h-10 sm:!h-12 !bg-white/80 dark:!bg-gray-800/80 !backdrop-blur-md !rounded-full !flex !items-center !justify-center hover:!bg-white dark:hover:!bg-gray-700 shadow-lg transition-all duration-300 !right-2">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Custom Pagination - Hidden */}
        <div className="swiper-pagination !hidden"></div>
      </div>
      </div>

            {/* Text Section with Background */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700 py-12 sm:py-16">
        <div className="container-custom px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 sm:space-y-8">
              {/* Medical Cross Icon */}
              <div className="flex justify-center">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                  </svg>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  Medi Response
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white mt-2">
                  delivers integrated medical care and safety solutions
                </span>
              </h2>

              <div className="mt-6 sm:mt-8">
                <p className="text-base sm:text-lg text-white leading-relaxed max-w-3xl mx-auto">
                  that prioritise the well-being of your workforce and the resilience of your operations. Our services are designed to mitigate risk, respond effectively to medical incidents, and support compliance across diverse sectors and environments. Backed by skilled personnel, clinical oversight, and dependable systems, we help organisations remain prepared, responsive, and focused on their core activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .swiper-container {
          width: 100%;
          height: 100%;
        }

        .people__card {
          position: relative;
          overflow: hidden;
          height: 75vh;
          background-color: #111b1a;
          border-radius: 11px;
          width: 100%;
        }

        @media (min-width: 640px) {
          .people__card {
            height: 70vh;
          }
        }

        @media (min-width: 767px) {
          .people__card {
            height: 75vh;
          }
        }

        @media (min-width: 1024px) {
          .people__card {
            height: 80vh;
          }
        }

        @media (min-width: 1699px) {
          .people__card {
            height: 85vh;
          }
        }

        .people__card__image {
          display: block;
          position: absolute;
          top: 0%;
          bottom: 0%;
          left: 0%;
          right: 0%;
          z-index: 2;
          width: 130%;
          height: 100%;
          object-fit: cover;
          border-radius: 13px;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .people__card__content {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          height: 100%;
          padding: 20px 15px;
          border-radius: 11px;
          transition: 0.3s;
        }

        @media (min-width: 640px) {
          .people__card__content {
            padding: 25px 20px;
          }
        }

        @media (min-width: 1024px) {
          .people__card__content {
            padding: 30px 25px;
          }
        }

        .slide__number {
          margin-bottom: 15px;
          opacity: 1;
          font-size: 20px;
          font-weight: 300;
          color: #ebefe3;
        }

        @media (min-width: 640px) {
          .slide__number {
            font-size: 22px;
            margin-bottom: 18px;
          }
        }

        @media (min-width: 1024px) {
          .slide__number {
            font-size: 24px;
            margin-bottom: 20px;
          }
        }

        @media (min-width: 1199px) {
          .slide__number {
            font-size: 28px;
            margin-bottom: 20px;
          }
        }

        .slide__title {
          margin-bottom: 12px;
          font-size: 1.8em;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.03em;
          color: #ebefe3;
        }

        @media (min-width: 640px) {
          .slide__title {
            font-size: 2.0em;
            margin-bottom: 14px;
          }
        }

        @media (min-width: 1024px) {
          .slide__title {
            font-size: 2.2em;
            margin-bottom: 15px;
          }
        }

        @media (min-width: 1199px) {
          .slide__title {
            font-size: 2.4em;
            margin-bottom: 15px;
          }
        }

        @media (min-width: 1699px) {
          .slide__title {
            font-size: 2.5em;
            margin-bottom: 15px;
          }
        }

        .slide__subtitle {
          margin-bottom: 15px;
          max-width: 85%;
          color: #ebefe3;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.5;
        }

        @media (min-width: 640px) {
          .slide__subtitle {
            font-size: 17px;
            max-width: 80%;
            margin-bottom: 18px;
          }
        }

        @media (min-width: 1024px) {
          .slide__subtitle {
            font-size: 18px;
            max-width: 75%;
            margin-bottom: 20px;
          }
        }

        @media (min-width: 1199px) {
          .slide__subtitle {
            font-size: 18px;
            max-width: 70%;
            margin-bottom: 20px;
          }
        }

        .slide__btn {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 8px 16px;
          border: 1px solid #ebefe3;
          border-radius: 30px;
          text-decoration: none;
          transition: background-color 0.3s;
        }

        @media (min-width: 640px) {
          .slide__btn {
            padding: 10px 20px;
          }
        }

        .slide__btn:hover {
          background-color: #ebefe3;
        }

        .slide__btn:hover .slide__btn__text {
          color: #111b1a;
        }

        .slide__btn:hover .slide__btn__icon {
          color: #111b1a;
        }

        .slide__btn__text {
          margin-right: 5px;
          font-size: 18px;
          font-weight: 500;
          color: #ebefe3;
          transition: color 0.3s;
        }

        @media (min-width: 640px) {
          .slide__btn__text {
            font-size: 20px;
          }
        }

        .slide__btn__icon {
          width: 15px;
          font-size: 20px;
          color: #ebefe3;
          transition: 0.3s;
        }

        @media (min-width: 640px) {
          .slide__btn__icon {
            font-size: 24px;
          }
        }

        .slide__gradient {
          position: absolute;
          z-index: 2;
          top: 0%;
          bottom: 0%;
          left: 0%;
          right: 0%;
          background-image: linear-gradient(111deg, #000, rgba(0, 0, 0, 15%) 60%);
        }

        /* Parallax effect for active slide */
        .swiper-slide.is-active .people__card__image {
          transform: translateX(120px) scale(1.15);
        }

        /* Parallax effect for non-active slides */
        .swiper-slide:not(.is-active) .people__card__image {
          transform: translateX(0px) scale(1);
        }

        /* Enhanced parallax for different slide positions */
        .swiper-slide.swiper-slide-prev .people__card__image {
          transform: translateX(-50px) scale(0.95);
        }

        .swiper-slide.swiper-slide-next .people__card__image {
          transform: translateX(50px) scale(0.95);
        }

        /* Custom Swiper Styles */
        .swiper-button-next,
        .swiper-button-prev {
          display: flex !important;
          color: #333 !important;
          background: rgba(255, 255, 255, 0.9) !important;
          backdrop-filter: blur(10px) !important;
          border-radius: 50% !important;
          width: 40px !important;
          height: 40px !important;
          transition: all 0.3s ease !important;
        }

        @media (min-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 48px !important;
            height: 48px !important;
          }
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 1) !important;
          transform: scale(1.1) !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          display: none !important;
        }

        .swiper-pagination {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 6px !important;
        }

        @media (min-width: 640px) {
          .swiper-pagination {
            gap: 8px !important;
          }
        }

        .swiper-pagination-bullet {
          background: #333 !important;
          opacity: 0.3;
          width: 6px !important;
          height: 6px !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
        }

        @media (min-width: 640px) {
          .swiper-pagination-bullet {
            width: 8px !important;
            height: 8px !important;
          }
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #333 !important;
          width: 18px !important;
          border-radius: 4px !important;
        }

        @media (min-width: 640px) {
          .swiper-pagination-bullet-active {
            width: 24px !important;
          }
        }

        /* Dark mode adjustments */
        @media (prefers-color-scheme: dark) {
          .swiper-button-next,
          .swiper-button-prev {
            color: #e5e7eb !important;
            background: rgba(31, 41, 55, 0.9) !important;
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background: rgba(55, 65, 81, 1) !important;
          }

          .swiper-pagination-bullet {
            background: #e5e7eb !important;
          }

          .swiper-pagination-bullet-active {
            background: #e5e7eb !important;
          }
        }

        /* Custom Emergency Icons Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(2deg); }
          50% { transform: translateY(-5px) rotate(-1deg); }
          75% { transform: translateY(-8px) rotate(1deg); }
        }

        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 5px currentColor); }
          50% { filter: drop-shadow(0 0 15px currentColor) drop-shadow(0 0 25px currentColor); }
        }

        @keyframes pulse-glow {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 5px currentColor);
          }
          50% {
            transform: scale(1.1);
            filter: drop-shadow(0 0 20px currentColor) drop-shadow(0 0 30px currentColor);
          }
        }

        @keyframes slide-in-left {
          0% { transform: translateX(-100px) opacity: 0; }
          100% { transform: translateX(0) opacity: 1; }
        }

        @keyframes slide-in-right {
          0% { transform: translateX(100px) opacity: 0; }
          100% { transform: translateX(0) opacity: 1; }
        }

        /* Apply custom animations to emergency icons */
        .absolute.top-8.left-8 { animation: float 6s ease-in-out infinite, glow 3s ease-in-out infinite; }
        .absolute.top-16.right-12 { animation: float 8s ease-in-out infinite, glow 4s ease-in-out infinite; }
        .absolute.bottom-20.left-16 { animation: float 7s ease-in-out infinite, glow 5s ease-in-out infinite; }
        .absolute.bottom-16.right-20 { animation: float 9s ease-in-out infinite, glow 3.5s ease-in-out infinite; }
        .absolute.top-1\/3.left-1\/4 { animation: float 5s ease-in-out infinite, pulse-glow 2s ease-in-out infinite; }
        .absolute.top-2\/3.right-1\/4 { animation: float 7.5s ease-in-out infinite, glow 4.5s ease-in-out infinite; }
        .absolute.bottom-1\/3.left-1\/3 { animation: float 6.5s ease-in-out infinite, glow 6s ease-in-out infinite; }
        .absolute.top-1\/2.right-1\/3 { animation: float 8.5s ease-in-out infinite, pulse-glow 3s ease-in-out infinite; }
        .absolute.bottom-1\/4.left-1\/2 { animation: float 5.5s ease-in-out infinite, glow 3.8s ease-in-out infinite; }
        .absolute.top-1\/4.right-1\/6 { animation: float 6.8s ease-in-out infinite, pulse-glow 2.5s ease-in-out infinite; }

        /* Comet Light Flare Animations */
        .comet {
          position: absolute;
          pointer-events: none;
          z-index: 5;
        }

        .comet-head {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: absolute;
          top: 0;
          left: 0;
        }

        .comet-tail {
          width: 120px;
          height: 2px;
          position: absolute;
          top: 3px;
          left: 8px;
          border-radius: 1px;
        }

        /* Comet 1 - Red to Orange */
        .comet-1 {
          top: -20px;
          left: -120px;
          animation: comet-move-1 8s linear infinite;
        }

        .comet-1 .comet-head {
          background: radial-gradient(circle, #ff6b6b, #ff8e53);
          box-shadow: 0 0 20px #ff6b6b, 0 0 40px #ff8e53;
        }

        .comet-1 .comet-tail {
          background: linear-gradient(90deg, #ff6b6b, #ff8e53, transparent);
          box-shadow: 0 0 10px #ff6b6b;
        }

        /* Comet 2 - Blue to Cyan */
        .comet-2 {
          top: 20%;
          left: -120px;
          animation: comet-move-2 12s linear infinite;
          animation-delay: 2s;
        }

        .comet-2 .comet-head {
          background: radial-gradient(circle, #4ecdc4, #45b7d1);
          box-shadow: 0 0 20px #4ecdc4, 0 0 40px #45b7d1;
        }

        .comet-2 .comet-tail {
          background: linear-gradient(90deg, #4ecdc4, #45b7d1, transparent);
          box-shadow: 0 0 10px #4ecdc4;
        }

        /* Comet 3 - Green to Yellow */
        .comet-3 {
          top: 60%;
          left: -120px;
          animation: comet-move-3 10s linear infinite;
          animation-delay: 4s;
        }

        .comet-3 .comet-head {
          background: radial-gradient(circle, #51cf66, #fcc419);
          box-shadow: 0 0 20px #51cf66, 0 0 40px #fcc419;
        }

        .comet-3 .comet-tail {
          background: linear-gradient(90deg, #51cf66, #fcc419, transparent);
          box-shadow: 0 0 10px #51cf66;
        }

        /* Comet 4 - Purple to Pink */
        .comet-4 {
          top: 80%;
          left: -120px;
          animation: comet-move-4 15s linear infinite;
          animation-delay: 6s;
        }

        .comet-4 .comet-head {
          background: radial-gradient(circle, #ae3ec9, #e64980);
          box-shadow: 0 0 20px #ae3ec9, 0 0 40px #e64980;
        }

        .comet-4 .comet-tail {
          background: linear-gradient(90deg, #ae3ec9, #e64980, transparent);
          box-shadow: 0 0 10px #ae3ec9;
        }

        /* Comet Movement Keyframes */
        @keyframes comet-move-1 {
          0% {
            transform: translateX(0) translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 120px)) translateY(100px) rotate(15deg);
            opacity: 0;
          }
        }

        @keyframes comet-move-2 {
          0% {
            transform: translateX(0) translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 120px)) translateY(-50px) rotate(-10deg);
            opacity: 0;
          }
        }

        @keyframes comet-move-3 {
          0% {
            transform: translateX(0) translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 120px)) translateY(80px) rotate(20deg);
            opacity: 0;
          }
        }

        @keyframes comet-move-4 {
          0% {
            transform: translateX(0) translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 120px)) translateY(-30px) rotate(-5deg);
            opacity: 0;
          }
        }

        /* Enhanced Gradient Glow Effects */
        .bg-red-500\/20 {
          background: radial-gradient(circle, rgba(239, 68, 68, 0.3), rgba(239, 68, 68, 0.1), transparent);
        }

        .bg-blue-500\/20 {
          background: radial-gradient(circle, rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.1), transparent);
        }

        .bg-green-500\/15 {
          background: radial-gradient(circle, rgba(34, 197, 94, 0.25), rgba(34, 197, 94, 0.05), transparent);
        }

        .bg-orange-500\/20 {
          background: radial-gradient(circle, rgba(249, 115, 22, 0.3), rgba(249, 115, 22, 0.1), transparent);
        }

        .bg-purple-500\/15 {
          background: radial-gradient(circle, rgba(147, 51, 234, 0.25), rgba(147, 51, 234, 0.05), transparent);
        }

        .bg-cyan-500\/20 {
          background: radial-gradient(circle, rgba(6, 182, 212, 0.3), rgba(6, 182, 212, 0.1), transparent);
        }
      `}</style>
    </section>
  )
}
