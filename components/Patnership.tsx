"use client";

import { useState } from "react";

// Vector 2 - top left area (original from Figma)
const Vector2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="68" fill="none" viewBox="0 0 80 68" style={{ width: "100%", height: "100%" }}>
    <path fill="#000" d="m1.73 7.473-.913-.409L0 8.89l.913.408.408-.912zm51.134 3.049.913-.41zM34.328 31.08l.51-.861zm42.12 4.912-.945-.326zm-24.417 6.002-.969.25zm27.491 20.183a1 1 0 0 0 .227-1.396l-5.265-7.3a1 1 0 0 0-1.622 1.17l4.68 6.489-6.49 4.679a1 1 0 1 0 1.17 1.622zM1.322 8.386l-.41.912c10.571 4.732 25.9 10.548 37.449 12.543 2.893.5 5.58.765 7.916.705 2.32-.059 4.38-.441 5.952-1.313 1.623-.9 2.697-2.308 2.975-4.256.27-1.883-.217-4.166-1.427-6.864l-.913.409-.912.41c1.14 2.54 1.465 4.415 1.273 5.761-.184 1.28-.845 2.17-1.965 2.79-1.17.649-2.861 1.008-5.035 1.064-2.158.055-4.706-.19-7.524-.677C27.403 17.918 12.258 12.186 1.73 7.473zm51.542 2.136.913-.41C50.75 3.37 46.614.274 42.253.018 37.964-.235 33.857 2.291 30.907 5.9 27.944 9.525 26 14.408 26.126 19.211c.127 4.853 2.374 9.582 7.693 12.73l.51-.86.508-.861c-4.691-2.777-6.602-6.855-6.712-11.061-.112-4.257 1.625-8.684 4.33-11.993 2.718-3.324 6.264-5.353 9.68-5.152 3.345.196 6.966 2.561 9.817 8.917zM34.328 31.08l-.51.86c3.691 2.184 13.033 7.153 22.132 9.72 4.538 1.28 9.124 1.994 12.953 1.391 3.894-.614 7.07-2.615 8.49-6.733l-.945-.326-.945-.326c-1.127 3.266-3.574 4.883-6.912 5.41-3.403.536-7.658-.089-12.098-1.341-8.86-2.5-18.031-7.37-21.656-9.516zm42.12 4.912.946.326c.624-1.811.637-3.445.065-4.845-.57-1.394-1.667-2.424-3.013-3.136-2.657-1.403-6.473-1.676-10.175-1.055-3.719.623-7.523 2.182-10.161 4.667-2.68 2.525-4.151 6.018-3.048 10.295l.969-.25.968-.25c-.895-3.47.252-6.238 2.482-8.34 2.272-2.14 5.67-3.571 9.12-4.15 3.468-.581 6.788-.27 8.91.852 1.043.55 1.747 1.268 2.097 2.124.348.85.4 1.97-.105 3.436zm-24.417 6.002-.969.25c2.754 10.677 14.598 17.984 27.716 20.109l.16-.987.16-.987c-12.794-2.073-23.638-9.094-26.1-18.635z"/>
  </svg>
);

// Vector 3 - bottom left area (original from Figma)
const Vector3 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="86" height="61" fill="none" viewBox="0 0 86 61" style={{ width: "100%", height: "100%" }}>
    <path fill="#000" d="m.76 58.153-.76.65 1.3 1.52.76-.65-.65-.76zm24.662-44.898.021-1zm10.635 25.557-.559-.83zM58.541 2.857l-.7.715zm-5.038 24.635-.189.982zm30.015-16.195a1 1 0 0 0-1.164-.802l-8.852 1.63a1 1 0 1 0 .363 1.966l7.867-1.448 1.449 7.868a1 1 0 0 0 1.967-.363zM1.41 58.913l.65.76c8.804-7.524 20.625-18.882 27.376-28.464 1.691-2.4 3.083-4.715 4.029-6.85.94-2.121 1.477-4.147 1.363-5.941-.117-1.852-.93-3.426-2.571-4.512-1.585-1.05-3.857-1.589-6.814-1.65l-.02.999-.022 1c2.785.058 4.618.568 5.752 1.318 1.078.714 1.598 1.693 1.68 2.971.084 1.335-.316 3.017-1.196 5.005-.875 1.974-2.189 4.17-3.836 6.509-6.604 9.372-18.272 20.6-27.04 28.095zm24.012-45.658.021-1c-7.39-.155-11.959 2.256-14.059 6.088-2.065 3.767-1.542 8.56.455 12.772 2.006 4.23 5.586 8.08 9.98 10.023 4.439 1.964 9.674 1.96 14.798-1.498l-.56-.828-.559-.83c-4.519 3.05-9.022 3.03-12.87 1.327-3.894-1.722-7.15-5.189-8.982-9.05-1.84-3.88-2.154-7.954-.508-10.955 1.61-2.937 5.299-5.196 12.263-5.05zm10.635 25.557.56.828c3.554-2.398 12.046-8.71 18.263-15.833 3.101-3.552 5.712-7.39 6.807-11.107 1.114-3.782.666-7.51-2.446-10.557l-.7.714-.7.715c2.47 2.417 2.882 5.321 1.927 8.562-.973 3.306-3.36 6.882-6.395 10.358-6.053 6.935-14.384 13.135-17.875 15.49zM58.541 2.857l.7-.714C57.871.802 56.401.09 54.891.008c-1.504-.082-2.905.467-4.124 1.38-2.406 1.799-4.288 5.13-5.313 8.74-1.03 3.628-1.252 7.733-.136 11.182 1.133 3.503 3.659 6.328 7.996 7.164l.19-.982.189-.982c-3.519-.678-5.53-2.9-6.472-5.816-.96-2.97-.799-6.654.157-10.02.96-3.381 2.664-6.248 4.586-7.685.945-.706 1.894-1.035 2.818-.984.918.05 1.952.482 3.06 1.567zm-5.038 24.635-.189.982c10.828 2.086 22.504-5.486 30.044-16.428l-.823-.568-.824-.567C74.358 21.583 63.368 28.374 53.693 26.51z"/>
  </svg>
);

// Vector 4 - top right area (original from Figma)
const Vector4 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="68" fill="none" viewBox="0 0 80 68" style={{ width: "100%", height: "100%" }}>
    <path fill="#000" d="m78.208 7.473.912-.409.817 1.826-.912.408-.409-.912zm-51.135 3.049-.912-.41zM45.61 31.08l-.509-.861zM3.49 35.993l.946-.326zm24.418 6.002.968.25zM.415 62.178a1 1 0 0 1-.226-1.396l5.264-7.3a1 1 0 1 1 1.622 1.17L2.396 61.14l6.489 4.679a1 1 0 1 1-1.17 1.622zM78.616 8.386l.409.912c-10.57 4.732-25.899 10.548-37.448 12.543-2.894.5-5.581.765-7.916.705-2.32-.059-4.38-.441-5.953-1.313-1.623-.9-2.696-2.308-2.975-4.256-.27-1.883.217-4.166 1.428-6.864l.912.409.912.41c-1.14 2.54-1.465 4.415-1.272 5.761.183 1.28.845 2.17 1.965 2.79 1.17.649 2.86 1.008 5.034 1.064 2.159.055 4.706-.19 7.524-.677 11.299-1.952 26.444-7.684 36.972-12.397zm-51.543 2.136-.912-.41C29.186 3.37 33.323.274 37.684.018c4.29-.252 8.397 2.274 11.347 5.883 2.962 3.625 4.907 8.508 4.78 13.311-.127 4.853-2.373 9.582-7.692 12.73l-.51-.86-.509-.861c4.691-2.777 6.602-6.855 6.712-11.061.112-4.257-1.625-8.684-4.33-11.993-2.717-3.324-6.263-5.353-9.68-5.152-3.344.196-6.965 2.561-9.817 8.917zM45.61 31.08l.51.86c-3.69 2.184-13.032 7.153-22.131 9.72-4.538 1.28-9.124 1.994-12.953 1.391-3.894-.614-7.07-2.615-8.491-6.733l.945-.326.946-.326c1.126 3.266 3.574 4.883 6.911 5.41 3.404.536 7.658-.089 12.099-1.341 8.86-2.5 18.03-7.37 21.655-9.516zM3.49 35.993l-.945.326c-.625-1.811-.638-3.445-.065-4.845.57-1.394 1.666-2.424 3.013-3.136 2.656-1.403 6.473-1.676 10.175-1.055 3.719.623 7.522 2.182 10.16 4.667 2.68 2.525 4.152 6.018 3.048 10.295l-.968-.25-.968-.25c.895-3.47-.253-6.238-2.483-8.34-2.272-2.14-5.67-3.571-9.12-4.15-3.468-.581-6.788-.27-8.91.852-1.043.55-1.746 1.268-2.096 2.124-.348.85-.4 1.97.105 3.436zm24.418 6.002.968.25C26.121 52.922 14.278 60.229 1.16 62.354L1 61.367l-.16-.987c12.793-2.073 23.638-9.094 26.099-18.635z"/>
  </svg>
);

// Vector 5 - bottom right area (original from Figma)
const Vector5 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="86" height="61" fill="none" viewBox="0 0 86 61" style={{ width: "100%", height: "100%" }}>
    <path fill="#000" d="m84.404 58.153.76.65-1.3 1.52-.76-.65.65-.76zM59.742 13.255l-.021-1zM49.107 38.812l.56-.83zM26.623 2.857l.7.715zm5.038 24.635.189.982zM1.646 11.297a1 1 0 0 1 1.164-.802l8.852 1.63a1 1 0 0 1-.362 1.966l-7.868-1.448-1.449 7.868a1 1 0 0 1-1.967-.363zm82.108 47.616-.65.76C74.3 52.15 62.48 40.791 55.728 31.21c-1.691-2.4-3.083-4.715-4.029-6.85-.94-2.121-1.477-4.147-1.363-5.941.117-1.852.93-3.426 2.571-4.512 1.585-1.05 3.857-1.589 6.814-1.65l.02.999.022 1c-2.784.058-4.618.568-5.752 1.318-1.078.714-1.598 1.693-1.68 2.971-.084 1.335.316 3.017 1.197 5.005.874 1.974 2.188 4.17 3.835 6.509 6.604 9.372 18.272 20.6 27.04 28.095zM59.742 13.255l-.021-1c7.39-.155 11.959 2.256 14.059 6.088 2.065 3.767 1.542 8.56-.455 12.772-2.006 4.23-5.585 8.08-9.98 10.023-4.438 1.964-9.674 1.96-14.798-1.498l.56-.828.56-.83c4.518 3.05 9.021 3.03 12.87 1.327 3.893-1.722 7.15-5.189 8.98-9.05 1.84-3.88 2.155-7.954.51-10.955-1.611-2.937-5.3-5.196-12.264-5.05zM49.107 38.812l-.56.828c-3.554-2.398-12.046-8.71-18.263-15.833-3.101-3.552-5.712-7.39-6.807-11.107-1.114-3.782-.666-7.51 2.446-10.557l.7.714.7.715c-2.47 2.417-2.882 5.321-1.927 8.562.973 3.306 3.36 6.882 6.395 10.358 6.053 6.935 14.384 13.135 17.875 15.49zM26.623 2.857l-.7-.714C27.293.802 28.763.09 30.273.008c1.504-.082 2.905.467 4.124 1.38 2.407 1.799 4.288 5.13 5.313 8.74 1.03 3.628 1.252 7.733.136 11.182-1.133 3.503-3.659 6.328-7.996 7.164l-.19-.982-.189-.982c3.519-.678 5.53-2.9 6.472-5.816.96-2.97.799-6.654-.157-10.02-.96-3.381-2.664-6.248-4.586-7.685-.945-.706-1.894-1.035-2.818-.984-.918.05-1.952.482-3.06 1.567zm5.038 24.635.189.982C21.022 30.56 9.346 22.988 1.806 12.046l.823-.568.824-.567c7.353 10.672 18.343 17.463 28.019 15.599z"/>
  </svg>
);

// Image slot colors from spec
const imageSlots = [
  { bg: "#E7E9EE" }, // img 1
  { bg: "#F7F8F9" }, // img 2
  { bg: "#F7F8F9" }, // img 3 - center (replace with actual photo)
  { bg: "#F7F8F9" }, // img 4
  { bg: "#F7F8F9" }, // img 5
];

export default function PartnershipSection() {
  const [activeImg, setActiveImg] = useState(2); // center active by default

  return (
    <section
      className="relative w-full flex flex-col items-center py-16 px-6 bg-white overflow-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Google Fonts import via style tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        .img-slot {
          transition: all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          flex-shrink: 0;
        }
        .img-slot.active {
          transform: scale(1.1);
          box-shadow: 0 12px 40px rgba(43,127,255,0.18);
          z-index: 10;
          border-radius: 20px;
        }
        .partner-btn {
          transition: transform 0.15s ease, opacity 0.15s ease;
        }
        .partner-btn:hover {
          opacity: 0.93;
          transform: scale(1.015);
        }
        .partner-btn:active {
          transform: scale(0.97);
        }
        .lets-talk-btn {
          transition: background 0.2s ease, opacity 0.2s ease;
        }
        .lets-talk-btn:hover {
          opacity: 0.8;
        }
      `}</style>

      {/* Sponsorship x Partnership Badge */}
      <div
        className="flex items-center justify-center mb-10"
        style={{
          width: "211px",
          height: "32px",
          borderRadius: "9999px",
          border: "1px solid #2B7FFF",
          gap: "4px",
          paddingTop: "4px",
          paddingRight: "10px",
          paddingBottom: "4px",
          paddingLeft: "10px",
        }}
      >
        <span
          style={{
            color: "#2B7FFF",
            fontSize: "13px",
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}
        >
          Sponsorship x Partnership
        </span>
      </div>

      {/* Image Row */}
      <div
        className="flex items-center justify-center mb-10 w-full"
        style={{ gap: "10px", maxWidth: "700px" }}
      >
        {imageSlots.map((slot, i) => {
          const isActive = activeImg === i;
          // Sizes: active = larger, others = smaller
          const w = isActive ? "clamp(120px, 18vw, 170px)" : "clamp(70px, 11vw, 110px)";
          const h = isActive ? "clamp(120px, 18vw, 170px)" : "clamp(70px, 11vw, 110px)";

          return (
            <div
              key={i}
              className={`img-slot${isActive ? " active" : ""}`}
              onClick={() => setActiveImg(i)}
              style={{
                backgroundColor: slot.bg,
                width: w,
                height: h,
              }}
            >
              {i === 2 ? (
                <img
                  src="/patnership.jpg"
                  alt="partnership"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : null}
            </div>
          );
        })}
      </div>

      {/* Main Heading */}
      <h2
        className="text-center mb-4"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 500,
          fontSize: "clamp(30px, 4.5vw, 48px)",
          lineHeight: "1.0",
          letterSpacing: "-0.05em",
          color: "#030303",
          maxWidth: "520px",
        }}
      >
        Partner with the Community
      </h2>

      {/* Sub text */}
      <p
        className="text-center mb-12"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 500,
          fontSize: "18px",
          lineHeight: "100%",
          letterSpacing: "-0.02em",
          color: "#6F6F6F",
          maxWidth: "420px",
        }}
      >
        Collaborate with a thriving Web3 community through events, drops, and
        education. Let's build the future together!
      </p>

      {/* Partner Now Button + Vectors Container */}
      <div
        className="relative flex items-center justify-center w-full mb-10"
        style={{ maxWidth: "900px", minHeight: "200px" }}
      >
        {/* Vector 2 - top left: pointing toward button (arrow → right) */}
        <div
          className="absolute hidden md:block pointer-events-none"
          style={{
            width: "80px",
            height: "68px",
            left: "-10px",
            top: "20px",
            transform: "rotate(-15deg)",
            transformOrigin: "center center",
          }}
        >
          <Vector2 />
        </div>

        {/* Vector 5 - top right: mirror of top left (arrow ← left) */}
        <div
          className="absolute hidden md:block pointer-events-none"
          style={{
            width: "80px",
            height: "68px",
            right: "-10px",
            top: "20px",
            transform: "rotate(-15deg) scaleX(-1)",
            transformOrigin: "center center",
          }}
        >
          <Vector2 />
        </div>

        {/* Vector 3 - bottom left: pointing toward button (arrow → right) */}
        <div
          className="absolute hidden md:block pointer-events-none"
          style={{
            width: "86px",
            height: "61px",
            left: "-10px",
            bottom: "20px",
            transform: "rotate(15deg)",
            transformOrigin: "center center",
          }}
        >
          <Vector3 />
        </div>

        {/* Vector 5 - bottom right: mirror of bottom left (arrow ← left) */}
        <div
          className="absolute hidden md:block pointer-events-none"
          style={{
            width: "86px",
            height: "61px",
            right: "-10px",
            bottom: "20px",
            transform: "rotate(15deg) scaleX(-1)",
            transformOrigin: "center center",
          }}
        >
          <Vector3 />
        </div>

        {/* Partner Now Button */}
        <button
          className="partner-btn flex items-center justify-center"
          style={{
            width: "clamp(260px, 55vw, 654px)",
            height: "clamp(80px, 13vw, 174px)",
            borderRadius: "110.04px",
            paddingTop: "30.19px",
            paddingRight: "62.39px",
            paddingBottom: "30.19px",
            paddingLeft: "62.39px",
            background: "#2B7FFF",
            border: "none",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(22px, 4vw, 44px)",
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            Partner now
          </span>
        </button>
      </div>

      {/* Have a custom collaboration row */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <div className="flex items-center gap-2">
          <span style={{ fontSize: "18px" }} role="img" aria-label="rocket">🚀</span>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: "15px",
              color: "#6F6F6F",
            }}
          >
            Have a custom collaboration in mind?
          </span>
        </div>

        <button
          className="lets-talk-btn flex items-center justify-center"
          style={{
            width: "130.82px",
            height: "40px",
            borderRadius: "9999px",
            border: "1px solid rgba(43,127,255,0.5)",
            background: "#E7EFFD",
            paddingTop: "8px",
            paddingRight: "24px",
            paddingBottom: "8px",
            paddingLeft: "24px",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              color: "#2B7FFF",
            }}
          >
            Let's Talk →
          </span>
        </button>
      </div>
    </section>
  );
}