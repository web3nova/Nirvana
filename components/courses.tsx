"use client";

import { useState, useEffect, useRef } from "react";

/* ── Keyframes injected once — only what Tailwind can't express ── */
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

  /* pill dot */
  .pill-dot::before {
    content: '';
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #2B7FFF;
    flex-shrink: 0;
    display: inline-block;
  }

  /* enroll button hover — vibrate + colour swap */
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

/* ── IntersectionObserver hook ── */
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

/* ── Data ── */
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
  const topRef  = useInView(0.1);
  const cardRef = useInView(0.1);

  return (
    <>
      <style>{STYLES}</style>

      {/* Section — reduced bottom padding pb-10 instead of pb-20 */}
      <section
        className="w-full bg-white flex flex-col items-center pt-12 pb-10 px-6"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >

        {/* ── Header block ── */}
        <div ref={topRef.ref} className="flex flex-col items-center w-full max-w-[900px]">

          {/* Latest Course pill */}
          <a
            href="#"
            className={`pill-dot inline-flex items-center gap-[7px] border border-[rgba(43,127,255,0.3)] rounded-full px-[18px] py-[6px] text-[12.5px] font-medium text-[#2B7FFF] bg-[rgba(43,127,255,0.04)] no-underline mb-[18px] hover:bg-[rgba(43,127,255,0.09)] transition-colors ${topRef.visible ? "anim-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0ms" }}
          >
            Latest Course
          </a>

          {/* Subtitle */}
          <p
            className={`text-[14px] text-[#888884] text-center leading-[22px] font-normal mb-[10px] ${topRef.visible ? "anim-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "70ms" }}
          >
            Our battle-tested course turns novices into DeFi warriors.<br />
            Learn the game, win the trades.
          </p>

          {/* Title */}
          <h1
            className={`text-center font-normal text-[#1a1916] leading-none mb-10 ${topRef.visible ? "anim-title" : "opacity-0"}`}
            style={{
              fontFamily: "'Nanum Pen Script', cursive",
              fontSize: "clamp(46px, 8vw, 64px)",
              animationDelay: "140ms",
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
          {/* Card: row on desktop, col on mobile */}
          <div className="flex flex-col sm:flex-row rounded-[20px] overflow-hidden shadow-[0_4px_48px_rgba(0,0,0,0.11)] min-h-[520px] sm:min-h-[480px]">

            {/* ── Left black panel (~62%) ── */}
            <div className="bg-[#0a0a0a] flex flex-col justify-between p-7 sm:flex-[62] w-full sm:w-auto min-h-[200px] sm:min-h-0">
              {/* Coming soon badge — top right */}
              <div className="flex justify-end">
                <span className="bg-white/[0.07] border border-white/[0.14] rounded-full px-[14px] py-[5px] text-[11px] text-white/70 font-medium tracking-[0.2px]">
                  Coming soon
                </span>
              </div>

              {/* Push description to bottom */}
              <div className="flex-1" />

              <p className="text-[13px] text-white/40 leading-[21px] font-light m-0 max-w-[260px]">
                Master crypto trading with our flagship course — your ticket to life-changing wins.
              </p>
            </div>

            {/* ── Right panel (~38%) ── */}
            <div className="bg-[#F7F8F9] sm:flex-[38] flex flex-col justify-between gap-[22px] p-6 sm:p-7 min-w-0">

              <div className="flex flex-col gap-[18px]">

                {/* Stats 2×2 grid */}
                <div className="grid grid-cols-2 gap-[10px]">
                  {stats.map((stat, i) => (
                    <div
                      key={i}
                      className={`bg-white border border-[rgba(43,127,255,0.3)] rounded-xl p-[14px] flex flex-col gap-3 ${cardRef.visible ? "anim-fade-up" : "opacity-0"}`}
                      style={{ animationDelay: `${240 + i * 55}ms` }}
                    >
                      {stat.icon}
                      <span
                        className="text-[13px] font-medium text-[#1a1916] leading-[18px] tracking-[-0.13px] whitespace-pre-line"
                      >
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-[#e4e6ea]" />

                {/* What You'll Learn */}
                <div>
                  <p
                    className={`text-[13px] font-semibold text-[#1a1916] tracking-[-0.13px] mb-3 ${cardRef.visible ? "anim-fade-up" : "opacity-0"}`}
                    style={{ animationDelay: "370ms" }}
                  >
                    What You'll Learn
                  </p>
                  <ul className="m-0 p-0 list-none flex flex-col gap-[11px]">
                    {learnItems.map((item, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-[10px] text-[13px] text-[#4a4845] leading-[18px] tracking-[-0.13px] ${cardRef.visible ? "anim-fade-up" : "opacity-0"}`}
                        style={{ animationDelay: `${410 + i * 45}ms` }}
                      >
                        <span
                          className={`w-[18px] h-[18px] rounded-full bg-[rgba(43,127,255,0.08)] border border-[rgba(43,127,255,0.2)] flex items-center justify-center shrink-0 text-[9px] text-[#2B7FFF] font-bold ${cardRef.visible ? "anim-check" : "opacity-0"}`}
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

              {/* ── Enroll button ── */}
              <div
                className={cardRef.visible ? "anim-fade-up" : "opacity-0"}
                style={{ animationDelay: "590ms" }}
              >
                <button
                  className="enroll-btn w-full flex items-center justify-between rounded-[110px] px-[14px] py-[14px] pl-7 cursor-pointer border-0 outline-none"
                  style={{ background: "#CFD4DC" }}
                >
                  <span className="enroll-text text-[15px] font-semibold text-[#1a1916] tracking-[-0.2px]">
                    Enroll now
                  </span>
                  <div
                    className="enroll-arrow w-[46px] h-[46px] rounded-full flex items-center justify-center text-white text-[20px] shrink-0"
                    style={{ background: "linear-gradient(135deg, #2B7FFF, #6c5ce7)" }}
                  >
                    →
                  </div>
                </button>
              </div>

            </div>
          </div>
        </div>

      </section>
    </>
  );
}