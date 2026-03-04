"use client";

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
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>

      <section
        className="w-full bg-white"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", padding: "72px 80px" }}
      >

        {/* ── Header ── */}
        <div className="flex flex-col items-center gap-4 mb-14">

          {/* Badge */}
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

          {/* Subtitle */}
          <p
            className="text-center m-0"
            style={{ fontWeight: 500, fontSize: "18px", lineHeight: "100%", letterSpacing: "-0.02em", color: "#666", maxWidth: "440px" }}
          >
            Our battle-tested course turns novices into DeFi warriors. Learn the game, win the trades.
          </p>

          {/* Koinophobia */}
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
            gap: "16px",
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
            {/* Coming soon pill */}
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

            {/* Course image area */}
            <div style={{ flex: 1 }} />

            {/* Caption */}
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

          {/* ── RIGHT: Info column — no wrapper cards, floats on white bg ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", paddingLeft: "28px" }}>

            {/* 4 feature tiles — individual #F4F5F7 rounded cards with gaps */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
              {features.map((f) => (
                <div
                  key={f.label}
                  style={{
                    background: "#F4F5F7",
                    borderRadius: "14px",
                    padding: "18px 16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <span>{f.icon}</span>
                  <span
                    style={{
                      fontWeight: 500,
                      fontSize: "14px",
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

            {/* What You'll Learn — raw on white, no card */}
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

            {/* Enroll now — pill only, no outer container */}
            <button
              style={{
                width: "100%",
                height: "174px",
                borderRadius: "110px",
                background: "#CFD4DC",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
            >
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "32.2px",
                  lineHeight: "100%",
                  letterSpacing: "-0.01em",
                  color: "#707F8C",
                }}
              >
                Enroll now
              </span>
            </button>

          </div>
        </div>
      </section>
    </>
  );
}