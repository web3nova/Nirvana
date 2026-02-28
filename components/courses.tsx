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

const stats = [
  {
    label: "12 Weeks\nIntensive",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5a5a72" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    label: "Cohort-Based\nLearning",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5a5a72" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5a5a72" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    label: "Certificate of\nCompletion",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5a5a72" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
];

const learnItems = [
  "Build and deploy smart contracts on Ethereum",
  "Create decentralized applications (dApps)",
  "Understand DeFi protocols and tokenomics",
  "Master Web3 security best practices",
];

export default function Courses() {
  const topRef = useInView(0.1);
  const cardRef = useInView(0.1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes titleReveal {
          from { opacity: 0; transform: translateY(30px) rotate(-1.5deg); }
          to   { opacity: 1; transform: translateY(0) rotate(0deg); }
        }
        @keyframes cardUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes checkPop {
          from { opacity: 0; transform: scale(0.4); }
          to   { opacity: 1; transform: scale(1); }
        }

        .anim-fade-up  { animation: fadeUp 0.55s cubic-bezier(0.22,0.68,0,1.1) both; }
        .anim-fade-in  { animation: fadeIn 0.4s ease both; }
        .anim-title    { animation: titleReveal 0.72s cubic-bezier(0.22,0.68,0,1.1) both; }
        .anim-card     { animation: cardUp 0.65s cubic-bezier(0.22,0.68,0,1.05) both; }
        .anim-check    { animation: checkPop 0.3s cubic-bezier(0.34,1.56,0.64,1) both; }

        .latest-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border: 1px solid rgba(43,127,255,0.3);
          border-radius: 999px;
          padding: 6px 18px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 12.5px;
          font-weight: 500;
          color: #2B7FFF;
          text-decoration: none;
          background: rgba(43,127,255,0.04);
          letter-spacing: -0.1px;
          transition: background 0.2s;
        }
        .latest-pill:hover { background: rgba(43,127,255,0.09); }
        .latest-pill::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #2B7FFF;
          flex-shrink: 0;
        }

        .courses-section {
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 52px 16px 80px;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .top-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 780px;
        }

        .card-wrapper {
          width: 100%;
          max-width: 780px;
        }

        /* The card: side-by-side on desktop, stacked on mobile */
        .course-card {
          display: flex;
          flex-direction: row;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 40px rgba(0,0,0,0.09);
        }

        .black-panel {
          background: #0a0a0a;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 20px;
          width: 36%;
          min-height: 440px;
          flex-shrink: 0;
        }

        .right-panel {
          background: #F7F8F9;
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 24px;
          gap: 20px;
          justify-content: space-between;
          min-width: 0;
        }

        /* Stat boxes: row on desktop */
        .stats-row {
          display: flex;
          flex-direction: row;
          gap: 10px;
        }

        .stat-box {
          background: #ffffff;
          border: 1px solid rgba(43,127,255,0.3);
          border-radius: 12px;
          padding: 16px 14px 14px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
          min-width: 0;
        }

        .stat-label {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 500;
          font-size: 14px;
          line-height: 18.89px;
          letter-spacing: -0.14px;
          color: #1a1916;
          white-space: pre-line;
        }

        .learn-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .learn-item {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 18.89px;
          letter-spacing: -0.14px;
          color: #4a4845;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .learn-check {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(43,127,255,0.08);
          border: 1px solid rgba(43,127,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 0px;
          font-size: 10px;
          color: #2B7FFF;
          font-weight: 600;
        }

        .enroll-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #EAECF0;
          border: none;
          outline: none;
          border-radius: 999px;
          padding: 6px 6px 6px 22px;
          cursor: pointer;
          transition: background 0.22s ease, transform 0.15s ease, box-shadow 0.22s ease;
        }
        .enroll-btn:hover {
          background: #2B7FFF;
          transform: translateY(-1px);
          box-shadow: 0 8px 28px rgba(43,127,255,0.28);
        }
        .enroll-btn:hover .enroll-text { color: #ffffff; }
        .enroll-btn:hover .enroll-circle {
          background: rgba(255,255,255,0.22) !important;
        }
        .enroll-btn:active { transform: translateY(0); box-shadow: none; }

        .enroll-text {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #1a1916;
          letter-spacing: -0.2px;
          transition: color 0.22s ease;
        }

        .enroll-circle {
          width: 46px; height: 46px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2B7FFF, #6c5ce7);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
          flex-shrink: 0;
          transition: background 0.22s ease;
        }

        /* ─── MOBILE ─── */
        @media (max-width: 639px) {
          .course-card {
            flex-direction: column;
          }
          .black-panel {
            width: 100%;
            min-height: 180px;
            padding: 18px;
            border-radius: 0;
          }
          .right-panel {
            padding: 20px 16px 18px;
          }
          /* 2x2 grid on mobile */
          .stats-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          .stat-box {
            flex: unset;
            padding: 14px 12px 12px;
          }
          .stat-label {
            font-size: 13px;
            line-height: 17px;
          }
          .learn-item {
            font-size: 13.5px;
          }
          .enroll-text { font-size: 14px; }
          .enroll-circle { width: 42px; height: 42px; font-size: 18px; }
        }
      `}</style>

      <section className="courses-section">

        {/* ── Top block ── */}
        <div ref={topRef.ref} className="top-block">

          <a
            href="#"
            className={`latest-pill ${topRef.visible ? "anim-fade-in" : "opacity-0"}`}
            style={{ marginBottom: 18, animationDelay: "0ms" }}
          >
            Latest Course
          </a>

          <p
            className={topRef.visible ? "anim-fade-up" : "opacity-0"}
            style={{
              fontSize: 14,
              color: "#888884",
              textAlign: "center",
              lineHeight: "22px",
              marginBottom: 10,
              fontWeight: 400,
              animationDelay: "70ms",
            }}
          >
            Our battle-tested course turns novices into DeFi warriors.<br />
            Learn the game, win the trades.
          </p>

          <h1
            className={topRef.visible ? "anim-title" : "opacity-0"}
            style={{
              fontFamily: "'Nanum Pen Script', cursive",
              fontSize: "clamp(46px, 8vw, 64px)",
              fontWeight: 400,
              color: "#1a1916",
              textAlign: "center",
              lineHeight: 1,
              margin: "0 0 40px",
              animationDelay: "140ms",
            }}
          >
            Koinophobia
          </h1>
        </div>

        {/* ── Card ── */}
        <div
          ref={cardRef.ref}
          className={`card-wrapper ${cardRef.visible ? "anim-card" : "opacity-0"}`}
          style={{ animationDelay: "80ms" }}
        >
          <div className="course-card">

            {/* Left black panel */}
            <div className="black-panel">
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <span style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: 999,
                  padding: "5px 14px",
                  fontSize: 11,
                  color: "rgba(255,255,255,0.7)",
                  fontWeight: 500,
                  letterSpacing: "0.2px",
                }}>
                  Coming soon
                </span>
              </div>
              <p style={{
                fontSize: 12.5,
                color: "rgba(255,255,255,0.4)",
                lineHeight: "20px",
                fontWeight: 300,
                margin: 0,
                maxWidth: 180,
              }}>
                Master crypto trading with our flagship course — your ticket to life-changing wins.
              </p>
            </div>

            {/* Right content panel */}
            <div className="right-panel">

              {/* Top section */}
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

                {/* Stats */}
                <div className="stats-row">
                  {stats.map((stat, i) => (
                    <div
                      key={i}
                      className={`stat-box ${cardRef.visible ? "anim-fade-up" : "opacity-0"}`}
                      style={{ animationDelay: `${240 + i * 55}ms` }}
                    >
                      {stat.icon}
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: "#e4e6ea" }} />

                {/* What You'll Learn */}
                <div>
                  <p
                    className={cardRef.visible ? "anim-fade-up" : "opacity-0"}
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#1a1916",
                      letterSpacing: "-0.14px",
                      marginBottom: 14,
                      animationDelay: "370ms",
                    }}
                  >
                    What You'll Learn
                  </p>
                  <ul className="learn-list">
                    {learnItems.map((item, i) => (
                      <li
                        key={i}
                        className={`learn-item ${cardRef.visible ? "anim-fade-up" : "opacity-0"}`}
                        style={{ animationDelay: `${410 + i * 45}ms` }}
                      >
                        <span
                          className={`learn-check ${cardRef.visible ? "anim-check" : "opacity-0"}`}
                          style={{ animationDelay: `${425 + i * 45}ms` }}
                        >
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Enroll — bottom */}
              <div
                className={cardRef.visible ? "anim-fade-up" : "opacity-0"}
                style={{ animationDelay: "590ms" }}
              >
                <button className="enroll-btn">
                  <span className="enroll-text">Enroll now</span>
                  <div className="enroll-circle">→</div>
                </button>
              </div>

            </div>
          </div>
        </div>

      </section>
    </>
  );
}