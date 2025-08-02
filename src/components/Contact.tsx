import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Contact Us"
          subtitle="Get in touch for a consultation or inquiry"
        />

        <div className="max-w-6xl mx-auto bg-gray-50 rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Contact Information */}
            <div className="md:w-1/3 bg-[#1e3d8f] text-white p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="mt-1">+91 9899499399</p>
                    <p className="mt-1">+91 9999099037</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="mt-1">nishchint@emproisys.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="mt-1">
                    616, Sector 16<br />
                    Faridabad, Haryana, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-2/3 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>

              <form
                action="https://formsubmit.co/nishchint@emproisys.com"
                method="POST"
              >
                {/* Optional hidden fields */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://emproisys.com/thank-you" />
                <input type="hidden" name="_subject" value="New Business Inquiry from Emproisys Website" />

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1e3d8f] focus:border-[#1e3d8f] outline-none transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1e3d8f] focus:border-[#1e3d8f] outline-none transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1e3d8f] focus:border-[#1e3d8f] outline-none transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1e3d8f] focus:border-[#1e3d8f] outline-none transition"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1e3d8f] focus:border-[#1e3d8f] outline-none transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center bg-gradient-to-r from-[#ff7843] to-[#ffb143] text-white px-6 py-3 rounded-md font-medium transition-transform duration-300 hover:scale-105"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
