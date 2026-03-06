"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const desktopLeft = [
  { label: "Home",     href: "/",         isAnchor: false },
  { label: "Articles", href: "/#articles", isAnchor: false },
  { label: "Course",   href: "/#courses",  isAnchor: false },
];

const desktopRight = [
  { label: "Events",   href: "/Events",   isAnchor: false },
  { label: "Team",     href: "/#team",    isAnchor: false },
];

const allLinks = [
  { label: "Home",     href: "/",          isAnchor: false },
  { label: "Articles", href: "/#articles", isAnchor: false },
  { label: "Course",   href: "/#courses",  isAnchor: false },
  { label: "Events",   href: "/Events",    isAnchor: false },
  { label: "Team",     href: "/#team",     isAnchor: false },
];

export default function Navbar({ forceLight = false }: { forceLight?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible,  setVisible]  = useState(false);
  const [hasHero,  setHasHero]  = useState(true);

  useEffect(() => {
    // If forceLight is set (e.g. Events page), skip hero detection
    if (forceLight) {
      setHasHero(false);
      setVisible(true);
      return;
    }

    const hero = document.getElementById("hero-section");

    if (!hero) {
      setHasHero(false);
      setVisible(true);
      return;
    }

    setHasHero(true);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [forceLight]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isAnchor: boolean
  ) => {
    if (!isAnchor) return;
    if (!href.startsWith("#")) return;
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ── Theme tokens ─────────────────────────────────────
  // isDark = true only when on hero page AND hero is visible
  const isDark = hasHero && !forceLight;

  const navBg           = isDark ? "rgba(15,16,17,0.92)"    : "#ffffff";
  const navBorder       = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.07)";
  const linkColor       = isDark ? "rgba(255,255,255,0.82)" : "rgba(20,20,20,0.80)";
  const underlineClr    = isDark ? "#fff"                   : "#111";
  const logoSrc         = isDark ? "/logo.svg"              : "/logob.svg";
  const lineClr         = isDark ? "rgba(255,255,255,0.88)" : "rgba(20,20,20,0.70)";
  const btnBorderClr    = isDark ? "rgba(255,255,255,0.13)" : "rgba(0,0,0,0.12)";
  const btnBg           = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)";
  const btnHoverBg      = isDark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.07)";
  const btnHoverBdr     = isDark ? "rgba(255,255,255,0.26)" : "rgba(0,0,0,0.20)";
  const btnOpenBg       = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.05)";
  const btnOpenBdr      = isDark ? "rgba(255,255,255,0.20)" : "rgba(0,0,0,0.16)";

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
    textDecoration: "none",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        @keyframes navDown {
          from { opacity: 0; transform: translateY(-18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-enter { animation: navDown .32s cubic-bezier(.22,1,.36,1) forwards; }

        .nav-lnk { position: relative; text-decoration: none; }
        .nav-lnk::after {
          content: ''; position: absolute; bottom: -3px; left: 0;
          width: 0; height: 1.5px; border-radius: 99px;
          background: var(--underline-clr, #fff);
          transition: width .22s ease;
        }
        .nav-lnk:hover::after { width: 100%; }

        .burger-wrap { display: flex; margin-left: auto; }
        @media (min-width: 768px) { .burger-wrap { display: none; } }

        .burger-btn {
          width: 44px; height: 44px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; flex-shrink: 0; outline: none;
          -webkit-tap-highlight-color: transparent;
          border: 1.5px solid var(--btn-border, rgba(255,255,255,0.13));
          background: var(--btn-bg, rgba(255,255,255,0.04));
          transition: background .22s ease, border-color .22s ease,
                      box-shadow .22s ease, transform .18s cubic-bezier(.34,1.56,.64,1);
        }
        .burger-btn:hover {
          background: var(--btn-hover-bg);
          border-color: var(--btn-hover-bdr);
          box-shadow: 0 0 0 4px rgba(128,128,128,0.08);
          transform: scale(1.07);
        }
        .burger-btn:active { transform: scale(0.93); transition-duration: .1s; }

        .burger-lines { display: flex; flex-direction: column; align-items: flex-end; gap: 5.5px; width: 20px; }
        .b-line {
          display: block; height: 1.5px; border-radius: 99px;
          background: var(--line-clr, rgba(255,255,255,0.88));
          transform-origin: center;
          transition: width .3s cubic-bezier(.22,1,.36,1),
                      transform .3s cubic-bezier(.22,1,.36,1), opacity .22s ease;
        }
        .b-line-1 { width: 20px; }
        .b-line-2 { width: 13px; }
        .b-line-3 { width: 20px; }
        .burger-btn:hover .b-line-2 { width: 20px; }
        .burger-btn.is-open .b-line-1 { transform: translateY(7px) rotate(45deg); }
        .burger-btn.is-open .b-line-2 { width: 0; opacity: 0; }
        .burger-btn.is-open .b-line-3 { transform: translateY(-7px) rotate(-45deg); }
        .burger-btn.is-open {
          background: var(--btn-open-bg);
          border-color: var(--btn-open-bdr);
        }

        @keyframes overlayIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes linkIn    { from { opacity: 0; transform: translateX(36px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes footerIn  { from { opacity: 0; transform: translateY(8px); }  to { opacity: 1; transform: translateY(0); } }

        .mob-overlay {
          position: fixed; inset: 0; background: #000; z-index: 200;
          display: flex; flex-direction: column;
          animation: overlayIn .2s ease forwards;
        }
        .mob-link {
          font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 400;
          font-size: 46px; line-height: 1; letter-spacing: -0.03em;
          color: rgba(255,255,255,0.7); text-align: right;
          text-decoration: none; opacity: 0; display: block;
          transition: color .18s ease, letter-spacing .18s ease,
                      transform .22s cubic-bezier(.22,1,.36,1);
        }
        .mob-link:hover { color: #fff; letter-spacing: -0.01em; transform: translateX(-5px); }
        .mob-link:nth-child(1) { animation: linkIn .36s cubic-bezier(.22,1,.36,1) .07s forwards; }
        .mob-link:nth-child(2) { animation: linkIn .36s cubic-bezier(.22,1,.36,1) .13s forwards; }
        .mob-link:nth-child(3) { animation: linkIn .36s cubic-bezier(.22,1,.36,1) .19s forwards; }
        .mob-link:nth-child(4) { animation: linkIn .36s cubic-bezier(.22,1,.36,1) .25s forwards; }
        .mob-link:nth-child(5) { animation: linkIn .36s cubic-bezier(.22,1,.36,1) .31s forwards; }
        .mob-footer { opacity: 0; animation: footerIn .4s ease .44s forwards; }

        .join-btn:hover  { background: #1a6ee0 !important; transform: scale(1.03); }
        .join-btn:active { transform: scale(.97); }
      `}</style>

      {/* ── Navbar ── */}
      <div
        style={{
          position     : "fixed",
          top          : 6,
          left         : 6,
          right        : 6,
          zIndex       : 50,
          opacity      : visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none",
          transition   : "opacity .3s ease",
          fontFamily   : "'Plus Jakarta Sans', sans-serif",
          ["--underline-clr" as any]: underlineClr,
          ["--line-clr"      as any]: lineClr,
          ["--btn-border"    as any]: btnBorderClr,
          ["--btn-bg"        as any]: btnBg,
          ["--btn-hover-bg"  as any]: btnHoverBg,
          ["--btn-hover-bdr" as any]: btnHoverBdr,
          ["--btn-open-bg"   as any]: btnOpenBg,
          ["--btn-open-bdr"  as any]: btnOpenBdr,
        }}
      >
        <div
          key={String(visible)}
          className={visible ? "nav-enter" : ""}
          style={{
            background          : navBg,
            backdropFilter      : "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius        : "18px",
            border              : `1px solid ${navBorder}`,
            boxShadow           : isDark ? "none" : "0 2px 16px rgba(0,0,0,0.07)",
          }}
        >
          <nav className="h-[72px] flex items-center justify-between px-8 md:px-14 lg:px-20 relative">

            {/* LEFT — desktop */}
            <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
              {desktopLeft.map(({ label, href, isAnchor }) => (
                <li key={label}>
                  <a href={href} className="nav-lnk"
                    style={{ ...navFont, color: linkColor }}
                    onClick={(e) => handleAnchorClick(e, href, isAnchor)}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CENTER LOGO */}
            <a
              href="/"
              className="flex items-center gap-[10px] md:absolute md:left-1/2 md:-translate-x-1/2"
              style={{ textDecoration: "none" }}
            >
              <Image
                src={logoSrc}
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
                <a key={label} href={href} className="nav-lnk"
                  style={{ ...navFont, color: linkColor }}
                  onClick={(e) => handleAnchorClick(e, href, isAnchor)}>
                  {label}
                </a>
              ))}
              <a href="/#contact" className="join-btn" style={joinBtnStyle}>
                Join Nirvana
              </a>
            </div>

            {/* HAMBURGER */}
            <div className="burger-wrap">
              <button
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen(v => !v)}
                className={`burger-btn ${menuOpen ? "is-open" : ""}`}
              >
                <span className="burger-lines">
                  <span className="b-line b-line-1" />
                  <span className="b-line b-line-2" />
                  <span className="b-line b-line-3" />
                </span>
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* ── Fullscreen mobile overlay (always dark) ── */}
      {menuOpen && (
        <div className="mob-overlay">
          <div style={{ display: "flex", justifyContent: "flex-end", padding: "14px 20px" }}>
            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="burger-btn is-open"
              style={{
                ["--btn-border"    as any]: "rgba(255,255,255,0.13)",
                ["--btn-bg"        as any]: "rgba(255,255,255,0.04)",
                ["--btn-open-bg"   as any]: "rgba(255,255,255,0.07)",
                ["--btn-open-bdr"  as any]: "rgba(255,255,255,0.20)",
                ["--btn-hover-bg"  as any]: "rgba(255,255,255,0.09)",
                ["--btn-hover-bdr" as any]: "rgba(255,255,255,0.26)",
                ["--line-clr"      as any]: "rgba(255,255,255,0.88)",
              }}
            >
              <span className="burger-lines">
                <span className="b-line b-line-1" />
                <span className="b-line b-line-2" />
                <span className="b-line b-line-3" />
              </span>
            </button>
          </div>
          <nav style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", padding: "0 36px", gap: "38px" }}>
            {allLinks.map(({ label, href, isAnchor }) => (
              <a key={label} href={href} className="mob-link"
                onClick={(e) => handleAnchorClick(e, href, isAnchor)}>
                {label}
              </a>
            ))}
          </nav>
          <div className="mob-footer" style={{ padding: "24px 36px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 400, fontSize: "11px", letterSpacing: "0.06em", color: "rgba(255,255,255,0.28)", margin: 0, textTransform: "uppercase" }}>
              © 2025 – COPYRIGHT NIRVANA | PRIVACY
            </p>
          </div>
        </div>
      )}
    </>
  );
}