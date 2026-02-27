"use client";

import { useState, useEffect, useRef } from "react";


function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

export default function Courses() {
  const topRef  = useInView(0.1);
  const cardRef = useInView(0.1);

  return (
    <>
      {/* Add to layout.tsx <head> in production */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=DM+Sans:wght@300;400;500;600&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes titleReveal {
          from { opacity: 0; transform: translateY(28px) rotate(-1deg); }
          to   { opacity: 1; transform: translateY(0) rotate(0deg); }
        }
        @keyframes cardUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes leftIn {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes rightIn {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes checkPop {
          from { opacity: 0; transform: scale(0.5); }
          to   { opacity: 1; transform: scale(1); }
        }

        .anim-fade-up   { animation: fadeUp 0.55s cubic-bezier(0.22,0.68,0,1.1) both; }
        .anim-fade-in   { animation: fadeIn 0.45s ease both; }
        .anim-title     { animation: titleReveal 0.7s cubic-bezier(0.22,0.68,0,1.1) both; }
        .anim-card      { animation: cardUp 0.65s cubic-bezier(0.22,0.68,0,1.05) both; }
        .anim-left      { animation: leftIn 0.6s cubic-bezier(0.22,0.68,0,1.05) both; }
        .anim-right     { animation: rightIn 0.6s cubic-bezier(0.22,0.68,0,1.05) both; }
        .anim-check     { animation: checkPop 0.3s cubic-bezier(0.34,1.56,0.64,1) both; }

        .enroll-btn {
          transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
        }
        .enroll-btn:hover {
          background: #dddbd5 !important;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
        }
        .enroll-btn:active { transform: translateY(0); }
      `}</style>

      <section
        className="w-full min-h-screen bg-[#f7f7f5] flex flex-col items-center px-4 sm:px-6 pt-10 pb-16"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >

        {/* ── Top block ── */}
        <div ref={topRef.ref} className="flex flex-col items-center w-full max-w-[760px]">

          {/* "Latest Course" — plain blue underlined text link */}
          <a
            href="#"
            className={`text-[12px] text-indigo-500 underline underline-offset-2 mb-3 ${topRef.visible ? "anim-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0ms" }}
          >
            Latest Course
          </a>

          {/* Subtitle — 2 lines, centered, small gray */}
          <p
            className={`text-[13px] text-[#888884] text-center leading-snug mb-5 ${topRef.visible ? "anim-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "60ms" }}
          >
            Our battle-tested course turns novices into DeFi<br />
            warriors. Learn the game, win the trades.
          </p>

          {/* Koinophobia title — Nanum Pen Script */}
          <h1
            className={`text-center leading-none mb-8 text-[#1a1916] ${topRef.visible ? "anim-title" : "opacity-0"}`}
            style={{
              fontFamily: "'Nanum Pen Script', cursive",
              fontSize: "clamp(42px, 7vw, 58px)",
              fontWeight: 400,
              animationDelay: "130ms",
            }}
          >
            Koinophobia
          </h1>
        </div>

        {/* ── Course Card ── */}
        <div
          ref={cardRef.ref}
          className={`w-full max-w-[760px] bg-white rounded-xl shadow-[0_2px_24px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col sm:flex-row ${cardRef.visible ? "anim-card" : "opacity-0"}`}
          style={{ animationDelay: "80ms" }}
        >

          {/* ── Left: black panel ── */}
          <div
            className={`relative bg-black flex flex-col justify-between p-5 sm:w-[38%] min-h-[280px] sm:min-h-[340px] shrink-0 ${cardRef.visible ? "anim-left" : "opacity-0"}`}
            style={{ animationDelay: "180ms" }}
          >
            {/* Coming Soon pill — centered at top */}
            <div className="flex justify-center pt-1">
              <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1 text-[11px] text-white/80 font-medium tracking-wide">
                Coming soon
              </span>
            </div>

            {/* Bottom caption */}
            <p className="text-[11px] sm:text-[12px] text-white/55 leading-relaxed font-light">
              Master crypto trading with our flagship<br />
              course — your ticket to life-changing wins.
            </p>
          </div>

          {/* ── Right: content panel ── */}
          <div
            className={`flex flex-col p-5 sm:p-6 flex-1 gap-4 ${cardRef.visible ? "anim-right" : "opacity-0"}`}
            style={{ animationDelay: "220ms" }}
          >

            {/* Stats row — 4 columns */}
            <div className="grid grid-cols-4 gap-2">
              {[
                {
                  label: "12 Weeks\nIntensive",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  ),
                },
                {
                  label: "Cohort-Based\nLearning",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  ),
                },
                {
                  label: "Hands-on\nProjects",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                    </svg>
                  ),
                },
                {
                  label: "Certificate of\nCompletion",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="6"/>
                      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                    </svg>
                  ),
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center gap-1.5 text-center ${cardRef.visible ? "anim-fade-up" : "opacity-0"}`}
                  style={{ animationDelay: `${260 + i * 50}ms` }}
                >
                  {stat.icon}
                  <span className="text-[10px] text-[#888884] leading-tight whitespace-pre-line">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#ebebea]" />

            {/* What You'll Learn */}
            <div>
              <p
                className={`text-[13.5px] font-semibold text-[#1a1916] mb-2 ${cardRef.visible ? "anim-fade-up" : "opacity-0"}`}
                style={{ animationDelay: "360ms" }}
              >
                What You'll Learn
              </p>
              <ul className="flex flex-col gap-1">
                {[
                  "Build and deploy smart contracts on Ethereum",
                  "Create decentralized applications (dApps)",
                  "Understand DeFi protocols and tokenomics",
                  "Master Web3 security best practices",
                ].map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2 text-[12px] text-[#4a4845] leading-relaxed ${cardRef.visible ? "anim-fade-up" : "opacity-0"}`}
                    style={{ animationDelay: `${400 + i * 45}ms` }}
                  >
                    <span
                      className={`text-[#555] mt-0.5 shrink-0 text-[11px] ${cardRef.visible ? "anim-check" : "opacity-0"}`}
                      style={{ animationDelay: `${415 + i * 45}ms` }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Enroll Button */}
            <div
              className={`mt-auto pt-1 ${cardRef.visible ? "anim-fade-up" : "opacity-0"}`}
              style={{ animationDelay: "580ms" }}
            >
              <button className="enroll-btn w-full flex items-center justify-between bg-[#e8e8e6] rounded-full px-5 py-2 cursor-pointer">
                <span className="text-[14px] font-medium text-[#1a1916] pl-1">Enroll now</span>
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#6c5ce7] to-[#a29bfe] flex items-center justify-center text-white text-[14px] font-semibold shrink-0">
                  O
                </div>
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}