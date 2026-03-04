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
  const [pressed, setPressed] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        /* ── Animations ── */
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Page wrapper ── */
        .lc-page {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #fff;
          width: 100%;
          padding: 72px 80px;
          animation: fadeUp 0.5s ease both;
        }

        /* ── Header ── */
        .lc-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          margin-bottom: 56px;
          animation: fadeUp 0.5s 0.05s ease both;
          opacity: 0;
        }

        .lc-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 32px;
          border-radius: 9999px;
          border: 1px solid rgba(43,127,255,0.3);
          padding: 4px 14px;
        }
        .lc-badge span {
          font-weight: 500;
          font-size: 13px;
          letter-spacing: -0.02em;
          color: #2B7FFF;
          white-space: nowrap;
        }

        .lc-subtitle {
          font-weight: 500;
          font-size: 18px;
          line-height: 1.5;
          letter-spacing: -0.02em;
          color: #666;
          text-align: center;
          max-width: 440px;
          margin: 0;
        }

        .lc-title {
          font-family: 'Nanum Pen Script', cursive;
          font-weight: 400;
          font-size: 78px;
          line-height: 1;
          letter-spacing: -0.05em;
          color: #111;
          text-align: center;
          margin: 0;
        }

        /* ── Two-col grid (desktop) ── */
        .lc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          align-items: start;
          max-width: 1200px;
          margin: 0 auto;
          animation: fadeUp 0.5s 0.12s ease both;
          opacity: 0;
        }

        /* ── Dark hero card ── */
        .lc-hero {
          position: relative;
          background: #0a0a0a;
          border-radius: 20px;
          min-height: 780px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          overflow: hidden;
        }

        .lc-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 20% 30%, rgba(43,127,255,0.1) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 70%, rgba(100,60,200,0.08) 0%, transparent 55%);
          pointer-events: none;
        }

        .lc-coming-pill {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 10;
          display: inline-flex;
          align-items: center;
          background: rgba(51,51,51,0.85);
          backdrop-filter: blur(8px);
          border-radius: 9999px;
          padding: 8px 18px;
          color: #fff;
          font-weight: 500;
          font-size: 14px;
          letter-spacing: -0.15px;
        }

        .lc-hero-spacer { flex: 1; }

        .lc-hero-caption {
          margin: 20px;
          background: rgba(40,40,40,0.72);
          backdrop-filter: blur(10px);
          border-radius: 14px;
          padding: 16px 18px;
        }
        .lc-hero-caption p {
          margin: 0;
          color: #fff;
          font-weight: 500;
          font-size: 16px;
          line-height: 1.55;
          letter-spacing: -0.3px;
        }

        /* ── Right column ── */
        .lc-right {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        /* ── Info card ── */
        .lc-info-card {
          background: #F4F5F7;
          margin-top: 10px;
          border-top-right-radius: 20px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* ── Feature tiles ── */
        .lc-features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }

        .lc-feature-tile {
          background: #fff;
          border-radius: 12px;
          padding: 16px 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: transform 0.2s cubic-bezier(.34,1.56,.64,1), box-shadow 0.2s ease;
        }
        .lc-feature-tile:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0,0,0,0.07);
        }

        .lc-feature-label {
          font-weight: 500;
          font-size: 13.5px;
          line-height: 1.5;
          letter-spacing: -0.2px;
          color: #444;
          white-space: pre-line;
        }

        /* ── Learnings ── */
        .lc-learnings { display: flex; flex-direction: column; gap: 16px; }
        .lc-learnings-title {
          margin: 0;
          font-weight: 600;
          font-size: 21px;
          line-height: 1.3;
          letter-spacing: -0.42px;
          color: #111;
        }
        .lc-learnings-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .lc-learning-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .lc-learning-text {
          font-weight: 500;
          font-size: 16px;
          line-height: 1.55;
          letter-spacing: -0.3px;
          color: #333;
        }

        /* ── Enroll button ── */
        .lc-enroll-wrap {
          background: #F4F5F7;
          border-radius: 110px;
          margin-left: 10px;
          padding: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lc-enroll-btn {
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
        .lc-enroll-btn:hover::before {
          opacity: 1;
          animation: shimmer 1.4s linear infinite;
        }
        .lc-enroll-btn:active {
          transform: translateY(-1px) scale(0.995);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition-duration: 0.1s;
        }

        .lc-enroll-label {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 32.2px;
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

        .lc-arrow {
          display: inline-flex;
          transition: transform 0.3s cubic-bezier(.34,1.56,.64,1);
        }
        .lc-enroll-btn:hover .lc-arrow {
          transform: translateX(6px);
        }

        /* ══════════════════════════════════════════
           MOBILE  ≤ 767px
        ══════════════════════════════════════════ */
        @media (max-width: 767px) {

          .lc-page {
            padding: 44px 16px 36px;
          }

          .lc-header {
            gap: 12px;
            margin-bottom: 28px;
          }

          .lc-subtitle {
            font-size: 15px;
            max-width: 300px;
          }

          .lc-title {
            font-size: 62px;
          }

          /* stack into single column */
          .lc-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          /* hero card shrinks */
          .lc-hero {
            min-height: 260px;
            border-radius: 18px;
          }

          .lc-hero-caption {
            margin: 12px;
            padding: 13px 15px;
          }
          .lc-hero-caption p {
            font-size: 14px;
          }

          /* right column — no left margin on mobile */
          .lc-right {
            gap: 10px;
          }

          .lc-info-card {
            margin-top: 0;
            border-radius: 18px;
            padding: 16px;
            gap: 18px;
          }

          /* 2×2 on mobile */
          .lc-features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }

          .lc-feature-tile {
            padding: 14px 12px;
            gap: 8px;
          }

          .lc-feature-label {
            font-size: 12.5px;
          }

          .lc-learnings-title {
            font-size: 18px;
          }

          .lc-learning-text {
            font-size: 14px;
          }

          /* enroll button — shorter on mobile */
          .lc-enroll-wrap {
            margin-left: 0;
            border-radius: 9999px;
          }

          .lc-enroll-btn {
            height: 110px;
          }

          .lc-enroll-label {
            font-size: 26px;
            gap: 10px;
          }
        }

        /* ══════════════════════════════════════════
           TABLET  768px – 1023px
        ══════════════════════════════════════════ */
        @media (min-width: 768px) and (max-width: 1023px) {

          .lc-page {
            padding: 56px 40px;
          }

          .lc-title {
            font-size: 68px;
          }

          .lc-hero {
            min-height: 600px;
          }

          .lc-enroll-btn {
            height: 140px;
          }

          .lc-enroll-label {
            font-size: 28px;
          }
        }
      `}</style>

      <section className="lc-page">

        {/* ── Header ── */}
        <div className="lc-header">
          <div className="lc-badge">
            <span>Latest Course</span>
          </div>
          <p className="lc-subtitle">
            Our battle-tested course turns novices into DeFi warriors. Learn the game, win the trades.
          </p>
          <h1 className="lc-title">Koinophobia</h1>
        </div>

        {/* ── Responsive grid ── */}
        <div className="lc-grid">

          {/* LEFT — dark hero card */}
          <div className="lc-hero">
            <span className="lc-coming-pill">Coming soon</span>
            <div className="lc-hero-spacer" />
            <div className="lc-hero-caption">
              <p>Master crypto trading with our flagship course — your ticket to life-changing wins.</p>
            </div>
          </div>

          {/* RIGHT — info + enroll */}
          <div className="lc-right">

            {/* Info card */}
            <div className="lc-info-card">

              {/* Feature tiles */}
              <div className="lc-features-grid">
                {features.map((f) => (
                  <div className="lc-feature-tile" key={f.label}>
                    <span>{f.icon}</span>
                    <span className="lc-feature-label">{f.label}</span>
                  </div>
                ))}
              </div>

              {/* What You'll Learn */}
              <div className="lc-learnings">
                <h3 className="lc-learnings-title">What You'll Learn</h3>
                <ul className="lc-learnings-list">
                  {learnings.map((item) => (
                    <li className="lc-learning-item" key={item}>
                      <svg
                        width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="#666" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                        style={{ marginTop: "3px", flexShrink: 0 }}
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="lc-learning-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Enroll button */}
            <div className="lc-enroll-wrap">
              <button
                className="lc-enroll-btn"
                onMouseDown={() => setPressed(true)}
                onMouseUp={() => setPressed(false)}
                onMouseLeave={() => setPressed(false)}
                onTouchStart={() => setPressed(true)}
                onTouchEnd={() => setPressed(false)}
              >
                <span className="lc-enroll-label">
                  Enroll now
                  <span className="lc-arrow">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </span>
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}