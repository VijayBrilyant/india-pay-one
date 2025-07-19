'use client'
import React from 'react'
import SwiperSliderSlice from './swiper-slider-slice'
import { useRouter } from 'next/navigation'
import { BannerProp } from '@/types/globel';
import banner1 from '../public/assets/banner/banner1.jpeg';
import banner3 from '../public/assets/banner/banner3.jpg';
import banner4 from '../public/assets/banner/banner4.jpg';
import Image from 'next/image';
import Button from './button';
import { MoveRight } from 'lucide-react';
const Banner = () => {
    const navigate = useRouter();

    const bannerContent: BannerProp[] = [
        {
            id: 1,
            header: 'Welcome to INDIA ONE PAY Payment service!',
            subcontent: (<> Grow your <span className="text-primary">business</span> in a new way</>),
            bannerImg: { image: banner1, alt: 'banner 1' },
            action: () => navigate.push('/contact-us')
        },
        {
            id: 2,
            header: 'Visit our outlet to Experience the hassle free service',
            subcontent: (<>Money transfer to any  <span className="text-primary">bank account</span> </>),
            bannerImg: { image: banner3, alt: 'banner 2' },
            action: () => navigate.push('/contact-us')
        },
        {
            id: 3,
            header: 'We provide Banking & Recharge services',
            subcontent: (<>All type of <span className="text-primary">recharge</span> available</>),
            bannerImg: { image: banner4, alt: 'banner 1' },
            action: () => navigate.push('/contact-us')
        }
    ]

    const bannerElements = bannerContent ? bannerContent.map((banner, index) => (
        <div className='md:h-[95vh] h-[50vh] w-full relative' key={index}>
            <div className='z-10 h-max md:w-[70%] w-[95%] text-white absolute top-7/12  md:left-20 left-5 transform -translate-y-2/4'>
                <p className='mb-1 font-[500] fade-in' style={{ letterSpacing: '5px' }}>{banner.header}</p>
                <h2 className='md:text-[85px] text-[35px] md:leading-19  leading-9 font-[800]'>{banner.subcontent}</h2>

                <Button onClick={() => banner.action()} className='bg-primary pl-4 pr-2 py-1 mt-12 rounded-full relative flex justify-between items-center gap-x-7'>
                    Get Started
                    <div className='h-8 w-8 rounded-full bg-white flex justify-center items-center'>
                        <MoveRight strokeWidth={1.75} size={18} className='text-black' />
                    </div>
                </Button>
            </div>

            <Image
                src={banner.bannerImg?.image}
                alt={banner.bannerImg?.alt || 'Home Banner'}
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />
            <div className='absolute top-0 left-0 h-full w-full bg-black opacity-60' />
        </div>
    )) : null;

    return <SwiperSliderSlice slides={bannerElements} slidesPerView={1} pagination={true} infinitescroll={true} forceSliderView={1} />;

}

export default Banner