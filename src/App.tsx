import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
  
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#F3F4F6] flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        {/* Name */}
        <h1 className="text-2xl font-bold tracking-[0.1em] bg-gradient-to-r from-[#E0F2FE] via-[#93C5FD] to-[#3B82F6] bg-clip-text text-transparent drop-shadow-lg">
          MSS
        </h1>
        
        {/* Navigation Menu */}
        <div className="flex items-center space-x-8">
          <a href="#home" className="text-[#F3F4F6] hover:text-[#3B82F6] transition-colors duration-300 font-medium">
            HOME
          </a>
          <a href="#skills" className="text-[#F3F4F6] hover:text-[#3B82F6] transition-colors duration-300 font-medium">
            SKILLS
          </a>
          <a href="#experience" className="text-[#F3F4F6] hover:text-[#3B82F6] transition-colors duration-300 font-medium">
            EXPERIENCE
          </a>
          <a href="#projects" className="text-[#F3F4F6] hover:text-[#3B82F6] transition-colors duration-300 font-medium">
            PROJECTS
          </a>
          <button className="px-6 py-3 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] transition-colors duration-300 font-semibold text-[#0D0D0D] flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>LET'S TALK</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative flex flex-col items-center justify-center flex-1 px-6 text-center overflow-hidden">
        {/* Particles Background */}
        <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none">
          <Particles
            id="tsparticles"
            options={{
              fpsLimit: 60,
              fullScreen: true,
              particles: {
                number: { value: 60, density: { enable: true, area: 800 } },
                color: { value: ['#3B82F6', '#60A5FA', '#93C5FD'] },
                links: { enable: true, color: '#1E3A8A', distance: 120, opacity: 0.3, width: 1 },
                move: { enable: true, speed: 0.6, outModes: { default: 'out' } },
                opacity: { value: 0.5 },
                size: { value: { min: 1, max: 3 } },
              },
              interactivity: {
                events: { onHover: { enable: false }, onClick: { enable: false }, resize: true },
              },
              detectRetina: true,
            }}
          />
        </div>
        {/* Profile Image Placeholder */}
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#1E40AF] flex items-center justify-center mb-8 shadow-2xl">
          <span className="text-white text-4xl font-bold">MS</span>
        </div>
        
        {/* Main Heading */}
        <h2 className="text-5xl font-extrabold mb-4">
          <span className="text-white">I AM</span>
          <br />
          <span className="bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] bg-clip-text text-transparent">MEHAR SINGH SANDHU</span>
          
        </h2>
        
        <p className="mt-4 text-lg text-[#9CA3AF] max-w-xl">
        A software engineering student building intelligent, full-stack applications. I specialize in leveraging AI to create practical and efficient solutions for real-world problems.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] transition font-semibold">
            Explore Projects
          </button>
          <button className="px-6 py-3 rounded-xl border border-[#3B82F6] text-[#3B82F6] hover:bg-[#1E293B] transition font-semibold">
            Contact Me
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-[#9CA3AF] border-t border-gray-800">
        © 2025 Mehar Singh — All Rights Reserved
      </footer>
    </div>
  );
}
