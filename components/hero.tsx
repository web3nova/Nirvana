"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .hero-fade-1, .hero-fade-2,
        .hero-fade-3, .hero-fade-4,
        .hero-fade-bg { opacity: 0; }

        .loaded .hero-fade-bg { animation: fadeIn 1.2s ease 0.1s forwards; }
        .loaded .hero-fade-1  { animation: fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) 0.20s forwards; }
        .loaded .hero-fade-2  { animation: fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) 0.38s forwards; }
        .loaded .hero-fade-3  { animation: fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) 0.52s forwards; }
        .loaded .hero-fade-4  { animation: fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) 0.66s forwards; }

        .future-pill {
          display: inline-flex;
          align-items: center;
          background: #ffffff;
          color: #111214;
          border-radius: 999px;
          padding: 6px 18px;
          font-style: italic;
          font-weight: 700;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: default;
          white-space: nowrap;
        }
        .future-pill:hover {
          transform: rotate(-2deg) scale(1.04);
          box-shadow: 0 8px 28px rgba(0,0,0,0.35);
        }

        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 18px rgba(37,99,235,0.4); }
          50%       { box-shadow: 0 0 32px rgba(37,99,235,0.7); }
        }
        .cta-btn {
          animation: glowPulse 2.8s ease-in-out infinite;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .cta-btn:hover  { background: #1d4ed8 !important; transform: translateY(-2px) scale(1.02); }
        .cta-btn:active { transform: scale(0.97); }

        .hero-overlay {
          background: linear-gradient(
            105deg,
            rgba(10,10,12,0.82) 0%,
            rgba(10,10,12,0.55) 45%,
            rgba(10,10,12,0.18) 100%
          );
        }
        .hero-vignette {
          background: linear-gradient(to top, #111214 0%, transparent 30%);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-6px); }
        }
        .stat-badge              { animation: float 4s ease-in-out infinite; }
        .stat-badge:nth-child(2) { animation-delay: 1.4s; }
      `}</style>

      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className={`relative min-h-screen overflow-hidden bg-[#111214] flex flex-col ${loaded ? "loaded" : ""}`}
        style={{
          /* ── EDGE-TO-EDGE FIX ──
             Pulls the section out of any parent padding/margin
             so it always bleeds to the true viewport edges        */
          width: "100vw",
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
        }}
      >
        {/* ── Background image ── */}
        <div
          className="hero-fade-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/background.jpg')`,
            transform: `scale(1.04) translate(${mousePos.x * -12}px, ${mousePos.y * -8}px)`,
            filter: "grayscale(100%) brightness(0.5)",
            transition: "transform 0.075s linear",
          }}
        />

        {/* Dark gradient overlay */}
        <div className="hero-overlay absolute inset-0" />

        {/* Bottom vignette */}
        <div className="hero-vignette absolute bottom-0 left-0 right-0 h-48 pointer-events-none" />

        {/* ── MAIN CONTENT ── */}
        <div className="relative z-10 flex-1 flex flex-col justify-end pb-20 md:pb-28 px-6 sm:px-10 md:px-16 lg:px-24 max-w-[900px]">

          {/* Badge */}
          <div className="hero-fade-1 mb-5">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur-sm text-white/80 text-[13px] font-medium tracking-[-0.01em] rounded-full px-4 py-[6px]">
              <span
                className="w-[6px] h-[6px] rounded-full bg-[#2563EB] shrink-0"
                style={{ boxShadow: "0 0 6px #2563EB" }}
              />
              DeFi Education Platform
            </span>
          </div>

          {/* Heading */}
          <h1 className="hero-fade-2 text-white font-extrabold tracking-[-0.03em] leading-[1.05] mb-4">
            <span className="block text-[clamp(42px,7vw,88px)]">Master DeFi,</span>
            <span className="flex flex-wrap items-center gap-3 text-[clamp(42px,7vw,88px)]">
              Launch your
              <span className="future-pill text-[clamp(32px,5vw,72px)]">Future</span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="hero-fade-3 text-white/60 text-[15px] md:text-[17px] font-medium leading-none tracking-[-0.02em] mb-8 max-w-[420px]">
            To know is to be free: This is the way of Nirvana.
          </p>

          {/* CTA Buttons */}
          <div className="hero-fade-4 flex flex-wrap items-center gap-4">
            <Link
              href="/get-started"
              className="cta-btn bg-[#2563EB] text-white text-[15px] font-semibold leading-none tracking-[-0.02em] px-7 py-[14px] rounded-full"
            >
              Get Started
            </Link>
            <Link
              href="/course"
              className="group flex items-center gap-2 text-white/70 hover:text-white text-[15px] font-medium leading-none tracking-[-0.02em] transition-colors duration-200"
            >
              Explore Courses
              <svg
                width="16" height="16" viewBox="0 0 16 16" fill="none"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── Floating stats (desktop) ── */}
        <div className="hidden md:flex absolute bottom-10 right-10 lg:right-20 z-10 gap-3">
          {[
            { value: "5K+",  label: "Students" },
            { value: "48+",  label: "Courses"  },
            { value: "100%", label: "Free"     },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="stat-badge bg-[#1a1b1e]/80 backdrop-blur-md border border-white/[0.08] rounded-2xl px-5 py-4 text-center min-w-[110px]"
            >
              <p className="text-white font-extrabold text-[26px] leading-none tracking-[-0.04em]">{value}</p>
              <p className="text-white/50 text-[12px] font-medium mt-1 tracking-[-0.01em]">{label}</p>
            </div>
          ))}
        </div>

        {/* ── Scroll indicator ── */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
          <span className="text-white/50 text-[11px] font-medium tracking-[0.12em] uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>
    </>
  );
}