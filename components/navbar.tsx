"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const leftLinks = [
  { label: "Home",     href: "#hero-section", isAnchor: true  },
  { label: "Articles", href: "#articles",      isAnchor: true  },
];

const rightLinks = [
  { label: "Events",   href: "/Events",        isAnchor: false },
  { label: "Team",     href: "#team",           isAnchor: true  },
];

// "Course" sits between logo on mobile menu, and we add it to desktop left side
const allLinks = [
  { label: "Home",     href: "#hero-section", isAnchor: true  },
  { label: "Articles", href: "#articles",      isAnchor: true  },
  { label: "Course",   href: "#courses",       isAnchor: true  },
  { label: "Events",   href: "/Events",        isAnchor: false },
  { label: "Team",     href: "#team",           isAnchor: true  },
];

const desktopLeft = [
  { label: "Home",     href: "#hero-section", isAnchor: true  },
  { label: "Articles", href: "#articles",      isAnchor: true  },
  { label: "Course",   href: "#courses",       isAnchor: true  },
];

const desktopRight = [
  { label: "Events",   href: "/Events",        isAnchor: false },
  { label: "Team",     href: "#team",           isAnchor: true  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible,  setVisible]  = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-section");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isAnchor: boolean
  ) => {
    if (!isAnchor) return; // let Next.js handle page navigation
    if (!href.startsWith("#")) return;
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navFont: React.CSSProperties = {
    fontFamily   : "'Plus Jakarta Sans', sans-serif",
    fontWeight   : 500,
    fontSize     : 16,
    lineHeight   : 1,
    letterSpacing: "-0.02em",
  };

  const btnStyle: React.CSSProperties = {
    height        : 50,
    borderRadius  : 61,
    gap           : 10,
    paddingTop    : 15,
    paddingRight  : 31,
    paddingBottom : 15,
    paddingLeft   : 31,
    background    : "#2B7FFF",
    color         : "#fff",
    display       : "inline-flex",
    alignItems    : "center",
    justifyContent: "center",
    whiteSpace    : "nowrap",
    ...navFont,
    fontWeight    : 600,
    transition    : "background .2s ease, transform .15s ease",
    boxShadow     : "0 0 22px rgba(43,127,255,.4)",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .nav-lnk { position: relative; }
        .nav-lnk::after {
          content: ''; position: absolute;
          bottom: -3px; left: 0;
          width: 0; height: 1.5px;
          background: #fff; border-radius: 99px;
          transition: width .22s ease;
        }
        .nav-lnk:hover::after { width: 100%; }

        @keyframes navDown {
          from { opacity: 0; transform: translateY(-18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-enter { animation: navDown .32s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes mobDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mob-menu { animation: mobDown .22s cubic-bezier(.22,1,.36,1) forwards; }

        .mob-lnk {
          display: flex; align-items: center; justify-content: space-between;
          transition: color .16s ease, padding-left .16s ease;
        }
        .mob-lnk:hover { color: #fff !important; padding-left: 5px; }
        .mob-arrow { opacity: 0; transform: translateX(-4px); transition: opacity .16s, transform .16s; }
        .mob-lnk:hover .mob-arrow { opacity: 1; transform: translateX(0); }

        .join-btn:hover  { background: #1a6ee0 !important; transform: scale(1.03); }
        .join-btn:active { transform: scale(.97); }
      `}</style>

      <div
        style={{
          position     : "fixed",
          top          : 0, left: 0, right: 0,
          zIndex       : 50,
          padding      : "10px 10px 0",
          opacity      : visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none",
          transition   : "opacity .3s ease",
          fontFamily   : "'Plus Jakarta Sans', sans-serif",
        }}
      >
        <div
          key={String(visible)}
          className={visible ? "nav-enter" : ""}
          style={{
            background          : "rgba(15,16,17,0.92)",
            backdropFilter      : "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius        : menuOpen ? "14px 14px 0 0" : "14px",
            border              : "1px solid rgba(255,255,255,0.12)",
            borderBottom        : menuOpen ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(255,255,255,0.12)",
            transition          : "border-radius .22s ease",
          }}
        >
          {/* NAV BAR */}
          <nav className="h-[64px] flex items-center justify-between px-5 md:px-8 relative">

            {/* LEFT — desktop */}
            <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
              {desktopLeft.map(({ label, href, isAnchor }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="nav-lnk"
                    style={{ ...navFont, color: "rgba(255,255,255,.82)" }}
                    onClick={(e) => handleAnchorClick(e, href, isAnchor)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CENTER LOGO */}
            <a
              href="#hero-section"
              className="flex items-center gap-[10px] md:absolute md:left-1/2 md:-translate-x-1/2"
              onClick={(e) => handleAnchorClick(e, "#hero-section", true)}
            >
              <Image
                src="/logo.svg"
                alt="Nirvana Academy"
                width={149}
                height={50}
                style={{ objectFit: "contain" }}
                priority
              />
            </a>

            {/* RIGHT — desktop */}
            <div className="hidden md:flex items-center gap-8">
              {desktopRight.map(({ label, href, isAnchor }) => (
                <a
                  key={label}
                  href={href}
                  className="nav-lnk"
                  style={{ ...navFont, color: "rgba(255,255,255,.82)" }}
                  onClick={(e) => handleAnchorClick(e, href, isAnchor)}
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                className="join-btn"
                style={btnStyle}
                onClick={(e) => handleAnchorClick(e, "#contact", true)}
              >
                Join Nirvana
              </a>
            </div>

            {/* HAMBURGER — mobile */}
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(v => !v)}
              className="md:hidden ml-auto flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
              style={{
                borderRadius: 9,
                background  : menuOpen ? "rgba(255,255,255,.08)" : "transparent",
                transition  : "background .2s",
                flexShrink  : 0,
              }}
            >
              <span className={`block h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? "w-5 rotate-45 translate-y-[6.5px]" : "w-5"}`} style={{ borderRadius: 2 }} />
              <span className={`block h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-[13px]"}`} style={{ borderRadius: 2 }} />
              <span className={`block h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? "w-5 -rotate-45 -translate-y-[6.5px]" : "w-5"}`} style={{ borderRadius: 2 }} />
            </button>
          </nav>

          {/* MOBILE DROPDOWN */}
          {menuOpen && (
            <div
              className="mob-menu md:hidden"
              style={{ borderTop: "1px solid rgba(255,255,255,.07)" }}
            >
              <div className="grid grid-cols-2 gap-[6px] p-3">
                {allLinks.map(({ label, href, isAnchor }) => (
                  <a
                    key={label}
                    href={href}
                    onClick={(e) => handleAnchorClick(e, href, isAnchor)}
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
                    {label}
                    <svg className="mob-arrow w-4 h-4" fill="none" viewBox="0 0 16 16"
                      style={{ color: "rgba(255,255,255,.38)" }}>
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ))}
              </div>

              <div style={{ height: 1, background: "rgba(255,255,255,.07)", margin: "0 12px" }} />

              <div className="p-3">
                <a
                  href="#contact"
                  onClick={(e) => handleAnchorClick(e, "#contact", true)}
                  className="join-btn flex items-center justify-center gap-2 w-full"
                  style={{
                    ...btnStyle,
                    width        : "100%",
                    height       : 50,
                    borderRadius : 12,
                    background   : "#2B7FFF",
                    boxShadow    : "0 4px 22px rgba(43,127,255,.38)",
                    paddingTop   : 15,
                    paddingBottom: 15,
                  }}
                >
                  Join Nirvana
                  <svg width="15" height="15" fill="none" viewBox="0 0 16 16">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}