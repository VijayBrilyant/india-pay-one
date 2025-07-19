"use client"
import React from 'react'
import Banner from '../components/banner'
import Section_Header from '@/components/section-header'
import Section from '@/components/section'
import imgs from '../public/assets/banner/banner1.jpeg'
import Image from 'next/image'
import SwiperSliderSlice from '@/components/swiper-slider-slice'
import { getBusinessSolutions } from '@/components/services'
import { ServiceIntg } from '@/types/globel'
import Button from '@/components/button'
import { useRouter } from 'next/navigation'

const Page = () => {
const navigate = useRouter();
  const testimonial = [
    {
      id: 1,
      name: 'Raghuram',
      message: 'INDIA PAY ONE provides Money Transfer Service. Money Transfer is an unique business opportunity that increases your income.'
    },
    {
      id: 2,
      name: 'Pankaj',
      message: 'INDIA PAY ONE provides fast and secure way to recharge any mobile, any operator instantly through website, mobile app.'
    },
    {
      id: 3,
      name: 'Bhanumati',
      message: 'INDIA PAY ONE provides instant and hassle free Payment Solutions that are simple and secure with delivered through all devices'
    },
    {
      id: 4,
      name: 'Pravin',
      message: 'INDIA PAY ONE is the best way for Payment, Cash Deposit/Withdraw, Money Transfer & Recharge'
    }
  ]

  const testimonialElements = testimonial ? testimonial.map((testimonial, index) => (
    <div className='bg-slate-50 rounded-[10px] overflow-hidden w-full relative p-5' key={index}>
      <div className='h-10 w-10 rounded-full bg-gray-200' />
      <p className=''>{testimonial.name || '---'}</p>
      <p className='text-[13px] mt-3 text-slate-500'>{testimonial.message || '---'}</p>
    </div>
  )) : null;

  return (
    <>
      <Banner />


      <Section className='bg-gray-50 relative overflow-hidden mt-10'>
        {/* Background decorative elements - responsive positioning */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 border-2 border-blue-200 rounded-full opacity-30"></div>
          <div className="absolute top-20 sm:top-40 right-20 sm:right-40 w-40 h-40 sm:w-80 sm:h-80 border-2 border-gray-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 border-2 border-gray-200 rounded-full opacity-15"></div>
        </div>

        {/* Main content - fully responsive */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            {/* Left side - Image with responsive sizing */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -left-4 sm:-left-6 md:-left-8 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-blue-500 rounded-full z-0"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={imgs}
                  alt="Professional headshot"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
              </div>
            </div>

            {/* Right side - Content with responsive typography */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 order-1 lg:order-2 text-center lg:text-left">
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
                  <span className="text-blue-500">Simplify With Tech</span>
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Utilities, e-commerce, and {' '}
                  <span className="relative inline-block">
                    business made easier
                    <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-yellow-400 rounded-full"></div>
                  </span>
                  .
                </h2>
              </div>

              <p className="text-[14px] text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Facing the study with the right mindset can change our chances of learning everything necessary. At the same time, having learned these contents will make our way of interpreting the world change.
              </p>
              <p className="text-[14px] text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">Whether you're a startup, SME, or a large-scale enterprise, India One Pay is your trusted partner for digital transformation, operational excellence, and sustainable growth.</p>

            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className='grid md:grid-cols-5 grid-cols-1 my-10 gap-3'>
          <div className='col-span-5 mb-10'>
            <Section_Header title='Smart Business Solutions' sub_content='Offering Utility Payments, Business Solutions, E-commerce, Retail Market, and Sales Development under one platform.' />
          </div>

          {
            getBusinessSolutions().map((item:ServiceIntg, index:number) => (
              <div className='md:col-span-1 col-span-5 group' key={index}>
                <div className='h-[260px] w-full bg-slate-50 rounded-[10px] overflow-hidden relative card-mod:hover.'>
                  <div className='gradient-black h-full w-full absolute top-0 left-0 z-10' />
                  <Image src={item.image} fill alt='cat-imgs' className='h-full w-full object-cover absolute top-0 left-0 transition-transform duration-500 group-hover:scale-110'  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  <h5 className='text-white transition-all duration-500 group-hover:text-secondary absolute bottom-4  left-2.5 z-[11] font-[600] text-[14px]'>{item.name}</h5>
                </div>
              </div>
            ))
          }
        </div>
      </Section>


      {/* Promo section */}
      <Section className="w-full py-4">
        <div className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl overflow-hidden">
          {/* Background decorative lines */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none">
              <path d="M0 200 Q300 100 600 200 T1200 200" stroke="white" strokeWidth="2" fill="none" />
              <path d="M0 250 Q400 150 800 250 T1600 250" stroke="white" strokeWidth="1.5" fill="none" />
              <path d="M-200 150 Q200 50 600 150 T1400 150" stroke="white" strokeWidth="1" fill="none" />
            </svg>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center px-8 sm:px-12 lg:px-16 py-8 sm:py-12 lg:py-9">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left space-y-6">
              <div className="space-y-4">
                <h2 className="text-white text-lg sm:text-xl font-normal">
                  Are You Impressed With Us?
                </h2>
                <h1 className="text-white text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight">
                  We need you as our <br />
                  business partner
                </h1>
              </div>

              <Button onClick={()=> navigate.push('/contact-us')} className="bg-secondary hover:bg-secondary/90 text-gray-900 font-semibold px-8 py-2 rounded-[5px] transition-colors duration-300 text-lg">
                Join Now
              </Button>
            </div>

            {/* Right side - Laptop mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Laptop base */}
                <div className="bg-gray-300 rounded-b-3xl w-80 h-6 shadow-lg"></div>

                {/* Laptop screen */}
                <div className="bg-gray-800 rounded-t-2xl p-4 w-80 relative -mb-1">
                  {/* Screen bezel */}
                  <div className="bg-white rounded-lg p-4 h-48 relative overflow-hidden">
                    {/* Browser chrome */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-gray-100 rounded px-3 py-1 text-xs text-gray-500">
                        India One Pay
                      </div>
                    </div>

                    {/* Free badge */}
                    <div className="absolute top-8 left-8 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Join now
                    </div>

                    {/* Content area */}
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="flex-1">
                          <h3 className="text-sm font-bold text-gray-900 mb-1">
                            We give you exciting features to make you save money and earn more benefits.
                          </h3>
                          <div className="space-y-1">
                            <div className="bg-blue-500 h-2 w-16 rounded"></div>
                            <div className="bg-gray-200 h-1 w-12 rounded"></div>
                            <div className="bg-gray-200 h-1 w-20 rounded"></div>
                          </div>
                        </div>

                        {/* Video thumbnail */}
                        <div className="relative bg-gray-900 rounded w-20 h-12 flex items-center justify-center">
                          <div className="w-0 h-0 border-l-4 border-l-red-500 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 opacity-20 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className='grid md:grid-cols-7 grid-cols-1 gap-5 my-20'>
        <div className='md:col-span-2 col-span-1'>
          <Section_Header title='People Trust Us'
            sub_content='' />
          <p className='text-[14px] text-slate-500'>People love India One Pay, so do you. Because this is the All-in-one solution for any Online studying, eLearning center.</p>
        </div>

        <div className='md:col-span-5 col-span-1'>
          <SwiperSliderSlice slides={testimonialElements} slidesPerView={3} pagination={true} infinitescroll={true} />
        </div>
      </Section>

    </>
  )
}

export default Page