import React from 'react';
import markImg from '../public/headline-curve.svg'
import Image from 'next/image';

interface Props {
title:string;
sub_content:string;
}
const Section_Header:React.FC<Props> = ({title, sub_content}) => {
    return (
        <>
            <div className='flex flex-col gap-3 justify-center items-center'>
                <div className='relative'>
                     <h3 className='font-[600] md:text-[50px] text-[20px] header-mark leading-14'>{title}</h3>
                    <Image src={markImg} alt='header-line' className='absolute md:bottom-[-3px] bottom-[-10px] left-8'/>
                </div>
                <p className='text-slate-500 md:text-[18px] text-[13px] text-start'>{sub_content}</p>
            </div>
        </>
    )
}

export default Section_Header