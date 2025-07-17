import React from 'react'
import Banner from '../components/banner'
import Section_Header from '@/components/section-header'
import Section from '@/components/section'
import imgs from '../public/assets/banner/banner1.jpeg'
import Image from 'next/image'
import SwiperSliderSlice from '@/components/swiper-slider-slice'

const Page = () => {

  const business_solutions = [
    {
      id: 1,
      name: 'Utility Payments',
      define: 'We make everyday utility payments smarter, faster, and more reliable. Through our secure digital platform, users can manage essential services such as electricity, water, gas, broadband, and mobile recharges—all in one place. Our goal is to bring convenience, transparency, and real-time control to the fingertips of our customers, whether they are individuals or businesses.',
      key_features: [
        'Multi-utility bill payment system',
        'Real-time payment confirmations',
        'Secure and encrypted transactions',
        'Integrated support for recurring billing and reminders'
      ]
    },
    {
      id: 2,
      name: 'Business Solutions',
      define: 'Our business solutions are designed to empower organizations to operate more efficiently in a digital-first world. We offer customized tools and services including cloud-based software, process automation, customer management systems (CRM), invoicing platforms, and analytics dashboards. We partner with businesses to streamline operations, reduce costs, and foster sustainable growth.',
      key_features: [
        'Enterprise resource planning (ERP) solutions',
        'Custom software development',
        'Cloud and IT infrastructure support',
        'Data analytics and performance monitoring'
      ]
    },
    {
      id: 3,
      name: 'E-commerce',
      define: 'Our business solutions are designed to empower organizations to operate more efficiently in a digital-first world. We offer customized tools and services including cloud-based software, process automation, customer management systems (CRM), invoicing platforms, and analytics dashboards. We partner with businesses to streamline operations, reduce costs, and foster sustainable growth.',
      key_features: [
        'E-commerce website and mobile app development',
        'Secure payment gateway integration',
        'Product catalog and inventory management',
        'Logistics and fulfillment coordination'
      ]
    },
    {
      id: 4,
      name: 'Retail Market',
      define: 'Our business solutions are designed to empower organizations to operate more efficiently in a digital-first world. We offer customized tools and services including cloud-based software, process automation, customer management systems (CRM), invoicing platforms, and analytics dashboards. We partner with businesses to streamline operations, reduce costs, and foster sustainable growth.',
      key_features: [
        'Point-of-sale (POS) solutions',
        'Inventory and supply chain management',
        'Loyalty and customer engagement programs',
        'Omnichannel retail support'
      ]
    },
    {
      id: 5,
      name: 'Sales and Development',
      define: 'Our sales and development services are focused on helping businesses identify new markets, drive customer acquisition, and build sustainable revenue models. We provide both strategic consulting and hands-on execution in areas such as market research, product development, brand positioning, and channel sales optimization.',
      key_features: [
        'Go-to-market strategy planning',
        'Lead generation and B2B/B2C sales support',
        'Product innovation and lifecycle management',
        'Business development partnerships'
      ]
    }
  ]


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
      <div className='h-4 w-4 rounded-full bg-gray-50' />
      <p>{testimonial.name || '---'}</p>
      <p className='text-[13px] mt-5 text-slate-500'>{testimonial.message || '---'}</p>
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
            business_solutions?.map((item, index) => (
              <div className='md:col-span-1 col-span-5 group' key={index}>
                <div className='h-[260px] w-full bg-slate-50 rounded-[10px] overflow-hidden relative card-mod:hover.'>
                  <div className='gradient-black h-full w-full absolute top-0 left-0 z-10' />
                  <Image src={imgs} alt='cat-imgs' className='h-full w-full object-cover absolute top-0 left-0 transition-transform duration-500 group-hover:scale-110' />
                  <h5 className='text-white transition-all duration-500 group-hover:text-secondary absolute bottom-4  left-2.5 z-[11] font-[600] text-[14px]'>{item.name}</h5>
                </div>
              </div>
            ))
          }


        </div>
      </Section>


      <Section className='grid md:grid-cols-7 grid-cols-1 gap-5 my-20'>
        <div className='md:col-span-2 col-span-1'>
            <Section_Header title='What Our Learners Say'
             sub_content='People love India One Pay, so do you. Because this is the All-in-one solution for any Online studying, eLearning center.'  />
        </div>

        <div className='md:col-span-5 col-span-1'>
          <SwiperSliderSlice slides={testimonialElements} slidesPerView={3} pagination={true} infinitescroll={true} />
        </div>
      </Section>

    </>
  )
}

export default Page