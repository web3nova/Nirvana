import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

/**
 * ASSETS NEEDED IN /public:
 *   /public/founder.png    → founder photo (right card)
 *   /public/card-bg.png    → paper texture background for left card
 *   /public/stamp.png      → red circular stamp image
 *
 * FONT SETUP — add to layout.tsx:
 *   import { Plus_Jakarta_Sans } from "next/font/google";
 *   const jakarta = Plus_Jakarta_Sans({
 *     subsets: ["latin"], weight: ["400","600"], variable: "--font-jakarta",
 *   });
 *   <html className={jakarta.variable}>
 */

const JAKARTA = "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)";

/* ═══════════════════════════════════════════════════════════════════════════
   ✏️  STAMP POSITION CONFIG — edit freely

   HOW POSITIONING WORKS:
   ┌─────────────────────────────────┐
   │         TEXT CARD               │
   │                                 │
   │                                 │
   │                     ┌───────┐   │  ← bottom: "0px"  right: "0px"
   └─────────────────────│ STAMP │───┘
                         └───────┘
                                   ↑ bottom: "-44px" right: "-44px"
                                     (hangs outside the card)

   bottom  → positive = moves stamp UP inside card
             negative = stamp hangs BELOW the card edge
   right   → positive = moves stamp LEFT (inside card)
             negative = stamp hangs OUTSIDE the right edge
   width / height → stamp size

   BREAKPOINTS:
     desktop     ≥ 1024px   side-by-side layout
     tablet      640–1023px stacked layout
     mobileLarge 480–639px  stacked, compact
     mobileSmall < 480px    stacked, most compact

   On mobile the stamp sits INSIDE the card so it never overlaps
   the photo card that sits below it when stacked.
═══════════════════════════════════════════════════════════════════════════ */

const STAMP = {

  // ── DESKTOP (≥ 1024px) ── edit these to move the stamp on large screens
  desktop: {
    width:  "112px",
    height: "112px",
    bottom: "-44px",  // hangs below card edge
    right:  "-25px",  // hangs outside right card edge
    left:   "auto",
    top:    "auto",
  },

  // ── TABLET (640px – 1023px) ──
  tablet: {
    width:  "96px",
    height: "96px",
    bottom: "-36px",  // hangs slightly below
    right:  "20px",   // tucked inside so it doesn't clip off screen
    left:   "auto",
    top:    "auto",
  },

  // ── MOBILE LARGE (480px – 639px) ──
  // Sits inside the card so it doesn't overlap the photo below
  mobileLarge: {
    width:  "72px",
    height: "72px",
    bottom: "16px",
    right:  "16px",
    left:   "auto",
    top:    "auto",
  },

  // ── MOBILE SMALL (< 480px) ──
  mobileSmall: {
    width:  "56px",
    height: "56px",
    bottom: "12px",
    right:  "12px",
    left:   "auto",
    top:    "auto",
  },

};

/* ═══════════════════════════════════════════════════════════════════════════ */

const paragraphs = [
  "You already know how this story begins.",
  "Not with glory. Not with fanfare. But with a restlessness — the kind that keeps you awake at night, whispering that you were never meant for average.",
  "Five years ago, I answered to that whisper. I walked away from the comfort of following, and instead chose the uncertainty of building. Nirvana Academy was born from that choice — a rebellion against complacency; a commitment to create a place where greatness was not the exception, but the norm.",
  "I started Nirvana because I was tired of seeing potential wasted. Tired of a culture that taught us to consume instead of build. I believed — and still believe — that crypto, Web3, and the future of technology deserve more than passive spectators. They deserve fearless architects. Today, that simple idea has grown into a global community of nearly 10,000 graduates strong — with countless success stories written by those who dared to bet on themselves. We've built projects, launched startups, forged careers, and most importantly, we've created a movement that dares one truth:",
  "You are the builder you've been waiting for.",
  "Nirvana Academy is not just an institution. It's a proving ground. A family. A revolution in how we learn, lead, and leave our mark. We've built projects, launched startups, forged careers, and most importantly, we created a movement that proves one truth:",
  "Nirvana Academy is not just an institution. It's a proving ground. A family. A revolution in how we learn, lead, and leave our mark.",
  "You are not here by accident.",
  "You are here because something inside you knows — you were made for more.",
];

const TICKER_ITEMS = Array(16).fill("NIRVANA ACADEMY");

export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600&display=swap');

        @keyframes scrollticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          animation: scrollticker 32s linear infinite;
        }

        /* ── Outer wrapper ── */
        .about-wrapper {
          background-color: #ffffff;
          width: 100%;
          position: relative;
          padding-top: 160px;
          padding-bottom: 0;
          box-sizing: border-box;
          overflow-x: clip;
          overflow-y: visible;
        }

        /* ── Watermark ── */
        .about-watermark {
          position: absolute;
          top: 160px;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          font-weight: 600;
          font-size: 287px;
          line-height: 304px;
          letter-spacing: -0.04em;
          color: rgba(28, 28, 90, 0.07);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          z-index: 1;
        }

        /* ── Card row ── */
        .about-card-row {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          gap: 16px;
          padding: 0 32px 80px;
          box-sizing: border-box;
        }

        /* ── Left (text) card ── */
        .about-text-card {
          width: 644px;
          height: 832px;
          flex-shrink: 0;
          position: relative;
          border-radius: 12px;
          overflow: visible;
          box-shadow: 0 4px 32px rgba(0,0,0,0.10), 0 1px 6px rgba(0,0,0,0.06);
        }
        .about-text-card-bg {
          position: absolute;
          inset: 0;
          border-radius: 12px;
          overflow: hidden;
          z-index: 0;
        }
        .about-text-content {
          position: relative;
          z-index: 1;
          padding: 48px;
          height: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .about-h1 {
          font-weight: 600;
          font-size: 48px;
          line-height: 51px;
          letter-spacing: -0.04em;
          text-transform: capitalize;
          color: #111111;
          margin: 0 0 20px 0;
          padding: 0;
          flex-shrink: 0;
        }
        .about-para {
          font-weight: 400;
          font-size: 13px;
          line-height: 137%;
          letter-spacing: 0;
          color: #3d3d3d;
          margin: 0 0 7px 0;
          padding: 0;
        }
        .about-para:last-child { margin-bottom: 0; }

        /*
         * ✏️ STAMP — desktop position comes directly from STAMP.desktop above.
         *    To move it on desktop: edit STAMP.desktop in the config at the top.
         */
        .about-stamp {
          position: absolute;
          display: block;
          width:  ${STAMP.desktop.width};
          height: ${STAMP.desktop.height};
          bottom: ${STAMP.desktop.bottom};
          right:  ${STAMP.desktop.right};
          left:   ${STAMP.desktop.left};
          top:    ${STAMP.desktop.top};
          z-index: 10;
        }

        /* ── Right (photo) card ── */
        .about-photo-card {
          width: 539px;
          height: 832px;
          flex-shrink: 0;
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 32px rgba(0,0,0,0.10), 0 1px 6px rgba(0,0,0,0.06);
        }

        /* ════════════════════════════════
           LARGE DESKTOP ≥ 1280px
        ════════════════════════════════ */
        @media (min-width: 1280px) {
          .about-card-row { padding: 0 48px 80px; gap: 20px; }
        }

        /* ════════════════════════════════
           TABLET 640px – 1023px
           ✏️ Edit STAMP.tablet to reposition on tablet.
        ════════════════════════════════ */
        @media (max-width: 1023px) {
          .about-wrapper   { padding-top: 110px; }
          .about-watermark { top: 110px; font-size: 160px; line-height: 170px; }
          .about-card-row {
            flex-direction: column;
            align-items: center;
            gap: 24px;
            padding: 0 24px 90px;
          }
          .about-text-card {
            width: 100%;
            max-width: 680px;
            height: auto;
          }
          .about-text-card-bg { border-radius: 12px; }
          .about-text-content {
            padding: 40px 40px 56px;
            height: auto;
            overflow: visible;
          }
          .about-h1   { font-size: 36px; line-height: 40px; }
          .about-para { font-size: 14px; margin-bottom: 8px; }

          .about-stamp {
            width:  ${STAMP.tablet.width};
            height: ${STAMP.tablet.height};
            bottom: ${STAMP.tablet.bottom};
            right:  ${STAMP.tablet.right};
            left:   ${STAMP.tablet.left};
            top:    ${STAMP.tablet.top};
          }

          .about-photo-card {
            width: 100%;
            max-width: 680px;
            height: 0;
            padding-bottom: 66%;
          }
        }

        /* ════════════════════════════════
           MOBILE LARGE 480px – 639px
           ✏️ Edit STAMP.mobileLarge to reposition.
           Stamp is inside the card (positive values) so it
           never overlaps the photo card stacked below.
        ════════════════════════════════ */
        @media (max-width: 639px) {
          .about-wrapper   { padding-top: 90px; }
          .about-watermark { top: 90px; font-size: 100px; line-height: 110px; }
          .about-card-row {
            flex-direction: column;
            align-items: stretch;
            gap: 16px;
            padding: 0 16px 48px;
          }
          .about-text-card    { width: 100%; height: auto; border-radius: 10px; }
          .about-text-card-bg { border-radius: 10px; }
          .about-text-content {
            padding: 28px 24px 80px; /* bottom clears the stamp */
            height: auto;
            overflow: visible;
          }
          .about-h1   { font-size: 28px; line-height: 32px; margin-bottom: 14px; }
          .about-para { font-size: 13px; line-height: 140%; margin-bottom: 6px; }

          .about-stamp {
            width:  ${STAMP.mobileLarge.width};
            height: ${STAMP.mobileLarge.height};
            bottom: ${STAMP.mobileLarge.bottom};
            right:  ${STAMP.mobileLarge.right};
            left:   ${STAMP.mobileLarge.left};
            top:    ${STAMP.mobileLarge.top};
          }

          .about-photo-card {
            width: 100%;
            height: 0;
            padding-bottom: 90%;
            border-radius: 10px;
          }
        }

        /* ════════════════════════════════
           MOBILE SMALL < 480px
           ✏️ Edit STAMP.mobileSmall to reposition.
        ════════════════════════════════ */
        @media (max-width: 479px) {
          .about-wrapper   { padding-top: 72px; }
          .about-watermark { top: 72px; font-size: 64px; line-height: 72px; }
          .about-card-row  { padding: 0 12px 40px; gap: 12px; }
          .about-text-card    { border-radius: 8px; }
          .about-text-card-bg { border-radius: 8px; }
          .about-text-content { padding: 22px 18px 70px; }
          .about-h1   { font-size: 24px; line-height: 28px; margin-bottom: 12px; }
          .about-para { font-size: 12.5px; line-height: 138%; margin-bottom: 5px; }

          .about-stamp {
            width:  ${STAMP.mobileSmall.width};
            height: ${STAMP.mobileSmall.height};
            bottom: ${STAMP.mobileSmall.bottom};
            right:  ${STAMP.mobileSmall.right};
            left:   ${STAMP.mobileSmall.left};
            top:    ${STAMP.mobileSmall.top};
          }

          .about-photo-card {
            height: 0;
            padding-bottom: 100%;
            border-radius: 8px;
          }
        }
      `}</style>

      {/* ── OUTER WRAPPER ──────────────────────────────────────────────────── */}
      <div className="about-wrapper" style={{ fontFamily: JAKARTA }}>

        {/* ── WATERMARK ─────────────────────────────────────────────────────── */}
        <div aria-hidden="true" className="about-watermark" style={{ fontFamily: JAKARTA }}>
          NIRVANA
        </div>

        {/* ── CARD ROW ──────────────────────────────────────────────────────── */}
        <div className="about-card-row">

          {/* ── LEFT: text card ───────────────────────────────────────────── */}
          <div className="about-text-card">

            {/* paper texture bg */}
            <div className="about-text-card-bg">
              <Image
                src="/image.png"
                alt=""
                fill
                priority
                sizes="(max-width: 479px) 100vw, (max-width: 639px) 100vw, (max-width: 1023px) 680px, 644px"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>

            {/* text */}
            <div className="about-text-content">
              <h1 className="about-h1" style={{ fontFamily: JAKARTA }}>
                From The<br />Founder&apos;s Notes.
              </h1>
              <div style={{ flex: 1 }}>
                {paragraphs.map((text, i) => (
                  <p key={i} className="about-para" style={{ fontFamily: JAKARTA }}>
                    {text}
                  </p>
                ))}
                <p className="about-para" style={{ fontFamily: JAKARTA }}>
                  Welcome to Nirvana Academy.<br />Welcome home.
                </p>
              </div>
            </div>

            {/* ✏️ STAMP — edit position via STAMP config at top of file */}
            <div className="about-stamp">
              <Image
                src="/stamp.png"
                alt="Nirvana Academy seal"
                fill
                sizes="(max-width: 479px) 56px, (max-width: 639px) 72px, (max-width: 1023px) 96px, 112px"
                style={{ objectFit: "contain" }}
              />
            </div>

          </div>

          {/* ── RIGHT: photo card ─────────────────────────────────────────── */}
          <div className="about-photo-card">
            <Image
              src="/about-image.png"
              alt="Xeus, Founder of Nirvana Academy"
              fill
              priority
              sizes="(max-width: 479px) 100vw, (max-width: 639px) 100vw, (max-width: 1023px) 680px, 539px"
              style={{
                objectFit: "cover",
                objectPosition: "50% 15%",
              }}
            />

            {/* scrim */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0) 55%)",
                pointerEvents: "none",
              }}
            />

            {/* name label */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
                textAlign: "right",
                zIndex: 4,
              }}
            >
              <p style={{
                fontFamily: JAKARTA,
                fontWeight: 600,
                fontSize: "clamp(12px, 2.5vw, 16px)",
                lineHeight: "1.3",
                color: "#fff",
                textShadow: "0 1px 8px rgba(0,0,0,0.8)",
                margin: "0 0 3px",
                padding: 0,
              }}>
                Xeus
              </p>
              <p style={{
                fontFamily: JAKARTA,
                fontWeight: 400,
                fontSize: "clamp(10px, 1.8vw, 12px)",
                lineHeight: "1.4",
                letterSpacing: "0.01em",
                color: "rgba(255,255,255,0.88)",
                textShadow: "0 1px 6px rgba(0,0,0,0.7)",
                margin: 0,
                padding: 0,
              }}>
                Founder, Nirvana Academy
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── TICKER ──────────────────────────────────────────────────────────── */}
      <div style={{ width: "100%", backgroundColor: "#1c1c3a", overflow: "hidden", padding: "14px 0" }}>
        <div className="ticker-track">
          {TICKER_ITEMS.map((label, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
              <span style={{
                fontFamily: JAKARTA,
                fontWeight: 600,
                fontSize: "clamp(10px, 2vw, 13px)",
                letterSpacing: "0.2em",
                color: "#e8e0d0",
                textTransform: "uppercase",
              }}>
                {label}
              </span>
              <span aria-hidden="true" style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                backgroundColor: "#c9a84c",
                transform: "rotate(45deg)",
                margin: "0 20px",
                flexShrink: 0,
              }} />
            </span>
          ))}
        </div>
      </div>
    </>
  );
}