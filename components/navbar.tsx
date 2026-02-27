"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = {
  left: [
    { label: "Home", href: "/" },
    { label: "Articles", href: "/articles" },
    { label: "Course", href: "/course" },
  ],
  right: [
    { label: "Events", href: "/events" },
    { label: "Team", href: "/team" },
  ],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
        .nav-link-hover {
          position: relative;
        }
        .nav-link-hover::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1.5px;
          background: #fff;
          transition: width 0.25s ease;
        }
        .nav-link-hover:hover::after { width: 100%; }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mobile-menu-enter { animation: fadeDown 0.25s ease forwards; }
      `}</style>

      <header
        className={`jakarta fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#111214]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            : "bg-[#111214]/70 backdrop-blur-md border-b border-white/[0.04]"
        }`}
      >
        <nav className="max-w-[1280px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between gap-6">

          {/* ── LEFT NAV LINKS (desktop) ── */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.left.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="nav-link-hover text-white/80 hover:text-white transition-colors duration-200 text-[15px] font-medium leading-none tracking-[-0.02em]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── LOGO (center) ── */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 mx-auto md:mx-0 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
          >
            {/* SVG Logo Icon – geometric hexagon pattern matching the screenshot */}
            <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center bg-white/5">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 2L19.5 7V15L11 20L2.5 15V7L11 2Z" stroke="white" strokeWidth="1.4" fill="none"/>
                <path d="M11 6L16 9V14L11 17L6 14V9L11 6Z" stroke="white" strokeWidth="1.2" fill="none"/>
                <path d="M11 9.5L13.5 11V13.5L11 15L8.5 13.5V11L11 9.5Z" fill="white" opacity="0.8"/>
              </svg>
            </div>
            <span className="text-white font-semibold text-[15px] leading-[1.2] tracking-[-0.02em]">
              Nirvana<br />
              <span className="font-medium text-white/80">Academy</span>
            </span>
          </Link>

          {/* ── RIGHT NAV LINKS + CTA (desktop) ── */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8 list-none">
              {navLinks.right.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="nav-link-hover text-white/80 hover:text-white transition-colors duration-200 text-[15px] font-medium leading-none tracking-[-0.02em]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/join"
              className="bg-[#2563EB] hover:bg-[#1d4ed8] active:scale-95 transition-all duration-200 text-white text-[15px] font-semibold leading-none tracking-[-0.02em] px-5 py-[10px] rounded-full shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_28px_rgba(37,99,235,0.5)]"
            >
              Join Nirvana
            </Link>
          </div>

          {/* ── HAMBURGER (mobile) ── */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden ml-auto flex flex-col justify-center items-center w-9 h-9 gap-[5px] z-50"
          >
            <span
              className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 ${
                menuOpen ? "w-5 rotate-45 translate-y-[6.5px]" : "w-5"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 ${
                menuOpen ? "w-0 opacity-0" : "w-4"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 ${
                menuOpen ? "w-5 -rotate-45 -translate-y-[6.5px]" : "w-5"
              }`}
            />
          </button>
        </nav>

        {/* ── MOBILE MENU ── */}
        {menuOpen && (
          <div className="mobile-menu-enter md:hidden bg-[#111214]/98 backdrop-blur-xl border-t border-white/[0.06] px-6 pt-6 pb-8 flex flex-col gap-5">
            {[...navLinks.left, ...navLinks.right].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-white text-[17px] font-medium tracking-[-0.02em] py-1 border-b border-white/[0.06] transition-colors"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/join"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-[16px] font-semibold leading-none tracking-[-0.02em] px-5 py-[14px] rounded-full text-center shadow-[0_0_20px_rgba(37,99,235,0.35)]"
            >
              Join Nirvana
            </Link>
          </div>
        )}
      </header>
    </>
  );
}