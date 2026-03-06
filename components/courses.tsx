"use client";

import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const JAKARTA = jakarta.style.fontFamily;

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');

  /* ── Reset ── */
  *, *::before, *::after { box-sizing: border-box; }

  /* ── Feature cells ── */
  .feat-cell {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 16px 14px;
    background: #fff;
    border-radius: 10px;
  }

  /* ── Learn items ── */
  .learn-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 15px;
    color: #333;
    line-height: 1.4;
  }
  .learn-check {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    color: #555;
    margin-top: 2px;
  }

  /* ── Enroll button shell ── */
  .lc-enroll-wrap {
    background: #F4F5F7;
    border-radius: 110px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lc-enroll-btn {
    width: 100%;
    height: 150px;
    border-radius: 110px;
    background: #CFD4DC;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
    transition:
      background  0.35s ease,
      transform   0.25s cubic-bezier(.34,1.56,.64,1),
      box-shadow  0.35s ease;
  }

  .lc-enroll-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      110deg,
      transparent 20%,
      rgba(255,255,255,0.45) 50%,
      transparent 80%
    );
    background-size: 200% 100%;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .lc-enroll-btn:hover {
    background: #B0B8C4;
    transform: translateY(-4px) scale(1.015);
    box-shadow: 0 12px 32px rgba(0,0,0,0.13), 0 4px 10px rgba(0,0,0,0.08);
  }
  .lc-enroll-btn:hover::before { opacity: 1; }
  .lc-enroll-btn:active,
  .lc-enroll-btn.is-pressed {
    transform: translateY(-1px) scale(0.995);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition-duration: 0.1s;
  }

  .lc-enroll-label {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 600;
    font-size: 28px;
    line-height: 1;
    letter-spacing: -0.01em;
    color: #707F8C;
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 12px;
    transition:
      color          0.3s ease,
      transform      0.3s cubic-bezier(.34,1.56,.64,1),
      letter-spacing 0.3s ease;
  }
  .lc-enroll-btn:hover .lc-enroll-label {
    color: #4A5568;
    transform: scale(1.04);
    letter-spacing: 0.01em;
  }
  .lc-enroll-btn:active .lc-enroll-label {
    transform: scale(0.98);
    transition-duration: 0.1s;
  }

  /* ── Responsive layout ── */

  /* Desktop: side-by-side */
  .courses-grid {
    display: grid;
    grid-template-columns: 484.52px 1fr;
    gap: 0;
    align-items: start;
  }

  .card-wrap {
    position: relative;
    width: 484.52px;
    height: 623.36px;
    border-radius: 11.33px;
    overflow: hidden;
    flex-shrink: 0;
  }

  .right-col {
    display: flex;
    flex-direction: column;
    gap: 40px;
    height: 100%;
  }

  .info-panel {
    background: #F7F8F9;
    margin-top: 10px;
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
    padding: 24px 35px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 30px;
    gap: 8px;
  }

  .enroll-row {
    margin-left: 10px;
    margin-top: auto;
  }

  /* ── Mobile ── */
  @media (max-width: 768px) {
    .courses-section-inner {
      padding: 48px 20px 72px !important;
    }

    .courses-header {
      margin-bottom: 28px !important;
      gap: 8px !important;
    }

    .courses-title {
      font-size: 56px !important;
      line-height: 44px !important;
    }

    .courses-subtitle {
      font-size: 15px !important;
    }

    /* Stack vertically */
    .courses-grid {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    /* Card stretches full width */
    .card-wrap {
      width: 100%;
      height: 0;
      padding-bottom: 128%; /* maintain ~card aspect ratio */
      border-radius: 14px;
    }

    /* Bottom description repositioned */
    .card-bottom-desc {
      top: auto !important;
      bottom: 16px !important;
      left: 14px !important;
      right: 14px !important;
      width: auto !important;
    }

    .right-col {
      gap: 12px;
    }

    /* Info panel goes full-width, rounded all sides */
    .info-panel {
      margin-top: 0;
      border-radius: 14px;
      padding: 20px 18px;
    }

    /* 2-col feature grid on mobile */
    .features-grid {
      grid-template-columns: repeat(2, 1fr);
      margin-top: 0;
      gap: 8px;
    }

    .feat-cell {
      padding: 12px 12px;
    }

    .enroll-row {
      margin-left: 0;
      margin-top: 0;
    }

    .lc-enroll-btn {
      height: 84px;
    }

    .lc-enroll-label {
      font-size: 22px;
    }
  }

  /* Very small screens */
  @media (max-width: 380px) {
    .courses-title {
      font-size: 46px !important;
      line-height: 38px !important;
    }
    .features-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: "12 Weeks Intensive",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    label: "Cohort-Based Learning",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    label: "Hands-on Projects",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M6 20v-2a6 6 0 0 1 12 0v2"/>
        <polyline points="9 11 7 20 12 17 17 20 15 11"/>
      </svg>
    ),
    label: "Certificate of Completion",
  },
];

const learnItems = [
  "Build and deploy smart contracts on Ethereum",
  "Create decentralized applications (dApps)",
  "Understand DeFi protocols and tokenomics",
  "Master Web3 security best practices",
];

export default function Courses() {
  const [pressed, setPressed] = useState(false);

  return (
    <>
      <style>{STYLES}</style>
      <section
        id="courses"
        style={{ background: "#fff", width: "100%", fontFamily: JAKARTA }}
      >
        <div
          className="courses-section-inner"
          style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 48px 96px" }}
        >
          {/* ── HEADER ── */}
          <div
            className="courses-header"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: 40,
              gap: 10,
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                width: 123,
                height: 32,
                border: "1px solid rgba(43,127,255,0.5)",
                borderRadius: 16777200,
                padding: "4px 10px",
                fontFamily: JAKARTA,
                fontWeight: 500,
                fontSize: 16,
                lineHeight: "24px",
                letterSpacing: "-0.31px",
                textAlign: "center",
                color: "#2B7FFF",
                whiteSpace: "nowrap",
              }}
            >
              Latest Course
            </div>

            {/* Subtitle */}
            <p
              className="courses-subtitle"
              style={{
                fontFamily: JAKARTA,
                fontWeight: 500,
                fontSize: 18,
                lineHeight: "100%",
                letterSpacing: "-0.02em",
                color: "#555",
                textAlign: "center",
                margin: 0,
                maxWidth: 480,
              }}
            >
              Our battle-tested course turns novices into DeFi warriors. Learn the game, win the trades.
            </p>

            {/* Koinophobia — Nanum Pen Script */}
            <h2
              className="courses-title"
              style={{
                fontFamily: "'Nanum Pen Script', cursive",
                fontWeight: 400,
                fontSize: 78,
                lineHeight: "53.2px",
                letterSpacing: "-0.05em",
                color: "#0A0A0A",
                margin: "8px 0 0",
                textAlign: "center",
                textTransform: "capitalize",
              }}
            >
              Koinophobia
            </h2>
          </div>

          {/* ── TWO-COLUMN (desktop) / STACKED (mobile) LAYOUT ── */}
          <div className="courses-grid">

            {/* ── LEFT: Course Card ── */}
            <div className="card-wrap">
              <Image
                src="/koin.svg"
                fill
                alt="Koinophobia Course Card"
                style={{ objectFit: "cover" }}
                priority
              />

              {/* Coming soon badge */}
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: 99,
                  padding: "6px 16px",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#fff",
                  fontFamily: JAKARTA,
                }}
              >
                Coming soon
              </div>

              {/* Bottom description */}
              <div
                className="card-bottom-desc"
                style={{
                  position: "absolute",
                  top: 528.91,
                  left: 19.83,
                  width: 320.18,
                  borderRadius: 6.61,
                  background: "rgba(247,248,249,0.18)",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                  padding: 13.22,
                  display: "flex",
                  alignItems: "center",
                  boxSizing: "border-box",
                }}
              >
                <p
                  style={{
                    fontFamily: JAKARTA,
                    fontWeight: 400,
                    fontSize: 15.11,
                    lineHeight: "22.67px",
                    letterSpacing: "-0.3px",
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  Master crypto trading with our flagship course — your ticket to life-changing wins.
                </p>
              </div>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div className="right-col">

              {/* Info panel */}
              <div className="info-panel">
                {/* 4-col (desktop) / 2-col (mobile) feature grid */}
                <div className="features-grid">
                  {features.map((f, i) => (
                    <div key={i} className="feat-cell">
                      {f.icon}
                      <span
                        style={{
                          fontFamily: JAKARTA,
                          fontSize: 13,
                          fontWeight: 500,
                          color: "rgba(51,51,51,0.8)",
                          lineHeight: "18.89px",
                          letterSpacing: "-0.14px",
                          whiteSpace: "normal",
                          marginTop: 10,
                          display: "block",
                        }}
                      >
                        {f.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* What You'll Learn */}
                <div>
                  <h3
                    style={{
                      fontFamily: JAKARTA,
                      fontWeight: 600,
                      fontSize: 20,
                      color: "#0A0A0A",
                      margin: "0 0 14px",
                    }}
                  >
                    What You'll Learn
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {learnItems.map((item, i) => (
                      <div key={i} className="learn-item">
                        <svg className="learn-check" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span style={{ fontFamily: JAKARTA, fontSize: 15, color: "#333" }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enroll button */}
              <div className="lc-enroll-wrap enroll-row">
                <button
                  className={`lc-enroll-btn${pressed ? " is-pressed" : ""}`}
                  onMouseDown={() => setPressed(true)}
                  onMouseUp={() => setPressed(false)}
                  onMouseLeave={() => setPressed(false)}
                  onTouchStart={() => setPressed(true)}
                  onTouchEnd={() => setPressed(false)}
                >
                  <span className="lc-enroll-label">Enroll now</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}