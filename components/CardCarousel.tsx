'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
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
    image: '/DSCF7423-scaled.jpg',
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
    image: '/DSCF7434-scaled.jpg',
    link: '/global-assistance',
    buttonText: 'Get Support'
  },
  {
    id: '04',
    title: 'Remote Medical Solutions',
    subtitle: 'Advanced Telemedicine',
    description: 'Cutting-edge telemedicine and remote medical support services for locations with limited access to healthcare facilities.',
    image: '/Remote-Site-Scrolling-1.jpg',
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
    <section className="relative bg-white">
      {/* Carousel Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-white pt-24">
        <div className="w-full px-2 lg:px-4 h-full flex items-center">
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
            767: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1699: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          className="swiper-container"
        >
          {carouselData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="people__card">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="people__card__image"
                />
                <div className="people__card__content">
                  <div className="slide__number">{slide.id}</div>
                  <div className="slide__title">{slide.title}</div>
                  <div className="slide__subtitle">{slide.description}</div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                      <div className="text-center">
                        <div className="text-sm font-bold italic">CALL FOR HELP</div>
                        <div className="text-xs opacity-90">Emergency Response</div>
                      </div>
                    </Link>
                    <Link href="/aeromedical-evacuation" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                      <div className="text-center">
                        <div className="text-sm font-bold italic">CONTACT US</div>
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
        <div className="swiper-button-prev !text-gray-800 !w-12 !h-12 !bg-white/80 !backdrop-blur-md !rounded-full !flex !items-center !justify-center hover:!bg-white shadow-lg transition-all duration-300 !left-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="swiper-button-next !text-gray-800 !w-12 !h-12 !bg-white/80 !backdrop-blur-md !rounded-full !flex !items-center !justify-center hover:!bg-white shadow-lg transition-all duration-300 !right-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Custom Pagination - Hidden */}
        <div className="swiper-pagination !hidden"></div>
      </div>
      </div>

            {/* Text Section with Background */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              {/* Medical Cross Icon */}
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                  </svg>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  Medi Response
                </span>
                <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-white mt-2">
                  delivers integrated medical care and safety solutions
                </span>
              </h2>

              <div className="mt-8">
                <p className="text-lg text-white leading-relaxed max-w-3xl mx-auto">
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
          height: 80vh;
          background-color: #111b1a;
          border-radius: 11px;
          width: 100%;
        }

        @media (max-width: 1699px) {
          .people__card {
            height: 75vh;
          }
        }

        @media (max-width: 1199px) {
          .people__card {
            height: 70vh;
          }
        }

        @media (max-width: 991px) {
          .people__card {
            height: 65vh;
          }
        }

        @media (max-width: 767px) {
          .people__card {
            height: 60vh;
          }

          .swiper-button-next,
          .swiper-button-prev {
            width: 40px !important;
            height: 40px !important;
          }

          .swiper-pagination-bullet {
            width: 6px !important;
            height: 6px !important;
          }

          .swiper-pagination-bullet-active {
            width: 18px !important;
          }
        }

        .people__card__image {
          display: inline-block;
          position: absolute;
          top: 0%;
          bottom: 0%;
          left: 0%;
          right: 0%;
          z-index: 2;
          margin-left: -100px;
          width: 130%;
          height: 100%;
          max-width: none;
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
          padding: 30px 25px;
          border-radius: 11px;
          transition: 0.3s;
        }

        .slide__number {
          margin-bottom: 20px;
          opacity: 1;
          font-size: 28px;
          font-weight: 300;
          color: #ebefe3;
        }

        @media (max-width: 1199px) {
          .slide__number {
            margin-bottom: 15px;
            font-size: 22px;
          }
        }

        @media (max-width: 767px) {
          .slide__number {
            font-size: 18px;
          }
        }

        .slide__title {
          margin-bottom: 15px;
          font-size: 2.5em;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.03em;
          color: #ebefe3;
        }

        @media (max-width: 1199px) {
          .slide__title {
            font-size: 2.4em;
          }
        }

        @media (max-width: 767px) {
          .slide__title {
            font-size: 1.92em;
          }
        }

        .slide__subtitle {
          margin-bottom: 20px;
          max-width: 70%;
          color: #ebefe3;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.5;
        }

        @media (max-width: 1199px) {
          .slide__subtitle {
            font-size: 17px;
            max-width: 100%;
          }
        }

        @media (max-width: 767px) {
          .slide__subtitle {
            font-size: 16px;
            max-width: 85%;
          }
        }

        .slide__btn {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px 20px;
          border: 1px solid #ebefe3;
          border-radius: 30px;
          text-decoration: none;
          transition: background-color 0.3s;
        }

        @media (max-width: 767px) {
          .slide__btn {
            padding: 8px 16px;
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
          font-size: 20px;
          font-weight: 500;
          color: #ebefe3;
          transition: color 0.3s;
        }

        @media (max-width: 767px) {
          .slide__btn__text {
            font-size: 18px;
          }
        }

        .slide__btn__icon {
          width: 15px;
          font-size: 24px;
          color: #ebefe3;
          transition: 0.3s;
        }

        @media (max-width: 767px) {
          .slide__btn__icon {
            font-size: 18px;
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
          width: 48px !important;
          height: 48px !important;
          transition: all 0.3s ease !important;
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
          gap: 8px !important;
        }

        .swiper-pagination-bullet {
          background: #333 !important;
          opacity: 0.3;
          width: 8px !important;
          height: 8px !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #333 !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  )
}
