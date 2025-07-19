import Breadcrumb from '@/components/breadcrumb'
import Image from 'next/image'
import React from 'react'
import imgs from '../../public/assets/banner/banner2.jpeg'
import Section from '@/components/section'

const Page = () => {
  return (
    <>
     <Breadcrumb
        name="About us"
        items={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

   <Section className='relative overflow-hidden mt-10'>
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
                  <span className="text-blue-500">The India One Pay,</span>
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                   we specialize in delivering  innovative, {' '}
                  <span className="relative inline-block">
                  
                    <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-yellow-400 rounded-full"></div>
                  </span>
                </h2>
              </div>

              <p className="text-[14px] text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
               Technology-driven services that
 span across utility payments,  business solutions, e-commerce, retail markets, and strategic
  sales development. Our diverse portfolio reflects our commitment to simplifying everyday processes,
   accelerating business growth, and enhancing consumer experiences across multiple industries.
              </p>

            </div>
          </div>
        </div>
      </Section>

    </>
  )
}

export default Page