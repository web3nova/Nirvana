"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const JAKARTA = "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)";

const paragraphs = [
  "You already know how this story begins.",
  "Not with glory. Not with fanfare. But with a restlessness — the kind that keeps you awake at night, whispering that you were never meant for average.",
  "Five years ago, I answered to that whisper. I walked away from the comfort of following, and instead chose the uncertainty of building. Nirvana Academy was born from that choice — a rebellion against complacency; a commitment to create a place where greatness was not the exception, but the norm.",
  "I started Nirvana because I was tired of seeing potential wasted. Tired of a culture that taught us to consume instead of build. I believed — and still believe — that crypto, Web3, and the future of technology deserve more than passive spectators. They deserve fearless architects. Today, that simple idea has grown into a global community of nearly 10,000 graduates strong — with countless success stories written by those who dared to bet on themselves. We've built projects, launched startups, forged careers, and most importantly, we've created a movement that dares one truth:",
  "You are the builder you've been waiting for.",
  "Nirvana Academy is not just an institution. It's a proving ground. A family. A revolution in how we learn, lead, and leave our mark. We've built projects, launched startups, forged careers, and most importantly, we created a movement that proves one truth:",
  "Nirvana Academy is not just an institution. It's a proving ground. A family. A revolution in how we learn, lead, and leave our mark.",
  "You are not here by accident.",
  "You are here because something inside you knows — you were made for more.",
];

const FLOATING_TICKER_ITEMS = Array(12).fill("NIRVANA ACADEMY");

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textCardRef = useRef<HTMLDivElement>(null);
  const photoCardRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const parasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.12 }
    );

    const targets = [
      textCardRef.current,
      photoCardRef.current,
      headingRef.current,
      parasRef.current,
    ].filter(Boolean);

    targets.forEach((el) => observer.observe(el!));
    return () => observer.disconnect();
  }, []);

  // Parallax watermark on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!watermarkRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = -rect.top * 0.18;
      watermarkRef.current.style.transform = `translateX(-50%) translateY(calc(-50% + ${progress}px))`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600&display=swap');

        /* ── Ticker animations ── */
        @keyframes scrollRight {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes floatBand {
          0%   { transform: rotate(1.03deg) translateY(0px); }
          50%  { transform: rotate(1.03deg) translateY(-5px); }
          100% { transform: rotate(1.03deg) translateY(0px); }
        }

        /* ── Entrance keyframes ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(48px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-56px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(56px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.6) rotate(-20deg); }
          to   { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes watermarkFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ── Scroll-reveal base state ── */
        .reveal-left  { opacity: 0; transform: translateX(-56px); transition: opacity 0.8s cubic-bezier(.22,1,.36,1), transform 0.8s cubic-bezier(.22,1,.36,1); }
        .reveal-right { opacity: 0; transform: translateX(56px);  transition: opacity 0.8s cubic-bezier(.22,1,.36,1), transform 0.8s cubic-bezier(.22,1,.36,1); }
        .reveal-up    { opacity: 0; transform: translateY(40px);   transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1); }

        .reveal-left.in-view,
        .reveal-right.in-view,
        .reveal-up.in-view {
          opacity: 1;
          transform: translate(0, 0);
        }

        /* Stagger the photo card slightly */
        .reveal-right { transition-delay: 0.15s; }

        /* ── Paragraph stagger ── */
        .about-para {
          font-weight: 400;
          font-size: 13px;
          line-height: 137%;
          color: #3d3d3d;
          margin: 0 0 7px 0;
          padding: 0;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .about-para:last-child { margin-bottom: 0; }
        .reveal-up.in-view .about-para { opacity: 1; transform: translateY(0); }
        ${Array.from({ length: 10 }, (_, i) => `.reveal-up.in-view .about-para:nth-child(${i + 1}) { transition-delay: ${0.05 * i}s; }`).join("\n")}

        /* ── Stamp pop-in ── */
        .about-stamp {
          position: absolute;
          display: block;
          width: 112px; height: 112px;
          bottom: -44px; right: -25px;
          left: auto; top: auto;
          z-index: 10;
          opacity: 0;
          transform: scale(0.5) rotate(-25deg);
          transition: opacity 0.6s cubic-bezier(.34,1.56,.64,1), transform 0.6s cubic-bezier(.34,1.56,.64,1);
          transition-delay: 0.9s;
        }
        .reveal-left.in-view .about-stamp {
          opacity: 1;
          transform: scale(1) rotate(0deg);
        }

        /* ── Watermark entrance ── */
        .about-watermark {
          position: absolute;
          top: 160px;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          font-weight: 600;
          font-size: 287px;
          line-height: 304px;
          letter-spacing: -0.04em;
          color: rgba(28, 28, 90, 0.07);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          z-index: 1;
          animation: watermarkFade 1.4s ease 0.3s both;
        }

        /* ── Heading ── */
        .about-h1 {
          font-weight: 600;
          font-size: 48px;
          line-height: 51px;
          letter-spacing: -0.04em;
          text-transform: capitalize;
          color: #111111;
          margin: 0 0 20px 0;
          padding: 0;
          flex-shrink: 0;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal-left.in-view .about-h1 {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.2s;
        }

        /* ── Ticker ── */
        .floating-ticker-outer {
          width: 110%; margin-left: -5%;
          background: #E0EDFF;
          padding: 10px 0; height: 71px;
          display: flex; align-items: center;
          overflow: hidden;
          transform: rotate(1.03deg);
          transform-origin: center center;
          animation: floatBand 4s ease-in-out infinite;
          box-sizing: border-box;
        }
        .floating-ticker-track {
          display: inline-flex; align-items: center;
          white-space: nowrap;
          animation: scrollRight 28s linear infinite;
          will-change: transform;
        }
        .floating-ticker-label {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600; font-size: 48px;
          line-height: 51px; letter-spacing: -0.04em;
          color: #75ACFF;
          display: inline-flex; align-items: center;
          padding: 0 10px; user-select: none; gap: 10px;
        }
        .floating-ticker-diamond {
          display: inline-block;
          width: 26px; height: 26px;
          background-color: #75ACFF;
          transform: rotate(45deg);
          border-radius: 2px; flex-shrink: 0; opacity: 0.85;
        }

        /* ── Layout ── */
        .about-wrapper {
          background-color: #ffffff;
          width: 100%; position: relative;
          padding-top: 160px; padding-bottom: 0;
          box-sizing: border-box;
          overflow-x: clip; overflow-y: visible;
        }
        .about-card-row {
          position: relative; z-index: 2;
          display: flex; flex-direction: row;
          align-items: flex-start; justify-content: center;
          gap: 16px; padding: 0 32px 80px;
          box-sizing: border-box;
        }
        .about-text-card {
          width: 644px; height: 832px;
          flex-shrink: 0; position: relative;
          border-radius: 12px; overflow: visible;
          box-shadow: 0 4px 32px rgba(0,0,0,0.10), 0 1px 6px rgba(0,0,0,0.06);
        }
        .about-text-card-bg {
          position: absolute; inset: 0;
          border-radius: 12px; overflow: hidden; z-index: 0;
        }
        .about-text-content {
          position: relative; z-index: 1;
          padding: 48px; height: 100%;
          box-sizing: border-box;
          display: flex; flex-direction: column; overflow: hidden;
        }
        .about-photo-card {
          width: 539px; height: 832px;
          flex-shrink: 0; position: relative;
          border-radius: 12px; overflow: hidden;
          box-shadow: 0 4px 32px rgba(0,0,0,0.10), 0 1px 6px rgba(0,0,0,0.06);
        }

        /* ── Responsive ── */
        @media (min-width: 1280px) {
          .about-card-row { padding: 0 48px 80px; gap: 20px; }
        }
        @media (max-width: 1023px) {
          .about-wrapper   { padding-top: 110px; }
          .about-watermark { top: 110px; font-size: 160px; line-height: 170px; }
          .about-card-row  { flex-direction: column; align-items: center; gap: 24px; padding: 0 24px 90px; }
          .about-text-card { width: 100%; max-width: 680px; height: auto; }
          .about-text-content { padding: 40px 40px 56px; height: auto; overflow: visible; }
          .about-h1   { font-size: 36px; line-height: 40px; }
          .about-para { font-size: 14px; margin-bottom: 8px; }
          .about-stamp { width: 96px; height: 96px; bottom: -36px; right: 20px; }
          .about-photo-card { width: 100%; max-width: 680px; height: 0; padding-bottom: 66%; }
          .floating-ticker-label { font-size: 36px; line-height: 40px; }
          .floating-ticker-outer { height: 60px; }
          .floating-ticker-diamond { width: 20px; height: 20px; }
          .reveal-left  { transform: translateX(0) translateY(40px); }
          .reveal-right { transform: translateX(0) translateY(40px); }
        }
        @media (max-width: 639px) {
          .about-wrapper   { padding-top: 90px; }
          .about-watermark { top: 90px; font-size: 100px; line-height: 110px; }
          .about-card-row  { flex-direction: column; align-items: stretch; gap: 16px; padding: 0 16px 48px; }
          .about-text-card { width: 100%; height: auto; border-radius: 10px; }
          .about-text-content { padding: 28px 24px 80px; height: auto; overflow: visible; }
          .about-h1   { font-size: 28px; line-height: 32px; margin-bottom: 14px; }
          .about-para { font-size: 13px; line-height: 140%; margin-bottom: 6px; }
          .about-stamp { width: 72px; height: 72px; bottom: 16px; right: 16px; }
          .about-photo-card { width: 100%; height: 0; padding-bottom: 90%; border-radius: 10px; }
          .floating-ticker-label { font-size: 28px; line-height: 34px; }
          .floating-ticker-outer { height: 54px; }
          .floating-ticker-diamond { width: 16px; height: 16px; }
        }
        @media (max-width: 479px) {
          .about-wrapper   { padding-top: 72px; }
          .about-watermark { top: 72px; font-size: 64px; line-height: 72px; }
          .about-card-row  { padding: 0 12px 40px; gap: 12px; }
          .about-text-card { border-radius: 8px; }
          .about-text-content { padding: 22px 18px 70px; }
          .about-h1   { font-size: 24px; line-height: 28px; margin-bottom: 12px; }
          .about-para { font-size: 12.5px; line-height: 138%; margin-bottom: 5px; }
          .about-stamp { width: 56px; height: 56px; bottom: 12px; right: 12px; }
          .about-photo-card { height: 0; padding-bottom: 100%; border-radius: 8px; }
          .floating-ticker-label { font-size: 22px; line-height: 28px; }
          .floating-ticker-outer { height: 48px; }
          .floating-ticker-diamond { width: 14px; height: 14px; }
        }
      `}</style>

      <div className="about-wrapper" ref={sectionRef} style={{ fontFamily: JAKARTA }}>
        <div aria-hidden="true" className="about-watermark" ref={watermarkRef} style={{ fontFamily: JAKARTA }}>
          NIRVANA
        </div>

        <div className="about-card-row">
          {/* Text card — slides in from left */}
          <div className="about-text-card reveal-left" ref={textCardRef}>
            <div className="about-text-card-bg">
              <Image
                src="/image.png"
                alt=""
                fill
                priority
                sizes="(max-width: 479px) 100vw, (max-width: 639px) 100vw, (max-width: 1023px) 680px, 644px"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>

            <div className="about-text-content">
              <h1 className="about-h1" ref={headingRef} style={{ fontFamily: JAKARTA }}>
                From The<br />Founder&apos;s Notes.
              </h1>
              {/* Paragraphs stagger in when card is in view */}
              <div
                ref={parasRef}
                className="reveal-up"
                style={{ flex: 1 }}
              >
                {paragraphs.map((text, i) => (
                  <p key={i} className="about-para" style={{ fontFamily: JAKARTA }}>{text}</p>
                ))}
                <p className="about-para" style={{ fontFamily: JAKARTA }}>
                  Welcome to Nirvana Academy.<br />Welcome home.
                </p>
              </div>
            </div>

            {/* Stamp pops in after card lands */}
            <div className="about-stamp">
              <Image
                src="/stamp.png"
                alt="Nirvana Academy seal"
                fill
                sizes="(max-width: 479px) 56px, (max-width: 639px) 72px, (max-width: 1023px) 96px, 112px"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Photo card — slides in from right, 150ms later */}
          <div className="about-photo-card reveal-right" ref={photoCardRef}>
            <Image
              src="/about-image.png"
              alt="Xeus, Founder of Nirvana Academy"
              fill
              priority
              sizes="(max-width: 479px) 100vw, (max-width: 639px) 100vw, (max-width: 1023px) 680px, 539px"
              style={{ objectFit: "cover", objectPosition: "50% 15%" }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0) 55%)",
              pointerEvents: "none",
            }} />
            <div style={{ position: "absolute", bottom: "20px", right: "20px", textAlign: "right", zIndex: 4 }}>
              <p style={{ fontFamily: JAKARTA, fontWeight: 600, fontSize: "clamp(12px, 2.5vw, 16px)", lineHeight: "1.3", color: "#fff", textShadow: "0 1px 8px rgba(0,0,0,0.8)", margin: "0 0 3px", padding: 0 }}>
                Xeus
              </p>
              <p style={{ fontFamily: JAKARTA, fontWeight: 400, fontSize: "clamp(10px, 1.8vw, 12px)", lineHeight: "1.4", letterSpacing: "0.01em", color: "rgba(255,255,255,0.88)", textShadow: "0 1px 6px rgba(0,0,0,0.7)", margin: 0, padding: 0 }}>
                Founder, Nirvana Academy
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating ticker */}
      <div style={{ width: "100%", overflow: "hidden", position: "relative", padding: "28px 0", backgroundColor: "#ffffff" }}>
        <div className="floating-ticker-outer">
          <div className="floating-ticker-track">
            {FLOATING_TICKER_ITEMS.map((label, i) => (
              <span key={i} className="floating-ticker-label">
                {label}
                <span aria-hidden="true" className="floating-ticker-diamond" />
              </span>
            ))}
            {FLOATING_TICKER_ITEMS.map((label, i) => (
              <span key={"b" + i} className="floating-ticker-label">
                {label}
                <span aria-hidden="true" className="floating-ticker-diamond" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}