"use client"
import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, MailOpen } from 'lucide-react';
import Breadcrumb from '@/components/breadcrumb';
import Section from '@/components/section';
import Button from '@/components/button';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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

      <Section className='my-10'>
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We're always eager to hear from you!
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Start a new case. Just send us your questions or concerns by starting a new case and we will give you the help you need. Start Here
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Address Card */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <MapPin className="w-6 h-6 text-blue-600"  strokeWidth={1.5}/>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Address</h3>
            <div className="text-gray-600 space-y-1">
              <p>India</p>
            </div>
          </div>

          {/* Contact Card */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <Phone className="w-6 h-6 text-blue-600"  strokeWidth={1.5}/>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact</h3>
            <div className="text-gray-600 space-y-1">
              <p>Mobile: <span className="font-medium">8050094724</span></p>
            </div>
          </div>

          {/* Hours Card */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <MailOpen className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Email</h3>
            <div className="text-gray-600 space-y-1">
              <p>supporters@indiapayone.in</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="h-96 bg-gray-200 relative">
              {/* Embedded Google Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15283573.947292788!2d72.11463324968496!3d20.736956429954336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1752897005898!5m2!1sen!2sin"
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

              <div>
                <input
                  type="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-gray-900 placeholder-gray-500"
                  required
                />
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
              <div className="flex justify-center">
                <Button type='submit' className='bg-secondary px-9 py-2.5'>Submit</Button>

              </div>
            </form>
          </div>
        </div>
      </Section>

    </>
  );
};

export default ContactPage;