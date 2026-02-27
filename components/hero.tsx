"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const leftLinks  = ["Home", "Articles", "Course"];
const rightLinks = ["Events", "Team"];

export default function HeroSection() {
  const [loaded,   setLoaded]   = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width  - 0.5,
      y: (e.clientY - rect.top)  / rect.height - 0.5,
    });
  };

  const navFont: React.CSSProperties = {
    fontFamily   : "'Plus Jakarta Sans', sans-serif",
    fontWeight   : 500,
    fontSize     : 16,
    lineHeight   : 1,
    letterSpacing: "-0.02em",
  };

  const joinBtnStyle: React.CSSProperties = {
    height        : 50,
    borderRadius  : 61,
    paddingTop    : 15,
    paddingRight  : 31,
    paddingBottom : 15,
    paddingLeft   : 31,
    gap           : 10,
    background    : "#2B7FFF",
    color         : "#fff",
    display       : "inline-flex",
    alignItems    : "center",
    justifyContent: "center",
    whiteSpace    : "nowrap",
    fontFamily    : "'Plus Jakarta Sans', sans-serif",
    fontWeight    : 600,
    fontSize      : 16,
    letterSpacing : "-0.02em",
    boxShadow     : "0 0 22px rgba(43,127,255,.4)",
    transition    : "background .2s ease, transform .15s ease",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Nanum+Pen+Script&display=swap');

        /* ════════════════════════════════════════
           KEYFRAMES
        ════════════════════════════════════════ */

        /* Generic */
        @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
        @keyframes fadeUp  { from{opacity:0;transform:translateY(26px)} to{opacity:1;transform:translateY(0)} }
        @keyframes mobDown { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }

        /* Navbar items slide down */
        @keyframes navReveal {
          from { opacity:0; transform:translateY(-10px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* Heading: rise + un-blur */
        @keyframes headingReveal {
          0%   { opacity:0; transform:translateY(40px) scale(.96); filter:blur(8px); }
          55%  { filter:blur(0); }
          100% { opacity:1; transform:translateY(0) scale(1); filter:blur(0); }
        }

        /* Subtext: clip-path wipe left→right */
        @keyframes subtextWipe {
          0%   { opacity:0; clip-path:inset(0 100% 0 0); transform:translateY(10px); }
          20%  { opacity:1; }
          100% { opacity:1; clip-path:inset(0 0% 0 0);   transform:translateY(0); }
        }

        /* Decorative line grow */
        @keyframes lineGrow {
          from { transform:scaleX(0); opacity:0; }
          to   { transform:scaleX(1); opacity:1; }
        }

        /* CTA glow pulse */
        @keyframes glowPulse {
          0%,100% { box-shadow:0 0 16px rgba(43,127,255,.38),0 0 0 0 rgba(43,127,255,0); }
          50%     { box-shadow:0 0 36px rgba(43,127,255,.72),0 0 0 10px rgba(43,127,255,.07); }
        }

        /* Pill float */
        @keyframes pillFloat {
          0%,100% { transform:translateY(0) rotate(0deg); }
          35%     { transform:translateY(-6px) rotate(-.7deg); }
          70%     { transform:translateY(-2px) rotate(.4deg); }
        }

        /* Ambient orb slow drift */
        @keyframes orbDrift {
          0%,100% { transform:translate(0,0) scale(1); }
          33%     { transform:translate(28px,-18px) scale(1.07); }
          66%     { transform:translate(-18px,14px) scale(.95); }
        }

        /* Horizontal scan line */
        @keyframes scanLine {
          0%   { top:-120px; opacity:.07; }
          100% { top:120%;   opacity:.01; }
        }

        /* Hero card border breathe */
        @keyframes borderBreathe {
          0%,100% { border-color:rgba(255,255,255,.13); }
          50%     { border-color:rgba(43,127,255,.28); }
        }

        /* ════════════════════════════════════════
           LOAD STAGGER
        ════════════════════════════════════════ */

        .h-fade-bg,
        .h-fade-nav,
        .h-fade-logo,
        .h-fade-2,
        .h-fade-3,
        .h-fade-4 { opacity:0; }

        .loaded .h-fade-bg   { animation:fadeIn       1.4s ease  .08s forwards; }
        .loaded .h-fade-nav  { animation:navReveal     .7s cubic-bezier(.22,1,.36,1) .20s forwards; }
        .loaded .h-fade-logo { animation:fadeIn        .7s ease  .18s forwards; }
        .loaded .h-fade-2    { animation:headingReveal 1.0s cubic-bezier(.22,1,.36,1) .38s forwards; }
        .loaded .h-fade-3    { animation:subtextWipe   1.1s cubic-bezier(.22,1,.36,1) .72s forwards; }
        .loaded .h-fade-4    { animation:fadeUp        .8s  cubic-bezier(.22,1,.36,1) .98s forwards; }

        .loaded .hero-card   { animation:borderBreathe 5s ease-in-out 2s infinite; }

        /* ════════════════════════════════════════
           AMBIENT LAYER
        ════════════════════════════════════════ */

        .orb {
          position      : absolute;
          border-radius : 50%;
          pointer-events: none;
          filter        : blur(100px);
          z-index       : 2;
        }
        .orb-blue {
          width     : 560px;
          height    : 560px;
          background: radial-gradient(circle, rgba(43,127,255,.16) 0%, transparent 70%);
          bottom    : -100px;
          left      : -80px;
          animation : orbDrift 16s ease-in-out infinite;
        }
        .orb-white {
          width     : 340px;
          height    : 340px;
          background: radial-gradient(circle, rgba(255,255,255,.05) 0%, transparent 70%);
          top       : 15%;
          right     : 6%;
          animation : orbDrift 20s ease-in-out 4s infinite reverse;
        }

        .scan-line {
          position       : absolute;
          left           : 0;
          right          : 0;
          height         : 100px;
          background     : linear-gradient(to bottom,transparent,rgba(255,255,255,.055),transparent);
          pointer-events : none;
          animation      : scanLine 9s linear 2.4s infinite;
          z-index        : 4;
        }

        /* ════════════════════════════════════════
           OVERLAYS
        ════════════════════════════════════════ */

        .hero-overlay {
          background: linear-gradient(
            115deg,
            rgba(10,10,12,.88) 0%,
            rgba(10,10,12,.52) 42%,
            rgba(10,10,12,.16) 100%
          );
        }
        .hero-vignette {
          background: linear-gradient(
            to top,
            rgba(10,10,12,.84) 0%,
            rgba(10,10,12,.30) 50%,
            transparent 100%
          );
        }

        /* ════════════════════════════════════════
           FUTURE PILL
        ════════════════════════════════════════ */

        .future-pill {
          display        : inline-flex;
          align-items    : center;
          justify-content: center;
          background     : #ffffff;
          color          : #111214;
          height         : 82px;
          border-radius  : 90px;
          padding        : 12px 22px;
          white-space    : nowrap;
          font-family    : 'Nanum Pen Script', cursive;
          font-weight    : 400;
          font-size      : 76.04px;
          line-height    : 80.49px;
          letter-spacing : -0.04em;
          vertical-align : middle;
          animation      : pillFloat 4.2s ease-in-out 2.2s infinite;
          transition     : transform .25s ease, box-shadow .25s ease;
          will-change    : transform;
        }
        .future-pill:hover {
          animation-play-state: paused;
          transform  : rotate(-2deg) scale(1.06);
          box-shadow : 0 14px 44px rgba(0,0,0,.32);
        }

        /* ════════════════════════════════════════
           SUBTEXT — pure white, 18 px
        ════════════════════════════════════════ */

        .hero-subtext {
          font-family    : 'Plus Jakarta Sans', sans-serif;
          font-weight    : 500;
          font-size      : 18px;
          line-height    : 1;
          letter-spacing : -0.02em;
          color          : #ffffff;
          margin         : 0;
          max-width      : 430px;
        }

        /* Animated accent line below subtext */
        .subtext-line {
          display          : block;
          height           : 1.5px;
          width            : 240px;
          margin-top       : 13px;
          border-radius    : 99px;
          background       : linear-gradient(90deg,rgba(255,255,255,.55) 0%,rgba(43,127,255,.8) 55%,transparent 100%);
          transform-origin : left center;
          transform        : scaleX(0);
          opacity          : 0;
        }
        .loaded .subtext-line {
          animation: lineGrow 1s cubic-bezier(.22,1,.36,1) 1.85s forwards;
        }

        /* ════════════════════════════════════════
           CTA BUTTON
        ════════════════════════════════════════ */

        .cta-btn {
          display        : inline-flex;
          align-items    : center;
          justify-content: center;
          height         : 50px;
          border-radius  : 111px;
          padding        : 15px 31px;
          gap            : 10px;
          background     : #2B7FFF;
          color          : #fff;
          font-family    : 'Plus Jakarta Sans', sans-serif;
          font-weight    : 700;
          font-size      : 16px;
          line-height    : 1;
          letter-spacing : -0.01em;
          white-space    : nowrap;
          animation      : glowPulse 3s ease-in-out 2s infinite;
          transition     : background .2s ease, transform .15s ease;
        }
        .cta-btn:hover  { background:#1a6ee0 !important; transform:translateY(-3px) scale(1.03); }
        .cta-btn:active { transform:scale(.97); }

        /* ════════════════════════════════════════
           NAV
        ════════════════════════════════════════ */

        .nav-lnk { position:relative; }
        .nav-lnk::after {
          content    : ''; position:absolute;
          bottom     : -3px; left:0; width:0; height:1.5px;
          background : #fff; border-radius:99px;
          transition : width .22s ease;
        }
        .nav-lnk:hover::after { width:100%; }

        /* ════════════════════════════════════════
           MOBILE MENU
        ════════════════════════════════════════ */

        .mob-menu { animation:mobDown .22s cubic-bezier(.22,1,.36,1) forwards; }
        .mob-lnk {
          display        : flex;
          align-items    : center;
          justify-content: space-between;
          transition     : color .16s ease, padding-left .16s ease;
        }
        .mob-lnk:hover               { color:#fff !important; padding-left:5px; }
        .mob-arrow                   { opacity:0; transform:translateX(-4px); transition:opacity .16s,transform .16s; }
        .mob-lnk:hover .mob-arrow    { opacity:1; transform:translateX(0); }

        .join-btn:hover  { background:#1a6ee0 !important; transform:scale(1.03); }
        .join-btn:active { transform:scale(.97); }

        /* ════════════════════════════════════════
           MOBILE OVERRIDES
        ════════════════════════════════════════ */

        @media (max-width:767px) {
          /* Pill smaller on phone */
          .future-pill {
            height     : 58px;
            font-size  : 56px;
            line-height: 60px;
            padding    : 10px 18px;
          }
          /* Subtext comfortable on phone */
          .hero-subtext {
            font-size  : 16px;
            max-width  : 92%;
            line-height: 1.45;
          }
          .subtext-line  { width:160px; }
          .orb-blue      { width:260px; height:260px; left:-30px; bottom:-40px; }
          .orb-white     { width:160px; height:160px; }
        }
      `}</style>

      {/* ════════════════ HERO CARD ════════════════ */}
      <div
        id="hero-section"
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className={`hero-card relative overflow-hidden flex flex-col ${loaded ? "loaded" : ""}`}
        style={{
          margin      : "16px",
          borderRadius: "18px",
          border      : "1px solid rgba(255,255,255,0.13)",
          minHeight   : "calc(100vh - 32px)",
          background  : "#0f1011",
          fontFamily  : "'Plus Jakarta Sans', sans-serif",
        }}
      >
        {/* Ambient orbs */}
        <div className="orb orb-blue"  />
        <div className="orb orb-white" />

        {/* Scan line */}
        <div className="scan-line" />

        {/* Video — desktop */}
        <video
          className="h-fade-bg absolute inset-0 w-full h-full object-cover pointer-events-none hidden md:block"
          src="/background.mp4" autoPlay loop muted playsInline
          style={{
            transform : `scale(1.04) translate(${mousePos.x * -12}px,${mousePos.y * -8}px)`,
            filter    : "grayscale(100%) brightness(0.42)",
            transition: "transform .08s linear",
          }}
        />
        {/* Video — mobile */}
        <video
          className="h-fade-bg absolute inset-0 w-full h-full object-cover pointer-events-none block md:hidden"
          src="/bgmobile.mp4" autoPlay loop muted playsInline
          style={{ filter:"grayscale(100%) brightness(0.42)" }}
        />

        <div className="hero-overlay absolute inset-0" style={{zIndex:3}} />
        <div className="hero-vignette absolute bottom-0 left-0 right-0 h-64 pointer-events-none" style={{zIndex:3}} />

        {/* ════════ NAVBAR ════════ */}
        <nav
          className="h-fade-nav relative flex items-center justify-between px-6 md:px-10 h-[72px] shrink-0"
          style={{ zIndex:20 }}
        >
          {/* Left links — desktop */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {leftLinks.map(l => (
              <li key={l}>
                <Link href={`/${l.toLowerCase()}`} className="nav-lnk"
                  style={{ ...navFont, color:"rgba(255,255,255,.82)" }}>
                  {l}
                </Link>
              </li>
            ))}
          </ul>

          {/* Logo */}
          <Link
            href="/"
            className="h-fade-logo flex items-center md:absolute md:left-1/2 md:-translate-x-1/2"
          >
            <Image
              src="/logo.svg"
              alt="Nirvana Academy"
              width={149}
              height={50}
              style={{ objectFit:"contain" }}
              priority
            />
          </Link>

          {/* Right links + CTA — desktop */}
          <div className="hidden md:flex items-center gap-8">
            {rightLinks.map(l => (
              <Link key={l} href={`/${l.toLowerCase()}`} className="nav-lnk"
                style={{ ...navFont, color:"rgba(255,255,255,.82)" }}>
                {l}
              </Link>
            ))}
            <Link href="/join" className="join-btn" style={joinBtnStyle}>
              Join Nirvana
            </Link>
          </div>

          {/* Hamburger — mobile */}
          <button
            aria-label={menuOpen ? "Close" : "Menu"}
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] ml-auto"
            style={{
              borderRadius: 9,
              background  : menuOpen ? "rgba(255,255,255,.09)" : "transparent",
              transition  : "background .2s",
              flexShrink  : 0,
            }}
          >
            <span className={`block h-[1.5px] bg-white transition-all duration-300 ${menuOpen?"w-5 rotate-45 translate-y-[6.5px]":"w-5"}`} style={{borderRadius:2}}/>
            <span className={`block h-[1.5px] bg-white transition-all duration-300 ${menuOpen?"w-0 opacity-0":"w-[13px]"}`} style={{borderRadius:2}}/>
            <span className={`block h-[1.5px] bg-white transition-all duration-300 ${menuOpen?"w-5 -rotate-45 -translate-y-[6.5px]":"w-5"}`} style={{borderRadius:2}}/>
          </button>
        </nav>

        {/* ════════ MOBILE DROPDOWN ════════ */}
        {menuOpen && (
          <div
            className="mob-menu relative md:hidden mx-4 mb-2 overflow-hidden"
            style={{
              borderRadius  : 14,
              border        : "1px solid rgba(255,255,255,.10)",
              background    : "rgba(15,16,17,.96)",
              backdropFilter: "blur(24px)",
              zIndex        : 20,
            }}
          >
            <div className="grid grid-cols-2 gap-[6px] p-3">
              {[...leftLinks, ...rightLinks].map(l => (
                <Link
                  key={l}
                  href={`/${l.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="mob-lnk"
                  style={{
                    ...navFont,
                    color       : "rgba(255,255,255,.70)",
                    padding     : "13px 14px",
                    borderRadius: 10,
                    background  : "rgba(255,255,255,.04)",
                    border      : "1px solid rgba(255,255,255,.06)",
                  }}
                >
                  {l}
                  <svg className="mob-arrow w-4 h-4" fill="none" viewBox="0 0 16 16"
                    style={{color:"rgba(255,255,255,.38)"}}>
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              ))}
            </div>
            <div style={{ height:1, background:"rgba(255,255,255,.07)", margin:"0 12px" }}/>
            <div className="p-3">
              <Link
                href="/join"
                onClick={() => setMenuOpen(false)}
                className="join-btn flex items-center justify-center gap-2 w-full"
                style={{
                  ...joinBtnStyle,
                  width       : "100%",
                  borderRadius: 12,
                  paddingLeft : 20,
                  paddingRight: 20,
                  boxShadow   : "0 4px 24px rgba(43,127,255,.42)",
                }}
              >
                Join Nirvana
                <svg width="15" height="15" fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        )}

        {/* ════════ HERO CONTENT ════════ */}
        <div
          className="relative flex-1 flex flex-col justify-end pb-14 md:pb-24 px-8 md:px-14 lg:px-20"
          style={{ zIndex:10 }}
        >
          {/* ── Heading ── */}
          <h1
            className="h-fade-2 text-white mb-5 md:mb-[18px]"
            style={{
              fontFamily   : "'Plus Jakarta Sans', sans-serif",
              fontWeight   : 500,
              fontSize     : "clamp(36px, 6.5vw, 75.84px)",
              lineHeight   : 1,
              letterSpacing: "-0.04em",
            }}
          >
            <span className="block">Master DeFi,</span>
            <span
              className="flex flex-wrap items-center gap-x-3 gap-y-2"
              style={{
                marginTop : "clamp(6px, 1vw, 10px)",
                lineHeight: "clamp(58px, 6.5vw, 82px)",
              }}
            >
              Launch your
              <span className="future-pill">Future</span>
            </span>
          </h1>

          {/* ── Subtext — white, 18 px, animated ── */}
          <div className="h-fade-3 mb-8">
            <p className="hero-subtext">
              To know is to be free: This is the way of Nirvana.
            </p>
            <span className="subtext-line" />
          </div>

          {/* ── CTA ── */}
          <div className="h-fade-4">
            <Link href="/get-started" className="cta-btn">
              Get Started
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}