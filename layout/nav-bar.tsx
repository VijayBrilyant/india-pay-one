"use client"

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Nav_Bar = () => {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)
    // console.log('pathname', pathname)

    const [toggleState, setToggleState] = useState<'open' | 'close'>('close');

    useEffect(() => {
        const handleScroll = () => {
            console.log('scroll position:', window.scrollY)
            setIsScrolled(window.scrollY > 500)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const nav_menus = [
        { id: 1, title: 'Home', link: '/' },
        { id: 2, title: 'About us', link: '/about' },
        { id: 3, title: 'Service', link: '/service' },
        { id: 4, title: 'Contact us', link: '/contact-us' }
    ]

    return (
        <>
            <div
                className={`fixed flex items-center justify-between  top-0 left-0 w-full z-[1111] transition-all duration-300 ${isScrolled ? 'bg-white text-black shadow-md md:px-36 px-7' : 'bg-transparent text-white md:px-10 px-7'
                    }`}
            >
                <div className='logo py-3'>
                    <h1 className='text-[18px]'>India One Pay.</h1>
                </div>

                <div className='md:flex hidden gap-12  py-5'>
                    {nav_menus?.map((nav, index) => (
                        <div key={index}><Link href={nav.link} className={`${pathname === nav.link ? 'text-secondary' : ''}`}>{nav.title}</Link></div>
                    ))}
                </div>

                <div className='md:hidden' onClick={()=> setToggleState((prev) => prev === 'open' ? 'close' : 'open')}>
                    <Menu strokeWidth={1.75} />
                </div>

            </div>


            <div className={`md:hidden flex flex-col gap-5 fixed top-0 right-0 h-[100vh] overflow-hidden  z-[1111] ${toggleState === 'open' ? 'min-w-[100%]' : 'min-w-[0%]' }`}>
                <div className='bg-black/45 w-full h-full ' />

                <div className={`bg-white absolute top-0 right-0 h-full  p-7 min-w-[80%]`}>
                  <div className='flex flex-col gap-8 mt-10'>
                    {nav_menus?.map((nav, index) => (
                        <div key={index}><Link href={nav.link} className={`${pathname === nav.link ? 'text-secondary' : ''}`}>{nav.title}</Link></div>
                    ))}
                  </div>
                    

                    <div className='absolute top-2 right-2' onClick={()=> setToggleState((prev) => prev === 'open' ? 'close' : 'open')}>
                        <X strokeWidth={1.75} size={50} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Nav_Bar
