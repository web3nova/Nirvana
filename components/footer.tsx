"use client";

import Image from "next/image";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-white">
      <footer
        className="footer-animate px-6 sm:px-10 bg-black lg:px-16 pt-12 pb-0 m-2"
        style={{ borderTopLeftRadius: "64px", borderTopRightRadius: "64px" }}
      >
        <style>{`
        @keyframes footerFadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .footer-animate {
          animation: footerFadeIn 0.6s ease forwards;
        }
      `}</style>
        {/* Section 1 — Newsletter */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-white text-2xl font-semibold mb-1">Join our Newsletter</h2>
          <p className="text-gray-400 text-sm mb-5">
            Stay in the loop with airdrops, launches, and DeFi secrets.
          </p>
          <div className="flex items-center w-full max-w-md bg-zinc-800 rounded-full px-2 py-1.5">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-transparent text-sm text-gray-300 placeholder-gray-500 outline-none px-3 min-w-0"
            />
            <button className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-medium rounded-full px-5 py-1.5 transition-all duration-200 ease-in-out shrink-0">
              Subscribe
            </button>
          </div>
          <p className="text-gray-600 text-xs mt-3">
            Join 5,000+ subscribers. Unsubscribe anytime.
          </p>
        </div>

        {/* Section 2 — Four Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 — Logo + Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image
                src="/image 5.png"
                alt="Nirvana Academy Logo"
                width={28}
                height={28}
                className="object-contain"
              />
              <span className="text-white font-medium text-sm">Nirvana Academy</span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">
              Join the family and receive resources for real-time updates and more.
            </p>
            <div className="flex items-center gap-3 text-gray-400">
              <Instagram size={16} className="cursor-pointer hover:text-white hover:scale-110 transition-all duration-200 ease-in-out" />
              <Twitter size={16} className="cursor-pointer hover:text-white hover:scale-110 transition-all duration-200 ease-in-out" />
              <Linkedin size={16} className="cursor-pointer hover:text-white hover:scale-110 transition-all duration-200 ease-in-out" />
              <Facebook size={16} className="cursor-pointer hover:text-white hover:scale-110 transition-all duration-200 ease-in-out" />
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              {["Home", "About", "Courses", "Launches", "Team"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors duration-200 ease-in-out">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Our Offerings */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Our Offerings</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              {["DeFi Education", "Token Launches", "NFT Drops", "Airdrop Farming", "Trading Tools"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors duration-200 ease-in-out">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact Us */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Contact Us</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li>Discord: @nirvanaacademy</li>
              <li>Email: support@nirvana.academy</li>
              <li>Decentralized HQ, Blockchain City</li>
            </ul>
          </div>
        </div>

        {/* Section 3 — Large Brand Text */}
        <div className="border-t border-zinc-800 pt-4">
          <h1
            className="text-white font-bold leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 8rem)" }}
          >
            Nirvana Academy
          </h1>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center py-3">
          <p className="text-gray-600 text-xs tracking-widest uppercase">
            © 2025 — COPYRIGHT NIRVANA. PRIVACY
          </p>
        </div>
      </footer>
    </div>
  );
}