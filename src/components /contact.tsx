import React from 'react';
import Lottie from "lottie-react";
import animationData from "../assets/paperplane-animation.json";

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <span className="text-4xl">📧</span>
            CONTACT
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out! I'm always open to discussing new opportunities and collaborations.
          </p>
        </div>

        {/* Main Layout Container */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Get in Touch + Animation */}
          <div className="w-full lg:w-1/2 space-y-8">
            {/* Get in Touch Section */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <p className="text-white font-semibold">meharsin@uguelph.ca</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📱</span>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <p className="text-white font-semibold">905-782-7319</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Animation Section - Directly below Get in Touch */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-64 h-64">
                <Lottie animationData={animationData}/>
              </div>
            </div>
          </div>

          {/* Right Side - Send Message Section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 text-sm mb-2" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                    id="message"
                    placeholder="What would you like to discuss?"
                    rows={4}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
