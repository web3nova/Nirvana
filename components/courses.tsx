"use client";

import { useState, useEffect, useRef } from "react";

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

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
  @keyframes vibrate {
    0%,100% { transform: translateX(0); }
    15%      { transform: translateX(-3px) rotate(-0.5deg); }
    30%      { transform: translateX(3px)  rotate(0.5deg); }
    45%      { transform: translateX(-2px) rotate(-0.3deg); }
    60%      { transform: translateX(2px)  rotate(0.3deg); }
    75%      { transform: translateX(-1px); }
    88%      { transform: translateX(1px); }
  }

  .anim-fade-up  { animation: fadeUp     0.55s cubic-bezier(0.22,0.68,0,1.1)  both; }
  .anim-fade-in  { animation: fadeIn     0.4s  ease                            both; }
  .anim-title    { animation: titleReveal 0.72s cubic-bezier(0.22,0.68,0,1.1) both; }
  .anim-card     { animation: cardUp     0.65s cubic-bezier(0.22,0.68,0,1.05) both; }
  .anim-check    { animation: checkPop   0.3s  cubic-bezier(0.34,1.56,0.64,1) both; }

  .enroll-btn {
    transition: background 0.28s ease, box-shadow 0.28s ease;
  }
  .enroll-btn:hover {
    background: #2B7FFF !important;
    box-shadow: 0 8px 32px rgba(43,127,255,0.32);
    animation: vibrate 0.38s ease;
  }
  .enroll-btn:hover .enroll-text { color: #ffffff; }
  .enroll-btn:hover .enroll-arrow { background: rgba(255,255,255,0.22) !important; }
  .enroll-btn:active { box-shadow: none; }
  .enroll-text { transition: color 0.28s ease; }
`;

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    label: "Cohort-Based\nLearning",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    label: "Certificate of\nCompletion",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
  const topRef  = useInView(0.1);
  const cardRef = useInView(0.1);

  return (
    <>
      <style>{STYLES}</style>

      <section
        className="w-full bg-white flex flex-col items-center pt-12 pb-10 px-6"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >

        {/* ── Header block ── */}
        <div ref={topRef.ref} className="flex flex-col items-center w-full max-w-[900px]">

          {/* Latest Course pill — exact specs */}
          <a
            href="#"
            className={`inline-flex items-center justify-center no-underline mb-[18px] hover:bg-[rgba(43,127,255,0.06)] transition-colors ${topRef.visible ? "anim-fade-in" : "opacity-0"}`}
            style={{
              animationDelay: "0ms",
              width: "123px",
              height: "32px",
              gap: "4px",
              borderRadius: "16777200px",
              paddingTop: "4px",
              paddingRight: "10px",
              paddingBottom: "4px",
              paddingLeft: "10px",
              border: "1px solid rgba(43, 127, 255, 0.30)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "-0.31px",
              textAlign: "center",
              color: "#1a1916",
              boxSizing: "border-box",
            }}
          >
            Latest Course
          </a>

          {/* Subtitle */}
          <p
            className={`text-center text-[#888884] mb-[10px] ${topRef.visible ? "anim-fade-up" : "opacity-0"}`}
            style={{
              animationDelay: "70ms",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "100%",
              letterSpacing: "-0.36px",
              textAlign: "center",
              margin: "0 0 10px 0",
            }}
          >
            Our battle-tested course turns novices into DeFi warriors.<br />
            Learn the game, win the trades.
          </p>

          {/* Title */}
          <h1
            className={`text-[#1a1916] ${topRef.visible ? "anim-title" : "opacity-0"}`}
            style={{
              fontFamily: "'Nanum Pen Script', cursive",
              fontWeight: 400,
              fontSize: "78px",
              lineHeight: "53.2px",
              letterSpacing: "-3.9px",
              textAlign: "center",
              textTransform: "capitalize",
              animationDelay: "140ms",
              margin: "16px 0 40px 0",
            }}
          >
            Koinophobia
          </h1>
        </div>

        {/* ── Card wrapper ── */}
        <div
          ref={cardRef.ref}
          className={`w-full max-w-[900px] ${cardRef.visible ? "anim-card" : "opacity-0"}`}
          style={{ animationDelay: "80ms" }}
        >
          <div
            className="flex flex-col sm:flex-row rounded-[20px] overflow-hidden"
            style={{
              minHeight: "460px",
              boxShadow: "0 4px 48px rgba(0,0,0,0.11)",
            }}
          >

            {/* ── Left black panel (~55%) ── */}
            <div
              className="bg-[#0a0a0a] flex flex-col justify-between p-7 w-full"
              style={{ flex: "0 0 55%" }}
            >
              <div className="flex justify-end">
                <span
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    borderRadius: "9999px",
                    padding: "5px 14px",
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.7)",
                    fontWeight: 500,
                    letterSpacing: "0.2px",
                  }}
                >
                  Coming soon
                </span>
              </div>

              <div className="flex-1" />

              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  lineHeight: "21px",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.4)",
                  maxWidth: "260px",
                }}
              >
                Master crypto trading with our flagship course — your ticket to life-changing wins.
              </p>
            </div>

            {/* ── Right panel (~45%) ── */}
            <div
              className="flex flex-col justify-between w-full"
              style={{
                flex: "0 0 45%",
                background: "#F7F8F9",
                padding: "24px",
                gap: "20px",
              }}
            >
              <div className="flex flex-col" style={{ gap: "18px" }}>

                {/* Stats — 4 dark boxes in a row */}
                <div className="flex w-full gap-[8px]" style={{ paddingBottom: "18px", borderBottom: "1px solid #e4e6ea" }}>
                  {stats.map((stat, i) => (
                    <div
                      key={i}
                      className={`flex flex-col justify-between ${cardRef.visible ? "anim-fade-up" : "opacity-0"}`}
                      style={{
                        flex: 1,
                        background: "#FFFFFF",
                        borderRadius: "4.72px",
                        overflow: "hidden",
                        minHeight: "117px",
                        animationDelay: `${240 + i * 55}ms`,
                      }}
                    >
                      {/* Inner dark area for icon + text */}
                      <div
                        style={{
                          background: "#333333CC",
                          paddingTop: "34.95px",
                          paddingRight: "9.44px",
                          paddingBottom: "14.17px",
                          paddingLeft: "9.44px",
                          gap: "7.56px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          height: "100%",
                        }}
                      >
                        <div style={{ color: "rgba(255,255,255,0.6)" }}>{stat.icon}</div>
                        <span
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 500,
                            fontSize: "14px",
                            lineHeight: "18.89px",
                            letterSpacing: "-0.14px",
                            color: "#ffffff",
                            whiteSpace: "pre-line",
                          }}
                        >
                          {stat.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* What You'll Learn */}
                <div>
                  <p
                    className={`${cardRef.visible ? "anim-fade-up" : "opacity-0"}`}
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: "21px",
                      lineHeight: "26.45px",
                      letterSpacing: "-0.42px",
                      color: "#1a1916",
                      margin: "0 0 12px 0",
                      animationDelay: "370ms",
                    }}
                  >
                    What You'll Learn
                  </p>
                  <ul className="m-0 p-0 list-none flex flex-col" style={{ gap: "11px" }}>
                    {learnItems.map((item, i) => (
                      <li
                        key={i}
                        className={`flex items-start ${cardRef.visible ? "anim-fade-up" : "opacity-0"}`}
                        style={{
                          gap: "10px",
                          fontSize: "13px",
                          color: "#4a4845",
                          lineHeight: "18px",
                          letterSpacing: "-0.13px",
                          animationDelay: `${410 + i * 45}ms`,
                        }}
                      >
                        <span
                          className={`flex items-center justify-center shrink-0 ${cardRef.visible ? "anim-check" : "opacity-0"}`}
                          style={{
                            width: "16px",
                            height: "16px",
                            borderRadius: "50%",
                            background: "#ebebeb",
                            border: "1px solid #d8d8d8",
                            fontSize: "8px",
                            color: "#555",
                            fontWeight: 700,
                            animationDelay: `${425 + i * 45}ms`,
                            marginTop: "1px",
                          }}
                        >
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ── Enroll button ── */}
              <div
                className={cardRef.visible ? "anim-fade-up" : "opacity-0"}
                style={{ animationDelay: "590ms" }}
              >
                <button
                  className="enroll-btn w-full flex items-center justify-center cursor-pointer border-0 outline-none"
                  style={{
                    background: "#CFD4DC",
                    borderRadius: "110.04px",
                    paddingTop: "30.19px",
                    paddingBottom: "30.19px",
                    paddingLeft: "62.39px",
                    paddingRight: "62.39px",
                    gap: "1.12px",
                  }}
                >
                  <span
                    className="enroll-text"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: "32.2px",
                      lineHeight: "100%",
                      letterSpacing: "-0.322px",
                      color: "#707F8C",
                    }}
                  >
                    Enroll now
                  </span>
                </button>
              </div>

            </div>
          </div>
        </div>

      </section>
    </>
  );
}