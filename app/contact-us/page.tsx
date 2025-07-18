"use client"
import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import Breadcrumb from '@/components/breadcrumb';
import Section from '@/components/section';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <>
      <Breadcrumb
        name="Contact Us"
        items={[{ label: "Home", href: "/" }, { label: "Service" }]}
      />

      <Section className='mt-10'>
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We're always eager to hear from you!
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse suscipit ipsum dolor sit
            amet ipsum consectetur tincidunt. Ut consectetur tincidunt elit.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Address Card */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Address</h3>
            <div className="text-gray-600 space-y-1">
              <p>1800 Abbot Kinney Blvd. Unit</p>
              <p>D & E Venice</p>
            </div>
          </div>

          {/* Contact Card */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <Phone className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact</h3>
            <div className="text-gray-600 space-y-1">
              <p>Mobile: <span className="font-medium">(+88) - 1990 - 6886</span></p>
              <p>Hotline: <span className="font-medium">1800 - 1102</span></p>
              <p>Mail: <span className="font-medium">contact@edumail.com</span></p>
            </div>
          </div>

          {/* Hours Card */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Hour of operation</h3>
            <div className="text-gray-600 space-y-1">
              <p>Monday - Friday: 09:00 - 20:00</p>
              <p>Sunday & Saturday: 10:30 - 22:00</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="h-96 bg-gray-200 relative">
              {/* Embedded Google Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733248043701!2d-118.4685884846818!3d34.0522265806193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4cec2910019%3A0x4f4b7d7b1b1b1b1b!2s1800%20Abbot%20Kinney%20Blvd%2C%20Venice%2C%20CA%2090291%2C%20USA!5e0!3m2!1sen!2sus!4v1635959999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>

             
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fill the form below so we can get to know you and your needs better.
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-gray-900 placeholder-gray-500 resize-vertical"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-12 py-4 rounded-lg transition-colors duration-200 text-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>

    </>
  );
};

export default ContactPage;