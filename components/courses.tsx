"use client";

import { useState } from "react";

const features = [
  {
    label: "12 Weeks\nIntensive",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: "Cohort-Based\nLearning",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Hands-on\nProjects",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    label: "Certificate of\nCompletion",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
];

const learnings = [
  "Build and deploy smart contracts on Ethereum",
  "Create decentralized applications (dApps)",
  "Understand DeFi protocols and tokenomics",
  "Master Web3 security best practices",
];

export default function LatestCourse() {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        .enroll-btn {
          width: 100%;
          height: 174px;
          border-radius: 110px;
          background: #CFD4DC;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          transition:
            background 0.35s ease,
            transform  0.25s cubic-bezier(.34,1.56,.64,1),
            box-shadow 0.35s ease;
        }

        .enroll-btn::before {
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
          animation: none;
          pointer-events: none;
        }

        .enroll-btn:hover {
          background: #B0B8C4;
          transform: translateY(-4px) scale(1.015);
          box-shadow:
            0 12px 32px rgba(0,0,0,0.13),
            0  4px 10px rgba(0,0,0,0.08);
        }

        .enroll-btn:hover::before {
          opacity: 1;
          animation: shimmer 1.4s linear infinite;
        }

        .enroll-btn:active {
          transform: translateY(-1px) scale(0.995);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition-duration: 0.1s;
        }

        .enroll-label {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 32.2px;
          line-height: 100%;
          letter-spacing: -0.01em;
          color: #707F8C;
          position: relative;
          z-index: 1;
          transition:
            color      0.3s ease,
            transform  0.3s cubic-bezier(.34,1.56,.64,1),
            letter-spacing 0.3s ease;
        }

        .enroll-btn:hover .enroll-label {
          color: #4A5568;
          transform: scale(1.04);
          letter-spacing: 0.01em;
        }

        .enroll-btn:active .enroll-label {
          transform: scale(0.98);
          transition-duration: 0.1s;
        }
      `}</style>

      <section
        className="w-full bg-white"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", padding: "72px 80px" }}
      >
        {/* ── Header ── */}
        <div className="flex flex-col items-center gap-4 mb-14">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "123px",
              height: "32px",
              borderRadius: "9999px",
              border: "1px solid rgba(43,127,255,0.3)",
              padding: "4px 10px",
            }}
          >
            <span style={{ fontWeight: 500, fontSize: "13px", lineHeight: "100%", letterSpacing: "-0.02em", color: "#2B7FFF", whiteSpace: "nowrap" }}>
              Latest Course
            </span>
          </div>

          <p
            className="text-center m-0"
            style={{ fontWeight: 500, fontSize: "18px", lineHeight: "100%", letterSpacing: "-0.02em", color: "#666", maxWidth: "440px" }}
          >
            Our battle-tested course turns novices into DeFi warriors. Learn the game, win the trades.
          </p>

          <h1
            className="m-0 text-center text-black capitalize"
            style={{
              fontFamily: "'Nanum Pen Script', cursive",
              fontWeight: 400,
              fontSize: "78px",
              lineHeight: "53.2px",
              letterSpacing: "-0.05em",
            }}
          >
            Koinophobia
          </h1>
        </div>

        {/* ── Two-col layout ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0px",
            alignItems: "start",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* ── LEFT: Dark card ── */}
          <div
            style={{
              position: "relative",
              background: "#0a0a0a",
              borderRadius: "20px",
              minHeight: "780px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: "20px", right: "20px", zIndex: 10 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "rgba(51,51,51,0.85)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "9999px",
                  padding: "8px 18px",
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: "14px",
                  letterSpacing: "-0.15px",
                }}
              >
                Coming soon
              </span>
            </div>

            <div style={{ flex: 1 }} />

            <div
              style={{
                margin: "20px",
                background: "rgba(51,51,51,0.7)",
                backdropFilter: "blur(10px)",
                borderRadius: "14px",
                padding: "16px 18px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "22.67px",
                  letterSpacing: "-0.3px",
                }}
              >
                Master crypto trading with our flagship course — your ticket to life-changing wins.
              </p>
            </div>
          </div>

          {/* ── RIGHT: Info column ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

            {/* Top card */}
            <div
              style={{
                background: "#F4F5F7",
                marginTop: "10px",
                borderTopRightRadius: "20px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "8px",
                }}
              >
                {features.map((f) => (
                  <div
                    key={f.label}
                    style={{
                      background: "#fff",
                      borderRadius: "12px",
                      padding: "16px 14px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <span>{f.icon}</span>
                    <span
                      style={{
                        fontWeight: 500,
                        fontSize: "13.5px",
                        lineHeight: "1.5",
                        letterSpacing: "-0.2px",
                        color: "#444",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <h3
                  style={{
                    margin: 0,
                    fontWeight: 600,
                    fontSize: "21px",
                    lineHeight: "26.45px",
                    letterSpacing: "-0.42px",
                    color: "#111",
                  }}
                >
                  What You&apos;ll Learn
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                  {learnings.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <svg
                        width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        style={{ marginTop: "3px", flexShrink: 0 }}
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span
                        style={{
                          fontWeight: 500,
                          fontSize: "16px",
                          lineHeight: "22.67px",
                          letterSpacing: "-0.3px",
                          color: "#333",
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Enroll now card ── */}
            <div
              style={{
                background: "#F4F5F7",
                borderRadius: "110px",
                marginLeft: "10px",
                padding: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                className="enroll-btn"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => { setHovered(false); setPressed(false); }}
                onMouseDown={() => setPressed(true)}
                onMouseUp={() => setPressed(false)}
              >
                <span className="enroll-label">Enroll now</span>
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}