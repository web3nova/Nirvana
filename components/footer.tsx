// app/components/footer.tsx or components/footer.tsx
import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full">
      {/* Newsletter Section */}
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <h2 className="text-2xl font-semibold mb-2 tracking-tight">Join our Newsletter</h2>
        <p className="text-gray-400 text-sm mb-6">Stay in the loop with updates, launches, and best secrets.</p>
        
        <form className="flex items-center gap-2 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 bg-zinc-900 border border-zinc-800 rounded-full px-5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-zinc-700 transition-colors"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors"
          >
            Subscribe
          </button>
        </form>
        
        <p className="text-gray-600 text-xs mt-3">
          Join 12,000+ subscribers. No spam, unsubscribe anytime.
        </p>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-1">
              <Image 
                src="/image 5.png" 
                alt="Nirvana Academy" 
                width={43} 
                height={43} 
                className="w-[26px] h-[26px]"
              />
              <span className="text-sm font-medium text-gray-300">Nirvana Academy</span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
              Join the world&apos;s most ambitious tech hub with accelerators and labs.
            </p>
            <div className="flex items-center gap-2 pt-2">
              {/* Instagram - Square with rounded corners */}
              <a 
                href="#" 
                className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-700 transition-colors"
              >
                <Instagram size={16} className="text-white" strokeWidth={1.5} />
              </a>
              
              {/* X (Twitter) - Square with rounded corners */}
              <a 
                href="#" 
                className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-700 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              {/* LinkedIn - Square with rounded corners */}
              <a 
                href="#" 
                className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-700 transition-colors"
              >
                <Linkedin size={16} className="text-white" strokeWidth={1.5} />
              </a>
              
              {/* Facebook - Square with rounded corners */}
              <a 
                href="#" 
                className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-700 transition-colors"
              >
                <Facebook size={16} className="text-white" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">About</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Courses</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Labs</a></li>
            </ul>
          </div>

          {/* Our Offering */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Our Offering</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Open Source</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">MicroLearnings</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">NFT Drops</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Incubator/Hub</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Startup Studio</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-2.5">
              <li className="text-gray-500 text-sm">
                <span className="text-gray-600">Twitter: </span>
                <a href="#" className="hover:text-white transition-colors">@nirvana</a>
              </li>
              <li className="text-gray-500 text-sm">
                <span className="text-gray-600">Email: </span>
                <a href="#" className="hover:text-white transition-colors">nirvana@nirvana.com</a>
              </li>
              <li className="text-gray-500 text-sm">
                <span className="text-gray-600">Discord: </span>
                <a href="#" className="hover:text-white transition-colors">nirvana.com</a>
              </li>
              <li className="text-gray-500 text-sm">
                <span className="text-gray-600">Mail Room: </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Large Text - Centered */}
      <div className="border-t border-zinc-900 px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white">
            Nirvana Academy
          </h1>
          <p className="text-gray-600 text-xs mt-4 tracking-wide">
            © 2025 — COPYRIGHT NIRVANA ACADEMY
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;