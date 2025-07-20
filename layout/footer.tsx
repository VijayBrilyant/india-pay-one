import React from 'react';
import { Shield, Twitter, Facebook, MessageCircle, Youtube, Linkedin, Heart, ArrowUp } from 'lucide-react';
import { getBusinessSolutions } from '@/components/services';
import { ServiceIntg } from '@/types/globel';
import Link from 'next/link';

const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-gray-900"><span className='text-primary'>India</span> One Pay.</span>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div>
                <p className="text-gray-600 text-sm mb-1">Call us</p>
                <Link href="tel:8050094724" className="text-blue-600 font-semibold text-lg hover:text-blue-700">
                  8050094724
                </Link>
              </div>
              
              <div className="text-gray-600 text-sm">
                <p>India</p>
              </div>
              
              <div>
                <a href="mailto:supporters@indiapayone.in" className="text-gray-600 text-sm hover:text-gray-900">
                  supporters@indiapayone.in
                </a>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <Link href="#" className="text-blue-400 hover:text-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-red-600 hover:text-red-700 transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-blue-700 hover:text-blue-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
    
          
          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  About Us
                </Link>
              </li>

               <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/contact-us" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-3">
             {getBusinessSolutions().map((service:ServiceIntg, index:number) => (
                <li key={index}>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left side - Legal Links */}
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Terms of Use
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Privacy Policy
              </Link>
            </div>
            
            {/* Right side - Copyright */}
            <div className="flex items-center text-sm text-gray-600">
              <span>© 2025 India One Pay,  Made by unicuscore</span> 
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;